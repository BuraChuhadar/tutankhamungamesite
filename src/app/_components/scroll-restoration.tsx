'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Only restore scroll position when returning to home page
    if (pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        console.log('Restoring scroll position:', savedPosition);
        // Use a longer delay to ensure the page is fully rendered
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'smooth'
          });
          sessionStorage.removeItem('scrollPosition');
        }, 200);
      }
    }
  }, [pathname]);
  return null;
}
