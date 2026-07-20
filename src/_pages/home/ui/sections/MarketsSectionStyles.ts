import { cva } from "class-variance-authority";

export const marketsSectionStyles = cva([
  "MarketsSection-root",
  "scroll-mt-20",
  "bg-background",
  "py-24",
  "sm:py-28",
  "lg:py-36",
]);

export const marketsHeaderStyles = cva([
  "MarketsSection-header",
  "max-w-[58rem]",
]);

export const marketsTitleStyles = cva([
  "MarketsSection-title",
  "mt-5",
  "max-w-[16ch]",
  "font-serif",
  "text-[clamp(2.7rem,7vw,4.7rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
]);

export const marketsIntroStyles = cva([
  "MarketsSection-intro",
  "mt-6",
  "max-w-[46rem]",
  "text-[0.9375rem]",
  "leading-7",
  "text-text-muted",
]);

export const marketsInteractiveStyles = cva([
  "MarketsSection-interactive",
  "mt-14",
  "grid",
  "gap-10",
  "lg:mt-20",
  "lg:grid-cols-12",
  "lg:gap-8",
]);

export const marketNavStyles = cva([
  "MarketsSection-nav",
  "lg:col-span-4",
  "lg:pr-8",
]);

export const marketNavListStyles = cva([
  "MarketsSection-navList",
  "grid",
  "list-none",
  "border-t",
  "border-primary/15",
]);

export const marketButtonStyles = cva(
  [
    "MarketsSection-button",
    "group",
    "grid",
    "w-full",
    "grid-cols-[2.5rem_1fr_auto]",
    "items-center",
    "gap-3",
    "border-b",
    "border-primary/15",
    "bg-transparent",
    "py-5",
    "text-left",
    "transition-colors",
    "duration-300",
    "hover:text-[#806b43]",
  ],
  {
    variants: {
      active: {
        false: ["text-text-muted"],
        true: ["text-primary-dark"],
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const marketButtonNumberStyles = cva([
  "MarketsSection-buttonNumber",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.14em]",
  "text-[#8a7349]",
]);

export const marketButtonLabelStyles = cva([
  "MarketsSection-buttonLabel",
  "font-serif",
  "text-xl",
  "font-semibold",
  "leading-tight",
]);

export const marketButtonArrowStyles = cva(
  ["MarketsSection-buttonArrow", "size-4", "transition-transform", "duration-300"],
  {
    variants: {
      active: {
        false: ["opacity-35", "group-hover:translate-x-1"],
        true: ["translate-x-1", "text-[#8a7349]"],
      },
    },
  },
);

export const marketPanelStyles = cva([
  "MarketsSection-panel",
  "relative",
  "min-h-[30rem]",
  "overflow-hidden",
  "border",
  "border-primary/15",
  "bg-surface",
  "p-7",
  "sm:p-10",
  "lg:col-span-8",
  "lg:p-12",
]);

export const marketPanelAccentStyles = cva([
  "MarketsSection-panelAccent",
  "pointer-events-none",
  "absolute",
  "-right-20",
  "-top-24",
  "size-80",
  "rounded-full",
  "border",
  "border-accent/20",
  "before:absolute",
  "before:inset-12",
  "before:rounded-full",
  "before:border",
  "before:border-accent/20",
  "after:absolute",
  "after:inset-24",
  "after:rounded-full",
  "after:border",
  "after:border-accent/25",
]);

export const marketPanelContentStyles = cva([
  "MarketsSection-panelContent",
  "relative",
  "z-10",
  "flex",
  "min-h-[24rem]",
  "flex-col",
]);

export const marketAccentLabelStyles = cva([
  "MarketsSection-accentLabel",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.16em]",
  "text-[#8a7349]",
  "uppercase",
]);

export const marketPanelTitleStyles = cva([
  "MarketsSection-panelTitle",
  "mt-4",
  "max-w-[16ch]",
  "font-serif",
  "text-[clamp(2.3rem,6vw,4rem)]",
  "font-medium",
  "leading-none",
  "text-primary-dark",
]);

export const marketSummaryStyles = cva([
  "MarketsSection-summary",
  "mt-5",
  "max-w-[42rem]",
  "text-sm",
  "leading-7",
  "text-text-muted",
]);

export const marketFactsStyles = cva([
  "MarketsSection-facts",
  "mt-auto",
  "grid",
  "gap-6",
  "pt-10",
  "sm:grid-cols-2",
]);

export const marketFactStyles = cva([
  "MarketsSection-fact",
  "border-l",
  "border-accent",
  "pl-5",
]);

export const marketFactValueStyles = cva([
  "MarketsSection-factValue",
  "font-serif",
  "text-[clamp(2.2rem,5vw,3.5rem)]",
  "font-semibold",
  "leading-none",
  "text-primary",
]);

export const marketFactLabelStyles = cva([
  "MarketsSection-factLabel",
  "mt-2",
  "max-w-[18rem]",
  "text-xs",
  "leading-5",
  "text-text-muted",
]);

export const marketLocationsStyles = cva([
  "MarketsSection-locations",
  "mt-8",
  "flex",
  "list-none",
  "flex-wrap",
  "gap-x-5",
  "gap-y-2",
  "border-t",
  "border-primary/12",
  "pt-5",
]);

export const marketLocationStyles = cva([
  "MarketsSection-location",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.1em]",
  "text-primary/72",
  "uppercase",
]);
