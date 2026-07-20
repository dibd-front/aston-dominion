import { cva } from "class-variance-authority";

export const heroSectionStyles = cva([
  "HeroSection-root",
  "relative",
  "isolate",
  "overflow-hidden",
  "bg-primary-dark",
  "text-white",
]);

export const heroAtmosphereStyles = cva([
  "HeroSection-atmosphere",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "-z-10",
  "bg-[radial-gradient(circle_at_73%_35%,rgba(19,63,102,0.68),transparent_38%),linear-gradient(115deg,#041b31_0%,#061f38_58%,#082847_100%)]",
]);

export const heroGridTextureStyles = cva([
  "HeroSection-gridTexture",
  "pointer-events-none",
  "absolute",
  "inset-0",
  "-z-10",
  "opacity-[0.07]",
  "[background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)]",
  "[background-size:80px_80px]",
  "[mask-image:linear-gradient(to_left,black,transparent_72%)]",
]);

export const heroInnerStyles = cva([
  "HeroSection-inner",
  "grid",
  "min-h-[100dvh]",
  "grid-cols-1",
  "items-center",
  "gap-8",
  "pb-12",
  "pt-28",
  "lg:min-h-[92dvh]",
  "lg:grid-cols-12",
  "lg:gap-6",
  "lg:pb-16",
  "lg:pt-24",
]);

export const heroContentStyles = cva([
  "HeroSection-content",
  "relative",
  "z-10",
  "lg:col-span-6",
  "xl:col-span-6",
]);

export const heroEyebrowStyles = cva([
  "HeroSection-eyebrow",
  "mb-5",
  "text-[0.6875rem]",
  "font-semibold",
  "tracking-[0.17em]",
  "text-[#d2b77e]",
  "uppercase",
]);

export const heroTitleStyles = cva([
  "HeroSection-title",
  "max-w-[11ch]",
  "font-serif",
  "text-[clamp(3.25rem,10.5vw,5.4rem)]",
  "font-medium",
  "leading-[0.93]",
  "tracking-[-0.035em]",
  "text-[#f8f5ef]",
  "sm:text-[clamp(4.2rem,8vw,5.8rem)]",
  "lg:text-[clamp(4.5rem,5.8vw,6.2rem)]",
]);

export const heroBodyStyles = cva([
  "HeroSection-body",
  "mt-6",
  "max-w-[42rem]",
  "text-[0.9375rem]",
  "leading-7",
  "text-white/68",
  "lg:max-w-[39rem]",
]);

export const heroActionsStyles = cva([
  "HeroSection-actions",
  "mt-8",
  "grid",
  "gap-3",
  "[&>a]:w-full",
  "sm:flex",
  "sm:flex-wrap",
  "sm:[&>a]:w-auto",
]);

export const heroVisualStyles = cva([
  "HeroSection-visual",
  "relative",
  "-mx-5",
  "mt-2",
  "min-w-0",
  "sm:mx-0",
  "lg:col-span-6",
  "lg:mt-8",
  "xl:col-span-6",
]);

export const heroScrollLinkStyles = cva([
  "HeroSection-scrollLink",
  "absolute",
  "bottom-6",
  "left-1/2",
  "hidden",
  "size-9",
  "-translate-x-1/2",
  "items-center",
  "justify-center",
  "rounded-full",
  "border",
  "border-[#b59a68]/60",
  "text-[#d5bd8c]",
  "transition-colors",
  "hover:border-[#d5bd8c]",
  "hover:text-white",
  "lg:flex",
]);

export const heroScrollIconStyles = cva(["HeroSection-scrollIcon", "size-4"]);
