import { cva } from "class-variance-authority";

export const contactFormPanelStyles = cva([
  "ContactForm-panel",
  "relative",
  "min-h-[39rem]",
  "overflow-hidden",
  "border-[0.0625rem]",
  "border-white/14",
  "bg-white/[0.045]",
  "shadow-[0_2.5rem_7.5rem_rgba(0,0,0,0.22)]",
  "backdrop-blur-[1rem]",
  "lg:col-span-7",
]);

export const contactFormAccentStyles = cva([
  "ContactForm-accent",
  "pointer-events-none",
  "absolute",
  "inset-x-0",
  "top-0",
  "h-[0.0625rem]",
  "bg-[linear-gradient(90deg,transparent,#b59a68_35%,rgba(181,154,104,0.2)_72%,transparent)]",
]);

export const contactFormStyles = cva([
  "ContactForm-form",
  "grid",
  "min-h-[39rem]",
  "content-center",
  "gap-6",
  "p-6",
  "sm:p-9",
  "lg:p-10",
  "xl:p-12",
]);

export const contactFormIntroStyles = cva([
  "ContactForm-intro",
  "mb-2",
  "flex",
  "items-end",
  "justify-between",
  "gap-6",
  "border-b-[0.0625rem]",
  "border-white/10",
  "pb-5",
]);

export const contactFormHeadingStyles = cva([
  "ContactForm-heading",
  "font-serif",
  "text-[clamp(2rem,4vw,3.1rem)]",
  "font-semibold",
  "leading-none",
  "text-[#f8f5ef]",
]);

export const contactFormStepStyles = cva([
  "ContactForm-step",
  "shrink-0",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.16em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const contactFormRowStyles = cva([
  "ContactForm-row",
  "grid",
  "gap-6",
  "sm:grid-cols-2",
]);

export const contactFieldStyles = cva(["ContactForm-field", "grid", "gap-2"]);

export const contactLabelStyles = cva([
  "ContactForm-label",
  "flex",
  "items-center",
  "justify-between",
  "gap-4",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.1em]",
  "text-white/72",
  "uppercase",
]);

export const contactRequiredStyles = cva([
  "ContactForm-required",
  "text-[0.5625rem]",
  "font-medium",
  "tracking-[0.08em]",
  "text-white/32",
]);

export const contactControlStyles = cva(
  [
    "ContactForm-control",
    "w-full",
    "rounded-none",
    "border-0",
    "border-b-[0.0625rem]",
    "bg-transparent",
    "px-0",
    "text-sm",
    "text-white",
    "outline-none",
    "transition-[border-color,background-color]",
    "duration-300",
    "placeholder:text-white/27",
    "hover:border-white/45",
    "focus:border-accent",
    "focus:bg-white/[0.025]",
  ],
  {
    variants: {
      invalid: {
        false: ["border-white/24"],
        true: ["border-[#e6a79f]"],
      },
      kind: {
        input: ["h-11"],
        select: ["h-11", "cursor-pointer", "appearance-none", "[color-scheme:dark]"],
        textarea: ["min-h-[6.5rem]", "resize-y", "py-3", "leading-6"],
      },
    },
    defaultVariants: {
      invalid: false,
      kind: "input",
    },
  },
);

export const contactSelectWrapStyles = cva([
  "ContactForm-selectWrap",
  "relative",
  "after:pointer-events-none",
  "after:absolute",
  "after:right-0",
  "after:top-1/2",
  "after:size-1.5",
  "after:-translate-y-1/2",
  "after:rotate-45",
  "after:border-b-[0.0625rem]",
  "after:border-r-[0.0625rem]",
  "after:border-accent",
]);

export const contactErrorStyles = cva([
  "ContactForm-error",
  "min-h-4",
  "text-[0.625rem]",
  "leading-4",
  "text-[#efb4ab]",
]);

export const contactFormFooterStyles = cva([
  "ContactForm-footer",
  "mt-1",
  "flex",
  "flex-col",
  "gap-4",
  "sm:flex-row",
  "sm:items-center",
  "sm:justify-between",
]);

export const contactPrivacyStyles = cva([
  "ContactForm-privacy",
  "max-w-[26rem]",
  "text-[0.625rem]",
  "leading-5",
  "text-white/38",
]);

export const contactSubmitStyles = cva([
  "ContactForm-submit",
  "group",
  "inline-flex",
  "min-h-12",
  "shrink-0",
  "items-center",
  "justify-center",
  "gap-3",
  "border-[0.0625rem]",
  "border-accent",
  "bg-accent",
  "px-6",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.04em]",
  "text-primary-dark",
  "uppercase",
  "transition-[background-color,border-color,color,transform,opacity]",
  "duration-300",
  "hover:border-[#d2b77e]",
  "hover:bg-[#d2b77e]",
  "active:translate-y-[0.0625rem]",
  "disabled:cursor-not-allowed",
  "disabled:opacity-45",
]);

export const contactSubmitIconStyles = cva([
  "ContactForm-submitIcon",
  "size-4",
  "transition-transform",
  "duration-300",
  "group-hover:translate-x-1",
  "group-hover:-translate-y-0.5",
]);

export const transmissionStageStyles = cva([
  "ContactForm-stage",
  "relative",
  "grid",
  "min-h-[39rem]",
  "place-items-center",
  "overflow-hidden",
  "p-8",
  "text-center",
]);

export const transmissionCopyStyles = cva([
  "ContactForm-stageCopy",
  "relative",
  "z-20",
  "mt-[17rem]",
]);

export const transmissionEyebrowStyles = cva([
  "ContactForm-stageEyebrow",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.18em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const transmissionTitleStyles = cva([
  "ContactForm-stageTitle",
  "mt-3",
  "font-serif",
  "text-[clamp(2.1rem,5vw,3.5rem)]",
  "font-semibold",
  "leading-none",
  "text-[#f8f5ef]",
]);

export const transmissionOrbitStyles = cva(
  [
    "ContactForm-transmissionOrbit",
    "pointer-events-none",
    "absolute",
    "left-1/2",
    "top-[42%]",
    "rounded-full",
    "border-[0.0625rem]",
  ],
  {
    variants: {
      size: {
        inner: ["size-28", "-translate-x-1/2", "-translate-y-1/2", "border-accent/40"],
        middle: ["size-52", "-translate-x-1/2", "-translate-y-1/2", "border-white/14"],
        outer: ["size-80", "-translate-x-1/2", "-translate-y-1/2", "border-accent/14"],
      },
    },
  },
);

export const transmissionStarStyles = cva([
  "ContactForm-transmissionStar",
  "absolute",
  "left-1/2",
  "top-[42%]",
  "z-10",
  "grid",
  "size-10",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "place-items-center",
  "rounded-full",
  "bg-accent",
  "text-primary-dark",
  "shadow-[0_0_1.5rem_rgba(181,154,104,0.72),0_0_5rem_rgba(181,154,104,0.28)]",
]);

export const transmissionStarIconStyles = cva([
  "ContactForm-transmissionStarIcon",
  "size-4",
]);

export const transmissionCapsuleStyles = cva([
  "ContactForm-capsule",
  "absolute",
  "left-1/2",
  "top-[42%]",
  "z-20",
  "w-40",
  "-translate-x-1/2",
  "border-[0.0625rem]",
  "border-accent/45",
  "bg-[#0d3557]/90",
  "p-4",
  "shadow-[0_1.5rem_4rem_rgba(0,0,0,0.38)]",
  "backdrop-blur-md",
]);

export const transmissionCapsuleTopStyles = cva([
  "ContactForm-capsuleTop",
  "flex",
  "items-center",
  "justify-between",
  "text-[0.5rem]",
  "font-semibold",
  "tracking-[0.14em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const transmissionCapsuleLineStyles = cva([
  "ContactForm-capsuleLine",
  "mt-3",
  "h-[0.0625rem]",
  "w-full",
  "bg-white/16",
  "after:block",
  "after:h-[0.0625rem]",
  "after:w-2/3",
  "after:translate-y-2",
  "after:bg-white/10",
]);

export const launchParticleStyles = cva(
  [
    "ContactForm-particle",
    "absolute",
    "size-1",
    "rounded-full",
    "bg-[#d2b77e]",
    "shadow-[0_0_0.75rem_rgba(210,183,126,0.85)]",
  ],
  {
    variants: {
      position: {
        a: ["left-[17%]", "top-[22%]"],
        b: ["right-[15%]", "top-[29%]"],
        c: ["left-[24%]", "top-[54%]"],
        d: ["right-[22%]", "top-[58%]"],
        e: ["left-[41%]", "top-[16%]"],
        f: ["right-[38%]", "top-[68%]"],
      },
    },
  },
);

export const successStageStyles = cva([
  "ContactForm-success",
  "grid",
  "min-h-[39rem]",
  "place-items-center",
  "p-8",
  "text-center",
]);

export const successInnerStyles = cva([
  "ContactForm-successInner",
  "mx-auto",
  "max-w-[31rem]",
]);

export const successIconWrapStyles = cva([
  "ContactForm-successIconWrap",
  "mx-auto",
  "grid",
  "size-16",
  "place-items-center",
  "rounded-full",
  "border-[0.0625rem]",
  "border-accent/50",
  "bg-accent/10",
  "text-[#d2b77e]",
  "shadow-[0_0_3rem_rgba(181,154,104,0.16)]",
]);

export const successIconStyles = cva(["ContactForm-successIcon", "size-6"]);

export const successTitleStyles = cva([
  "ContactForm-successTitle",
  "mt-7",
  "font-serif",
  "text-[clamp(2.8rem,6vw,4.5rem)]",
  "font-semibold",
  "leading-[0.92]",
  "text-[#f8f5ef]",
  "outline-none",
]);

export const successMessageStyles = cva([
  "ContactForm-successMessage",
  "mx-auto",
  "mt-5",
  "max-w-[27rem]",
  "text-sm",
  "leading-7",
  "text-white/58",
]);

export const successDemoNoteStyles = cva([
  "ContactForm-successDemoNote",
  "mx-auto",
  "mt-5",
  "max-w-[25rem]",
  "border-t-[0.0625rem]",
  "border-white/10",
  "pt-4",
  "text-[0.625rem]",
  "leading-5",
  "text-white/35",
]);

export const successResetStyles = cva([
  "ContactForm-successReset",
  "group",
  "mt-8",
  "inline-flex",
  "min-h-11",
  "items-center",
  "justify-center",
  "gap-3",
  "border-b-[0.0625rem]",
  "border-accent/55",
  "bg-transparent",
  "px-1",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.08em]",
  "text-[#d2b77e]",
  "uppercase",
  "transition-colors",
  "hover:text-white",
]);

export const successResetIconStyles = cva([
  "ContactForm-successResetIcon",
  "size-4",
  "transition-transform",
  "duration-500",
  "group-hover:-rotate-180",
]);
