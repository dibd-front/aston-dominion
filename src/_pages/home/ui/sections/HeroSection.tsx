import { ArrowDown } from "lucide-react";

import { ButtonLink } from "@/shared/ui/button-link";
import { Container } from "@/shared/ui/container";

import { GrowthCorridorsVisual } from "./GrowthCorridorsVisual";
import {
  heroActionsStyles,
  heroAtmosphereStyles,
  heroBodyStyles,
  heroContentStyles,
  heroEyebrowStyles,
  heroGridTextureStyles,
  heroInnerStyles,
  heroScrollIconStyles,
  heroScrollLinkStyles,
  heroSectionStyles,
  heroTitleStyles,
  heroVisualStyles,
} from "./HeroSectionStyles";
import { AnimatedReveal } from '@/shared/ui/animated-reveal';

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className={heroSectionStyles()}>
      <div aria-hidden="true" className={heroAtmosphereStyles()} />
      <div aria-hidden="true" className={heroGridTextureStyles()} />
      <Container size="wide">
        <div className={heroInnerStyles()}>
          <div className={heroContentStyles()}>
            <AnimatedReveal>
              <p className={heroEyebrowStyles()}>
                Investment &amp; Market Expansion Advisory
              </p>
            </AnimatedReveal>
            <h1 id="hero-heading" className={heroTitleStyles()}>
              The New Latitude of Growth.
            </h1>
            <AnimatedReveal>
              <p className={heroBodyStyles()}>
                Diversify into the world's fastest-growing consumer corridors. We architect market entry and operational scale for FMCG, Grocery, and Consumer Electronics retail chains across Southeast Asia, the Middle East, and the emerging frontier markets of the Caucasus and Central Asia.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.3}>
              <div className={heroActionsStyles()}>
                <ButtonLink href="#markets">Explore Markets</ButtonLink>
                <ButtonLink href="#services" variant="outlineLight">
                  Our Capabilities
                </ButtonLink>
              </div>
            </AnimatedReveal>
          </div>
          <div className={heroVisualStyles()}>
            <GrowthCorridorsVisual />
          </div>
        </div>
      </Container>
      <a href="#markets" aria-label="Continue to the markets section" className={heroScrollLinkStyles()}>
        <ArrowDown aria-hidden="true" className={heroScrollIconStyles()} strokeWidth={1.6} />
      </a>
    </section>
  );
}
