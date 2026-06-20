import Link from "next/link";
import { ArticleCard } from "@/designSystem/components/article-card";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";
import { articles, partners } from "@/lib/site-data";

export default function HomePage() {
  const hero = articles[0];
  const latest = articles.slice(1, 10);
  const heroMore = hero.tags.length - 2;

  return (
    <div>
      {/* Hero — featured post */}
      <Link
        href={`/articles/${hero.slug}`}
        className="relative block cursor-pointer overflow-hidden rounded-hh-l shadow-hh-30"
      >
        <MediaPlaceholder
          iconSize={60}
          className="h-[210px] w-full sm:h-[360px]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(0,0,0,.78)_100%)]" />
        </MediaPlaceholder>
        <div className="absolute inset-x-0 bottom-0 px-7 pt-7 pb-[26px] text-white">
          <div className="mb-3.5 flex gap-2">
            <span className="rounded-hh-s bg-hh-primary px-[11px] py-[3px] text-[13px] font-semibold text-white">
              {hero.tags[0]}
            </span>
            {hero.tags[1] && (
              <span className="rounded-hh-s bg-white/[.18] px-[11px] py-[3px] text-[13px] font-semibold text-white backdrop-blur-sm">
                {hero.tags[1]}
              </span>
            )}
            {heroMore > 0 && (
              <span className="rounded-hh-s bg-white/[.18] px-[9px] py-[3px] text-[13px] font-semibold text-white">
                +{heroMore}
              </span>
            )}
          </div>
          <div className="mb-3 text-2xl leading-[1.2] font-semibold sm:text-[42px]">
            {hero.title}
          </div>
          <div className="flex items-center gap-3.5">
            <span className="h-[3px] w-[30px] rounded-sm bg-hh-primary" />
            <span className="text-sm text-white/85">{hero.date}</span>
          </div>
        </div>
      </Link>

      {/* Partners marquee */}
      <section className="mt-10">
        <div className="mb-3.5 flex items-center gap-2">
          <span className="h-[7px] w-[7px] rounded-full bg-hh-primary" />
          <span className="text-sm font-semibold text-hh-text-primary">
            合作夥伴
          </span>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <div className="flex w-max [animation:marquee_32s_linear_infinite] gap-4">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-[60px] w-[170px] flex-none items-center justify-center rounded-hh-m border border-black/[.07] bg-white text-[13px] font-semibold text-hh-text-secondary"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section>
        <div className="my-[22px] mt-10 flex items-center gap-[18px]">
          <h2 className="text-[22px] font-semibold whitespace-nowrap text-hh-text-emphasize">
            最新文章
          </h2>
          <span className="h-px flex-1 bg-black/[.08]" />
        </div>
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(290px,1fr))] gap-6">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="上一頁"
            disabled
            className="flex h-10 w-10 flex-none items-center justify-center rounded-hh-s border border-black/[.12] bg-white text-hh-text-disabled"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <span className="flex h-10 min-w-10 flex-none items-center justify-center rounded-hh-s bg-hh-primary text-sm font-semibold text-white">
            1
          </span>
          <Link
            href="/articles"
            className="flex h-10 min-w-10 flex-none items-center justify-center rounded-hh-s border border-black/[.12] bg-white text-sm text-hh-text-primary transition-colors hover:bg-hh-primary-tint"
          >
            2
          </Link>
          <Link
            href="/articles"
            className="flex h-10 min-w-10 flex-none items-center justify-center rounded-hh-s border border-black/[.12] bg-white text-sm text-hh-text-primary transition-colors hover:bg-hh-primary-tint"
          >
            3
          </Link>
          <span className="flex-none px-0.5 text-hh-text-disabled">…</span>
          <Link
            href="/articles"
            aria-label="下一頁"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-hh-m border border-black/[.12] bg-white text-hh-text-primary transition-colors hover:bg-hh-primary-tint"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
