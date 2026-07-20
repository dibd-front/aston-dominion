import { cva } from "class-variance-authority";

export const containerStyles = cva(
  [
    "Container-root",
    "mx-auto",
    "w-full",
    "px-5",
    "sm:px-8",
    "lg:px-12",
  ],
  {
    variants: {
      size: {
        standard: ["max-w-[1320px]"],
        wide: ["max-w-[1440px]"],
      },
    },
    defaultVariants: {
      size: "standard",
    },
  },
);
