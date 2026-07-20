import type { ReactNode } from "react";

export interface AnimatedRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}
