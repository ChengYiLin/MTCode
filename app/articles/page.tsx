import type { Metadata } from "next";
import Link from "next/link";
import { articleStats, getArticlesByYear } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "文章",
  description: "記錄學習心得與技術分享。",
};

export default function ArticlesPage() {
  const byYear = getArticlesByYear();
  const stats = [
    { value: articleStats.posts, label: "篇文章" },
    { value: articleStats.years, label: "個年份" },
    { value: articleStats.since, label: "年開始" },
  ];

  return (
    <div>
      {/* Header card */}
      <div className="mb-7 rounded-hh-l bg-white px-8 py-[30px] shadow-hh-20">
        <div className="mb-4 text-sm text-hh-text-secondary">
          {/* Mobile: back link */}
          <Link href="/" className="inline-flex items-center gap-[7px] whitespace-nowrap text-[15px] lg:hidden">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            回首頁
          </Link>
          {/* Desktop: breadcrumb */}
          <span className="hidden items-center gap-2 lg:inline-flex">
            <Link href="/" className="inline-flex items-center gap-[5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
              </svg>
              首頁
            </Link>
            <span className="text-hh-text-disabled">›</span>
            <span className="text-hh-text-primary">文章列表</span>
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="mb-1.5 text-[32px] font-semibold">文章</h1>
            <p className="text-[15px] text-hh-text-secondary">記錄學習心得與技術分享</p>
          </div>
          <div className="flex flex-none items-center gap-[18px]">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-[18px]">
                {i > 0 && <span className="h-10 w-px flex-none bg-black/[.08]" />}
                <div className="flex-none text-center">
                  <div className="text-[30px] font-semibold">{s.value}</div>
                  <div className="whitespace-nowrap text-[13px] text-hh-text-secondary">{s.label}</div>
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
          className="mb-6 overflow-hidden rounded-hh-l bg-white py-2 shadow-hh-20"
        >
          <div className="flex items-center gap-3 px-7 pb-3.5 pt-5">
            <span className="text-2xl font-semibold">{group.year}</span>
            <span className="whitespace-nowrap rounded-hh-l bg-hh-surface-neutral px-2.5 py-0.5 text-[13px] text-hh-text-secondary">
              {group.count} 篇
            </span>
          </div>
          {group.items.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex cursor-pointer flex-col items-start gap-2.5 border-t border-black/[.05] px-[22px] py-[18px] transition-colors hover:bg-hh-primary-tint lg:flex-row lg:items-center lg:gap-5 lg:px-7 lg:py-4"
            >
              <span className="flex-none font-mono text-[15px] text-hh-text-disabled lg:w-[46px] lg:text-sm">
                {article.date.slice(5)}
              </span>
              <div className="min-w-0 flex-1 self-stretch">
                <div className="mb-2 flex flex-wrap items-start gap-2.5">
                  <span className="text-[19px] font-semibold text-hh-text-emphasize lg:text-[17px]">
                    {article.title}
                  </span>
                  {article.featured && (
                    <span className="flex-none whitespace-nowrap rounded-hh-s bg-hh-gold-90 px-2 py-px text-xs font-semibold text-hh-gold-30">
                      精選
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex-none whitespace-nowrap rounded-hh-m bg-hh-surface-neutral px-2.5 py-[3px] text-[13px] text-hh-text-secondary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <svg className="hidden flex-none lg:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4c7c5" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
