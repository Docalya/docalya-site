import { motion } from "framer-motion";
import { APP_URL, SPOTS_LEFT } from "../config";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function CTA() {
  return (
    <section className="px-5 py-8 sm:px-8 sm:py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-green-wash px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20 2xl:max-w-6xl"
      >
        {/* halo décoratif très doux */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-green-wash-deep blur-3xl"
        />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-forest sm:text-[2.6rem]">
            Rejoignez les premiers à profiter de Docalya gratuitement, à vie.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-green sm:text-lg">
            Il ne reste plus que {SPOTS_LEFT} places. Demandez votre accès dès
            maintenant.
          </p>
          <a
            href={APP_URL}
            className="mt-9 inline-flex items-center justify-center rounded-full bg-green px-8 py-4 text-base font-semibold text-cream shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest sm:text-lg"
          >
            Je veux mon accès gratuit
          </a>
        </div>
      </motion.div>
    </section>
  );
}
