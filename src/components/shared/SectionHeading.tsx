import { LucideIcon } from "lucide-react";

export function SectionHeading({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4 text-center text-neutral-900 dark:text-white text-4xl font-bold pt-12 tracking-wider">
      <Icon size={32} className="text-neutral-900 dark:text-white" />
      <span>{label}</span>
    </div>
  );
}
