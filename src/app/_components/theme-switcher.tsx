"use client";

import { useTheme } from "./theme-context";
import { useEffect, useState } from "react";
import styles from "./switch.module.css";

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
      className={styles.switch}
      aria-label={`Switch to ${
        themes[(themes.indexOf(theme) + 1) % themes.length]
      } mode`}
    />
  );
}
