"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handlePostLinkClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as HTMLElement;
      const link = target.closest(
        'a[href^="/posts/"]',
      ) as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    document.addEventListener("click", handlePostLinkClick, true);

    return () => {
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
