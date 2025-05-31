"use client";

import { useTheme } from "./theme-context";
import { useEffect, useState } from "react";

type Theme = "system" | "dark" | "light";
const themes: Theme[] = ["system", "dark", "light"];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Only show the UI after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed right-5 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-gray-100 text-xl shadow-lg transition-all hover:scale-110 dark:bg-[#1f1a14] dark:border-[#40362b] dark:text-[#f5e9d6]"
      aria-label={`Switch to ${
        themes[(themes.indexOf(theme) + 1) % themes.length]
      } mode`}
    >
      {theme === "light" ? "🌞" : theme === "dark" ? "🌙" : "⚙️"}
    </button>
  );
}
