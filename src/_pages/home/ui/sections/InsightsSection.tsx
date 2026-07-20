import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import { insights } from "../../model/home-content";
import {
  insightArticleStyles,
  insightDescriptionStyles,
  insightImageFrameStyles,
  insightImageStyles,
  insightLinkStyles,
  insightMetaRuleStyles,
  insightMetaStyles,
  insightReadIconStyles,
  insightReadStyles,
  insightRevealStyles,
  insightTitleStyles,
  insightsGridStyles,
  insightsHeaderStyles,
  insightsSectionStyles,
  insightsTitleStyles,
} from "./InsightsSectionStyles";

export function InsightsSection() {
  return (
    <section id="insights" aria-labelledby="insights-heading" className={insightsSectionStyles()}>
      <Container>
        <AnimatedReveal>
          <header className={insightsHeaderStyles()}>
            <SectionLabel number="05" label="Insights" />
            <h2 id="insights-heading" className={insightsTitleStyles()}>
              Perspectives on the Next Consumer Markets.
            </h2>
          </header>
        </AnimatedReveal>

        <div className={insightsGridStyles()}>
          {insights.map((article, index) => {
            const isFeatured = index === 0;
            return (
              <AnimatedReveal
                key={article.href}
                delay={index * 0.08}
                className={insightRevealStyles({ featured: isFeatured })}
              >
                <Link
                  href={article.href}
                  aria-label={`Read insight: ${article.title}`}
                  className={insightLinkStyles({ featured: isFeatured })}
                >
                  <article className={insightArticleStyles()}>
                    <div className={insightImageFrameStyles({ featured: isFeatured })}>
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        sizes={
                          isFeatured
                            ? "(max-width: 63.9375rem) 100vw, 58vw"
                            : "(max-width: 63.9375rem) 100vw, 42vw"
                        }
                        className={insightImageStyles()}
                      />
                    </div>
                    <p className={insightMetaStyles()}>
                      <span aria-hidden="true" className={insightMetaRuleStyles()} />
                      {article.category}
                    </p>
                    <h3 className={insightTitleStyles()}>{article.title}</h3>
                    <p className={insightDescriptionStyles()}>{article.description}</p>
                    <span className={insightReadStyles()}>
                      Read Insight
                      <ArrowRight
                        aria-hidden="true"
                        className={insightReadIconStyles()}
                        strokeWidth={1.5}
                      />
                    </span>
                  </article>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
