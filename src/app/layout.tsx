import "./globals.css";

import { Noto_Sans_TC } from "@next/font/google";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const notoSansTC = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable}`}>
      <head />
      <body className={`${notoSansTC.className}`}>
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-auto pt-14 sm:pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
