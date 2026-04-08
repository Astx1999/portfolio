import type { Variants } from "framer-motion";

/** Spring presets — tuned for a snappy but organic feel */
export const spring = {
  snappy: { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.85 },
  loose: { type: "spring" as const, stiffness: 260, damping: 26, mass: 1 },
  soft: { type: "spring" as const, stiffness: 200, damping: 28, mass: 1.1 },
};

/** Respects prefers-reduced-motion (pass `true` when reduced). */
export function staggerParent(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.09,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };
}

export function sectionHeadParent(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.11,
        delayChildren: reduceMotion ? 0 : 0.04,
      },
    },
  };
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    skewY: 1.5,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    skewY: 0,
    transition: spring.snappy,
  },
};

export const staggerItemInstant: Variants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)", skewY: 0 },
  show: { opacity: 1, y: 0, filter: "blur(0px)", skewY: 0 },
};

export const heroLine: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.loose,
  },
};

export const heroLineInstant: Variants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const stackOrbit: Variants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: spring.soft,
  },
};

export const stackOrbitInstant: Variants = {
  hidden: { opacity: 1, scale: 1, rotate: 0 },
  show: { opacity: 1, scale: 1, rotate: 0 },
};

export const sectionIntro: Variants = {
  hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: spring.snappy,
  },
};

export const sectionHeadItem: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: spring.loose,
  },
};

export const sectionHeadItemInstant: Variants = {
  hidden: { opacity: 1, x: 0, filter: "blur(0px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)" },
};
