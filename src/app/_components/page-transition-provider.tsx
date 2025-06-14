'use client';

import { usePageTransition } from '../_hooks/usePageTransition';

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  usePageTransition();
  
  return <>{children}</>;
}
