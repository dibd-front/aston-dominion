import { cache } from "react";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { articleCatalogue } from "../model/article-catalogue";
import type { Article, ArticleNavigation } from "../model/article";

const articlesDirectory = join(process.cwd(), "src/_pages/articles/content");

function calculateReadingMinutes(content: string) {
  const wordCount = content.trim().split(/\s+/u).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

export const getArticle = cache(async (articleId: string): Promise<Article | null> => {
  const meta = articleCatalogue.find((article) => article.id === articleId);
  if (!meta) return null;

  const content = await readFile(join(articlesDirectory, meta.fileName), "utf8");

  return {
    ...meta,
    content,
    readingMinutes: calculateReadingMinutes(content),
  };
});

export async function getAllArticles() {
  const articles = await Promise.all(
    articleCatalogue.map((article) => getArticle(article.id)),
  );

  return articles.filter((article): article is Article => article !== null);
}

export function getArticleNavigation(articleId: string): ArticleNavigation {
  const currentIndex = articleCatalogue.findIndex((article) => article.id === articleId);
  const previous = articleCatalogue[currentIndex - 1] ?? null;
  const next = articleCatalogue[currentIndex + 1] ?? null;

  return {
    previous: previous ? { id: previous.id, title: previous.title } : null,
    next: next ? { id: next.id, title: next.title } : null,
  };
}
