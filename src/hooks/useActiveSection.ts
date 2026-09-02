import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>("");

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
