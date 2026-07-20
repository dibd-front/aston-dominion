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

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className={heroSectionStyles()}>
      <div aria-hidden="true" className={heroAtmosphereStyles()} />
      <div aria-hidden="true" className={heroGridTextureStyles()} />
      <Container size="wide">
        <div className={heroInnerStyles()}>
          <div className={heroContentStyles()}>
            <p className={heroEyebrowStyles()}>
              Investment &amp; Market Expansion Advisory
            </p>
            <h1 id="hero-heading" className={heroTitleStyles()}>
              The New Latitude of Growth.
            </h1>
            <p className={heroBodyStyles()}>
              Diversify into the world's fastest-growing consumer corridors. We architect market entry and operational scale for FMCG, Grocery, and Consumer Electronics retail chains across Southeast Asia, the Middle East, and the emerging frontier markets of the Caucasus and Central Asia.
            </p>
            <div className={heroActionsStyles()}>
              <ButtonLink href="#markets">Explore Markets</ButtonLink>
              <ButtonLink href="#services" variant="outlineLight">
                Our Capabilities
              </ButtonLink>
            </div>
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
