import type { MouseEventHandler, ReactNode } from "react";

export interface ButtonLinkProps {
  readonly children: ReactNode;
  readonly href: string;
  readonly onClick?: MouseEventHandler<HTMLAnchorElement>;
  readonly variant?: "accent" | "outlineLight" | "outlineDark" | "textLight";
}
