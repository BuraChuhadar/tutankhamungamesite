'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (update: () => Promise<void> | void) => ViewTransition;
};

export const usePageTransition = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pendingTransitionResolveRef = useRef<(() => void) | null>(null);
  const pendingTransitionTimeoutRef = useRef<number | null>(null);
  const activeTransitionRef = useRef<ViewTransition | null>(null);

  const isExpectedTransitionError = (error: unknown) => {
    return (
      error instanceof DOMException &&
      (error.name === 'InvalidStateError' || error.name === 'AbortError')
    );
  };

  const clearPendingTransition = () => {
    if (pendingTransitionTimeoutRef.current !== null) {
      window.clearTimeout(pendingTransitionTimeoutRef.current);
      pendingTransitionTimeoutRef.current = null;
    }
  };

  const finishPendingTransition = () => {
    if (pendingTransitionResolveRef.current) {
      const resolve = pendingTransitionResolveRef.current;
      pendingTransitionResolveRef.current = null;
      clearPendingTransition();
      resolve();
    }
  };

  const navigateWithoutTransition = (href: string) => {
    finishPendingTransition();
    activeTransitionRef.current = null;
    router.push(href);
  };

  const trackTransition = (transition: ViewTransition) => {
    activeTransitionRef.current = transition;

    void transition.ready.catch((error) => {
      if (!isExpectedTransitionError(error)) {
        console.error('View transition ready failed', error);
      }
    });

    void transition.updateCallbackDone.catch((error) => {
      if (!isExpectedTransitionError(error)) {
        console.error('View transition update failed', error);
      }
    });

    void transition.finished
      .catch((error) => {
        if (!isExpectedTransitionError(error)) {
          console.error('View transition finished failed', error);
        }
      })
      .finally(() => {
        if (activeTransitionRef.current === transition) {
          activeTransitionRef.current = null;
        }
      });
  };

  const startNavigation = (href: string, preserveScroll: boolean = false) => {
    const nextUrl = new URL(href, window.location.origin);
    const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;

    if (preserveScroll) {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }

    if (nextPath === pathname) {
      navigateWithoutTransition(nextPath);
      return;
    }

    const transitionDocument = document as DocumentWithViewTransitions;

    if (!transitionDocument.startViewTransition) {
      navigateWithoutTransition(nextPath);
      return;
    }

    if (document.visibilityState !== 'visible') {
      navigateWithoutTransition(nextPath);
      return;
    }

    if (activeTransitionRef.current) {
      navigateWithoutTransition(nextPath);
      return;
    }

    finishPendingTransition();

    try {
      const transition = transitionDocument.startViewTransition(() => {
        router.push(nextPath);

        return new Promise<void>((resolve) => {
          pendingTransitionResolveRef.current = resolve;
          pendingTransitionTimeoutRef.current = window.setTimeout(() => {
            if (pendingTransitionResolveRef.current === resolve) {
              pendingTransitionResolveRef.current = null;
              pendingTransitionTimeoutRef.current = null;
              resolve();
            }
          }, 1000);
        });
      });

      trackTransition(transition);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'InvalidStateError') {
        navigateWithoutTransition(nextPath);
        return;
      }

      throw error;
    }
  };

  useEffect(() => {
    if (!pendingTransitionResolveRef.current) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        finishPendingTransition();
      });
    });
  }, [pathname]);

  useEffect(() => {
    const isModifiedClick = (e: MouseEvent) => {
      return e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    };

    const handleLinkClick = (e: MouseEvent) => {
      if (isModifiedClick(e)) {
        return;
      }

      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/posts/"]') as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      const href = link.getAttribute('href');

      if (!href) {
        return;
      }

      e.preventDefault();
      startNavigation(href, true);
    };

    const handleBackClick = (e: MouseEvent) => {
      if (isModifiedClick(e)) {
        return;
      }

      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/"]') as HTMLAnchorElement | null;

      if (!link || !link.classList.contains('back-button')) {
        return;
      }

      e.preventDefault();
      startNavigation('/');
    };

    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('click', handleBackClick, true);

    return () => {
      finishPendingTransition();
      activeTransitionRef.current = null;
      document.removeEventListener('click', handleLinkClick, true);
      document.removeEventListener('click', handleBackClick, true);
    };
  }, [pathname, router]);

  const navigateWithTransition = (url: string, preserveScroll: boolean = false) => {
    startNavigation(url, preserveScroll);
  };

  return { navigateWithTransition };
};
