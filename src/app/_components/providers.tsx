"use client";

import { ThemeProvider } from "./theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
