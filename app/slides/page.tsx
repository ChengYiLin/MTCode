import type { Metadata } from "next";
import Link from "next/link";
import { slides } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "投影片",
  description: "分享我的演講簡報與教學投影片。",
};

export default function SlidesPage() {
  return (
    <div>
      {/* Header card */}
      <div className="mb-7 rounded-hh-l bg-white px-8 py-[30px] shadow-hh-20">
        <div className="mb-4 flex items-center gap-2 text-sm text-hh-text-secondary">
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
          <span className="text-hh-text-primary">投影片</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-3.5">
          <div>
            <h1 className="mb-1.5 text-[32px] font-semibold">投影片</h1>
            <p className="text-[15px] text-hh-text-secondary">
              分享我的演講簡報與教學投影片
            </p>
          </div>
          <span className="text-sm text-hh-text-secondary">
            共 {slides.length} 份簡報
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(290px,1fr))] gap-6">
        {slides.map((slide) => (
          <div
            key={slide.title}
            className="cursor-pointer overflow-hidden rounded-hh-m bg-white shadow-hh-20 transition-all duration-300 hover:-translate-y-1 hover:shadow-hh-30"
          >
            <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-[linear-gradient(135deg,#d3d8de,#e6e9ed)]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,.92)"
                strokeWidth="1.3"
              >
                <rect x="3" y="4" width="18" height="12" rx="1.5" />
                <path d="M12 16v4M8 20h8" />
              </svg>
              <span className="absolute right-2.5 bottom-2.5 rounded-hh-s bg-[rgba(31,32,36,.82)] px-[9px] py-0.5 text-xs font-semibold text-white">
                {slide.pages} 頁
              </span>
            </div>
            <div className="px-4 pt-4 pb-[18px]">
              <h3 className="mb-2.5 line-clamp-2 text-[18px] leading-[1.4] font-semibold">
                {slide.title}
              </h3>
              <p className="mb-3.5 line-clamp-2 text-sm leading-[1.6] text-hh-text-secondary">
                {slide.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-hh-s bg-hh-primary-tint px-2 py-0.5 text-xs font-semibold text-hh-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-black/[.06] pt-3 text-[13px] text-hh-text-secondary">
                <span className="inline-flex min-w-0 items-center gap-[5px]">
                  <svg
                    className="flex-none"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {slide.event}
                  </span>
                </span>
                <span className="ml-2 flex-none">{slide.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
