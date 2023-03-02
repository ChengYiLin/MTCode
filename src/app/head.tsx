import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>Martin Code - 網頁前後端開發、軟體工程師轉職、電商</title>
      <meta
        property="og:title"
        content="Martin Code - 網頁前後端開發、軟體工程師轉職、電商"
      ></meta>
      <meta
        name="description"
        content="Martin 林政儀, 我是來自台灣的軟體工程師, 擅長網頁前後端開發, 熟悉 JavaScript 及 React, 非本科系轉職寫軟體"
      />
      <meta
        property="og:description"
        content="Martin 林政儀, 我是來自台灣的軟體工程師, 擅長網頁前後端開發, 熟悉 JavaScript 及 React, 非本科系轉職寫軟體"
      ></meta>

      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      {/* Google Analytics & Site Verification */}
      <meta
        name="google-site-verification"
        content="SYqHpyRQoWfdH7rdpmFmLq4dguvQOo0GwNM4tuCiHUc"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9E073G8KPV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
     
          
          gtag('js', new Date());
  
          gtag('config', 'G-9E073G8KPV');`}
      </Script>
    </>
  );
}
