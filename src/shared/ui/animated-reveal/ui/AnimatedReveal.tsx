"use client";

import { motion, useReducedMotion } from "motion/react";

import type { AnimatedRevealProps } from "../model/animated-reveal";
import { animatedRevealStyles } from "./AnimatedRevealStyles";

export function AnimatedReveal({
  children,
  className,
  delay = 0,
}: AnimatedRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={animatedRevealStyles({ className })}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
