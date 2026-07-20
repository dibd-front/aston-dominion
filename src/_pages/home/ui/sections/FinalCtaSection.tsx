import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { ButtonLink } from "@/shared/ui/button-link";
import { Container } from "@/shared/ui/container";

import {
  finalCtaActionsStyles,
  finalCtaBodyStyles,
  finalCtaContentStyles,
  finalCtaOrbStyles,
  finalCtaSectionStyles,
  finalCtaTitleStyles,
} from "./FinalCtaSectionStyles";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className={finalCtaSectionStyles()}>
      <div aria-hidden="true" className={finalCtaOrbStyles()} />
      <Container>
        <AnimatedReveal>
          <div className={finalCtaContentStyles()}>
            <h2 id="final-cta-heading" className={finalCtaTitleStyles()}>
              Scale Without Borders.
            </h2>
            <p className={finalCtaBodyStyles()}>
              The retail landscape is fragmenting. Those who diversify now will define the next decade. Those who wait will be left acquiring distressed assets. From the bustling malls of Jakarta and Dubai to the emerging consumer hubs of Almaty, Tbilisi, and Mumbai—we are your bridge to regional leadership.
            </p>
            <div className={finalCtaActionsStyles()}>
              <ButtonLink href="/contact">Start a Conversation</ButtonLink>
              <ButtonLink href="#insights" variant="textLight">
                Explore Our Insights
              </ButtonLink>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
