// Static content for the 技術部落格 (tech blog) — ported from the
// Claude Design prototype "技術部落格 Prototype.dc.html".
// Article content lives in content/posts/*.mdx (see lib/posts.ts).

export interface Slide {
  title: string;
  desc: string;
  pages: number;
  tags: string[];
  event: string;
  date: string;
}

export interface TimelineEntry {
  year: string;
  award: string;
  group: string;
  title: string;
  /** Whether this was a winning entry (gold styling) vs. a runner-up. */
  win: boolean;
}

export const slides: Slide[] = [
  {
    title: "Vibe Coding 補完計畫",
    desc: "用自然語言與 AI 互動，讓不會寫程式的人也能把想法做出來。",
    pages: 81,
    tags: ["Vibe Coding", "SDD", "規格驅動"],
    event: "台大博雅館",
    date: "2026/3/21",
  },
  {
    title: "當 AI 知道太多：企業 RAG 的資料防護",
    desc: "AI 在企業的應用越來越廣，但資料安全也越來越重要。",
    pages: 122,
    tags: ["AI 技術", "資料防護", "RAG"],
    event: "企業內訓",
    date: "2026/1/30",
  },
  {
    title: "為了喝牛奶而開了一個牧場",
    desc: "介紹自建售票平台的目的，以及怎麼讓報到流程更順。",
    pages: 182,
    tags: ["AI 開發", "售票系統", "產品設計"],
    event: "IxDA 互動快板",
    date: "2026/1/29",
  },
  {
    title: "宅宅自以為的浪漫：跟 AI 一起辦研討會",
    desc: "用 AI 開發一個專屬售票系統，涵蓋會員、票券與支付。",
    pages: 108,
    tags: ["AI Coding", "Vibe Coding"],
    event: "DevFest Taipei 2025",
    date: "2025/11/30",
  },
  {
    title: "讓工程師失業的 N 道陰影",
    desc: "AI Agent 時代的開發者生存指南，從工具到心態。",
    pages: 110,
    tags: ["AI Agent", "Vibe Coding"],
    event: "Hello World Dev Conf",
    date: "2025/10/15",
  },
  {
    title: 'print("Hello World")，然後呢？',
    desc: "當我們寫下第一行程式，背後到底發生了什麼事？",
    pages: 86,
    tags: ["Python", "原始碼"],
    event: "PyCon Taiwan 2025",
    date: "2025/9/7",
  },
];

export const profile = {
  name: "高見龍",
  tagline: "開發者 / 講師 / 作者 / 愛玩新玩具的工程師",
  location: "台北，台灣",
  org: "某某學院",
  email: "hello@example.com",
  socials: ["Fb", "Git", "IG", "Th", "X", "Yt", "In"],
  bio: [
    "你好，我是個喜歡寫程式、也希望可以寫一輩子程式的電腦阿宅！",
    "在大學時發現電腦很好玩，開始自學程式，後來因為朋友介紹接觸了社群活動，從此一頭栽進開源與分享的世界。我光是參加社群活動還不過癮，甚至還自己辦活動，就是想認識更多跟我一樣的傻子。",
    "我透過寫書、寫 Blog 與拍影片來記錄學習心得，希望對大家有幫助。網站內容可能會因為時間或軟體改版而過期，若有任何問題或是哪邊寫錯了，還請不吝留言或來信指教。",
    "最近很喜歡用 AI 做些小東西。如果你也想一起聊聊技術、或分享新玩具，歡迎加入我們的社群！",
  ],
  workTags: [
    "網站開發者",
    "講師",
    "技術書作者",
    "企業內訓",
    "技術顧問",
    "魔物獵人",
  ],
};

export const timeline: TimelineEntry[] = [
  {
    year: "2025",
    award: "冠軍",
    group: "AI & Data 組",
    title: "「為你自己學 n8n」",
    win: true,
  },
  {
    year: "2024",
    award: "冠軍",
    group: "Python 組",
    title: "「為你自己讀 CPython 原始碼」",
    win: true,
  },
  {
    year: "2023",
    award: "冠軍",
    group: "Software Development 組",
    title: "「為你自己學 Rust」",
    win: true,
  },
  {
    year: "2023",
    award: "冠軍",
    group: "影片教學組",
    title: "「Vite 原始碼解讀」",
    win: true,
  },
  {
    year: "2022",
    award: "優選",
    group: "影片教學組",
    title: "「為你自己學 GitLab CI/CD」",
    win: false,
  },
  {
    year: "2021",
    award: "冠軍",
    group: "永豐金融 APIs 組",
    title: "「看手冊學金流串接」",
    win: true,
  },
];
