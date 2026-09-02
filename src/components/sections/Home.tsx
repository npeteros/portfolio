import { FlipWords } from "@/components/aceternity/flip-words";
import { SocialLink } from "@/components/shared/SocialLink";
import { Github, Linkedin, Mail } from "lucide-react";

const words = ["frontend", "backend", "fullstack", "mobile"];

export function Home() {
  return (
    <section className="min-h-screen pt-24" id="home">
      <div className="max-w-md md:mt-0 md:max-w-3xl lg:max-w-7xl w-full mx-auto flex flex-col justify-between">
        <div className="mx-0 md:mx-6 flex justify-between">
          <div className="flex flex-col justify-center gap-6">
            <div
              className="flex flex-col justify-center gap-6 tracking-wider"
              id="content"
            >
              <div className="flex flex-col gap-2">
                <p className="text-center md:text-left text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                  Hello, I'm
                </p>
                <p className="text-center md:text-left text-5xl md:text-6xl font-bold text-carnelian-red">
                  Neal Peteros
                </p>
              </div>
              <div
                className="w-4/5 mx-auto md:mx-0 text-center md:w-2/3 md:text-left md:text-lg text-neutral-900 dark:text-white"
                id="content-2"
              >
                An ambitious
                <FlipWords words={words} className="text-neutral-900 dark:text-white" />
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
                  className="rounded-xl bg-transparent border-2 border-black/30 dark:border-white/30 text-neutral-900 dark:text-white text-center w-full py-4 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100"
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
                <Github size={18} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/neal-peteros-02a164275/">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href="mailto:n.peteros2003@gmail.com">
                <Mail size={18} />
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
  );
}
