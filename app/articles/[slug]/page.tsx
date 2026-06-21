import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MediaPlaceholder } from "@/designSystem/components/media-placeholder";
import { getMdxComponents } from "@/designSystem/components/mdx-components";
import {
  formatDate,
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getWordCount,
} from "@/lib/posts";

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) return {};
  return { title: post.title, description: post.description };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const { prev, next } = getAdjacentPosts(slug);

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
          {formatDate(post.date)}
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
          約 {getWordCount(post.content)} 字
        </span>
      </div>

      {/* Body — rendered from the MDX source */}
      <div className="text-[17px] leading-[1.9] text-hh-text-primary">
        <MDXRemote
          source={post.content}
          options={{ blockJS: false }}
          components={getMdxComponents()}
        />
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
        {prev && (
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
        )}
        {next && (
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
        )}
      </div>
    </article>
  );
}
