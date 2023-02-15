import "./globals.css";

import { Noto_Sans_TC } from "@next/font/google";

const notoSansTC = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head />
      <body className={`${notoSansTC.className}`}>{children}</body>
    </html>
  );
}
