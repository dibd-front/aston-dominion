import { cva } from "class-variance-authority";

export const buttonLinkStyles = cva(
  [
    "ButtonLink-root",
    "group",
    "inline-flex",
    "min-h-12",
    "items-center",
    "justify-center",
    "gap-3",
    "rounded-[0.25rem]",
    "border-[0.0625rem]",
    "px-6",
    "text-[0.75rem]",
    "font-semibold",
    "leading-none",
    "whitespace-nowrap",
    "transition-[background-color,border-color,color,transform]",
    "duration-300",
    "active:translate-y-[0.0625rem]",
  ],
  {
    variants: {
      variant: {
        accent: [
          "border-accent",
          "bg-accent",
          "text-primary-dark",
          "hover:border-[#c8af7f]",
          "hover:bg-[#c8af7f]",
        ],
        outlineLight: [
          "border-white/35",
          "bg-transparent",
          "text-white",
          "hover:border-accent",
          "hover:text-[#d5bd8c]",
        ],
        outlineDark: [
          "border-primary/30",
          "bg-transparent",
          "text-primary",
          "hover:border-accent",
          "hover:text-[#7f683f]",
        ],
        textLight: [
          "min-h-0",
          "border-transparent",
          "p-0",
          "text-white",
          "hover:text-[#d5bd8c]",
        ],
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  },
);

export const buttonLinkIconStyles = cva([
  "ButtonLink-icon",
  "size-4",
  "shrink-0",
  "transition-transform",
  "duration-300",
  "group-hover:translate-x-1",
]);
