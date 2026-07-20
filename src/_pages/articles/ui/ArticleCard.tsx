import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ArticleCardProps } from "../model/article";
import {
  articleCardCategoryStyles,
  articleCardDescriptionStyles,
  articleCardImageFrameStyles,
  articleCardImageStyles,
  articleCardLinkStyles,
  articleCardMetaStyles,
  articleCardNumberStyles,
  articleCardReadIconStyles,
  articleCardReadStyles,
  articleCardStyles,
  articleCardTitleStyles,
} from "./ArticleCardStyles";

export function ArticleCard({ article, featured, priority = false }: ArticleCardProps) {
  return (
    <li className={articleCardStyles({ featured })}>
      <Link
        href={`/articles/${article.id}`}
        aria-label={`Read article: ${article.title}`}
        className={articleCardLinkStyles()}
      >
        {article.image && article.imageAlt ? (
          <div className={articleCardImageFrameStyles({ featured })}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority={priority}
              sizes={
                featured
                  ? "(max-width: 63.9375rem) 100vw, 58vw"
                  : "(max-width: 63.9375rem) 100vw, 42vw"
              }
              className={articleCardImageStyles()}
            />
          </div>
        ) : null}

        <div className={articleCardMetaStyles()}>
          <span className={articleCardNumberStyles()}>{article.number}</span>
          <span className={articleCardCategoryStyles()}>{article.category}</span>
        </div>
        <h2 className={articleCardTitleStyles({ featured })}>{article.title}</h2>
        <p className={articleCardDescriptionStyles()}>{article.description}</p>
        <span className={articleCardReadStyles()}>
          {article.readingMinutes} min read
          <ArrowUpRight
            aria-hidden="true"
            className={articleCardReadIconStyles()}
            strokeWidth={1.45}
          />
        </span>
      </Link>
    </li>
  );
}
