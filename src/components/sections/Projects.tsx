import { Link } from "react-router-dom";
import { Github, Globe, FolderGit2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import projectset from "@/lib/projects.json";
import { Project } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";

const projects: Project[] = projectset;

function ProjectList({ projects }: { projects: Project[] }) {
  return projects.map((p) => (
    <div key={p.name}>
      <Link
        to={p.link}
        target="_blank"
        className="h-full flex flex-col gap-4 items-center justify-center"
      >
        <img
          alt="image"
          className="h-full object-contain w-full"
          width="1000"
          height="1000"
          src={p.img}
        />
      </Link>
      <div className="flex items-center justify-center gap-4 py-2">
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white text-sm"
        >
          <Globe size={16} />
          Website
        </a>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white text-sm"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/[0.1] dark:border-white/[0.2] bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs text-neutral-600 dark:text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="text-neutral-900 dark:text-white">
          <AccordionTrigger>{p.name}</AccordionTrigger>
          <AccordionContent>{p.desc}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ));
}

export function Projects() {
  return (
    <section className="min-h-screen py-0 md:pb-24 " id="projects">
      <div className="max-w-6xl bg-white dark:bg-neutral-900 mx-auto px-8 rounded-lg">
        <SectionHeading icon={FolderGit2} label="Projects" />
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 place-items-center"
          id="content"
        >
          <ProjectList projects={projects} />
        </div>
      </div>
    </section>
  );
}
