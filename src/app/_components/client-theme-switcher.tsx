"use client";

import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("./theme-switcher").then(mod => ({ default: mod.ThemeSwitcher })), {
  ssr: false,
  loading: () => <div className="w-8 h-8" /> // Placeholder to prevent layout shift
});

export { ThemeSwitcher as ClientThemeSwitcher };
