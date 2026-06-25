import { motion } from "framer-motion";
import { APP_URL } from "../config";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-beige/60 bg-cream/80 backdrop-blur-md"
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8 2xl:max-w-[1400px]"
      >
        {/* Logo + wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Docalya — accueil"
        >
          <img
  src="/logo-docalya.png"
  alt="Logo Docalya"
  className="h-11 w-11 rounded-xl object-contain sm:h-12 sm:w-12"
/>
          <span className="text-lg font-bold uppercase tracking-[0.3em] text-ink sm:text-2xl">
          Docalya
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={APP_URL}
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink sm:inline-flex"
          >
            Se connecter
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-green px-4 py-2.5 text-sm font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest sm:px-5"
          >
            Demander mon accès
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
