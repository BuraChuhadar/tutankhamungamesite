'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const usePageTransition = () => {
  const router = useRouter();

  useEffect(() => {    // Store scroll position before navigation
    const storeScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem('scrollPosition');
      }
    };    // Intercept all navigation clicks for blog posts
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/posts/"]') as HTMLAnchorElement;
      
      if (link && link.href) {
        e.preventDefault();
        
        // Store current scroll position
        storeScrollPosition();
        
        // Check if View Transitions API is supported
        if ('startViewTransition' in document) {
          (document as any).startViewTransition(() => {
            router.push(link.getAttribute('href')!);
          });
        } else {
          // Fallback for browsers that don't support View Transitions
          router.push(link.getAttribute('href')!);
        }
      }
    };    // Also handle back button clicks
    const handleBackClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/"]') as HTMLAnchorElement;
      
      if (link && link.classList.contains('back-button')) {
        e.preventDefault();
        
        if ('startViewTransition' in document) {
          (document as any).startViewTransition(() => {
            router.push('/');
          });
        } else {
          router.push('/');
        }
        
        // Restore scroll position after navigation with a delay
        setTimeout(() => {
          const savedPosition = sessionStorage.getItem('scrollPosition');
          if (savedPosition) {
            console.log('Back button - restoring scroll position:', savedPosition);
            window.scrollTo({
              top: parseInt(savedPosition, 10),
              behavior: 'smooth'
            });
            sessionStorage.removeItem('scrollPosition');
          }
        }, 300);
      }
    };

    document.addEventListener('click', handleLinkClick);
    document.addEventListener('click', handleBackClick);    return () => {
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('click', handleBackClick);
    };
  }, [router]);

  const navigateWithTransition = (url: string, preserveScroll: boolean = false) => {
    if (preserveScroll) {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
    
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        router.push(url);
      });
    } else {
      router.push(url);
    }
  };

  return { navigateWithTransition };
};
