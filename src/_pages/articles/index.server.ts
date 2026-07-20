import type { Metadata } from "next";

import { getArticle } from "./lib/get-articles";
import { articleCatalogue } from "./model/article-catalogue";
import type { ArticlePageProps } from "./model/article";

export { ArticlePage } from "./ui/ArticlePage";
export { ArticlesPage, articlesMetadata } from "./ui/ArticlesPage";

export function generateArticleStaticParams() {
  return articleCatalogue.map((article) => ({ articleId: article.id }));
}

export async function generateArticleMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = await getArticle(articleId);

  if (!article) {
    return {
      title: "Article Not Found — Aston Dominion",
    };
  }

  return {
    title: `${article.title} — Aston Dominion`,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.id}`,
    },
    openGraph: {
      type: "article",
      url: `/articles/${article.id}`,
      title: article.title,
      description: article.description,
      images: article.image && article.imageAlt
        ? [{ url: article.image, alt: article.imageAlt }]
        : undefined,
    },
    twitter: {
      card: article.image ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : undefined,
    },
  };
}
