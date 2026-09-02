import React, { useEffect, useState } from "react";
import { FlipWords } from "./components/aceternity/flip-words";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "./components/aceternity/3d-card";
import { AnimatePresence, motion } from "framer-motion";
import skillset from "./lib/skills.json";
import projectset from "./lib/projects.json";
import certificates from "./lib/certificates.json";
import experienceset from "./lib/experience.json";
import { scrollTo } from "./lib/utils";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Github, Globe, Mail } from "lucide-react";

const pages = [
  "home",
  "about",
  "experience",
  "skills",
  "certificates",
  "projects",
  "contact",
];

function NavLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`hover:border-b-2  hover:-translate-y-1 hover:scale-110 hover:cursor-pointer ${className} `}
      onClick={() => scrollTo(document.querySelector(`#${children}`))}
    >
      {children}
    </span>
  );
}

function SocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link to={href} target="_blank">
      <button className="w-10 h-10 rounded-full border-2 grid place-items-center bg-transparent hover:bg-neutral-800 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100 focus:outline-none">
        {children}
      </button>
    </Link>
  );
}

interface TechStack {
  name: string;
  icon: string;
  link: string;
}

interface Project {
  name: string;
  desc: string;
  img: string;
  link: string;
  github: string;
  tech: string[];
}

interface Certificate {
  name: string;
  desc: string;
  img: string;
  link: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

function TechStack({ tech }: { tech: TechStack[] }) {
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
            className="absolute inset-0 h-full w-28 lg:w-48 bg-neutral-800 block rounded-3xl"
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
      <div className="flex flex-col justify-center items-center w-24 h-24 lg:w-44 lg:h-32 text-white bg-neutral-700 gap-2 rounded-lg border border-white/[0.2] group-hover:border-neutral-700 relative z-20">
        <img src={t.icon} alt={t.name} className="max-w-12 relative z-20" />
        <div className="font-bold text-md md:text-lg z-50">{t.name}</div>
      </div>
    </Link>
  ));
}

function Experience({ experience }: { experience: Experience[] }) {
  return (
    <div className="flex flex-col gap-8 border-l-2 border-neutral-700 pl-6 md:pl-10">
      {experience.map((e) => (
        <div key={`${e.company}-${e.role}`} className="relative">
          <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-carnelian-red" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
            <p className="text-white text-xl font-bold">{e.role}</p>
            <p className="text-neutral-400 text-sm">{e.period}</p>
          </div>
          <p className="text-carnelian-red font-semibold mb-2">{e.company}</p>
          <ul className="list-disc list-outside pl-5 flex flex-col gap-1">
            {e.points.map((point) => (
              <li key={point} className="text-white text-justify leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Projects({ projects }: { projects: Project[] }) {
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
          className="flex items-center gap-1 text-white/80 hover:text-white text-sm"
        >
          <Globe size={16} />
          Website
        </a>
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-white/80 hover:text-white text-sm"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.2] bg-neutral-800 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="text-white">
          <AccordionTrigger>{p.name}</AccordionTrigger>
          <AccordionContent>{p.desc}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ));
}

const customTheme: CustomFlowbiteTheme["carousel"] = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-neutral-600 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  indicators: {
    wrapper:
      "absolute bottom-24 sm:bottom-12 md:bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
};

function Certificates({ certificates }: { certificates: Certificate[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex cursor-pointer flex-col items-center md:gap-4 h-full">
      <Carousel
        theme={customTheme}
        className="gap-96"
        onSlideChange={(index) => setActiveIndex(index)}
      >
        {certificates.map((c, index) => (
          <a href={c.link} target="_blank" key={index}>
            <img
              src={c.img}
              alt={c.name}
              // onClick={() => (window.location.href = c.link)}
            />
          </a>
        ))}
      </Carousel>
      <div className="flex w-full md:w-2/3 flex-col gap-2 text-center text-white">
        <span className="text-lg font-bold">
          {certificates[activeIndex].name}
        </span>
        <span>{certificates[activeIndex].desc}</span>
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl bg-emerald-800/80 border border-emerald-500 text-white text-center py-3 px-4"
          >
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl bg-neutral-800 border border-white/[0.2] text-white placeholder:text-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl bg-neutral-800 border border-white/[0.2] text-white placeholder:text-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="rounded-xl bg-neutral-800 border border-white/[0.2] text-white placeholder:text-neutral-400 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <button
          type="submit"
          className="rounded-xl bg-carnelian-red text-white text-center w-full py-4 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100 focus:outline-none"
        >
          Send Message
        </button>
      </form>
      <a
        href="mailto:n.peteros2003@gmail.com"
        className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm"
      >
        <Mail size={16} />
        or email me directly
      </a>
    </div>
  );
}

export default function App() {
  const words = ["frontend", "backend", "fullstack", "mobile"];

  const skills: TechStack[] = skillset.sort((a, b) => b.rating - a.rating);

  const projects: Project[] = projectset;

  const experience: Experience[] = experienceset;

  const [activeSection, setActiveSection] = useState<string | null>("");

  const handleScroll = () => {
    document.querySelectorAll("section").forEach((section) => {
      const height = section.offsetHeight;
      const offset = section.offsetTop - 200;
      const top = window.scrollY;
      const id = section.getAttribute("id");

      if (top > offset && top < offset + height) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    const scroll = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 500,
      //   reset: true,
    });

    scroll.reveal("#home");
    scroll.reveal("#about");
    scroll.reveal("#experience");
    scroll.reveal("#skills");
    scroll.reveal("#projects");
    scroll.reveal("#certificates");
    scroll.reveal("#contact");
    scroll.reveal("#content", { delay: 400, interval: 600 });
    scroll.reveal("#content-2", { delay: 600 });
    scroll.reveal("#content-3", { delay: 800 });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-neutral-900 min-h-screen font-['Times_New_Roman']">
        <div className="fixed z-30 w-full backdrop-blur-sm">
          <div className="max-w-md mx-6 md:max-w-3xl md:mx-auto lg:max-w-7xl w-full py-4 flex justify-between align-center">
            <a href="/" className="text-4xl text-carnelian-red font-bold">
              peterosJS
            </a>
            <div className="hidden md:flex align-center gap-8 text-white text-xl">
              {pages.map((p) => (
                <NavLink
                  key={p}
                  className={
                    activeSection == p ? "text-white" : "text-neutral-500"
                  }
                >
                  {p}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <section className="min-h-screen pt-24" id="home">
          <div className="max-w-md md:mt-0 md:max-w-3xl lg:max-w-7xl w-full mx-auto flex flex-col justify-between">
            <div className="mx-0 md:mx-6 flex justify-between">
              <div className="flex flex-col justify-center gap-6">
                <div
                  className="flex flex-col justify-center gap-6 tracking-wider"
                  id="content"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-center md:text-left text-2xl md:text-3xl font-bold text-white">
                      Hello, I'm
                    </p>
                    <p className="text-center md:text-left text-5xl md:text-6xl font-bold text-carnelian-red">
                      Neal Peteros
                    </p>
                  </div>
                  <div
                    className="w-4/5 mx-auto md:mx-0 text-center md:w-2/3 md:text-left md:text-lg text-white"
                    id="content-2"
                  >
                    An ambitious
                    <FlipWords words={words} className="text-white" />
                    developer with a passion for learning and innovation.
                  </div>
                  <div className="w-5/6 mx-auto md:mx-0 md:w-2/2 lg:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-4">
                    <button
                      className="rounded-xl bg-carnelian-red text-white text-center w-full py-4 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100 focus:outline-none"
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                          block: "start",
                          inline: "nearest",
                          behavior: "smooth",
                        })
                      }
                    >
                      Contact Now
                    </button>
                    <button
                      className="rounded-xl bg-transparent border-2 text-white text-center w-full py-4 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100"
                      onClick={() =>
                        document.getElementById("about")?.scrollIntoView({
                          block: "start",
                          inline: "nearest",
                          behavior: "smooth",
                        })
                      }
                    >
                      Learn more
                    </button>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/2 flex flex-wrap justify-center md:justify-start md:flex-nowrap gap-4"
                  id="content-3"
                >
                  <SocialLink href="https://github.com/npeteros/">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
                      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/neal-peteros-02a164275/">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                      <path d="M8 11v5"></path>
                      <path d="M8 8v.01"></path>
                      <path d="M12 16v-5"></path>
                      <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
                    </svg>
                  </SocialLink>
                  <SocialLink href="mailto:n.peteros2003@gmail.com">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3v16Z"></path>
                      <path d="M5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1Z"></path>
                      <path d="m16 4-4 4-4-4"></path>
                      <path d="m4 6.5 8 7.5 8-7.5"></path>
                    </svg>
                  </SocialLink>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="spidey.gif"
                  alt="Spidey"
                  className="object-contain"
                  id="content-2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen py-8 md:pb-24" id="about">
          <div className="max-w-2xl md:max-w-6xl w-full mx-auto flex flex-col md:justify-between">
            <div className="flex justify-center items-center gap-4 gap">
              <svg
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-white text-4xl font-bold text-center">
                About Me
              </p>
            </div>
            <div
              className="mx-4 md:mx-6 flex flex-wrap lg:flex-nowrap align-center md:gap-24"
              id="content"
            >
              <CardContainer>
                <CardBody className="bg-neutral-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-8 border">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="spidey-me.jpg"
                      alt="Spidey"
                      className="object-contain"
                      id="content-2"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <div
                className="gap-2 flex flex-col justify-center"
                id="content-2"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mx-4">
                    <p className="text-white text-2xl font-bold">
                      Neal Andrew B. Peteros
                    </p>
                    <p className="text-white text-lg">
                      Full-Stack Web Developer
                    </p>
                  </div>
                  <p className="text-white leading-loose text-justify mx-4">
                    I'm a full-stack developer from Cebu, Philippines. I am an
                    Information Technology undergraduate from the University of
                    San Carlos. I have grown a passion for developing dynamic
                    and responsive web applications using different technology
                    stacks. I excel in technologies such as HTML, CSS,
                    JavaScript, React, Node.js, and various other modern
                    frameworks and tools.
                  </p>
                  <Link to={"/resume.pdf"} target="_blank" className="mx-4">
                    <button className="bg-red-700 hover:bg-red-900 drop-shadow-[0_0_5px_#B11313AA] w-1/3 rounded-xl py-2 text-white flex gap-2 justify-center items-center font-bold">
                      Resume
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m9 6 6 6-6 6"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen py-8 md:pb-24" id="experience">
          <div className="max-w-2xl md:max-w-6xl w-full mx-auto flex flex-col md:justify-between">
            <div className="flex justify-center items-center gap-4 gap">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 7h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></path>
                <path d="M9 5h6v2H9V5Z"></path>
              </svg>
              <p className="text-white text-4xl font-bold text-center">
                Work Experience
              </p>
            </div>
            <div className="mx-4 md:mx-6 py-10" id="content">
              <Experience experience={experience} />
            </div>
          </div>
        </section>
        <section className="min-h-screen py-0 md:pb-24" id="skills">
          <div className="max-w-6xl bg-neutral-900 mx-auto px-8 rounded-lg">
            <div className="flex items-center justify-center gap-4 text-center text-white text-4xl font-bold pt-12 tracking-wider">
              <svg
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22 16c0 1.1-.9 2-2 2h4v2H0v-2h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10ZM20 6H4v10h16V6Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Skills</span>
            </div>
            <div
              className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-4 gap-x-4 md:gap-x-0 py-10"
              id="content-2"
            >
              <TechStack tech={skills} />
            </div>
          </div>
        </section>
        <section className="min-h-screen py-0 md:pb-24" id="certificates">
          <div className="max-w-6xl bg-neutral-900 mx-auto px-8 rounded-lg">
            <div className="flex items-center justify-center gap-4 text-center text-white text-4xl font-bold pt-12 tracking-wider">
              <svg
                width="32"
                height="32"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22 16c0 1.1-.9 2-2 2h4v2H0v-2h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10ZM20 6H4v10h16V6Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Certificates</span>
            </div>
            <div className="h-[44rem] py-10" id="content-4">
              <Certificates certificates={certificates} />
            </div>
          </div>
        </section>
        <section className="min-h-screen py-0 md:pb-24 " id="projects">
          <div className="max-w-6xl bg-neutral-900 mx-auto px-8 rounded-lg">
            <div className="flex items-center justify-center gap-4 text-center text-white text-4xl font-bold pt-12 tracking-wider">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9h6"></path>
                <path d="M4 5h4"></path>
                <path d="M6 5v11a1 1 0 0 0 1 1h5"></path>
                <path d="M19 7h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"></path>
                <path d="M19 15h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"></path>
              </svg>
              <span>Projects</span>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 place-items-center"
              id="content"
            >
              <Projects projects={projects} />
            </div>
          </div>
        </section>
        <section className="min-h-screen py-0 md:pb-24" id="contact">
          <div className="max-w-6xl bg-neutral-900 mx-auto px-8 rounded-lg">
            <div className="flex items-center justify-center gap-4 text-center text-white text-4xl font-bold pt-12 tracking-wider">
              <Mail size={32} color="#ffffff" />
              <span>Contact</span>
            </div>
            <div className="py-10" id="content">
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
