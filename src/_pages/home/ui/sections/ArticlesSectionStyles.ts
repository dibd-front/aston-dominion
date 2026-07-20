import { cva } from "class-variance-authority";

export const articlesSectionStyles = cva([
  "ArticlesSection-root",
  "scroll-mt-20",
  "bg-surface",
  "py-24",
  "sm:py-28",
  "lg:py-36",
]);

export const articlesHeaderStyles = cva(["ArticlesSection-header", "max-w-[58rem]"]);

export const articlesTitleStyles = cva([
  "ArticlesSection-title",
  "mt-5",
  "max-w-[17ch]",
  "font-serif",
  "text-[clamp(2.7rem,7vw,4.8rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
]);

export const articlesGridStyles = cva([
  "ArticlesSection-grid",
  "mt-14",
  "grid",
  "gap-14",
  "lg:mt-20",
  "lg:grid-cols-12",
  "lg:gap-8",
]);

export const articlesFooterStyles = cva([
  "ArticlesSection-footer",
  "mt-12",
  "flex",
  "justify-end",
  "border-t",
  "border-primary/10",
  "pt-6",
  "lg:mt-16",
]);

export const articlesViewAllStyles = cva([
  "ArticlesSection-viewAll",
  "group",
  "inline-flex",
  "items-center",
  "gap-3",
  "text-xs",
  "font-semibold",
  "tracking-[0.08em]",
  "text-primary",
  "uppercase",
  "transition-colors",
  "duration-300",
  "hover:text-[#806b43]",
]);

export const articlesViewAllIconStyles = cva([
  "ArticlesSection-viewAllIcon",
  "size-4",
  "shrink-0",
  "transition-transform",
  "duration-300",
  "group-hover:translate-x-1",
]);

export const articleRevealStyles = cva([], {
  variants: {
    featured: {
      false: ["lg:col-span-5", "lg:pt-24"],
      true: ["lg:col-span-7"],
    },
  },
});

export const articleLinkStyles = cva(["ArticlesSection-link", "group", "block", "text-text"], {
  variants: {
    featured: {
      false: [],
      true: [],
    },
  },
  defaultVariants: {
    featured: false,
  },
});

export const articleCardStyles = cva(["ArticlesSection-article", "block"]);

export const articleImageFrameStyles = cva(
  ["ArticlesSection-imageFrame", "relative", "overflow-hidden", "bg-background"],
  {
    variants: {
      featured: {
        false: ["aspect-[4/3]"],
        true: ["aspect-[16/11]"],
      },
    },
  },
);

export const articleImageStyles = cva([
  "ArticlesSection-image",
  "object-cover",
  "transition-transform",
  "duration-700",
  "ease-out",
  "group-hover:scale-[1.03]",
]);

export const articleMetaStyles = cva([
  "ArticlesSection-meta",
  "mt-6",
  "flex",
  "items-center",
  "gap-3",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.15em]",
  "text-[#8a7349]",
  "uppercase",
]);

export const articleMetaRuleStyles = cva([
  "ArticlesSection-metaRule",
  "h-[0.0625rem]",
  "w-7",
  "bg-accent",
]);

export const articleTitleStyles = cva([
  "ArticlesSection-articleTitle",
  "mt-4",
  "max-w-[23ch]",
  "font-serif",
  "text-[clamp(2rem,4.5vw,3.15rem)]",
  "font-semibold",
  "leading-[1.02]",
  "tracking-[-0.02em]",
  "text-primary-dark",
  "transition-colors",
  "duration-300",
  "group-hover:text-[#806b43]",
]);

export const articleDescriptionStyles = cva([
  "ArticlesSection-description",
  "mt-4",
  "max-w-[44rem]",
  "text-sm",
  "leading-7",
  "text-text-muted",
]);

export const articleReadStyles = cva([
  "ArticlesSection-read",
  "mt-6",
  "inline-flex",
  "items-center",
  "gap-3",
  "text-xs",
  "font-semibold",
  "text-primary",
]);

export const articleReadIconStyles = cva([
  "ArticlesSection-readIcon",
  "size-4",
  "transition-transform",
  "duration-300",
  // "group-hover:translate-x-1",
]);
