import { cva } from "class-variance-authority";

export const impactSectionStyles = cva([
  "ImpactSection-root",
  "scroll-mt-20",
  "relative",
  "overflow-hidden",
  "bg-dark-surface",
  "py-24",
  "text-white",
  "sm:py-28",
  "lg:py-32",
]);

export const impactTextureStyles = cva([
  "ImpactSection-texture",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "opacity-30",
  "bg-[radial-gradient(circle_at_12%_100%,rgba(181,154,104,0.13),transparent_28%),radial-gradient(circle_at_86%_0%,rgba(24,75,116,0.8),transparent_35%)]",
]);

export const impactHeaderStyles = cva([
  "ImpactSection-header",
  "relative",
  "max-w-[50rem]",
]);

export const impactTitleStyles = cva([
  "ImpactSection-title",
  "mt-5",
  "font-serif",
  "text-[clamp(2.8rem,7vw,5rem)]",
  "font-medium",
  "leading-none",
  "tracking-[-0.025em]",
  "text-[#f8f5ef]",
]);

export const impactGridStyles = cva([
  "ImpactSection-grid",
  "relative",
  "mt-14",
  "grid",
  "grid-cols-2",
  "border-y-[0.0625rem]",
  "border-white/14",
  "lg:mt-18",
  "lg:grid-cols-4",
]);

export const impactMetricStyles = cva([
  "ImpactSection-metric",
  "min-h-52",
  "border-white/14",
  "px-4",
  "py-8",
  "odd:border-r-[0.0625rem]",
  "[&:nth-child(-n+2)]:border-b-[0.0625rem]",
  "sm:px-7",
  "lg:min-h-64",
  "lg:border-r-[0.0625rem]",
  "lg:[&:nth-child(-n+2)]:border-b-0",
  "lg:px-8",
  "lg:py-10",
  "lg:last:border-r-0",
]);

export const impactMetricRevealStyles = cva([
  "ImpactSection-metricReveal",
  "flex",
  "flex-col",
]);

export const impactValueStyles = cva([
  "ImpactSection-value",
  "order-1",
  "font-serif",
  "text-[clamp(3rem,8vw,5.5rem)]",
  "font-semibold",
  "leading-none",
  "text-[#d2b77e]",
]);

export const impactLabelStyles = cva([
  "ImpactSection-label",
  "order-2",
  "mt-5",
  "max-w-[15rem]",
  "text-xs",
  "leading-5",
  "text-white/68",
  "sm:text-sm",
  "sm:leading-6",
]);

export const impactFootnoteStyles = cva([
  "ImpactSection-footnote",
  "relative",
  "mt-7",
  "max-w-[52rem]",
  "text-xs",
  "leading-5",
  "text-white/48",
]);
