import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/shared/ui/container";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";

import { getArticle, getArticleNavigation } from "../lib/get-articles";
import type { ArticlePageProps } from "../model/article";
import { MarkdownRenderer } from "./MarkdownRenderer";
import {
  articleBackIconStyles,
  articleBackLinkStyles,
  articleBodyContentStyles,
  articleBodySectionStyles,
  articleDescriptionStyles,
  articleHeroAtmosphereStyles,
  articleHeroImageFrameStyles,
  articleHeroImageStyles,
  articleHeroInnerStyles,
  articleHeroSectionStyles,
  articleMetaDividerStyles,
  articleMetaStyles,
  articlePageMainStyles,
  articlePageStyles,
  articleSkipLinkStyles,
  articleTitleStyles,
  navigationArrowStyles,
  navigationCardDirectionStyles,
  navigationCardStyles,
  navigationCardTitleStyles,
  navigationGridStyles,
  navigationSectionStyles,
  navigationTitleStyles,
} from "./ArticlePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;
  const article = await getArticle(articleId);

  if (!article) notFound();

  const navigation = getArticleNavigation(article.id);
  const articleUrl = `${siteUrl}/articles/${article.id}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Aston Dominion",
    },
    publisher: {
      "@type": "Organization",
      name: "Aston Dominion",
    },
    ...(article.image ? { image: `${siteUrl}${article.image}` } : {}),
  };

  return (
    <div className={articlePageStyles()}>
      <a href="#article-main" className={articleSkipLinkStyles()}>
        Skip to article
      </a>
      <SiteHeader />
      <main id="article-main" tabIndex={-1} className={articlePageMainStyles()}>
        <section aria-labelledby="article-heading" className={articleHeroSectionStyles()}>
          <div aria-hidden="true" className={articleHeroAtmosphereStyles()} />
          <Container>
            <div className={articleHeroInnerStyles()}>
              <Link href="/articles" className={articleBackLinkStyles()}>
                <ArrowLeft aria-hidden="true" className={articleBackIconStyles()} strokeWidth={1.5} />
                All articles
              </Link>
              <p className={articleMetaStyles()}>
                <span>{article.number}</span>
                <span aria-hidden="true" className={articleMetaDividerStyles()} />
                <span>{article.category}</span>
                <span aria-hidden="true" className={articleMetaDividerStyles()} />
                <span>{article.readingMinutes} min read</span>
              </p>
              <h1 id="article-heading" className={articleTitleStyles()}>
                {article.title}
              </h1>
              <p className={articleDescriptionStyles()}>{article.description}</p>

              {article.image && article.imageAlt ? (
                <div className={articleHeroImageFrameStyles()}>
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 63.9375rem) 100vw, 82.5rem"
                    className={articleHeroImageStyles()}
                  />
                </div>
              ) : null}
            </div>
          </Container>
        </section>

        <section aria-label="Article content" className={articleBodySectionStyles()}>
          <Container>
            <article className={articleBodyContentStyles()}>
              <MarkdownRenderer content={article.content} />
            </article>
          </Container>
        </section>

        <nav aria-labelledby="article-navigation-heading" className={navigationSectionStyles()}>
          <Container>
            <h2 id="article-navigation-heading" className={navigationTitleStyles()}>
              Continue reading
            </h2>
            <div className={navigationGridStyles()}>
              {navigation.previous ? (
                <Link href={`/articles/${navigation.previous.id}`} className={navigationCardStyles()}>
                  <span className={navigationCardDirectionStyles()}>
                    <ArrowLeft aria-hidden="true" className={navigationArrowStyles()} strokeWidth={1.4} />
                    Previous
                  </span>
                  <span className={navigationCardTitleStyles()}>{navigation.previous.title}</span>
                </Link>
              ) : <span />}
              {navigation.next ? (
                <Link href={`/articles/${navigation.next.id}`} className={navigationCardStyles({ next: true })}>
                  <span className={navigationCardDirectionStyles({ next: true })}>
                    Next
                    <ArrowRight aria-hidden="true" className={navigationArrowStyles()} strokeWidth={1.4} />
                  </span>
                  <span className={navigationCardTitleStyles()}>{navigation.next.title}</span>
                </Link>
              ) : null}
            </div>
          </Container>
        </nav>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
