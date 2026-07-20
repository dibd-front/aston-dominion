import { cva } from "class-variance-authority";

export const sectionLabelStyles = cva(
  [
    "SectionLabel-root",
    "inline-flex",
    "items-center",
    "gap-3",
    "font-sans",
    "text-[0.6875rem]",
    "font-semibold",
    "tracking-[0.17em]",
    "uppercase",
  ],
  {
    variants: {
      tone: {
        light: ["text-[#8a7349]"],
        dark: ["text-[#d2b77e]"],
      },
    },
    defaultVariants: {
      tone: "light",
    },
  },
);

export const sectionLabelRuleStyles = cva(
  ["SectionLabel-rule", "h-[0.0625rem]", "w-7", "shrink-0"],
  {
    variants: {
      tone: {
        light: ["bg-accent"],
        dark: ["bg-[#d2b77e]"],
      },
    },
    defaultVariants: {
      tone: "light",
    },
  },
);
