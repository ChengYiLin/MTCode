import Link from "next/link";
import { notFound } from "next/navigation";
import { Pager } from "@/designSystem/components/pager";
import {
  formatDate,
  getPostStats,
  getPostsPage,
  getTotalPages,
  groupByYear,
} from "@/lib/posts";

/** Shared body for the paginated /articles list (page 1 and /page/[n]). */
export function ArticlesView({ page }: { page: number }) {
  const totalPages = getTotalPages();
  if (!Number.isInteger(page) || page < 1 || page > totalPages) notFound();

  const { items } = getPostsPage(page);
  const byYear = groupByYear(items);
  const s = getPostStats();
  const stats = [
    { value: s.posts, label: "篇文章" },
    { value: s.years, label: "個年份" },
    { value: s.since, label: "年開始" },
  ];

  return (
    <div>
      {/* Header card */}
      <div className="mb-7 rounded-3xl bg-white px-8 py-[30px] shadow-sm">
        <div className="mb-4 text-sm text-muted-foreground">
          {/* Mobile: back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-[7px] text-[15px] whitespace-nowrap lg:hidden"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            回首頁
          </Link>
          {/* Desktop: breadcrumb */}
          <span className="hidden items-center gap-2 lg:inline-flex">
            <Link href="/" className="inline-flex items-center gap-[5px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
              </svg>
              首頁
            </Link>
            <span className="text-muted-foreground/60">›</span>
            <span className="text-foreground">文章列表</span>
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="mb-1.5 text-[32px] font-semibold">文章</h1>
            <p className="text-[15px] text-muted-foreground">
              記錄學習心得與技術分享
            </p>
          </div>
          <div className="flex flex-none items-center gap-[18px]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-[18px]">
                {i > 0 && (
                  <span className="h-10 w-px flex-none bg-black/[.08]" />
                )}
                <div className="flex-none text-center">
                  <div className="text-[30px] font-semibold">{stat.value}</div>
                  <div className="text-[13px] whitespace-nowrap text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Year groups */}
      {byYear.map((group) => (
        <div
          key={group.year}
          className="mb-6 overflow-hidden rounded-3xl bg-white py-2 shadow-sm"
        >
          <div className="flex items-center gap-3 px-7 pt-5 pb-3.5">
            <span className="text-2xl font-semibold">{group.year}</span>
            <span className="rounded-3xl bg-muted px-2.5 py-0.5 text-[13px] whitespace-nowrap text-muted-foreground">
              {group.count} 篇
            </span>
          </div>
          {group.items.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex cursor-pointer flex-col items-start gap-2.5 border-t border-black/[.05] px-[22px] py-[18px] transition-colors hover:bg-primary/10 lg:flex-row lg:items-center lg:gap-5 lg:px-7 lg:py-4"
            >
              <span className="flex-none font-mono text-[15px] text-muted-foreground/60 lg:w-[46px] lg:text-sm">
                {formatDate(article.date).slice(5)}
              </span>
              <div className="min-w-0 flex-1 self-stretch">
                <div className="mb-2 flex flex-wrap items-start gap-2.5">
                  <span className="text-[19px] font-semibold text-foreground lg:text-[17px]">
                    {article.title}
                  </span>
                  {article.featured && (
                    <span className="flex-none rounded-sm bg-amber-100 px-2 py-px text-xs font-semibold whitespace-nowrap text-amber-700">
                      精選
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex-none rounded-lg bg-muted px-2.5 py-[3px] text-[13px] whitespace-nowrap text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className="hidden flex-none lg:block"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c4c7c5"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </div>
      ))}

      <Pager currentPage={page} totalPages={totalPages} basePath="/articles" />
    </div>
  );
}
