import '@/style/global.css';

import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans_TC } from 'next/font/google';
import Script from 'next/script';

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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9E073G8KPV"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9E073G8KPV');
          `}
        </Script>
      </head>
      <body className={`${notoSansTC.className} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
