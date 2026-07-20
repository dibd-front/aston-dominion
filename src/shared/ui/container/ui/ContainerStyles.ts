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
        standard: ["max-w-[82.5rem]"],
        wide: ["max-w-[90rem]"],
      },
    },
    defaultVariants: {
      size: "standard",
    },
  },
);
