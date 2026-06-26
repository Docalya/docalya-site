import { motion } from "framer-motion";
import { Gift, Leaf, Play } from "lucide-react";
import { APP_URL, SPOTS_LEFT, SPOTS_TAKEN, SPOTS_TOTAL } from "../config";
import { fadeUp, stagger } from "../lib/motion";

const progress = Math.round((SPOTS_TAKEN / SPOTS_TOTAL) * 100);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-8 pb-16 sm:px-8 sm:pt-16 md:pb-28 2xl:max-w-[1400px] 2xl:mx-auto"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Colonne texte ---------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-beige-deep bg-cream-deep px-3.5 py-1.5 text-xs font-semibold tracking-wide text-green"
          >
            <Leaf className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
            Pensé pour votre quotidien
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl"
          >
            Votre administratif,
            <br className="hidden sm:block" /> enfin{" "}
            <span className="text-green">apaisé.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink-soft"
          >
            Centralisez vos documents, suivez vos échéances et vos aides au même
            endroit. Docalya remet de l'ordre dans votre administratif — sans
            stress, sans paperasse oubliée.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 text-base font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest"
            >
              <span aria-hidden="true">🌿</span>
              Je veux mon accès gratuit
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-beige-deep bg-cream px-6 py-3.5 text-base font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-green/40 hover:bg-cream-deep"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Découvrir Docalya
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- Colonne image ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] shadow-float ring-1 ring-beige/70">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80"
              alt="Lac de montagne calme au lever du jour, reflet des sommets, ambiance sereine et minimaliste"
              width={1400}
              height={1000}
              fetchPriority="high"
              className="aspect-[7/5] w-full object-cover"
            />
          </div>

          {/* Carte flottante — Accès gratuit */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute -bottom-8 left-4 right-4 rounded-3xl border border-beige/70 bg-cream/95 p-5 shadow-float backdrop-blur-md sm:left-6 sm:right-auto sm:w-[19rem]"
            role="status"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-wash text-green">
                <Gift className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">Accès gratuit à vie</p>
                <p className="text-xs text-ink-muted">
                  pour les {SPOTS_TOTAL} premières personnes
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div
                className="h-2.5 w-full overflow-hidden rounded-full bg-beige"
                role="progressbar"
                aria-valuenow={SPOTS_TAKEN}
                aria-valuemin={0}
                aria-valuemax={SPOTS_TOTAL}
                aria-label={`${SPOTS_TAKEN} places prises sur ${SPOTS_TOTAL}`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                  className="h-full rounded-full bg-green"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-ink">
                  {SPOTS_TAKEN} / {SPOTS_TOTAL}
                </span>
                <span className="text-ink-muted">
                  Il reste encore {SPOTS_LEFT} places.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
