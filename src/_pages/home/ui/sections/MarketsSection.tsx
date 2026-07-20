import type { LucideIcon } from "lucide-react";
import {
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  Globe2,
  ShoppingBag,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import type { MarketThesisMetric } from "../../model/home-content";
import { marketThesisMetrics } from "../../model/home-content";
import {
  marketMetricDescriptionStyles,
  marketMetricIconStyles,
  marketMetricLabelStyles,
  marketMetricStyles,
  marketMetricValueStyles,
  marketsCopyStyles,
  marketsLayoutStyles,
  marketsMetricsGridStyles,
  marketsSectionStyles,
  marketsTextColumnStyles,
  marketsTitleStyles,
} from "./MarketsSectionStyles";

const metricIcons = {
  globe: Globe2,
  growth: ChartNoAxesColumnIncreasing,
  people: UsersRound,
  cart: ShoppingCart,
  outlook: ChartNoAxesCombined,
  consumer: ShoppingBag,
} satisfies Record<MarketThesisMetric["icon"], LucideIcon>;

const thesisParagraphs = [
  "The global economic axis is shifting. By 2030, Southeast Asia will house over 700 million consumers, with a combined GDP surpassing $4 trillion. The Middle East is leveraging its sovereign wealth to become a logistics and lifestyle hub, with retail spend projected to grow at 7% CAGR through 2028. South Asia—home to nearly 2 billion people—represents the next frontier of consumer expansion, with India alone projected to become the world's third-largest consumer market by 2030.",
  "But sophisticated investors are looking deeper. The frontier markets of Central Asia and the Caucasus—Kazakhstan, Azerbaijan, and Georgia—are experiencing a retail renaissance driven by rising incomes, rapid urbanisation, and digital adoption. Kazakhstan alone is projected to surpass $50 billion in retail trade turnover in 2026, with annual real growth of 6.5–7.5%.",
  "For retail chains in groceries, household goods, and electronics, these regions are not 'emerging'—they are the epicentre of middle-class expansion. We are positioned to help you capture this demographic dividend before the window of first-mover advantage closes.",
] as const;

export function MarketsSection() {
  return (
    <section
      id="markets"
      aria-labelledby="markets-heading"
      className={marketsSectionStyles()}
    >
      <Container size="wide">
        <div className={marketsLayoutStyles()}>
          <AnimatedReveal className={marketsTextColumnStyles()}>
            <SectionLabel number="01" label="The Thesis" />
            <h2 id="markets-heading" className={marketsTitleStyles()}>
              Why Southeast Asia, The Middle East, South Asia &amp; Beyond?
            </h2>
            <div className={marketsCopyStyles()}>
              {thesisParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.08} className='h-full'>
            <dl className={marketsMetricsGridStyles()}>
              {marketThesisMetrics.map((metric) => {
                const Icon = metricIcons[metric.icon];

                return (
                  <div key={metric.label} className={marketMetricStyles()}>
                    <Icon
                      aria-hidden="true"
                      className={marketMetricIconStyles()}
                      strokeWidth={1.25}
                    />
                    <dt className={marketMetricLabelStyles()}>{metric.label}</dt>
                    <dd>
                      <span className={marketMetricValueStyles()}>{metric.value}</span>
                      <span className={marketMetricDescriptionStyles()}>
                        {metric.description}
                      </span>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
