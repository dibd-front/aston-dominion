import { cva } from "class-variance-authority";

export const brandLogoStyles = cva([
  "BrandLogo-root",
  "relative",
  "block",
  "h-12",
  "w-[11.25rem]",
  "shrink-0",
  "overflow-hidden",
]);

export const brandLogoImageStyles = cva([
  "BrandLogo-image",
  "absolute",
  "left-1/2",
  "top-1/2",
  "max-w-none",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "scale-[1.01]",
  "mix-blend-screen",
  "invert",
  "grayscale",
  "brightness-200",
]);
