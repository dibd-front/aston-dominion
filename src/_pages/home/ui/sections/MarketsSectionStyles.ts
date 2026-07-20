import { cva } from "class-variance-authority";

export const marketsSectionStyles = cva([
  "MarketsSection-root",
  "scroll-mt-20",
  "bg-background",
  "py-20",
  "sm:py-24",
  "lg:py-28",
]);

export const marketsLayoutStyles = cva([
  "MarketsSection-layout",
  "grid",
  "items-start",
  "gap-14",
  "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]",
  "lg:gap-16",
  "xl:gap-20",
]);

export const marketsTextColumnStyles = cva([
  "MarketsSection-textColumn",
  "max-w-[48rem]",
]);

export const marketsTitleStyles = cva([
  "MarketsSection-title",
  "mt-5",
  "max-w-[22ch]",
  "font-serif",
  "text-[clamp(2.55rem,5.8vw,3.65rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
  "lg:text-[clamp(2.7rem,3.3vw,3.65rem)]",
]);

export const marketsCopyStyles = cva([
  "MarketsSection-copy",
  "mt-8",
  "grid",
  "max-w-[46rem]",
  "gap-5",
  "text-[0.8125rem]",
  "leading-[1.72]",
  "text-primary-dark/76",
  "sm:text-[0.875rem]",
]);

export const marketsMetricsGridStyles = cva([
  "MarketsSection-metricsGrid",
  'sticky top-10',
  "grid",
  "grid-cols-2",
  "gap-[0.0625rem]",
  "overflow-hidden",
  "bg-primary/14",
  "lg:grid-cols-3",
]);

export const marketMetricStyles = cva([
  "MarketsSection-metric",
  "flex",
  "min-h-[14.5rem]",
  "flex-col",
  "items-center",
  "justify-center",
  "bg-background",
  "px-4",
  "py-8",
  "text-center",
  "sm:min-h-[15.25rem]",
  "sm:px-6",
  "lg:min-h-[14.75rem]",
]);

export const marketMetricIconStyles = cva([
  "MarketsSection-metricIcon",
  "size-10",
  "shrink-0",
  "text-accent",
]);

export const marketMetricLabelStyles = cva([
  "MarketsSection-metricLabel",
  "mt-5",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.1em]",
  "text-primary-dark",
  "uppercase",
]);

export const marketMetricValueStyles = cva([
  "MarketsSection-metricValue",
  "mt-4",
  "block",
  "font-serif",
  "text-[clamp(2rem,5vw,2.85rem)]",
  "font-medium",
  "leading-none",
  "tracking-[-0.02em]",
  "text-primary-dark",
]);

export const marketMetricDescriptionStyles = cva([
  "MarketsSection-metricDescription",
  "mx-auto",
  "mt-2",
  "block",
  "max-w-[14rem]",
  "text-[0.6875rem]",
  "leading-[1.45]",
  "text-primary-dark/72",
]);
