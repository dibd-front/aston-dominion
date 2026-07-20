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
  "gap-[0.0625rem]",
  "border-y-[0.0625rem]",
  "border-white/14",
  "bg-white/14",
  "lg:mt-18",
  "lg:grid-cols-3",
  "xl:grid-cols-6",
]);

export const impactMetricStyles = cva([
  "ImpactSection-metric",
  "min-h-[15rem]",
  "bg-dark-surface",
  "px-4",
  "py-8",
  "sm:px-7",
  "lg:min-h-[16.5rem]",
  "lg:px-8",
  "lg:py-10",
  "xl:px-5",
]);

export const impactMetricRevealStyles = cva([
  "ImpactSection-metricReveal",
  "flex",
  "h-full",
  "flex-col",
  "items-center",
  "justify-center",
  "text-center",
]);

export const impactIconStyles = cva([
  "ImpactSection-icon",
  "order-1",
  "mb-5",
  "size-9",
  "shrink-0",
  "text-[#d2b77e]",
]);

export const impactValueStyles = cva([
  "ImpactSection-value",
  "order-2",
  "font-serif",
  "text-[clamp(2.55rem,7vw,3.65rem)]",
  "font-semibold",
  "leading-none",
  "text-[#d2b77e]",
]);

export const impactLabelStyles = cva([
  "ImpactSection-label",
  "order-3",
  "mt-4",
  "max-w-[14rem]",
  "text-xs",
  "leading-[1.55]",
  "text-white/68",
  "sm:text-[0.8125rem]",
]);
