"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/styles/portfolio.module.scss";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#private", label: "Selected" },
  { href: "#contact", label: "Contact" },
];

const SCROLL_THRESHOLD_PX = 12;

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const t = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: -12, filter: "blur(6px)" },
      show: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { ...spring.snappy, delay: reduceMotion ? 0 : 0.05 * i },
      }),
    }),
    [reduceMotion],
  );

  const closeMenu = () => setMenuOpen(false);

  const showBarFill = scrolled || menuOpen;

  return (
    <>
      {/* Outer shell: fixed + full viewport width (.section’s position:relative was overriding `fixed`) */}
      <motion.header
        className="fixed inset-x-0 top-0 z-[100] w-full"
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={spring.loose}
      >
        <div
          className={[
            "pointer-events-none absolute inset-x-0 top-0 h-full bg-[image:var(--header-backdrop)] backdrop-blur-md transition-[background-image,opacity] duration-300 ease-out",
            showBarFill ? "" : "max-md:bg-[image:var(--header-backdrop)] md:bg-none",
          ].join(" ")}
          aria-hidden
        />
        <div
          className={`${styles.section} relative z-10 flex items-center justify-between gap-4 py-4 md:py-5`}
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            transition={spring.snappy}
          >
            <Link
              href="#"
              className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-tight text-[var(--ink)] md:text-base"
              onClick={closeMenu}
            >
              AH
              <span className="bg-gradient-to-r from-[var(--copper)] to-[var(--copper-light)] bg-clip-text text-transparent">
                .
              </span>
            </Link>
          </motion.div>

          <nav
            className="hidden flex-wrap items-center justify-end gap-1 md:flex md:gap-5"
            aria-label="Main"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                custom={i}
                initial="hidden"
                animate="show"
                variants={navItem}
              >
                <Link
                  href={l.href}
                  className="group relative rounded-full px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] md:text-sm"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-[var(--copper)] to-[var(--copper-light)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <ThemeToggle />
            <button
            type="button"
            className="relative z-[60] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]/90 shadow-sm md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--ink)] transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--ink)] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--ink)] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
          </div>
        </div>
      </motion.header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[var(--ink)]/20 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[var(--border-subtle)] bg-[var(--bg-base)]/98 px-6 pb-10 pt-24 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  href={l.href}
                  className="block rounded-xl px-4 py-3.5 font-[family-name:var(--font-syne)] text-lg font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--copper)]"
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
