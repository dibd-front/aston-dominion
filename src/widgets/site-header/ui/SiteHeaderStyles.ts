import { cva } from "class-variance-authority";

export const headerStyles = cva(
  [
    "SiteHeader-root",
    "fixed",
    "inset-x-0",
    "top-0",
    "z-40",
    "border-b-[0.0625rem]",
    "transition-[background-color,border-color,box-shadow]",
    "duration-500",
  ],
  {
    variants: {
      scrolled: {
        false: ["border-white/10", "bg-transparent"],
        true: [
          "border-white/12",
          "bg-[#041b31]/92",
          "shadow-[0_0.75rem_2.25rem_rgba(2,17,31,0.16)]",
          "backdrop-blur-[0.75rem]",
        ],
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  },
);

export const headerInnerStyles = cva([
  "SiteHeader-inner",
  "flex",
  "h-[4.5rem]",
  "items-center",
  "justify-between",
]);

export const headerLogoLinkStyles = cva([
  "SiteHeader-logoLink",
  "relative",
  "z-10",
  "-ml-3",
  "block",
]);

export const desktopNavStyles = cva([
  "SiteHeader-desktopNav",
  "hidden",
  "items-center",
  "gap-9",
  "lg:flex",
]);

export const navListStyles = cva([
  "SiteHeader-navList",
  "flex",
  "list-none",
  "items-center",
  "gap-8",
]);

export const navLinkStyles = cva([
  "SiteHeader-navLink",
  "relative",
  "py-2",
  "text-[0.75rem]",
  "font-medium",
  "text-white/82",
  "transition-colors",
  "duration-300",
  "after:absolute",
  "after:inset-x-0",
  "after:bottom-0",
  "after:h-[0.0625rem]",
  "after:origin-left",
  "after:scale-x-0",
  "after:bg-accent",
  "after:transition-transform",
  "after:duration-300",
  "hover:text-white",
  "hover:after:scale-x-100",
]);

export const mobileMenuButtonStyles = cva([
  "SiteHeader-mobileMenuButton",
  "inline-flex",
  "size-11",
  "items-center",
  "justify-center",
  "rounded-[0.25rem]",
  "border-[0.0625rem]",
  "border-white/25",
  "bg-transparent",
  "text-white",
  "transition-colors",
  "hover:border-accent",
  "hover:text-[#d5bd8c]",
  "lg:hidden",
]);

export const mobileMenuIconStyles = cva(["SiteHeader-mobileMenuIcon", "size-5"]);

export const mobileDialogStyles = cva([
  "SiteHeader-mobileDialog",
  "fixed",
  "inset-0",
  "m-0",
  "h-dvh",
  "max-h-none",
  "w-full",
  "max-w-none",
  "border-0",
  "bg-primary-dark",
  "p-0",
  "text-white",
  "backdrop:bg-primary-dark/60",
  "backdrop:backdrop-blur-[0.5rem]",
]);

export const mobileDialogInnerStyles = cva([
  "SiteHeader-mobileDialogInner",
  "mx-auto",
  "flex",
  "min-h-dvh",
  "w-full",
  "max-w-[82.5rem]",
  "flex-col",
  "px-5",
  "pb-10",
  "sm:px-8",
]);

export const mobileDialogTopStyles = cva([
  "SiteHeader-mobileDialogTop",
  "flex",
  "h-[4.5rem]",
  "items-center",
  "justify-between",
]);

export const mobileCloseButtonStyles = cva([
  "SiteHeader-mobileCloseButton",
  "inline-flex",
  "size-11",
  "items-center",
  "justify-center",
  "rounded-[0.25rem]",
  "border-[0.0625rem]",
  "border-white/25",
  "bg-transparent",
  "text-white",
  "hover:border-accent",
  "hover:text-[#d5bd8c]",
]);

export const mobileNavStyles = cva([
  "SiteHeader-mobileNav",
  "flex",
  "flex-1",
  "flex-col",
  "justify-center",
  "py-10",
]);

export const mobileNavListStyles = cva([
  "SiteHeader-mobileNavList",
  "grid",
  "list-none",
  "gap-1",
]);

export const mobileNavLinkStyles = cva([
  "SiteHeader-mobileNavLink",
  "block",
  "border-b-[0.0625rem]",
  "border-white/15",
  "py-4",
  "font-serif",
  "text-[clamp(2.2rem,12vw,4.2rem)]",
  "leading-none",
  "text-white",
  "transition-colors",
  "hover:text-[#d5bd8c]",
]);

export const mobileCtaStyles = cva(["SiteHeader-mobileCta", "pt-8"]);
