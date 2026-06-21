import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesView } from "../../articles-view";
import { getTotalPages } from "@/lib/posts";

export const dynamicParams = false;

interface Props {
  params: Promise<{ page: string }>;
}

export function generateStaticParams() {
  const total = getTotalPages();
  // Page 1 is served by /articles; generate 2..total here.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return { title: `文章 — 第 ${page} 頁` };
}

export default async function ArticlesPagedPage({ params }: Props) {
  const { page } = await params;
  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();
  return <ArticlesView page={pageNum} />;
}
