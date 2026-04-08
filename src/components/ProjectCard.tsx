"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/basePath";
import { spring, staggerItem, staggerItemInstant } from "@/lib/motion";

type ProjectCardProps = {
  project: Project;
  /** First above-the-fold card: eager load + fetchPriority high for LCP */
  priorityImage?: boolean;
};

export function ProjectCard({ project, priorityImage = false }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const isSvg = project.image.endsWith(".svg");
  const eager = priorityImage && !isSvg;

  return (
    <motion.article
      variants={reduceMotion ? staggerItemInstant : staggerItem}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/95 shadow-md shadow-slate-500/5 backdrop-blur-sm"
     
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative aspect-[18/10] overflow-hidden bg-gradient-to-br from-[var(--surface-soft)] to-[#e0f2fe]">
        <motion.div
          className="relative h-full w-full"
       
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={withBasePath(project.image)}
            alt={`Preview: ${project.title}`}
            fill
            priority={eager}
            unoptimized={isSvg}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            decoding={eager ? "sync" : "async"}
            fetchPriority={eager ? "high" : "low"}
          />
        </motion.div>
        {project.featured && (
          <motion.span
            className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-[var(--copper)] to-[var(--accent-pink)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
            initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={spring.snappy}
          >
            Featured
          </motion.span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--ink)] md:text-[1.35rem]">
          {project.title}
        </h3>
        {project.stats && project.stats.length > 0 && (
          <ul
            className="mt-2.5 flex flex-wrap gap-2"
            aria-label="Impact and reach"
          >
            {project.stats.map((stat) => (
              <li
                key={stat}
                className="rounded-full border border-teal-600/25 bg-gradient-to-r from-teal-500/12 to-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-tight text-teal-900 shadow-sm"
              >
                {stat}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>
        {project.note && (
          <p className="mt-2 text-xs italic text-[var(--muted)]/90">
            {project.note}
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md bg-gradient-to-br from-[var(--surface-soft)] to-[#fae8ff] px-2 py-0.5 text-[11px] font-medium text-[var(--ink)]/80"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[var(--copper)] underline-offset-4 transition-colors hover:text-[var(--copper-light)] hover:underline"
            >
              {project.hrefLabel ?? "Visit"}
              <span className="ml-1" aria-hidden>
                ↗
              </span>
            </Link>
          )}
          {project.extraLinks?.map((el) => (
            <Link
              key={el.href}
              href={el.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[var(--muted)] underline-offset-4 transition-colors hover:text-[var(--accent-cyan)] hover:underline"
            >
              {el.label}
              <span className="ml-1" aria-hidden>
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
