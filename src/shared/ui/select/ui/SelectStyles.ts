import { cva } from "class-variance-authority";

export const selectTriggerStyles = cva([
  "Select-trigger",
  "group",
  "flex",
  "h-11",
  "w-full",
  "cursor-pointer",
  "items-center",
  "justify-between",
  "gap-2",
  "border-0",
  "border-b-[0.0625rem]",
  "border-white/24",
  "bg-transparent",
  "px-0",
  "text-sm",
  "text-white",
  "outline-none",
  "transition-colors",
  "duration-300",
  "data-[placeholder]:text-white/27",
  "hover:border-white/45",
  "focus:border-accent",
  "focus-visible:border-accent",
  "aria-invalid:border-[#e6a79f]",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "[&>span]:truncate",
]);

export const selectTriggerIconStyles = cva([
  "Select-triggerIcon",
  "size-4",
  "shrink-0",
  "text-accent",
  "transition-transform",
  "duration-200",
  "group-data-[state=open]:rotate-180",
]);

export const selectContentStyles = cva([
  "Select-content",
  "relative",
  "z-50",
  "max-h-[var(--radix-select-content-available-height)]",
  "min-w-[8rem]",
  "overflow-x-hidden",
  "overflow-y-auto",
  "border-[0.0625rem]",
  "border-white/14",
  "bg-[#0d3557]",
  "text-white",
  "shadow-[0_1.25rem_3.5rem_rgba(0,0,0,0.38)]",
]);

export const selectPopperContentStyles = cva([
  "Select-popperContent",
  "w-[var(--radix-select-trigger-width)]",
]);

export const selectViewportStyles = cva(["Select-viewport", "p-1"]);

export const selectPopperViewportStyles = cva([
  "Select-popperViewport",
  "w-full",
  "min-w-[var(--radix-select-trigger-width)]",
]);

export const selectItemStyles = cva([
  "Select-item",
  "relative",
  "flex",
  "w-full",
  "cursor-default",
  "select-none",
  "items-center",
  "py-2.5",
  "pl-3",
  "pr-9",
  "text-sm",
  "outline-none",
  "transition-colors",
  "focus:bg-white/10",
  "focus:text-white",
  "data-[state=checked]:bg-accent/12",
  "data-[state=checked]:text-[#f8f5ef]",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-45",
]);

export const selectItemIndicatorStyles = cva([
  "Select-itemIndicator",
  "absolute",
  "right-3",
  "flex",
  "size-4",
  "items-center",
  "justify-center",
  "text-accent",
]);

export const selectItemIconStyles = cva(["Select-itemIcon", "size-3.5"]);

export const selectLabelStyles = cva([
  "Select-label",
  "px-3",
  "py-2",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.12em]",
  "text-white/42",
  "uppercase",
]);

export const selectSeparatorStyles = cva([
  "Select-separator",
  "pointer-events-none",
  "mx-1",
  "my-1",
  "h-px",
  "bg-white/10",
]);

export const selectScrollButtonStyles = cva([
  "Select-scrollButton",
  "flex",
  "h-7",
  "cursor-default",
  "items-center",
  "justify-center",
  "bg-[#0d3557]",
  "text-accent",
]);

export const selectScrollIconStyles = cva(["Select-scrollIcon", "size-4"]);
