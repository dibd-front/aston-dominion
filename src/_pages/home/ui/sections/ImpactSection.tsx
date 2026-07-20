import type { LucideIcon } from "lucide-react";
import {
  ChartNoAxesCombined,
  ChartPie,
  Clock3,
  Globe2,
  ShoppingCart,
  Store,
} from "lucide-react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import type { ImpactMetric } from "../../model/home-content";
import { impactMetrics } from "../../model/home-content";
import {
  impactGridStyles,
  impactHeaderStyles,
  impactIconStyles,
  impactLabelStyles,
  impactMetricStyles,
  impactMetricRevealStyles,
  impactSectionStyles,
  impactTextureStyles,
  impactTitleStyles,
  impactValueStyles,
} from "./ImpactSectionStyles";

const impactIcons = {
  store: Store,
  revenue: ChartNoAxesCombined,
  time: Clock3,
  markets: Globe2,
  marketSize: ChartPie,
  commerce: ShoppingCart,
} satisfies Record<ImpactMetric["icon"], LucideIcon>;

export function ImpactSection() {
  return (
    <section id="about" aria-labelledby="impact-heading" className={impactSectionStyles()}>
      <div aria-hidden="true" className={impactTextureStyles()} />
      <Container>
        <AnimatedReveal>
          <header className={impactHeaderStyles()}>
            <SectionLabel number="03" label="Impact" tone="dark" />
            <h2 id="impact-heading" className={impactTitleStyles()}>
              Numbers That Speak.
            </h2>
          </header>
        </AnimatedReveal>

        <dl className={impactGridStyles()}>
          {impactMetrics.map((metric, index) => {
            const Icon = impactIcons[metric.icon];

            return (
              <div key={metric.label} className={impactMetricStyles()}>
                <AnimatedReveal
                  delay={index * 0.06}
                  className={impactMetricRevealStyles()}
                >
                  <Icon
                    aria-hidden="true"
                    className={impactIconStyles()}
                    strokeWidth={1.35}
                  />
                  <dt className={impactLabelStyles()}>{metric.label}</dt>
                  <dd className={impactValueStyles()}>{metric.value}</dd>
                </AnimatedReveal>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
