import '@/style/global.css';

import { Noto_Sans_TC } from 'next/font/google';

import metaData from '@/constants/metaData';

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'optional',
});

export const metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable}`}>
      <head />
      <body className={`${notoSansTC.className} font-sans`}>{children}</body>
    </html>
  );
}
