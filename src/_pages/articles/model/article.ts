export interface ArticleMeta {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly fileName: `${string}.md`;
  readonly image?: `/images/${string}`;
  readonly imageAlt?: string;
}

export interface Article extends ArticleMeta {
  readonly content: string;
  readonly readingMinutes: number;
}

export interface ArticleNavigationItem {
  readonly id: string;
  readonly title: string;
}

export interface ArticleNavigation {
  readonly previous: ArticleNavigationItem | null;
  readonly next: ArticleNavigationItem | null;
}

export interface ArticlePageProps {
  readonly params: Promise<{ articleId: string }>;
}

export interface ArticleCardProps {
  readonly article: Article;
  readonly featured: boolean;
  readonly priority?: boolean;
}

export interface MarkdownRendererProps {
  readonly content: string;
}
