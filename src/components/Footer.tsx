import { motion } from "framer-motion";
import { Heart, Lock, ShieldCheck, type LucideIcon } from "lucide-react";
import { APP_URL } from "../config";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Badge = { icon: LucideIcon; label: string };

const badges: Badge[] = [
  { icon: ShieldCheck, label: "Sécurisé" },
  { icon: Lock, label: "Confidentiel" },
  { icon: Heart, label: "Pensé pour votre quotidien" },
];

export default function Footer() {
  return (
    <footer className="border-t border-beige/70 bg-cream-deep px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-beige-deep bg-cream px-4 py-2 text-sm font-semibold text-ink-soft shadow-soft"
            >
              <Icon className="h-4 w-4 text-green" strokeWidth={2.2} aria-hidden="true" />
              {label}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-beige pt-8 sm:flex-row sm:justify-between">
          <span className="text-sm font-bold uppercase tracking-[0.32em] text-ink">
            Docalya
          </span>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Docalya. Tous droits réservés.
          </p>
          <a
            href={APP_URL}
            className="text-sm font-semibold text-green transition-colors hover:text-forest"
          >
            Accéder à l'application
          </a>
        </div>
      </div>
    </footer>
  );
}
