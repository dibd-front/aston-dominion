import { cva } from "class-variance-authority";

export const pageStyles = cva(["HomePage-root", "min-h-dvh", "bg-background"]);

export const skipLinkStyles = cva([
  "HomePage-skipLink",
  "fixed",
  "left-4",
  "top-4",
  "z-[60]",
  "-translate-y-24",
  "rounded-[4px]",
  "bg-accent",
  "px-4",
  "py-3",
  "text-xs",
  "font-semibold",
  "text-primary-dark",
  "transition-transform",
  "focus:translate-y-0",
]);

export const mainStyles = cva(["HomePage-main", "block"]);
