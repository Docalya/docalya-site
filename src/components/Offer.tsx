import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { APP_URL, SPOTS_LEFT, SPOTS_TAKEN, SPOTS_TOTAL } from "../config";
import { fadeUp, viewportOnce } from "../lib/motion";

const progress = Math.round((SPOTS_TAKEN / SPOTS_TOTAL) * 100);

export default function Offer() {
  return (
    <section className="px-5 py-8 sm:px-8 sm:py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-5xl rounded-[32px] border border-beige/70 bg-cream-deep p-8 shadow-soft sm:p-12 2xl:max-w-6xl"
      >
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-wash px-3 py-1 text-xs font-semibold text-green">
              <Gift className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
              Offre de lancement
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">
              Accès gratuit à vie
            </h2>
            <p className="mt-2 text-base text-ink-soft">
              Réservé aux {SPOTS_TOTAL} premières personnes. Une fois les places
              parties, l'offre disparaît pour de bon.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-ink">
                {SPOTS_TAKEN}
                <span className="text-ink-muted"> / {SPOTS_TOTAL}</span>
              </span>
              <span className="text-sm font-semibold text-green">
                {SPOTS_LEFT} places restantes
              </span>
            </div>
            <div
              className="mt-3 h-3 w-full overflow-hidden rounded-full bg-beige"
              role="progressbar"
              aria-valuenow={SPOTS_TAKEN}
              aria-valuemin={0}
              aria-valuemax={SPOTS_TOTAL}
              aria-label={`${SPOTS_TAKEN} places prises sur ${SPOTS_TOTAL}`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={viewportOnce}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-green"
              />
            </div>
            <a
              href={APP_URL}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-green px-6 py-3 text-base font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest"
            >
              Demander mon accès
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
