import { cva } from "class-variance-authority";

export const articleCardStyles = cva(
  [
    "ArticleCard-root",
    "border-t-[0.0625rem]",
    "border-primary/16",
    "pt-6 m-0",
    "lg:col-span-4",
  ],
  {
    variants: {
      featured: {
        false: ["lg:mt-0"],
        true: ["lg:col-span-6", "lg:mt-0"],
      },
    },
    defaultVariants: {
      featured: false,
    },
  },
);

export const articleCardLinkStyles = cva([
  "ArticleCard-link",
  "group",
  "flex",
  "h-full",
  "flex-col justify-start",
  "text-text",
]);

export const articleCardImageFrameStyles = cva(
  [
    "ArticleCard-imageFrame",
    "relative",
    "mb-7",
    "overflow-hidden backface-visibility-hidden",
    "bg-[#e5e1d8]",
  ],
  {
    variants: {
      featured: {
        false: ["aspect-[4/3]"],
        true: ["aspect-[16/10]"],
      },
    },
    defaultVariants: {
      featured: false,
    },
  },
);

export const articleCardImageStyles = cva([
  "ArticleCard-image",
  "object-cover",
  "transition-transform",
  "duration-700",
  "ease-out",
  "group-hover:scale-[1.025]",
]);

export const articleCardMetaStyles = cva([
  "ArticleCard-meta",
  "flex",
  "items-center",
  "gap-4",
]);

export const articleCardNumberStyles = cva([
  "ArticleCard-number",
  "font-serif",
  "text-lg",
  "font-semibold",
  "text-accent",
]);

export const articleCardCategoryStyles = cva([
  "ArticleCard-category",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.15em]",
  "text-[#7e6a43]",
  "uppercase",
]);

export const articleCardTitleStyles = cva(
  [
    "ArticleCard-title",
    "mt-4",
    "font-serif",
    "font-semibold",
    "leading-[1.03]",
    "tracking-[-0.02em]",
    "text-primary-dark",
    "text-balance",
    "transition-colors",
    "duration-300",
    "group-hover:text-[#806b43]",
  ],
  {
    variants: {
      featured: {
        false: ["text-[clamp(2rem,3vw,2.8rem)]"],
        true: ["max-w-[21ch]", "text-[clamp(2.4rem,4.4vw,4rem)]"],
      },
    },
    defaultVariants: {
      featured: false,
    },
  },
);

export const articleCardDescriptionStyles = cva([
  "ArticleCard-description",
  "mt-4",
  "max-w-[42rem]",
  "text-sm",
  "leading-7",
  "text-text-muted",
  "[text-wrap:pretty]",
]);

export const articleCardReadStyles = cva([
  "ArticleCard-read",
  // "mt-auto",
  "flex",
  "items-center",
  "gap-2",
  "pt-7 relative overflow-hidden",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.08em]",
  "text-primary",
  "uppercase",
]);

export const articleCardReadIconStyles = cva([
  "ArticleCard-readIcon",
  "size-4 relative",
  "transition-transform",
  "duration-300",
  // "group-hover:translate-x-[0.125rem]",
  // "group-hover:-translate-y-[0.125rem]",
]);
