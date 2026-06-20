import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";
import { articles, getArticleBySlug, getArticleIndex } from "@/lib/site-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getArticleBySlug(slug);
  if (!post) notFound();

  const idx = getArticleIndex(slug);
  const len = articles.length;
  const prev = articles[(idx + 1) % len]; // older
  const next = articles[(idx - 1 + len) % len]; // newer

  return (
    <article>
      {/* Cover */}
      <MediaPlaceholder
        iconSize={56}
        className="h-[210px] w-full overflow-hidden rounded-hh-m sm:h-[360px]"
      >
        <span className="absolute right-3 bottom-2.5 rounded-hh-s bg-black/45 px-2 py-0.5 text-xs text-white">
          credit: placeholder
        </span>
      </MediaPlaceholder>

      {/* Breadcrumb */}
      <div className="my-[18px] mt-6 flex items-center gap-2 text-sm text-hh-text-secondary">
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
        <span className="text-hh-text-disabled">›</span>
        <Link href="/articles">文章列表</Link>
        <span className="text-hh-text-disabled">›</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-hh-text-primary">
          {post.title}
        </span>
      </div>

      {/* Title + meta */}
      <h1 className="mb-4 text-[34px] leading-[1.3] font-semibold">
        {post.title}
      </h1>
      <div className="mb-7 flex items-center gap-[18px] border-b border-black/[.08] pb-6 text-sm text-hh-text-secondary">
        <span className="inline-flex items-center gap-1.5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
          </svg>
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M8 8h8M8 12h8M8 16h5" />
          </svg>
          約 {post.words} 字
        </span>
      </div>

      {/* Body */}
      <div className="text-[17px] leading-[1.9] text-hh-text-primary">
        <p className="mb-[22px]">
          {post.excerpt}{" "}
          這篇文章會帶你走過完整的脈絡，從問題的緣起、我嘗試過的幾種做法，到最後沉澱下來的一套流程。如果你也遇到類似的狀況，希望這些筆記能幫你少走一點冤枉路。
        </p>
        <p className="mb-[22px]">
          在開始之前，先講一個前提：工具會一直變，但背後的思考方式不太會。所以這篇我會盡量聊「為什麼這樣做」，而不只是「怎麼做」。畢竟照著步驟做很容易，難的是知道什麼時候該換條路走。
        </p>
        <h2 className="mt-9 mb-4 text-2xl font-semibold">為什麼要重新思考？</h2>
        <p className="mb-[22px]">
          過去我習慣先把功能做出來再說，文件、測試、規格都是事後補的。這在一個人寫小專案時沒什麼問題，但只要協作的人一多，或是把
          AI 拉進流程裡，這套做法就會開始出包。
        </p>
        <h3 className="mt-[30px] mb-3.5 text-xl font-semibold">
          三個我最常踩的坑
        </h3>
        <ul className="mb-[22px] list-disc pl-[22px]">
          <li className="mb-2.5">
            需求說不清楚，做到一半才發現方向錯了 — 這時用{" "}
            <code className="rounded-hh-s bg-hh-surface-neutral px-1.5 py-0.5 text-[15px] text-[#d4380d]">
              spec.md
            </code>{" "}
            先寫下來就能省很多事。
          </li>
          <li className="mb-2.5">
            改了東西卻忘了同步文件，過幾天連自己都看不懂。
          </li>
          <li className="mb-2.5">想回頭修改前面的決定，卻發現流程被鎖死了。</li>
        </ul>
        <p className="mb-[22px]">
          後來我把流程改成「先對齊、再動手」。每次開始前，先用一段話把要做的事寫清楚，確認彼此（包含
          AI）的理解一致，再開始實作。聽起來很簡單，但效果出乎意料地好。
        </p>
        <pre className="mb-[26px] overflow-x-auto rounded-[10px] bg-[#1f2024] px-5 py-[18px] font-mono text-sm leading-[1.7] text-[#e6e6e6]">
          <span className="text-[#7fdbca]">$</span> opsx:new{" "}
          <span className="text-[#ffcb6b]">&quot;add login&quot;</span>
          {"\n"}
          <span className="text-[#82d97a]">✓</span> created proposal.md{"\n"}
          <span className="text-[#82d97a]">✓</span> created spec.md{"\n"}
          <span className="text-[#7fdbca]">$</span> opsx:ff{"\n"}
          <span className="text-[#82d97a]">✓</span> all tasks generated
        </pre>
        <p className="mb-2">
          當然，這套流程不是萬靈丹。有些一次性的小腳本，硬要寫規格反而綁手綁腳。重點還是那句老話：選對工具，比用力使用工具更重要。
        </p>
      </div>

      {/* Promo callout */}
      <div className="my-9 mt-9 rounded-[0_var(--hh-radius-m)_var(--hh-radius-m)_0] border-l-4 border-hh-primary bg-hh-primary-tint px-6 py-[22px]">
        <div className="mb-2 text-[18px] font-semibold">工商服務</div>
        <p className="mb-3.5 text-[15px] leading-[1.7] text-hh-text-primary">
          想更系統地把這套流程帶進你的專案嗎？我開了一場線上工作坊，從零帶你跑完一輪，名額有限。
        </p>
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-hh-s bg-hh-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-hh-primary-hover"
        >
          了解工作坊
        </a>
      </div>

      {/* Tags */}
      <div className="mb-9 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-hh-l bg-hh-surface-neutral px-3 py-[5px] text-sm text-hh-text-primary"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="mb-9 grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))] gap-4">
        <Link
          href={`/articles/${prev.slug}`}
          className="rounded-hh-m bg-white px-[22px] py-5 shadow-hh-20 transition-transform hover:-translate-y-[3px]"
        >
          <div className="mb-2 text-[13px] text-hh-text-secondary">
            ← 上一篇
          </div>
          <div className="text-base font-semibold text-hh-text-emphasize">
            {prev.title}
          </div>
        </Link>
        <Link
          href={`/articles/${next.slug}`}
          className="rounded-hh-m bg-white px-[22px] py-5 text-right shadow-hh-20 transition-transform hover:-translate-y-[3px]"
        >
          <div className="mb-2 text-[13px] text-hh-text-secondary">
            下一篇 →
          </div>
          <div className="text-base font-semibold text-hh-text-emphasize">
            {next.title}
          </div>
        </Link>
      </div>

      {/* Comments */}
      <section className="rounded-hh-l bg-white px-[30px] py-7 shadow-hh-20">
        <h3 className="mb-1 text-xl font-semibold">留言討論</h3>
        <div className="mb-6 text-sm text-hh-text-secondary">
          3 則留言 · 5 則回覆
        </div>

        <div className="mb-6 flex gap-3.5">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-hh-surface-medium font-semibold text-hh-text-secondary">
            A
          </div>
          <div className="flex-1">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-[15px] font-semibold">Alex_Chen</span>
              <span className="text-[13px] text-hh-text-disabled">3 天前</span>
            </div>
            <p className="text-[15px] leading-[1.7] text-hh-text-primary">
              非常實用的整理！想請教一下，如果是已經做到一半的舊專案，要怎麼把規格補回去比較順？
            </p>
            <div className="mt-3 border-l-2 border-black/[.06] pl-4">
              <div className="mb-1.5 flex items-center gap-2">
                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-hh-ink-dark text-[13px] font-semibold text-white">
                  龍
                </div>
                <span className="text-sm font-semibold">作者</span>
                <span className="rounded-hh-s bg-hh-primary-tint px-2 py-px text-xs text-hh-primary">
                  所有者
                </span>
              </div>
              <p className="text-sm leading-[1.7] text-hh-text-primary">
                好問題！我通常會先挑一個還在動的模組，把它現在的行為描述成
                spec，再慢慢往外擴。一次補全反而容易爛尾。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex gap-3.5">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-hh-surface-medium font-semibold text-hh-text-secondary">
            M
          </div>
          <div className="flex-1">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-[15px] font-semibold">mei.dev</span>
              <span className="text-[13px] text-hh-text-disabled">1 週前</span>
            </div>
            <p className="text-[15px] leading-[1.7] text-hh-text-primary">
              那段 terminal 的範例幫我釐清了不少，已經在自己的 side project
              試了，謝謝分享 👍
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-hh-m border border-black/[.12]">
          <div className="flex border-b border-black/[.08]">
            <div className="border-b-2 border-hh-primary px-4 py-2.5 text-sm font-semibold text-hh-text-emphasize">
              輸入
            </div>
            <div className="px-4 py-2.5 text-sm text-hh-text-secondary">
              預覽
            </div>
          </div>
          <div className="min-h-20 p-4 text-sm text-hh-text-disabled">
            登入後即可留言…
          </div>
        </div>
        <div className="mt-3.5 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-hh-s bg-[#24292f] px-4 py-[9px] text-sm font-semibold text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z" />
            </svg>
            用 GitHub 登入
          </button>
        </div>
      </section>
    </article>
  );
}
