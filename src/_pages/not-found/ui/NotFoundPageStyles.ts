import { cva } from "class-variance-authority";

export const pageStyles = cva([
  "NotFoundPage-root",
  "relative",
  "isolate",
  "min-h-dvh",
  "overflow-hidden",
  "bg-primary-dark",
  "text-white",
]);

export const skipLinkStyles = cva([
  "NotFoundPage-skipLink",
  "fixed",
  "left-4",
  "top-4",
  "z-[60]",
  "-translate-y-24",
  "rounded-[0.25rem]",
  "bg-accent",
  "px-4",
  "py-3",
  "text-xs",
  "font-semibold",
  "text-primary-dark",
  "transition-transform",
  "focus:translate-y-0",
]);

export const backdropStyles = cva([
  "NotFoundPage-backdrop",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "-z-10",
  "bg-[radial-gradient(circle_at_78%_52%,rgba(181,154,104,0.11),transparent_27%),linear-gradient(118deg,rgba(255,255,255,0.025),transparent_36%)]",
  "after:absolute",
  "after:inset-x-0",
  "after:bottom-0",
  "after:h-[34%]",
  "after:bg-[linear-gradient(to_top,rgba(2,17,31,0.34),transparent)]",
]);

export const mainStyles = cva([
  "NotFoundPage-main",
  "relative",
  "z-0",
  "flex",
  "min-h-dvh",
  "items-center",
  "pt-[4.5rem]",
]);

export const layoutStyles = cva([
  "NotFoundPage-layout",
  "grid",
  "min-h-[calc(100dvh-4.5rem)]",
  "items-center",
  "gap-10",
  "py-10",
  "md:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1.18fr)]",
  "md:gap-12",
  "lg:gap-20",
  "xl:grid-cols-[minmax(24rem,0.72fr)_minmax(32rem,1.28fr)]",
]);

export const contentStyles = cva([
  "NotFoundPage-content",
  "relative",
  "z-10",
  "max-w-[35rem]",
  "py-4",
  "md:py-10",
]);

export const eyebrowStyles = cva([
  "NotFoundPage-eyebrow",
  "mb-6",
  "flex",
  "items-center",
  "gap-3",
  "text-[0.6875rem]",
  "font-semibold",
  "uppercase",
  "tracking-[0.2em]",
  "text-[#d5bd8c]",
]);

export const eyebrowLineStyles = cva([
  "NotFoundPage-eyebrowLine",
  "h-px",
  "w-10",
  "bg-accent",
]);

export const titleStyles = cva([
  "NotFoundPage-title",
  "max-w-[11ch]",
  "font-serif",
  "text-[clamp(3rem,6vw,6.4rem)]",
  "font-medium",
  "leading-[0.95]",
  "tracking-[-0.04em]",
  "text-white",
  "text-balance",
]);

export const descriptionStyles = cva([
  "NotFoundPage-description",
  "mt-7",
  "max-w-[30rem]",
  "text-[0.9375rem]",
  "leading-7",
  "text-white/62",
  "text-pretty",
  "sm:text-base",
]);

export const actionsStyles = cva([
  "NotFoundPage-actions",
  "mt-9",
  "flex",
  "flex-col",
  "items-stretch",
  "gap-3",
  "sm:flex-row",
  "sm:items-center",
]);

export const visualStyles = cva([
  "NotFoundPage-visual",
  "relative",
  "flex",
  "min-h-[16rem]",
  "items-center",
  "justify-center",
  "md:min-h-[31rem]",
]);

export const visualFrameStyles = cva([
  "NotFoundPage-visualFrame",
  "relative",
  "flex",
  "aspect-[1.18/1]",
  "w-full",
  "max-w-[52rem]",
  "items-center",
  "justify-center",
  "overflow-hidden",
  "border-[0.0625rem]",
  "border-white/10",
  "bg-[linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.008))]",
  "shadow-[inset_0_0_0_0.0625rem_rgba(181,154,104,0.035)]",
  "after:absolute",
  "after:inset-[7%]",
  "after:border-[0.0625rem]",
  "after:border-white/[0.055]",
]);

const arcBaseStyles = [
  "absolute",
  "rounded-full",
  "border-[0.0625rem]",
  "border-accent/35",
] as const;

export const arcNorthStyles = cva([
  "NotFoundPage-arcNorth",
  ...arcBaseStyles,
  "-right-[9%]",
  "-top-[46%]",
  "aspect-square",
  "w-[69%]",
]);

export const arcEastStyles = cva([
  "NotFoundPage-arcEast",
  ...arcBaseStyles,
  "-right-[30%]",
  "top-[8%]",
  "aspect-square",
  "w-[72%]",
  "border-white/12",
]);

export const arcSouthStyles = cva([
  "NotFoundPage-arcSouth",
  ...arcBaseStyles,
  "-bottom-[53%]",
  "-left-[7%]",
  "aspect-square",
  "w-[76%]",
  "border-white/10",
]);

export const numberStyles = cva([
  "NotFoundPage-number",
  "relative",
  "z-10",
  "grid",
  "grid-cols-3",
  "items-center",
  "font-serif",
  "text-[clamp(5rem,15vw,16rem)]",
  "font-medium",
  "leading-none",
  "tracking-[-0.1em]",
  "text-white",
  "[text-shadow:0_1.5rem_5rem_rgba(2,17,31,0.42)]",
]);

export const digitStyles = cva([
  "NotFoundPage-digit",
  "block",
  "first:-translate-y-[0.055em]",
  "last:translate-y-[0.055em]",
  "nth-[2]:text-[#d5bd8c]",
  "nth-[2]:[text-shadow:none]",
]);
