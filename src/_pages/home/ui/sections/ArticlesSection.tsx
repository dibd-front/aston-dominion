import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import { articles } from "../../model/home-content";
import {
  articleCardStyles,
  articleDescriptionStyles,
  articleImageFrameStyles,
  articleImageStyles,
  articleLinkStyles,
  articleMetaRuleStyles,
  articleMetaStyles,
  articleReadIconStyles,
  articleReadStyles,
  articleRevealStyles,
  articleTitleStyles,
  articlesGridStyles,
  articlesFooterStyles,
  articlesHeaderStyles,
  articlesSectionStyles,
  articlesTitleStyles,
  articlesViewAllIconStyles,
  articlesViewAllStyles,
} from "./ArticlesSectionStyles";

export function ArticlesSection() {
  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className={articlesSectionStyles()}
    >
      <Container>
        <AnimatedReveal>
          <header className={articlesHeaderStyles()}>
            <SectionLabel number="05" label="Articles" />
            <h2 id="articles-heading" className={articlesTitleStyles()}>
              Perspectives on the Next Consumer Markets.
            </h2>
          </header>
        </AnimatedReveal>

        <div className={articlesGridStyles()}>
          {articles.map((article, index) => {
            const isFeatured = index === 0;

            return (
              <AnimatedReveal
                key={article.href}
                delay={index * 0.08}
                className={articleRevealStyles({ featured: isFeatured })}
              >
                <Link
                  href={article.href}
                  aria-label={`Read article: ${article.title}`}
                  className={articleLinkStyles({ featured: isFeatured })}
                >
                  <article className={articleCardStyles()}>
                    <div className={articleImageFrameStyles({ featured: isFeatured })}>
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        sizes={
                          isFeatured
                            ? "(max-width: 63.9375rem) 100vw, 58vw"
                            : "(max-width: 63.9375rem) 100vw, 42vw"
                        }
                        className={articleImageStyles()}
                      />
                    </div>
                    <p className={articleMetaStyles()}>
                      <span aria-hidden="true" className={articleMetaRuleStyles()} />
                      {article.category}
                    </p>
                    <h3 className={articleTitleStyles()}>{article.title}</h3>
                    <p className={articleDescriptionStyles()}>{article.description}</p>
                    <span className={articleReadStyles()}>
                      Read Article
                      <ArrowRight
                        aria-hidden="true"
                        className={articleReadIconStyles()}
                        strokeWidth={1.5}
                      />
                    </span>
                  </article>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>

        <AnimatedReveal>
          <div className={articlesFooterStyles()}>
            <Link href="/articles" className={articlesViewAllStyles()}>
              View all articles
              <ArrowRight
                aria-hidden="true"
                className={articlesViewAllIconStyles()}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
