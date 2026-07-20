import { cva } from "class-variance-authority";

export const servicesSectionStyles = cva([
  "ServicesSection-root",
  "scroll-mt-20",
  "bg-surface",
  "py-24",
  "sm:py-28",
  "lg:py-36",
]);

export const servicesHeaderStyles = cva([
  "ServicesSection-header",
  "max-w-[56rem]",
]);

export const servicesTitleStyles = cva([
  "ServicesSection-title",
  "mt-5",
  "max-w-[17ch]",
  "font-serif",
  "text-[clamp(2.7rem,7vw,4.8rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
]);

export const servicesListStyles = cva([
  "ServicesSection-list",
  "mt-16",
  "list-none",
  "border-t-[0.0625rem]",
  "border-primary/15",
  "lg:mt-20",
]);

export const serviceRowStyles = cva([
  "ServicesSection-row",
  "group",
  "relative",
  "grid",
  "gap-6",
  "border-b-[0.0625rem]",
  "border-primary/15",
  "py-9",
  "transition-colors",
  "duration-500",
  "hover:bg-[#f5f3ee]/70",
  "sm:py-11",
  "lg:grid-cols-12",
  "lg:gap-8",
  "lg:px-6",
]);

export const serviceIndexStyles = cva([
  "ServicesSection-index",
  "font-serif",
  "text-4xl",
  "font-medium",
  "leading-none",
  "text-accent",
  "lg:col-span-1",
]);

export const serviceHeadingGroupStyles = cva([
  "ServicesSection-headingGroup",
  "grid",
  "grid-cols-[3.5rem_1fr]",
  "items-start",
  "gap-4",
  "lg:col-span-4",
]);

export const serviceIconWrapStyles = cva([
  "ServicesSection-iconWrap",
  "flex",
  "size-12",
  "items-center",
  "justify-center",
  "rounded-[9999rem]",
  "border-[0.0625rem]",
  "border-primary/20",
  "text-[#8a7349]",
  "transition-[background-color,color,border-color]",
  "duration-500",
  "group-hover:border-primary",
  "group-hover:bg-primary",
  "group-hover:text-[#d5bd8c]",
]);

export const serviceIconStyles = cva(["ServicesSection-icon", "size-5"]);

export const serviceTitleStyles = cva([
  "ServicesSection-serviceTitle",
  "font-serif",
  "text-2xl",
  "font-semibold",
  "leading-[1.08]",
  "text-primary-dark",
  "sm:text-3xl",
]);

export const serviceDescriptionStyles = cva([
  "ServicesSection-description",
  "text-sm",
  "leading-7",
  "text-text-muted",
  "lg:col-span-4",
]);

export const serviceAreasStyles = cva([
  "ServicesSection-areas",
  "grid",
  "list-none",
  "grid-cols-2",
  "gap-x-4",
  "gap-y-3",
  "lg:col-span-3",
]);

export const serviceAreaStyles = cva([
  "ServicesSection-area",
  "relative",
  "pl-4",
  "text-xs",
  "leading-5",
  "text-primary/75",
  "before:absolute",
  "before:left-0",
  "before:top-[0.55rem]",
  "before:h-[0.0625rem]",
  "before:w-2",
  "before:bg-accent",
]);
