"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  visualCaptionRuleStyles,
  visualCaptionStyles,
  visualFigureStyles,
  visualGlowStyles,
  visualGridLineStyles,
  visualLabelStyles,
  visualNodeHaloStyles,
  visualNodeStyles,
  visualRouteMutedStyles,
  visualRouteStyles,
  visualSvgStyles,
  visualTracerStyles,
} from "./GrowthCorridorsVisualStyles";

const nodes = [
  { name: "Dubai", x: 132, y: 370, tx: 79, ty: 375 },
  { name: "Riyadh", x: 258, y: 306, tx: 270, ty: 321 },
  { name: "Baku", x: 310, y: 230, tx: 258, ty: 236 },
  { name: "Tbilisi", x: 255, y: 126, tx: 196, ty: 130 },
  { name: "Almaty", x: 474, y: 147, tx: 488, ty: 152 },
  { name: "Mumbai", x: 446, y: 304, tx: 460, ty: 308 },
  { name: "Jakarta", x: 448, y: 411, tx: 462, ty: 416 },
] as const;

export function GrowthCorridorsVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <figure className={visualFigureStyles()}>
      <div aria-hidden="true" className={visualGlowStyles()} />
      <svg
        role="img"
        aria-labelledby="corridors-title corridors-description"
        viewBox="0 0 600 520"
        className={visualSvgStyles()}
      >
        <title id="corridors-title">Aston Dominion growth corridors</title>
        <desc id="corridors-description">
          An abstract network connecting Jakarta, Dubai, Riyadh, Mumbai, Almaty,
          Baku, and Tbilisi.
        </desc>

        <g aria-hidden="true">
          <ellipse cx="330" cy="271" rx="241" ry="217" className={visualGridLineStyles()} />
          <ellipse cx="330" cy="271" rx="192" ry="217" className={visualGridLineStyles()} />
          <ellipse cx="330" cy="271" rx="110" ry="217" className={visualGridLineStyles()} />
          <ellipse cx="330" cy="271" rx="241" ry="75" className={visualGridLineStyles()} />
          <ellipse cx="330" cy="271" rx="241" ry="143" className={visualGridLineStyles()} />
          <path d="M94 271H570" className={visualGridLineStyles()} />

          <path d="M132 370 C220 286 219 178 255 126" className={visualRouteStyles()} />
          <path d="M132 370 C232 353 344 364 448 411" className={visualRouteStyles()} />
          <path d="M132 370 C210 314 348 282 446 304" className={visualRouteStyles()} />
          <path d="M255 126 C333 64 450 69 474 147" className={visualRouteStyles()} />
          <path d="M310 230 C360 209 415 164 474 147" className={visualRouteStyles()} />
          <path d="M310 230 C372 232 445 252 446 304" className={visualRouteStyles()} />
          <path d="M446 304 C466 340 459 375 448 411" className={visualRouteStyles()} />
          <path d="M258 306 C323 265 379 257 446 304" className={visualRouteStyles()} />
          <path d="M97 219 C227 133 392 104 524 218" className={visualRouteMutedStyles()} />
          <path d="M101 421 C246 461 425 468 555 346" className={visualRouteMutedStyles()} />
          <path d="M155 90 C237 222 342 378 525 443" className={visualRouteMutedStyles()} />

          {nodes.map((node) => (
            <g key={node.name}>
              <circle cx={node.x} cy={node.y} r="12" className={visualNodeHaloStyles()} />
              <circle cx={node.x} cy={node.y} r="3.5" className={visualNodeStyles()} />
              <text x={node.tx} y={node.ty} className={visualLabelStyles()}>
                {node.name}
              </text>
            </g>
          ))}

          <motion.circle
            r="3"
            className={visualTracerStyles()}
            initial={{ cx: 132, cy: 370 }}
            animate={
              shouldReduceMotion
                ? { cx: 310, cy: 230, opacity: 0.8 }
                : {
                    cx: [132, 258, 310, 474],
                    cy: [370, 306, 230, 147],
                    opacity: [0.2, 1, 1, 0.2],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="2.5"
            className={visualTracerStyles()}
            initial={{ cx: 448, cy: 411 }}
            animate={
              shouldReduceMotion
                ? { cx: 446, cy: 304, opacity: 0.7 }
                : {
                    cx: [448, 446, 310, 255],
                    cy: [411, 304, 230, 126],
                    opacity: [0.2, 1, 0.8, 0.2],
                  }
            }
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          />
        </g>
      </svg>
      <figcaption className={visualCaptionStyles()}>
        <span className={visualCaptionRuleStyles()} aria-hidden="true" />
        Growth Corridors
      </figcaption>
    </figure>
  );
}
