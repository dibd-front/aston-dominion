import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import { impactMetrics } from "../../model/home-content";
import {
  impactFootnoteStyles,
  impactGridStyles,
  impactHeaderStyles,
  impactLabelStyles,
  impactMetricStyles,
  impactMetricRevealStyles,
  impactSectionStyles,
  impactTextureStyles,
  impactTitleStyles,
  impactValueStyles,
} from "./ImpactSectionStyles";

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
          {impactMetrics.map((metric, index) => (
            <div key={metric.label} className={impactMetricStyles()}>
              <AnimatedReveal
                delay={index * 0.07}
                className={impactMetricRevealStyles()}
              >
                <dt className={impactLabelStyles()}>{metric.label}</dt>
                <dd className={impactValueStyles()}>{metric.value}</dd>
              </AnimatedReveal>
            </div>
          ))}
        </dl>
        <p className={impactFootnoteStyles()}>
          Across Southeast Asia, the Gulf, South Asia, Central Asia, and the Caucasus.
        </p>
      </Container>
    </section>
  );
}
