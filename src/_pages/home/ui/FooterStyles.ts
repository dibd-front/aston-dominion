import { cva } from "class-variance-authority";

export const footerStyles = cva([
  "Footer-root",
  "border-t-[0.0625rem]",
  "border-white/10",
  "bg-primary-dark",
  "py-12",
  "text-white",
  "sm:py-14",
]);

export const footerGridStyles = cva([
  "Footer-grid",
  "grid",
  "gap-12",
  "md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]",
  "md:items-end",
]);

export const footerBrandStyles = cva(["Footer-brand", "max-w-md"]);
export const footerLogoStyles = cva(["Footer-logo", "-ml-3", "mb-4"]);
export const footerDescriptionStyles = cva([
  "Footer-description",
  "max-w-[30rem]",
  "text-sm",
  "leading-6",
  "text-white/62",
]);

export const footerNavStyles = cva([
  "Footer-nav",
  "md:justify-self-end",
]);

export const footerNavListStyles = cva([
  "Footer-navList",
  "grid",
  "list-none",
  "grid-cols-2",
  "gap-x-8",
  "gap-y-3",
  "sm:flex",
  "sm:flex-wrap",
]);

export const footerLinkStyles = cva([
  "Footer-link",
  "text-xs",
  "font-medium",
  "text-white/72",
  "transition-colors",
  "hover:text-[#d5bd8c]",
]);

export const footerBottomStyles = cva([
  "Footer-bottom",
  "mt-12",
  "border-t-[0.0625rem]",
  "border-white/10",
  "pt-6",
  "text-[0.6875rem]",
  "text-white/45",
]);
