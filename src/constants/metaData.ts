import { Metadata } from "next";

const metaData: Metadata = {
    title: {
        default: 'Martin 軟體工程師 - Web 前後端開發、雲端、技術筆記',
        template: '%s | Martin 軟體工程師 - Web 前後端開發、雲端、技術筆記',
      },
      description:
        '我是 Martin,一名非資訊工程背景轉職的軟體工程師,熟習 JavaScript 及 React 進行前端開發,目前也正在學習後端及雲端相關技術,朝全面的軟體工程師邁進',
      keywords: [
        'JavaScript',
        'React',
        'TypeScript',
        'Next.js',
        'Frontend',
        'AWS',
        'GCP',
      ],
      openGraph: {
        title: 'Martin 軟體工程師',
        description: '我是 Martin,一名非資訊工程背景轉職的軟體工程師,熟習 JavaScript 及 React 進行前端開發,目前也正在學習後端及雲端相關技術,朝全面的軟體工程師邁進',
        url: 'https://www.martincode.info/',
        siteName: 'Martin Code',
        images: [
            {
              url: 'https://www.martincode.info/favicon/icon-512x512.png',
              width: 512,
              height: 512,
            },
        ],
        type: 'website',
      },
      themeColor: '#0f182b',
      icons: {
        icon: [
          {
            url: '/favicon/favicon-16x16.png',
            sizes: '16x16',
          },
          {
            url: '/favicon/favicon-32x32.png',
            sizes: '32x32',
          },
        ],
      },
      authors: [
        {
          name: '林政儀(Martin)',
          url: 'https://www.linkedin.com/in/cheng-yi-lin/',
        },
      ],
      creator: '林政儀(Martin)',
}

export default metaData