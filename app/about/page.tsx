import type { Metadata } from "next";
import Link from "next/link";
import { profile, timeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "關於",
  description: profile.tagline,
};

export default function AboutPage() {
  return (
    <div>
      {/* Profile + bio */}
      <div className="mb-6 flex flex-wrap gap-10 rounded-3xl bg-white p-9 shadow-sm">
        <div className="w-[260px] max-w-full flex-none">
          <div className="mb-[18px] flex aspect-square w-full items-center justify-center rounded-lg bg-[linear-gradient(135deg,#d3d8de,#e6e9ed)]">
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,.9)"
              strokeWidth="1.3"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
          </div>
          <h2 className="mb-1.5 text-[26px] font-semibold">{profile.name}</h2>
          <p className="mb-[18px] text-sm leading-[1.5] text-muted-foreground">
            {profile.tagline}
          </p>
          <div className="flex flex-col gap-2.5 border-b border-black/[.08] pb-[18px] text-sm text-foreground">
            <span className="inline-flex items-center gap-[9px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-[9px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M3 21V8l9-5 9 5v13" />
                <path d="M9 21v-6h6v6" />
              </svg>
              {profile.org}
            </span>
            <span className="inline-flex items-center gap-[9px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {profile.email}
            </span>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-2.5">
            {profile.socials.map((s) => (
              <div
                key={s}
                className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-muted text-[13px] font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-[280px] flex-1">
          <div className="mb-3.5 flex items-center gap-2 text-sm text-muted-foreground">
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
            <span className="text-foreground">關於</span>
          </div>
          <h1 className="mb-5 text-[30px] font-semibold">「哈囉，世界！」</h1>
          {profile.bio.map((para, i) => (
            <p
              key={i}
              className="mb-[18px] text-base leading-[1.9] text-foreground"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Work tags */}
      <div className="mb-6 rounded-3xl bg-white px-8 py-7 shadow-sm">
        <h3 className="mb-[18px] text-base font-semibold text-foreground">
          工作
        </h3>
        <div className="flex flex-wrap gap-3">
          {profile.workTags.map((w) => (
            <span
              key={w}
              className="rounded-lg bg-muted px-[18px] py-[9px] text-[15px] text-foreground"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ITHOME timeline */}
      <div className="rounded-3xl bg-white px-8 py-7 shadow-sm">
        <h3 className="mb-[22px] text-base font-semibold tracking-[.04em] text-foreground">
          ITHOME 鐵人賽
        </h3>
        <div className="relative pl-2">
          {timeline.map((entry, i) => {
            const isLast = i === timeline.length - 1;
            return (
              <div
                key={`${entry.year}-${entry.title}`}
                className="relative flex gap-[18px] pb-[26px]"
              >
                <div className="w-12 flex-none pt-px text-right text-[15px] font-semibold text-foreground">
                  {entry.year}
                </div>
                <div className="relative flex flex-none flex-col items-center">
                  <span
                    className={[
                      "z-[1] mt-[5px] h-3 w-3 rounded-full",
                      entry.win ? "bg-amber-400" : "bg-muted",
                    ].join(" ")}
                  />
                  {!isLast && (
                    <span className="absolute top-3.5 bottom-[-26px] w-0.5 bg-black/[.08]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2.5">
                    <span
                      className={[
                        "rounded-sm px-[9px] py-px text-xs font-semibold",
                        entry.win
                          ? "bg-amber-100 text-amber-700"
                          : "bg-muted text-muted-foreground",
                      ].join(" ")}
                    >
                      {entry.award}
                    </span>
                    <span className="text-[13px] text-muted-foreground">
                      {entry.group}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-foreground">
                    {entry.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
