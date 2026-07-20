import { cva } from "class-variance-authority";

export const approachSectionStyles = cva([
  "ApproachSection-root",
  "bg-background",
  "py-24",
  "sm:py-28",
  "lg:py-36",
]);

export const approachGridStyles = cva([
  "ApproachSection-grid",
  "grid",
  "gap-14",
  "lg:grid-cols-12",
  "lg:gap-10",
]);

export const approachIntroStyles = cva([
  "ApproachSection-intro",
  "lg:pr-10",
]);

export const approachIntroRevealStyles = cva([
  "ApproachSection-introReveal",
  "lg:col-span-5",
]);

export const approachTitleStyles = cva([
  "ApproachSection-title",
  "mt-5",
  "max-w-[13ch]",
  "font-serif",
  "text-[clamp(2.7rem,7vw,4.8rem)]",
  "font-medium",
  "leading-[0.98]",
  "tracking-[-0.025em]",
  "text-primary-dark",
]);

export const approachBodyStyles = cva([
  "ApproachSection-body",
  "mt-7",
  "max-w-[39rem]",
  "text-[0.9375rem]",
  "leading-7",
  "text-text-muted",
]);

export const processStyles = cva([
  "ApproachSection-process",
  "relative",
  "grid",
  "gap-0",
  "pl-8",
  "before:absolute",
  "before:bottom-6",
  "before:left-[0.35rem]",
  "before:top-6",
  "before:w-px",
  "before:bg-primary/18",
  "lg:col-span-7",
  "lg:grid-cols-4",
  "lg:gap-x-6",
  "lg:pl-0",
  "lg:before:left-0",
  "lg:before:right-0",
  "lg:before:top-[1.45rem]",
  "lg:before:h-px",
  "lg:before:w-auto",
]);

export const processStepStyles = cva([
  "ApproachSection-step",
  "group",
  "relative",
  "pb-10",
  "last:pb-0",
  "lg:pb-0",
]);

export const processMarkerStyles = cva([
  "ApproachSection-marker",
  "absolute",
  "-left-[2rem]",
  "top-4",
  "size-3",
  "rounded-full",
  "border-2",
  "border-background",
  "bg-accent",
  "ring-1",
  "ring-primary/20",
  "transition-transform",
  "duration-300",
  "group-hover:scale-125",
  "lg:static",
  "lg:mb-7",
  "lg:block",
  "lg:size-4",
]);

export const processNumberStyles = cva([
  "ApproachSection-number",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.14em]",
  "text-[#8a7349]",
]);

export const processTitleStyles = cva([
  "ApproachSection-stepTitle",
  "mt-2",
  "font-serif",
  "text-3xl",
  "font-semibold",
  "leading-none",
  "text-primary-dark",
]);

export const processDescriptionStyles = cva([
  "ApproachSection-description",
  "mt-3",
  "max-w-[19rem]",
  "text-xs",
  "leading-6",
  "text-text-muted",
]);
