import { cva } from "class-variance-authority";

export const visualFigureStyles = cva([
  "GrowthCorridorsVisual-root",
  "relative",
  "mx-auto",
  "aspect-[1.15/1]",
  "w-full",
  "max-w-[44rem]",
]);

export const visualGlowStyles = cva([
  "GrowthCorridorsVisual-glow",
  "absolute",
  "inset-[12%]",
  "rounded-full",
  "bg-[radial-gradient(circle,rgba(19,70,111,0.62)_0%,rgba(6,31,56,0)_72%)]",
  "blur-2xl",
]);

export const visualSvgStyles = cva([
  "GrowthCorridorsVisual-svg",
  "relative",
  "h-full",
  "w-full",
  "overflow-visible",
]);

export const visualGridLineStyles = cva([
  "GrowthCorridorsVisual-gridLine",
  "fill-none",
  "stroke-white/10",
  "[stroke-width:1]",
]);

export const visualRouteStyles = cva([
  "GrowthCorridorsVisual-route",
  "fill-none",
  "stroke-[#b59a68]/58",
  "[stroke-linecap:round]",
  "[stroke-width:1.25]",
]);

export const visualRouteMutedStyles = cva([
  "GrowthCorridorsVisual-routeMuted",
  "fill-none",
  "stroke-[#b59a68]/24",
  "[stroke-dasharray:4_7]",
  "[stroke-width:1]",
]);

export const visualNodeHaloStyles = cva([
  "GrowthCorridorsVisual-nodeHalo",
  "fill-[#d9bd81]/16",
]);

export const visualNodeStyles = cva([
  "GrowthCorridorsVisual-node",
  "fill-[#f0d59b]",
  "[filter:drop-shadow(0_0_7px_rgba(240,213,155,0.9))]",
]);

export const visualTracerStyles = cva([
  "GrowthCorridorsVisual-tracer",
  "fill-[#fff4d2]",
  "[filter:drop-shadow(0_0_6px_rgba(255,230,174,0.95))]",
]);

export const visualLabelStyles = cva([
  "GrowthCorridorsVisual-label",
  "fill-white",
  "font-sans",
  "text-[13px]",
  "font-medium",
]);

export const visualCaptionStyles = cva([
  "GrowthCorridorsVisual-caption",
  "absolute",
  "right-[4%]",
  "top-[7%]",
  "flex",
  "items-center",
  "gap-3",
  "text-[0.625rem]",
  "font-semibold",
  "tracking-[0.16em]",
  "text-[#d5bd8c]",
  "uppercase",
]);

export const visualCaptionRuleStyles = cva([
  "GrowthCorridorsVisual-captionRule",
  "h-px",
  "w-7",
  "bg-accent",
]);
