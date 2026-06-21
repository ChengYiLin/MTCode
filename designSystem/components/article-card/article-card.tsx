import Link from "next/link";
import { type PostMeta, formatDate } from "@/lib/posts";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";

const MAX_TAGS = 3;

/** Cover card used in the home "最新文章" grid. */
export function ArticleCard({ article }: { article: PostMeta }) {
  const visibleTags = article.tags.slice(0, MAX_TAGS);
  const moreCount = article.tags.length - MAX_TAGS;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <MediaPlaceholder className="aspect-video w-full">
        {article.featured && (
          <span className="absolute top-2.5 right-2.5 rounded-sm bg-amber-400 px-[9px] py-0.5 text-xs font-semibold text-white">
            精選
          </span>
        )}
      </MediaPlaceholder>
      <div className="px-4 pt-4 pb-[18px]">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs leading-5 font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
          {moreCount > 0 && (
            <span className="rounded-sm bg-muted px-2 py-0.5 text-xs leading-5 font-semibold text-muted-foreground">
              +{moreCount}
            </span>
          )}
        </div>
        <h3 className="mb-2.5 line-clamp-2 text-[18px] leading-[1.4] font-semibold text-foreground">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-[1.6] text-muted-foreground">
          {article.description}
        </p>
        <div className="text-[13px] text-muted-foreground/60">
          {formatDate(article.date)}
        </div>
      </div>
    </Link>
  );
}
