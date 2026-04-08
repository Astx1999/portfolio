"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stack } from "@/data/projects";
import {
  sectionHeadItem,
  sectionHeadItemInstant,
  sectionHeadParent,
  spring,
  stackOrbit,
  stackOrbitInstant,
  staggerParent,
} from "@/lib/motion";
import styles from "@/styles/portfolio.module.scss";

export function StackSection() {
  const reduceMotion = useReducedMotion();
  const headItem = reduceMotion ? sectionHeadItemInstant : sectionHeadItem;
  const stackV = reduceMotion ? stackOrbitInstant : stackOrbit;

  return (
    <section
      id="stack"
      className={`${styles.section} border-t border-[var(--border-subtle)] py-20 md:py-28`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionHeadParent(!!reduceMotion)}
      >
        <motion.p className={styles.sectionLabel} variants={headItem}>
          Stack &amp; craft
        </motion.p>
        <motion.h2
          className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
          variants={headItem}
        >
          Tools I use to build reliable UIs
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-[var(--muted)]"
          variants={headItem}
        >
          Typed React, App Router, GraphQL and React Query for data, plus CSS
          that matches the team — modules, Tailwind, or styled-components when
          the product calls for it. I also ship Angular and Svelte when a
          codebase demands it, with React as my deepest comfort zone.
        </motion.p>
      </motion.div>

      <motion.ul
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ perspective: reduceMotion ? undefined : 1000 }}
        variants={staggerParent(!!reduceMotion)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      >
        {stack.map((item, i) => (
          <motion.li
            key={item.name}
            className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/90 p-6 shadow-sm shadow-orange-500/5 backdrop-blur-sm"
            variants={stackV}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                    rotateX: 3,
                    rotateY: i % 2 === 0 ? -2 : 2,
                    borderColor: "rgba(249, 115, 22, 0.35)",
                    boxShadow:
                      "0 20px 50px -20px rgba(139, 92, 246, 0.18), 0 0 0 1px rgba(249, 115, 22, 0.12)",
                    transition: spring.snappy,
                  }
            }
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--ink)]">
              {item.name}
            </span>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {item.detail}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
