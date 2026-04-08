"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import {
  sectionHeadItem,
  sectionHeadItemInstant,
  sectionHeadParent,
  spring,
} from "@/lib/motion";
import styles from "@/styles/portfolio.module.scss";

export function SiteFooter() {
  const reduceMotion = useReducedMotion();
  const headItem = reduceMotion ? sectionHeadItemInstant : sectionHeadItem;

  return (
    <motion.footer
      id="contact"
      className={`${styles.section} border-t border-[var(--border-subtle)] py-16 md:py-20`}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={spring.loose}
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={sectionHeadParent(!!reduceMotion)}
        >
          <motion.p className={styles.sectionLabel} variants={headItem}>
            Contact
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[var(--ink)] md:text-3xl"
            variants={headItem}
          >
            Let&apos;s build something sharp.
          </motion.h2>
          <motion.p
            className="mt-3 max-w-md text-[var(--muted)]"
            variants={headItem}
          >
            Reach out for front-end collaborations, product work, or a quick
            hello.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring.loose, delay: reduceMotion ? 0 : 0.15 }}
        >
          <motion.a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--ink)] to-[#312e81] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={spring.snappy}
          >
            {site.email}
          </motion.a>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--copper)] underline-offset-4 hover:text-[var(--copper-light)] hover:underline"
          >
            LinkedIn ↗
          </Link>
        </motion.div>
      </div>
      <motion.p
        className="mt-14 text-center text-xs text-[var(--muted)] md:text-left"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: reduceMotion ? 0 : 0.25, duration: 0.5 }}
      >
        © {new Date().getFullYear()} {site.name}. Crafted with Next.js.
      </motion.p>
    </motion.footer>
  );
}
