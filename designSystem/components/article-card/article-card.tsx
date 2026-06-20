import Link from "next/link";
import type { Article } from "@/lib/site-data";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";

/** Cover card used in the home "最新文章" grid. */
export function ArticleCard({ article }: { article: Article }) {
  const visibleTags = article.tags.slice(0, 2);
  const moreCount = article.tags.length - visibleTags.length;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-hh-m bg-white shadow-hh-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-hh-30"
    >
      <MediaPlaceholder className="aspect-[16/9] w-full">
        {article.featured && (
          <span className="absolute right-2.5 top-2.5 rounded-hh-s bg-hh-gold-50 px-[9px] py-0.5 text-xs font-semibold text-white">
            精選
          </span>
        )}
      </MediaPlaceholder>
      <div className="px-4 pb-[18px] pt-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-hh-s bg-hh-primary-tint px-2 py-0.5 text-xs font-semibold leading-5 text-hh-primary"
            >
              {tag}
            </span>
          ))}
          {moreCount > 0 && (
            <span className="rounded-hh-s bg-hh-surface-neutral px-2 py-0.5 text-xs font-semibold leading-5 text-hh-text-secondary">
              +{moreCount}
            </span>
          )}
        </div>
        <h3 className="mb-2.5 line-clamp-2 text-[18px] font-semibold leading-[1.4] text-hh-text-emphasize">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-[1.6] text-hh-text-secondary">
          {article.excerpt}
        </p>
        <div className="text-[13px] text-hh-text-disabled">{article.date}</div>
      </div>
    </Link>
  );
}
