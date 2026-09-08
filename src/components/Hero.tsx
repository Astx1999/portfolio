import Link from "next/link";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { OpenCvButton } from "@/components/CvDialog";
import { site } from "@/data/site";
import styles from "@/styles/portfolio.module.scss";

export function Hero() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Full viewport width so blurs / motion aren’t clipped at 72rem on large screens */}
      <div
        className="pointer-events-none absolute inset-0 max-md:overflow-x-clip md:overflow-visible"
        aria-hidden
      >
        <div className="absolute -left-12 top-24 h-56 w-56 rounded-full bg-[var(--copper)] opacity-25 blur-3xl sm:-left-16 sm:h-64 sm:w-64 md:-left-20 md:top-20 md:h-72 md:w-72 lg:h-96 lg:w-96" />
        <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-[var(--copper-light)] opacity-25 blur-3xl sm:-right-12 sm:h-60 sm:w-60 md:-right-16 md:h-64 md:w-64 lg:-right-24 xl:-right-32" />
        <div className="absolute left-[20%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)] opacity-20 blur-3xl sm:left-1/3 sm:h-44 sm:w-44 md:h-48 md:w-48" />
      </div>

      <div className={`${styles.section} relative z-10 max-md:overflow-x-clip`}>
        <div className={`${styles.reveal} max-w-4xl`}>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <ExperienceBadge text={`${site.yearsExperience} years front end`} />
            <span className="text-sm text-[var(--muted)]">{site.location}</span>
          </div>

          <p className="mb-3 font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-[0.2em] text-[var(--copper)]">
            {site.role}
          </p>
          <h1
            className="font-[family-name:var(--font-syne)] text-[clamp(1.5rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--ink)]"
          >
            {site.name.split(" ")[0]}
            <br />
            <span className="bg-gradient-to-r from-[var(--copper)] via-[var(--accent-pink)] to-[var(--copper-light)] bg-clip-text text-transparent">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-[family-name:var(--font-serif)] text-sm lg:text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            I ship production web interfaces — from Nordic eCommerce and telecom
            internal platforms to government sites, event portals, and healthcare
            SaaS. React, TypeScript, and Next.js are my daily toolkit; I care
            about clarity, performance, and design systems that scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--copper)] via-[#fb923c] to-[var(--accent-pink)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View selected work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--surface)]/80 px-7 py-3.5 text-sm font-semibold text-[var(--ink)] backdrop-blur-sm transition-colors hover:border-[var(--copper-light)]/50 hover:bg-[var(--surface-soft)]"
            >
              Contact
            </Link>
            <OpenCvButton className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--surface)]/80 px-7 py-3.5 text-sm font-semibold text-[var(--ink)] backdrop-blur-sm transition-colors hover:border-[var(--copper-light)]/50 hover:bg-[var(--surface-soft)]">
              CV
            </OpenCvButton>
          </div>
        </div>
      </div>
    </section>
  );
}
