import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import { processSteps } from "../../model/home-content";
import {
  approachBodyStyles,
  approachGridStyles,
  approachIntroStyles,
  approachIntroRevealStyles,
  approachSectionStyles,
  approachTitleStyles,
  processDescriptionStyles,
  processMarkerStyles,
  processNumberStyles,
  processStepStyles,
  processStyles,
  processTitleStyles,
} from "./ApproachSectionStyles";

export function ApproachSection() {
  return (
    <section aria-labelledby="approach-heading" className={approachSectionStyles()}>
      <Container>
        <div className={approachGridStyles()}>
          <AnimatedReveal className={approachIntroRevealStyles()}>
            <header className={approachIntroStyles()}>
              <SectionLabel number="04" label="Our Approach" />
              <h2 id="approach-heading" className={approachTitleStyles()}>
                Local Intelligence. Institutional Discipline.
              </h2>
              <p className={approachBodyStyles()}>
                A successful retail model cannot simply be copied from one geography to
                another. We localise product strategy, operating models, partnerships,
                and supply chains without diluting the client&apos;s brand equity.
              </p>
            </header>
          </AnimatedReveal>

          <ol className={processStyles()}>
            {processSteps.map((step, index) => (
              <li key={step.title} className={processStepStyles()}>
                <AnimatedReveal delay={index * 0.07}>
                  <span aria-hidden="true" className={processMarkerStyles()} />
                  <p className={processNumberStyles()}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className={processTitleStyles()}>{step.title}</h3>
                  <p className={processDescriptionStyles()}>{step.description}</p>
                </AnimatedReveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
