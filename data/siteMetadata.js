/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'MTCode',
  author: 'Martin Lin',
  headerTitle: 'MTCode',
  description:
    'Hi,我是 Martin, 一名來自台灣的前端工程師, 非本科轉職者之一, 經營此部落格紀錄自己的所學所想, 擴大自己的影響力',
  language: 'zh-TW',
  theme: 'system',
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/ChengYiLin/MartinCode',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'cheng.yi.lin.217@gmail.com',
  github: 'https://github.com/ChengYiLin',
  twitter: 'https://twitter.com/zy7786',
  linkedin: 'https://www.linkedin.com/in/cheng-yi-lin',
  locale: 'zh-TW',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-9E073G8KPV',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
