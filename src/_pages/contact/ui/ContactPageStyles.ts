import { cva } from "class-variance-authority";

export const contactPageStyles = cva([
  "ContactPage-root",
  "min-h-dvh",
  "bg-primary-dark",
  "text-white",
]);

export const contactSkipLinkStyles = cva([
  "ContactPage-skipLink",
  "fixed",
  "left-4",
  "top-4",
  "z-[60]",
  "-translate-y-24",
  "rounded-[0.25rem]",
  "bg-surface",
  "px-4",
  "py-3",
  "font-semibold",
  "text-primary-dark",
  "transition-transform",
  "focus:translate-y-0",
]);

export const contactMainStyles = cva(["ContactPage-main", "min-h-dvh"]);

export const contactSectionStyles = cva([
  "ContactPage-section",
  "relative",
  "isolate",
  "flex",
  "min-h-dvh",
  "items-center",
  "overflow-hidden",
  "bg-primary-dark",
  "pb-12",
  "pt-28",
  "text-white",
  "sm:pb-16",
  "sm:pt-32",
  "lg:pb-12",
  "lg:pt-28",
]);

export const contactAtmosphereStyles = cva([
  "ContactPage-atmosphere",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "-z-20",
  "bg-[radial-gradient(circle_at_78%_16%,rgba(38,91,132,0.58),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(181,154,104,0.13),transparent_27%),linear-gradient(135deg,#041b31_0%,#082847_58%,#041b31_100%)]",
]);

export const contactGridStyles = cva([
  "ContactPage-grid",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "-z-10",
  "opacity-35",
  "[background-image:linear-gradient(rgba(255,255,255,0.045)_0.0625rem,transparent_0.0625rem),linear-gradient(90deg,rgba(255,255,255,0.045)_0.0625rem,transparent_0.0625rem)]",
  "[background-size:6rem_6rem]",
  "[mask-image:linear-gradient(to_bottom,transparent,black_18%,black_76%,transparent)]",
]);

export const contactOrbitStyles = cva([
  "ContactPage-orbit",
  "pointer-events-none",
  "absolute",
  "-right-[21rem]",
  "-top-[18rem]",
  "-z-10",
  "size-[47rem]",
  "rounded-full",
  "border-[0.0625rem]",
  "border-accent/16",
  "after:absolute",
  "after:inset-[7rem]",
  "after:rounded-full",
  "after:border-[0.0625rem]",
  "after:border-white/8",
  "lg:-right-[12rem]",
  "lg:-top-[14rem]",
]);

export const contactOrbitInnerStyles = cva([
  "ContactPage-orbitInner",
  "absolute",
  "inset-[13rem]",
  "rounded-full",
  "border-[0.0625rem]",
  "border-accent/20",
]);

export const contactInnerStyles = cva([
  "ContactPage-inner",
  "relative",
  "z-10",
  "grid",
  "w-full",
  "gap-14",
  "lg:grid-cols-12",
  "lg:items-center",
  "lg:gap-12",
]);

export const contactCopyStyles = cva([
  "ContactPage-copy",
  "max-w-[47rem]",
  "lg:col-span-5",
  "lg:pb-8",
]);

export const contactEyebrowStyles = cva([
  "ContactPage-eyebrow",
  "flex",
  "items-center",
  "gap-4",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.18em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const contactEyebrowRuleStyles = cva([
  "ContactPage-eyebrowRule",
  "h-[0.0625rem]",
  "w-8",
  "bg-accent",
]);

export const contactTitleStyles = cva([
  "ContactPage-title",
  "mt-7",
  "max-w-[9ch]",
  "font-serif",
  "text-[clamp(4rem,8vw,7.6rem)]",
  "font-medium",
  "leading-[0.86]",
  "tracking-[-0.04em]",
  "text-[#f8f5ef]",
  "text-balance",
]);

export const contactIntroStyles = cva([
  "ContactPage-intro",
  "mt-8",
  "max-w-[38rem]",
  "text-sm",
  "leading-7",
  "text-white/62",
  "[text-wrap:pretty]",
  "sm:text-base",
  "sm:leading-8",
]);

export const contactSignalListStyles = cva([
  "ContactPage-signalList",
  "mt-9",
  "flex",
  "list-none",
  "flex-wrap",
  "gap-x-6",
  "gap-y-3",
]);

export const contactSignalItemStyles = cva([
  "ContactPage-signalItem",
  "relative",
  "pl-4",
  "text-[0.6875rem]",
  "font-medium",
  "tracking-[0.08em]",
  "text-white/55",
  "uppercase",
  "before:absolute",
  "before:left-0",
  "before:top-1/2",
  "before:size-1",
  "before:-translate-y-1/2",
  "before:rounded-full",
  "before:bg-accent",
]);
