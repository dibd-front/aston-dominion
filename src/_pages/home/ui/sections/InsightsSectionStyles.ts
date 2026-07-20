import { cva } from "class-variance-authority";

export const insightsSectionStyles = cva([
  "InsightsSection-root",
  "scroll-mt-20",
  "bg-surface",
  "py-24",
  "sm:py-28",
  "lg:py-36",
]);

export const insightsHeaderStyles = cva([
  "InsightsSection-header",
  "max-w-[58rem]",
]);

export const insightsTitleStyles = cva([
  "InsightsSection-title",
  "mt-5",
  "max-w-[17ch]",
  "font-serif",
  "text-[clamp(2.7rem,7vw,4.8rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
]);

export const insightsGridStyles = cva([
  "InsightsSection-grid",
  "mt-14",
  "grid",
  "gap-14",
  "lg:mt-20",
  "lg:grid-cols-12",
  "lg:gap-8",
]);

export const insightRevealStyles = cva([], {
  variants: {
    featured: {
      false: ["lg:col-span-5", "lg:pt-24"],
      true: ["lg:col-span-7"],
    },
  },
});

export const insightLinkStyles = cva(
  ["InsightsSection-link", "group", "block", "text-text"],
  {
    variants: {
      featured: {
        false: [],
        true: [],
      },
    },
    defaultVariants: {
      featured: false,
    },
  },
);

export const insightArticleStyles = cva(["InsightsSection-article", "block"]);

export const insightImageFrameStyles = cva(
  [
    "InsightsSection-imageFrame",
    "relative",
    "overflow-hidden",
    "bg-background",
  ],
  {
    variants: {
      featured: {
        false: ["aspect-[4/3]"],
        true: ["aspect-[16/11]"],
      },
    },
  },
);

export const insightImageStyles = cva([
  "InsightsSection-image",
  "object-cover",
  "transition-transform",
  "duration-700",
  "ease-out",
  "group-hover:scale-[1.03]",
]);

export const insightMetaStyles = cva([
  "InsightsSection-meta",
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

export const insightMetaRuleStyles = cva([
  "InsightsSection-metaRule",
  "h-[0.0625rem]",
  "w-7",
  "bg-accent",
]);

export const insightTitleStyles = cva([
  "InsightsSection-articleTitle",
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

export const insightDescriptionStyles = cva([
  "InsightsSection-description",
  "mt-4",
  "max-w-[44rem]",
  "text-sm",
  "leading-7",
  "text-text-muted",
]);

export const insightReadStyles = cva([
  "InsightsSection-read",
  "mt-6",
  "inline-flex",
  "items-center",
  "gap-3",
  "text-xs",
  "font-semibold",
  "text-primary",
]);

export const insightReadIconStyles = cva([
  "InsightsSection-readIcon",
  "size-4",
  "transition-transform",
  "duration-300",
  "group-hover:translate-x-1",
]);
