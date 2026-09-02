import { Nav } from "@/components/layout/Nav";
import { Home } from "@/components/sections/Home";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  const [theme, setTheme] = useTheme();
  const activeSection = useActiveSection();
  useScrollReveal();

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen font-['Times_New_Roman']">
      <Nav activeSection={activeSection} theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <ExperienceSection />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}
