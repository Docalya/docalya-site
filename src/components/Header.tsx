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
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 2xl:max-w-[1400px]"
      >
        {/* Logo + nom */}
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2 sm:gap-2.5"
          aria-label="Docalya - accueil"
        >
          <img
            src="/logo-docalya.png"
            alt="Logo Docalya"
            className="h-9 w-9 rounded-xl object-contain sm:h-12 sm:w-12"
          />
          <span className="text-sm font-bold uppercase tracking-[0.12em] text-ink sm:text-2xl sm:tracking-[0.3em]">
            Docalya
          </span>
        </a>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={APP_URL}
            className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold text-ink-soft transition-colors hover:text-ink sm:px-4 sm:text-sm"
          >
            Se connecter
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-green px-3.5 py-2.5 text-xs font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">Mon accès</span>
            <span className="hidden sm:inline">Demander mon accès</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}