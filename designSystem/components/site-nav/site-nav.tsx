"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavKey = "home" | "articles" | "slides" | "about";

interface NavItem {
  key: NavKey;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "首頁", href: "/" },
  { key: "articles", label: "文章", href: "/articles" },
  { key: "slides", label: "投影片", href: "/slides" },
  { key: "about", label: "關於", href: "/about" },
];

function isActive(key: NavKey, pathname: string) {
  if (key === "home") return pathname === "/";
  return pathname === `/${key}` || pathname.startsWith(`/${key}/`);
}

function NavIcon({ navKey }: { navKey: NavKey }) {
  if (navKey === "home") {
    return (
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-hh-m bg-hh-ink-dark text-base font-semibold text-white">
        龍
      </span>
    );
  }
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (navKey === "articles") {
    return (
      <svg {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </svg>
    );
  }
  if (navKey === "slides") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M12 16v4M8 20h8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<NavKey | null>(null);

  return (
    <>
      {/* Desktop floating right rail */}
      <nav
        aria-label="主要導覽"
        className="fixed right-6 top-1/2 z-100 hidden -translate-y-1/2 flex-col gap-1.5 rounded-hh-l bg-white p-2.5 shadow-hh-30 lg:flex"
      >
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.key, pathname);
          return (
            <Link
              key={item.key}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
              className={[
                "relative flex h-[46px] w-[46px] items-center justify-center rounded-hh-m transition-all",
                active
                  ? "bg-hh-primary-tint text-hh-primary"
                  : "bg-transparent text-hh-text-secondary",
              ].join(" ")}
            >
              <NavIcon navKey={item.key} />
              {hovered === item.key && (
                <span className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-hh-m bg-hh-ink-dark px-[11px] py-[5px] text-[13px] font-semibold text-white">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile bottom bar */}
      <nav
        aria-label="主要導覽"
        className="fixed inset-x-0 bottom-0 z-30 flex h-[66px] items-center justify-around border-t border-hh-border-subdued bg-white/95 px-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.07)] backdrop-blur-sm lg:hidden"
      >
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.key, pathname);
          return (
            <Link
              key={item.key}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "flex min-w-[56px] flex-col items-center gap-[3px] rounded-hh-m px-2.5 py-1.5 transition-all",
                active ? "text-hh-primary" : "text-hh-text-secondary",
              ].join(" ")}
            >
              <NavIcon navKey={item.key} />
              <span className="text-[11px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
