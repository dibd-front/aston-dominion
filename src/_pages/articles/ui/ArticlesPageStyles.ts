import { cva } from "class-variance-authority";

export const articlesPageStyles = cva([
  "ArticlesPage-root",
  "min-h-dvh",
  "bg-background",
]);

export const articlesSkipLinkStyles = cva([
  "ArticlesPage-skipLink",
  "fixed",
  "left-4",
  "top-4",
  "z-[60]",
  "-translate-y-24",
  "rounded-[0.25rem]",
  "bg-surface",
  "px-4",
  "py-3",
  "font-semibold",
  "text-primary-dark",
  "transition-transform",
  "focus:translate-y-0",
]);

export const articlesMainStyles = cva(["ArticlesPage-main", "block"]);

export const articlesHeroSectionStyles = cva([
  "ArticlesPage-heroSection",
  "relative",
  "overflow-hidden",
  "bg-primary-dark",
  "pb-24",
  "pt-36",
  "text-white",
  "sm:pb-28",
  "sm:pt-40",
  "lg:pb-36",
  "lg:pt-44",
]);

export const articlesHeroAtmosphereStyles = cva([
  "ArticlesPage-heroAtmosphere",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "bg-[radial-gradient(circle_at_75%_15%,rgba(38,91,132,0.62),transparent_34%),radial-gradient(circle_at_10%_100%,rgba(181,154,104,0.16),transparent_30%)]",
]);

export const articlesHeroHeaderStyles = cva([
  "ArticlesPage-heroHeader",
  "relative",
  "max-w-[72rem]",
]);

export const articlesHeroEyebrowStyles = cva([
  "ArticlesPage-heroEyebrow",
  "flex",
  "items-center",
  "gap-4",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.18em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const articlesHeroNumberStyles = cva([
  "ArticlesPage-heroNumber",
  "font-serif",
  "text-lg",
  "tracking-normal",
]);

export const articlesHeroTitleStyles = cva([
  "ArticlesPage-heroTitle",
  "mt-7",
  "max-w-[16ch]",
  "font-serif",
  "text-[clamp(3.5rem,8.2vw,7.4rem)]",
  "font-medium",
  "leading-[0.88]",
  "tracking-[-0.035em]",
  "text-[#f8f5ef]",
  "text-balance",
]);

export const articlesHeroDescriptionStyles = cva([
  "ArticlesPage-heroDescription",
  "mt-8",
  "max-w-[43rem]",
  "text-base",
  "leading-8",
  "text-white/65",
  "[text-wrap:pretty]",
  "sm:text-lg",
]);

export const articlesListSectionStyles = cva([
  "ArticlesPage-listSection",
  "bg-background",
  "py-12",
  "sm:py-14",
  "lg:py-18",
]);

export const articlesListHeaderStyles = cva([
  "ArticlesPage-listHeader",
  "flex",
  "items-end",
  "justify-between",
  "gap-8",
  "border-b-[0.0625rem]",
  "border-primary/18",
  "pb-5",
]);

export const articlesListTitleStyles = cva([
  "ArticlesPage-listTitle",
  "font-serif",
  "text-[clamp(2.1rem,4vw,3.5rem)]",
  "font-semibold",
  "leading-none",
  "text-primary-dark",
]);

export const articlesCountLabelStyles = cva([
  "ArticlesPage-countLabel",
  "shrink-0",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.16em]",
  "text-[#7e6a43]",
  "uppercase",
]);

export const articlesGridStyles = cva([
  "ArticlesPage-grid",
  "m-0",
  "grid",
  "list-none",
  "gap-x-8",
  "gap-y-16",
  "lg:grid-cols-12",
  "lg:gap-y-24",
]);
