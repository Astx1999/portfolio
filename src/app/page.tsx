import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "@/styles/portfolio.module.scss";

/** Below hero — split bundle to cut main-thread parse cost (TBT). */
const StackSection = dynamic(
  () =>
    import("@/components/StackSection").then((m) => ({ default: m.StackSection })),
  {
    loading: () => (
      <div className="min-h-[min(70vh,520px)] w-full" aria-hidden />
    ),
  },
);

const SiteFooter = dynamic(
  () => import("@/components/SiteFooter").then((m) => ({ default: m.SiteFooter })),
  {
    loading: () => <div className="min-h-[200px] w-full" aria-hidden />,
  },
);

export default function Home() {
  return (
    <>
      <div className={styles.grain} aria-hidden />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <StackSection />
        <ProjectsSection />
        <SiteFooter />
      </main>
    </>
  );
}
