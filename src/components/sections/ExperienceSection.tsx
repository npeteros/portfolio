import { Briefcase } from "lucide-react";
import experienceset from "@/lib/experience.json";
import { ExperienceEntry } from "@/types";

const experience: ExperienceEntry[] = experienceset;

export function ExperienceSection() {
  return (
    <section className="min-h-screen py-8 md:pb-24" id="experience">
      <div className="max-w-2xl md:max-w-6xl w-full mx-auto flex flex-col md:justify-between">
        <div className="flex justify-center items-center gap-4 gap">
          <Briefcase size={32} className="text-neutral-900 dark:text-white" />
          <p className="text-neutral-900 dark:text-white text-4xl font-bold text-center">
            Work Experience
          </p>
        </div>
        <div className="mx-4 md:mx-6 py-10" id="content">
          <div className="flex flex-col gap-8 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 md:pl-10">
            {experience.map((e) => (
              <div key={`${e.company}-${e.role}`} className="relative">
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-carnelian-red" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <p className="text-neutral-900 dark:text-white text-xl font-bold">{e.role}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">{e.period}</p>
                </div>
                <p className="text-carnelian-red font-semibold mb-2">{e.company}</p>
                <ul className="list-disc list-outside pl-5 flex flex-col gap-1">
                  {e.points.map((point) => (
                    <li key={point} className="text-neutral-900 dark:text-white text-justify leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
