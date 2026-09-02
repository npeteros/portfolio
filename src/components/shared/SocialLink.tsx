import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export const iconButtonClass =
  "w-10 h-10 rounded-full border-2 border-black/30 dark:border-white/30 grid place-items-center bg-transparent text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100 focus:outline-none";

export function SocialLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link to={href} target="_blank">
      <button className={iconButtonClass}>{children}</button>
    </Link>
  );
}

export function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={iconButtonClass}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
