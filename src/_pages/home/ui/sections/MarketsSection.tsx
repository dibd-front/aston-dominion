"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import type { MarketRegion } from "../../model/home-content";
import { marketRegions } from "../../model/home-content";
import {
  marketAccentLabelStyles,
  marketButtonArrowStyles,
  marketButtonLabelStyles,
  marketButtonNumberStyles,
  marketButtonStyles,
  marketFactLabelStyles,
  marketFactStyles,
  marketFactValueStyles,
  marketFactsStyles,
  marketLocationStyles,
  marketLocationsStyles,
  marketNavListStyles,
  marketNavStyles,
  marketPanelAccentStyles,
  marketPanelContentStyles,
  marketPanelStyles,
  marketPanelTitleStyles,
  marketSummaryStyles,
  marketsHeaderStyles,
  marketsInteractiveStyles,
  marketsIntroStyles,
  marketsSectionStyles,
  marketsTitleStyles,
} from "./MarketsSectionStyles";

export function MarketsSection() {
  const [activeId, setActiveId] = useState<MarketRegion["id"]>(
    marketRegions[0].id,
  );
  const shouldReduceMotion = useReducedMotion();
  const activeRegion =
    marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];

  return (
    <section id="markets" aria-labelledby="markets-heading" className={marketsSectionStyles()}>
      <Container>
        <AnimatedReveal>
          <header className={marketsHeaderStyles()}>
            <SectionLabel number="01" label="The Thesis" />
            <h2 id="markets-heading" className={marketsTitleStyles()}>
              Why Southeast Asia, the Middle East, South Asia &amp; Beyond?
            </h2>
            <p className={marketsIntroStyles()}>
              The global economic axis is shifting. New consumer markets are gaining
              population scale, retail momentum, and strategic relevance for
              international operators.
            </p>
          </header>
        </AnimatedReveal>

        <div className={marketsInteractiveStyles()}>
          <nav aria-label="Market regions" className={marketNavStyles()}>
            <ol className={marketNavListStyles()}>
              {marketRegions.map((region, index) => {
                const isActive = region.id === activeRegion.id;
                return (
                  <li key={region.id}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-controls="market-region-panel"
                      className={marketButtonStyles({ active: isActive })}
                      onClick={() => setActiveId(region.id)}
                    >
                      <span className={marketButtonNumberStyles()}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={marketButtonLabelStyles()}>{region.label}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className={marketButtonArrowStyles({ active: isActive })}
                        strokeWidth={1.5}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div id="market-region-panel" className={marketPanelStyles()} aria-live="polite">
            <div aria-hidden="true" className={marketPanelAccentStyles()} />
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeRegion.id}
                className={marketPanelContentStyles()}
                initial={shouldReduceMotion ? false : { opacity: 0, y: "0.75rem" }}
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: "-0.5rem" }
                }
                transition={{ duration: shouldReduceMotion ? 0 : 0.38 }}
              >
                <p className={marketAccentLabelStyles()}>{activeRegion.accentLabel}</p>
                <h3 className={marketPanelTitleStyles()}>{activeRegion.label}</h3>
                <p className={marketSummaryStyles()}>{activeRegion.summary}</p>
                <dl className={marketFactsStyles()}>
                  {activeRegion.facts.map((fact) => (
                    <div key={fact.label} className={marketFactStyles()}>
                      <dt className={marketFactLabelStyles()}>{fact.label}</dt>
                      <dd className={marketFactValueStyles()}>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul role="list" className={marketLocationsStyles()}>
                  {activeRegion.locations.map((location) => (
                    <li key={location} className={marketLocationStyles()}>
                      {location}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
