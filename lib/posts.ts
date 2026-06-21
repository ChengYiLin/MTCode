import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

/** Posts shown per page across the home grid and the /articles list. */
export const POSTS_PER_PAGE = 10;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export interface PostMeta {
  slug: string;
  title: string;
  /** Stored as ISO `YYYY-MM-DD`. Use formatDate() for display. */
  date: string;
  description: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export interface YearGroup {
  year: string;
  count: number;
  items: PostMeta[];
}

function toMeta(
  slug: string,
  data: matter.GrayMatterFile<string>["data"],
): PostMeta {
  const date = String(data.date ?? "");
  if (!ISO_DATE.test(date)) {
    // Fail loudly at build: a dotted/non-padded date silently corrupts the
    // chronological sort (".">"-"), hero selection, pagination and prev/next.
    throw new Error(
      `Post "${slug}" has an invalid date "${date}". Use ISO format YYYY-MM-DD.`,
    );
  }
  return {
    slug,
    title: data.title ?? slug,
    date,
    description: data.description ?? "",
    tags: data.tags ?? [],
    featured: data.featured === true,
    published: data.published !== false,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return toMeta(slug, data);
    })
    .filter((p) => p.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  // Note: does NOT filter on published — callers must guard drafts.
  return { ...toMeta(slug, data), content };
}

/** Total number of pages in the reverse-chronological feed. */
export function getTotalPages(perPage = POSTS_PER_PAGE): number {
  return Math.max(1, Math.ceil(getAllPosts().length / perPage));
}

/** One page-sized slice of the reverse-chronological feed (page is 1-based). */
export function getPostsPage(
  page: number,
  perPage = POSTS_PER_PAGE,
): { items: PostMeta[]; page: number; totalPages: number; total: number } {
  const all = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / perPage));
  const start = (page - 1) * perPage;
  return {
    items: all.slice(start, start + perPage),
    page,
    totalPages,
    total: all.length,
  };
}

/**
 * Neighbours in the reverse-chronological feed. `prev` is older, `next` is
 * newer. Returns null at the ends — no circular wrap.
 */
export function getAdjacentPosts(slug: string): {
  prev: PostMeta | null;
  next: PostMeta | null;
} {
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: all[idx + 1] ?? null,
    next: all[idx - 1] ?? null,
  };
}

/** Group posts by year, newest year first. Counts are per the input list. */
export function groupByYear(items: PostMeta[]): YearGroup[] {
  const groups = new Map<string, PostMeta[]>();
  for (const p of items) {
    const year = p.date.slice(0, 4);
    const bucket = groups.get(year) ?? [];
    bucket.push(p);
    groups.set(year, bucket);
  }
  return [...groups.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, list]) => ({ year, count: list.length, items: list }));
}

/** Derived headline counters for the /articles page header. */
export function getPostStats(): {
  posts: string;
  years: string;
  since: string;
} {
  const all = getAllPosts();
  if (all.length === 0) return { posts: "0", years: "0", since: "—" };
  const years = new Set(all.map((p) => p.date.slice(0, 4)));
  return {
    posts: String(all.length),
    years: String(years.size),
    since: all[all.length - 1].date.slice(0, 4),
  };
}

/** ISO `2026-06-19` → display `2026.06.19`. */
export function formatDate(iso: string): string {
  return iso.replace(/-/g, ".");
}

/**
 * Approximate reading length as a localized string (e.g. "4,820").
 * CJK-aware: Chinese has no word spaces, so we count CJK codepoints plus
 * Latin word tokens rather than splitting on whitespace.
 */
export function getWordCount(content: string): string {
  const stripped = content
    .replace(/```[\s\S]*?```/g, "") // fenced code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links / images → text
    .replace(/[#>*_~\-]/g, ""); // markdown markers
  const cjk = (stripped.match(/[一-鿿]/g) ?? []).length;
  const latin = (stripped.match(/[A-Za-z0-9]+/g) ?? []).length;
  return (cjk + latin).toLocaleString("en-US");
}

/** Plain-text excerpt fallback when frontmatter `description` is empty. */
export function deriveExcerpt(content: string, max = 120): string {
  const text = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}
