import { cva } from "class-variance-authority";

export const finalCtaSectionStyles = cva([
  "FinalCtaSection-root",
  "relative",
  "isolate",
  "overflow-hidden",
  "bg-primary",
  "py-28",
  "text-white",
  "sm:py-36",
  "lg:py-44",
]);

export const finalCtaOrbStyles = cva([
  "FinalCtaSection-orb",
  "pointer-events-none",
  "absolute",
  "-bottom-56",
  "-right-32",
  "-z-10",
  "size-[34rem]",
  "rounded-[9999rem]",
  "border-[0.0625rem]",
  "border-white/8",
  "before:absolute",
  "before:inset-20",
  "before:rounded-[9999rem]",
  "before:border-[0.0625rem]",
  "before:border-white/8",
  "after:absolute",
  "after:inset-40",
  "after:rounded-[9999rem]",
  "after:border-[0.0625rem]",
  "after:border-accent/20",
  "lg:size-[48rem]",
]);

export const finalCtaContentStyles = cva([
  "FinalCtaSection-content",
  "max-w-[56rem]",
]);

export const finalCtaTitleStyles = cva([
  "FinalCtaSection-title",
  "max-w-[12ch]",
  "font-serif",
  "text-[clamp(3.4rem,9vw,7rem)]",
  "font-medium",
  "leading-[0.9]",
  "tracking-[-0.035em]",
  "text-[#f8f5ef]",
]);

export const finalCtaBodyStyles = cva([
  "FinalCtaSection-body",
  "mt-7",
  "max-w-[46rem]",
  "text-[0.9375rem]",
  "leading-7",
  "text-white/66",
]);

export const finalCtaActionsStyles = cva([
  "FinalCtaSection-actions",
  "mt-9",
  "grid",
  "gap-5",
  "[&>a]:w-full",
  "sm:flex",
  "sm:items-center",
  "sm:[&>a]:w-auto",
]);
