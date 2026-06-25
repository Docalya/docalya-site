import type { Variants } from "framer-motion";

/** Apparition douce vers le haut. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Conteneur orchestrant l'apparition échelonnée des enfants. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Fondu simple. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

/** Options de viewport communes (déclenche une fois, légèrement en avance). */
export const viewportOnce = { once: true, margin: "-80px" } as const;
