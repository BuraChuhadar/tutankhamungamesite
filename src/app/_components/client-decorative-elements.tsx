"use client";

import { useEffect, useState } from "react";
import styles from "./decorative-elements.module.css";

export function ClientDecorativeElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Always render the elements to prevent hydration mismatch
  return (
    <div className="decorative-background-container">
      <div className={`${styles.backgroundPattern} static-background-pattern`} suppressHydrationWarning />
      <div className={styles.pyramidAccent} suppressHydrationWarning />
      <div className={styles.gameAccents} suppressHydrationWarning />
    </div>
  );
}
