import { CustomFlowbiteTheme } from "flowbite-react";

export const flowbiteCarouselTheme: CustomFlowbiteTheme["carousel"] = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-neutral-600 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  indicators: {
    wrapper:
      "absolute bottom-24 sm:bottom-12 md:bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
};
