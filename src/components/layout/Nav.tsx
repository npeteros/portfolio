import type { ReactNode } from "react";
import { scrollTo } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/SocialLink";

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
  children: ReactNode;
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

export function Nav({
  activeSection,
  theme,
  setTheme,
}: {
  activeSection: string | null;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  return (
    <div className="fixed z-30 w-full backdrop-blur-sm bg-white/70 dark:bg-neutral-900/70">
      <div className="max-w-md mx-6 md:max-w-3xl md:mx-auto lg:max-w-7xl w-full py-4 flex justify-between align-center">
        <a href="/" className="text-4xl text-carnelian-red font-bold">
          peterosJS
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex align-center gap-8 text-neutral-900 dark:text-white text-xl">
            {pages.map((p) => (
              <NavLink
                key={p}
                className={
                  activeSection == p
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500"
                }
              >
                {p}
              </NavLink>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}
