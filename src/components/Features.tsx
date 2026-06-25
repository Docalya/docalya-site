import { motion } from "framer-motion";
import {
  CalendarClock,
  FolderHeart,
  HandCoins,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: FolderHeart,
    title: "Vos documents",
    description:
      "Tous vos papiers importants centralisés, classés et retrouvés en quelques secondes.",
  },
  {
    icon: CalendarClock,
    title: "Vos échéances",
    description:
      "Plus aucune date oubliée. Docalya vous prévient avant qu'il ne soit trop tard.",
  },
  {
    icon: HandCoins,
    title: "Vos aides",
    description:
      "Identifiez les aides auxquelles vous avez droit et ne laissez plus rien passer.",
  },
  {
    icon: Sparkles,
    title: "Votre sérénité",
    description:
      "Un esprit tranquille : votre administratif est sous contrôle, vous respirez.",
  },
];

export default function Features() {
  return (
    <section
      id="fonctionnalites"
      className="px-5 py-10 sm:px-8 sm:py-24 2xl:max-w-[1400px] 2xl:mx-auto"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-ink sm:text-4xl">
            Tout votre administratif, au même endroit
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Quatre piliers pour reprendre la main, sans effort et en toute
            confiance.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-[28px] border border-beige/70 bg-cream p-5 shadow-soft transition-shadow duration-300 hover:shadow-float sm:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-wash text-green transition-colors duration-300 group-hover:bg-green group-hover:text-cream">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
