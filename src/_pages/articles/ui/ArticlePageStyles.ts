import { cva } from "class-variance-authority";

export const articlePageStyles = cva([
  "ArticlePage-root",
  "min-h-dvh",
  "bg-background",
]);

export const articleSkipLinkStyles = cva([
  "ArticlePage-skipLink",
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

export const articlePageMainStyles = cva(["ArticlePage-main", "block"]);

export const articleHeroSectionStyles = cva([
  "ArticlePage-heroSection",
  "relative",
  "overflow-hidden",
  "bg-primary-dark",
  "pb-20",
  "pt-32",
  "text-white",
  "sm:pb-24",
  "sm:pt-36",
  "lg:pb-28",
  "lg:pt-40",
]);

export const articleHeroAtmosphereStyles = cva([
  "ArticlePage-heroAtmosphere",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "bg-[radial-gradient(circle_at_80%_0%,rgba(35,86,127,0.7),transparent_34%),radial-gradient(circle_at_5%_100%,rgba(181,154,104,0.14),transparent_28%)]",
]);

export const articleHeroInnerStyles = cva([
  "ArticlePage-heroInner",
  "relative",
]);

export const articleBackLinkStyles = cva([
  "ArticlePage-backLink",
  "inline-flex",
  "items-center",
  "gap-2",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.1em]",
  "text-white/62",
  "uppercase",
  "transition-colors",
  "hover:text-[#d2b77e]",
]);

export const articleBackIconStyles = cva([
  "ArticlePage-backIcon",
  "size-4",
]);

export const articleMetaStyles = cva([
  "ArticlePage-meta",
  "mt-12",
  "flex",
  "flex-wrap",
  "items-center",
  "gap-3",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.15em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const articleMetaDividerStyles = cva([
  "ArticlePage-metaDivider",
  "h-[0.0625rem]",
  "w-6",
  "bg-white/24",
]);

export const articleTitleStyles = cva([
  "ArticlePage-title",
  "mt-7",
  "max-w-[19ch]",
  "font-serif",
  "text-[clamp(3.35rem,7.6vw,7rem)]",
  "font-medium",
  "leading-[0.9]",
  "tracking-[-0.035em]",
  "text-[#f8f5ef]",
  "text-balance",
]);

export const articleDescriptionStyles = cva([
  "ArticlePage-description",
  "mt-8",
  "max-w-[47rem]",
  "text-base",
  "leading-8",
  "text-white/63",
  "[text-wrap:pretty]",
  "sm:text-lg",
]);

export const articleHeroImageFrameStyles = cva([
  "ArticlePage-heroImageFrame",
  "relative",
  "mt-14",
  "aspect-[16/8]",
  "overflow-hidden",
  "bg-[#0b2b48]",
  "sm:mt-16",
]);

export const articleHeroImageStyles = cva([
  "ArticlePage-heroImage",
  "object-cover",
]);

export const articleBodySectionStyles = cva([
  "ArticlePage-bodySection",
  "bg-background",
  "py-20",
  "sm:py-24",
  "lg:py-32",
]);

export const articleBodyContentStyles = cva([
  "ArticlePage-bodyContent",
  "mx-auto",
  "max-w-[52rem]",
]);

export const navigationSectionStyles = cva([
  "ArticlePage-navigationSection",
  "border-t-[0.0625rem]",
  "border-primary/12",
  "bg-surface",
  "py-20",
  "sm:py-24",
]);

export const navigationTitleStyles = cva([
  "ArticlePage-navigationTitle",
  "font-serif",
  "text-[clamp(2.2rem,4vw,3.4rem)]",
  "font-semibold",
  "text-primary-dark",
]);

export const navigationGridStyles = cva([
  "ArticlePage-navigationGrid",
  "mt-10",
  "grid",
  "gap-5",
  "md:grid-cols-2",
]);

export const navigationCardStyles = cva(
  [
    "ArticlePage-navigationCard",
    "group",
    "flex",
    "min-h-[12rem]",
    "flex-col",
    "border-[0.0625rem]",
    "border-primary/15",
    "bg-background",
    "p-7",
    "transition-[border-color,transform]",
    "transition-all duration-300",
    "hover:-translate-y-[0.1875rem]",
    "hover:border-accent",
  ],
  {
    variants: {
      next: {
        false: [],
        true: ["md:text-right"],
      },
    },
    defaultVariants: {
      next: false,
    },
  },
);

export const navigationCardDirectionStyles = cva(
  [
    "ArticlePage-navigationCardDirection",
    "flex",
    "items-center",
    "gap-2",
    "text-[0.625rem]",
    "font-semibold",
    "tracking-[0.14em]",
    "text-[#7e6a43]",
    "uppercase",
  ],
  {
    variants: {
      next: {
        false: [],
        true: ["md:justify-end"],
      },
    },
    defaultVariants: {
      next: false,
    },
  },
);

export const navigationArrowStyles = cva([
  "ArticlePage-navigationArrow",
  "size-4",
]);

export const navigationCardTitleStyles = cva([
  "ArticlePage-navigationCardTitle",
  "mt-auto",
  "pt-8",
  "font-serif",
  "text-[clamp(1.6rem,3vw,2.2rem)]",
  "font-semibold",
  "leading-[1.05]",
  "text-primary-dark",
  "transition-colors",
  "group-hover:text-[#806b43]",
]);
