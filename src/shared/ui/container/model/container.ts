import type { ElementType, ReactNode } from "react";

export interface ContainerProps {
  readonly as?: ElementType;
  readonly children: ReactNode;
  readonly size?: "standard" | "wide";
}
