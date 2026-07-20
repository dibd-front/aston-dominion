"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionConfig, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

import { initializeHeadingReveals } from "../lib/heading-reveal";
import type { MotionProviderProps } from "../model/motion-provider";

gsap.registerPlugin(useGSAP);

export function MotionProvider({ children }: MotionProviderProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion !== false) {
        return;
      }

      return initializeHeadingReveals();
    },
    { dependencies: [pathname, shouldReduceMotion], revertOnUpdate: true },
  );

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
