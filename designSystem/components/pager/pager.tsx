import Link from "next/link";

interface PagerProps {
  currentPage: number;
  totalPages: number;
  /** Page 1 lives at basePath; page n≥2 at `${basePath}/page/${n}`. */
  basePath?: string;
}

function hrefForPage(page: number, basePath: string): string {
  return page <= 1 ? basePath : `${basePath}/page/${page}`;
}

/** Condensed page list: first, neighbours of current, last — with … for gaps. */
function pageWindow(current: number, total: number): (number | "…")[] {
  const wanted = new Set([1, current - 1, current, current + 1, total]);
  const pages = [...wanted]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);

  const out: (number | "…")[] = [];
  let prev = 0;
  for (const n of pages) {
    if (n - prev > 1) out.push("…");
    out.push(n);
    prev = n;
  }
  return out;
}

const arrowBtn =
  "flex h-10 w-10 flex-none items-center justify-center rounded-hh-s border border-black/[.12] bg-white transition-colors";

export function Pager({
  currentPage,
  totalPages,
  basePath = "/articles",
}: PagerProps) {
  if (totalPages <= 1) return null;

  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {isFirst ? (
        <span
          aria-disabled="true"
          className={`${arrowBtn} text-hh-text-disabled`}
        >
          <ChevronLeft />
        </span>
      ) : (
        <Link
          href={hrefForPage(currentPage - 1, basePath)}
          aria-label="上一頁"
          className={`${arrowBtn} text-hh-text-primary hover:bg-hh-primary-tint`}
        >
          <ChevronLeft />
        </Link>
      )}

      {pageWindow(currentPage, totalPages).map((item, i) =>
        item === "…" ? (
          <span
            key={`gap-${i}`}
            className="flex-none px-0.5 text-hh-text-disabled"
          >
            …
          </span>
        ) : item === currentPage ? (
          <span
            key={item}
            aria-current="page"
            className="flex h-10 min-w-10 flex-none items-center justify-center rounded-hh-s bg-hh-primary text-sm font-semibold text-white"
          >
            {item}
          </span>
        ) : (
          <Link
            key={item}
            href={hrefForPage(item, basePath)}
            className="flex h-10 min-w-10 flex-none items-center justify-center rounded-hh-s border border-black/[.12] bg-white text-sm text-hh-text-primary transition-colors hover:bg-hh-primary-tint"
          >
            {item}
          </Link>
        ),
      )}

      {isLast ? (
        <span
          aria-disabled="true"
          className={`${arrowBtn} text-hh-text-disabled`}
        >
          <ChevronRight />
        </span>
      ) : (
        <Link
          href={hrefForPage(currentPage + 1, basePath)}
          aria-label="下一頁"
          className={`${arrowBtn} text-hh-text-primary hover:bg-hh-primary-tint`}
        >
          <ChevronRight />
        </Link>
      )}
    </div>
  );
}

function ChevronLeft() {
  return (
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
  );
}

function ChevronRight() {
  return (
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
  );
}
