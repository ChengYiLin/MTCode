import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans } from "next/font/google";
import { SiteNav } from "@/designSystem/components/site-nav";
import { SiteFooter } from "@/designSystem/components/site-footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "高見龍 · 技術部落格",
    template: "%s | 高見龍",
  },
  description:
    "記錄學習心得與技術分享 — 開發、AI、工具與一個工程師的日常筆記。",
  openGraph: {
    title: "高見龍 · 技術部落格",
    description:
      "記錄學習心得與技術分享 — 開發、AI、工具與一個工程師的日常筆記。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        notoSans.variable,
      )}
    >
      <body className="min-h-full">
        <SiteNav />
        <main className="min-h-screen pb-[66px] lg:pr-[88px] lg:pb-0">
          <div className="mx-auto max-w-[1080px] px-4 pt-12 pb-16 sm:px-6 lg:pt-[84px]">
            {children}
            <SiteFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
