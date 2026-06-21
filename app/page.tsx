import Link from "next/link";
import { ArticleCard } from "@/designSystem/components/article-card";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";
import { Pager } from "@/designSystem/components/pager";
import { formatDate, getAllPosts, getTotalPages } from "@/lib/posts";

export default function HomePage() {
  const all = getAllPosts();

  if (all.length === 0) {
    return (
      <div className="rounded-hh-l bg-white px-8 py-16 text-center shadow-hh-20">
        <h2 className="mb-2 text-xl font-semibold text-hh-text-emphasize">
          還沒有文章
        </h2>
        <p className="text-sm text-hh-text-secondary">
          在 content/posts/ 新增 .mdx 檔案後，文章就會出現在這裡。
        </p>
      </div>
    );
  }

  const hero = all[0];
  const latest = all.slice(1, 10);
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
            <span className="text-sm text-white/85">
              {formatDate(hero.date)}
            </span>
          </div>
        </div>
      </Link>

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
      </section>
    </div>
  );
}
