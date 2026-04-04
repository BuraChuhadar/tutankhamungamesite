"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const clearFlipClasses = () => {
      root.classList.remove("blog-nav-flip-out", "blog-nav-flip-in");
    };

    clearFlipClasses();

    const pendingEntry = sessionStorage.getItem("blogPageTransition");

    if (pendingEntry === "enter-post" && pathname.startsWith("/posts/")) {
      root.classList.add("blog-nav-flip-in");

      const timeoutId = window.setTimeout(() => {
        root.classList.remove("blog-nav-flip-in");
        sessionStorage.removeItem("blogPageTransition");
      }, 900);

      return () => {
        window.clearTimeout(timeoutId);
        clearFlipClasses();
      };
    }

    if (pendingEntry) {
      sessionStorage.removeItem("blogPageTransition");
    }

    const handlePageShow = () => {
      clearFlipClasses();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      clearFlipClasses();
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let navigationTimeout: number | null = null;

    const handlePostLinkClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const target = e.target as HTMLElement;
      const link = target.closest(
        'a[href^="/posts/"]',
      ) as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || document.documentElement.classList.contains("blog-nav-flip-out")) {
        return;
      }

      e.preventDefault();
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      sessionStorage.setItem("blogPageTransition", "enter-post");
      document.documentElement.classList.add("blog-nav-flip-out");

      navigationTimeout = window.setTimeout(() => {
        window.location.assign(href);
      }, 620);
    };

    document.addEventListener("click", handlePostLinkClick, true);

    return () => {
      if (navigationTimeout !== null) {
        window.clearTimeout(navigationTimeout);
      }
      document.removeEventListener("click", handlePostLinkClick, true);
    };
  }, [pathname]);

  useEffect(() => {
    // Only restore scroll position when returning to home page
    if (pathname === "/") {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        console.log("Restoring scroll position:", savedPosition);
        // Use a longer delay to ensure the page is fully rendered
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: "smooth",
          });
          sessionStorage.removeItem("scrollPosition");
        }, 200);
      }
    }
  }, [pathname]);
  return null;
}
