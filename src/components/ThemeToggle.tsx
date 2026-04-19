"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <div
        className="h-11 w-11 shrink-0 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]/90"
        aria-hidden
      />
    );
  }

  return (
    <motion.button
      type="button"
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      transition={spring.snappy}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]/90 text-[var(--ink)] shadow-sm transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {isDark ? (
        <SunIcon className="text-[var(--copper)]" />
      ) : (
        <MoonIcon className="text-[var(--ink)]" />
      )}
    </motion.button>
  );
}
