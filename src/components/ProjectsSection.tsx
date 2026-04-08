"use client";

import { motion, useReducedMotion } from "framer-motion";
import { privateProjects, publicProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import {
  sectionHeadItem,
  sectionHeadItemInstant,
  sectionHeadParent,
  staggerParent,
} from "@/lib/motion";
import styles from "@/styles/portfolio.module.scss";

function ProjectGrid({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10"
      style={reduceMotion ? undefined : { perspective: 1100 }}
      variants={staggerParent(!!reduceMotion)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px", amount: 0.08 }}
    >
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const headItem = reduceMotion ? sectionHeadItemInstant : sectionHeadItem;

  return (
    <>
      <section
        id="work"
        className={`${styles.section} border-t border-[var(--border-subtle)] py-20 md:py-28`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionHeadParent(!!reduceMotion)}
        >
          <motion.p className={styles.sectionLabel} variants={headItem}>
            Live &amp; public
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
            variants={headItem}
          >
            Shipped for clients &amp; products
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-[var(--muted)]"
            variants={headItem}
          >
            Retail, events, public sector, and professional services —
            interfaces people use every day across the Nordics, Armenia, and
            beyond.
          </motion.p>
        </motion.div>

        <ProjectGrid>
          {publicProjects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              priorityImage={i === 0}
            />
          ))}
        </ProjectGrid>
      </section>

      <section
        id="private"
        className={`${styles.section} border-t border-[var(--border-subtle)] py-20 md:pb-28 md:pt-24`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionHeadParent(!!reduceMotion)}
        >
          <motion.p className={styles.sectionLabel} variants={headItem}>
            NDA &amp; internal
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
            variants={headItem}
          >
            Depth behind the login
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-[var(--muted)]"
            variants={headItem}
          >
            Enterprise dashboards, healthcare and dental SaaS, telecom tooling,
            and EU-funded initiatives.{" "}
            <code className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-1.5 py-0.5 text-xs font-medium text-[var(--copper)]">
              Where there is no public URL
            </code>
          </motion.p>
        </motion.div>

        <ProjectGrid>
          {privateProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </ProjectGrid>
      </section>
    </>
  );
}
