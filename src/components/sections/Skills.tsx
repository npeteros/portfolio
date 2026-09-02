import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import skillset from "@/lib/skills.json";
import { TechStackItem } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";

const skills: TechStackItem[] = skillset.sort((a, b) => b.rating - a.rating);

function TechGrid({ tech }: { tech: TechStackItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return tech.map((t, idx) => (
    <Link
      to={t.link}
      key={t.link}
      target="_blank"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative group block p-2 h-full w-full"
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-28 lg:w-48 bg-neutral-200 dark:bg-neutral-800 block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center w-24 h-24 lg:w-44 lg:h-32 text-neutral-900 dark:text-white bg-neutral-200 dark:bg-neutral-700 gap-2 rounded-lg border border-black/[0.1] dark:border-white/[0.2] group-hover:border-neutral-300 dark:group-hover:border-neutral-700 relative z-20">
        <img src={t.icon} alt={t.name} className="max-w-12 relative z-20" />
        <div className="font-bold text-md md:text-lg z-50">{t.name}</div>
      </div>
    </Link>
  ));
}

export function Skills() {
  return (
    <section className="min-h-screen py-0 md:pb-24" id="skills">
      <div className="max-w-6xl bg-white dark:bg-neutral-900 mx-auto px-8 rounded-lg">
        <SectionHeading icon={Code2} label="Skills" />
        <div
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-4 gap-x-4 md:gap-x-0 py-10"
          id="content-2"
        >
          <TechGrid tech={skills} />
        </div>
      </div>
    </section>
  );
}
