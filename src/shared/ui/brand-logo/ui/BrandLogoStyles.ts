import { cva } from "class-variance-authority";

export const brandLogoStyles = cva([
  "BrandLogo-root",
  "relative",
  "block",
  "w-[10rem]",
  "shrink-0",
  "overflow-hidden",
]);

export const brandLogoImageStyles = cva([
  "BrandLogo-image",
  'w-full h-auto max-w-full mix-blend-screen invert grayscale brightness-200'
]);
