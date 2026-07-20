import type { Metadata } from "next";

import { Container } from "@/shared/ui/container";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";

import { getAllArticles } from "../lib/get-articles";
import { ArticleCard } from "./ArticleCard";
import {
  articlesCountLabelStyles,
  articlesGridStyles,
  articlesHeroAtmosphereStyles,
  articlesHeroDescriptionStyles,
  articlesHeroEyebrowStyles,
  articlesHeroHeaderStyles,
  articlesHeroNumberStyles,
  articlesHeroSectionStyles,
  articlesHeroTitleStyles,
  articlesListHeaderStyles,
  articlesListSectionStyles,
  articlesListTitleStyles,
  articlesMainStyles,
  articlesPageStyles,
  articlesSkipLinkStyles,
} from "./ArticlesPageStyles";

export const articlesMetadata: Metadata = {
  title: "Articles — Aston Dominion",
  description:
    "Aston Dominion perspectives on retail expansion, omnichannel commerce, partnerships, risk, and emerging consumer markets.",
  openGraph: {
    type: "website",
    url: "/articles",
    title: "Articles — Aston Dominion",
    description:
      "Perspectives on the consumer markets, operating models, and investment corridors shaping the next decade of retail.",
  },
};

export async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <div className={articlesPageStyles()}>
      <a href="#articles-main" className={articlesSkipLinkStyles()}>
        Skip to main content
      </a>
      <SiteHeader />
      <main id="articles-main" tabIndex={-1} className={articlesMainStyles()}>
        <section aria-labelledby="articles-heading" className={articlesHeroSectionStyles()}>
          <div aria-hidden="true" className={articlesHeroAtmosphereStyles()} />
          <Container>
            <div className={articlesHeroHeaderStyles()}>
              <p className={articlesHeroEyebrowStyles()}>
                {/* <span className={articlesHeroNumberStyles()}>01</span> */}
                Aston Dominion Editorial
              </p>
              <h1 id="articles-heading" className={articlesHeroTitleStyles()}>
                Intelligence for the next consumer markets.
              </h1>
              <p className={articlesHeroDescriptionStyles()}>
                Field-informed perspectives on market entry, partnerships, digital
                commerce, and the operating realities behind durable regional growth.
              </p>
            </div>
          </Container>
        </section>

        <section aria-labelledby="articles-index-heading" className={articlesListSectionStyles()}>
          <Container>
            {/* <header className={articlesListHeaderStyles()}>
              <h2 id="articles-index-heading" className={articlesListTitleStyles()}>
                The current articles
              </h2>
              <p className={articlesCountLabelStyles()}>{articles.length.toString().padStart(2, "0")} articles</p>
            </header> */}
            <ol className={articlesGridStyles()}>
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured={false}
                  priority={index === 0}
                />
              ))}
            </ol>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
