// Content model for the 技術部落格 (tech blog) — ported from the
// Claude Design prototype "技術部落格 Prototype.dc.html".

export interface Article {
  slug: string;
  title: string;
  /** Display date, formatted as YYYY.MM.DD to match the design. */
  date: string;
  tags: string[];
  featured: boolean;
  /** Approximate word count, shown on the article detail page. */
  words: string;
  excerpt: string;
}

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

export const articles: Article[] = [
  {
    slug: "reimagine-dev-workflow-with-ai",
    title: "用 AI 重新想像你的開發流程",
    date: "2026.03.02",
    tags: ["AI", "SDD", "工具"],
    featured: true,
    words: "4,820",
    excerpt:
      "把 AI 放進日常開發後，最大的改變不是寫得更快，而是思考的方式變了。本文整理我這半年來的工作流調整。",
  },
  {
    slug: "spec-driven-development",
    title: "規格驅動開發：先說清楚，再動手",
    date: "2026.02.03",
    tags: ["SDD", "OpenSpec", "流程"],
    featured: false,
    words: "5,214",
    excerpt:
      "與其讓 AI 猜你想要什麼，不如先把規格寫好。聊聊 SDD 的核心觀念，以及它如何讓協作更順。",
  },
  {
    slug: "spec-as-source",
    title: "Spec-as-source 是理想還是負擔？",
    date: "2026.01.28",
    tags: ["SDD", "文件", "觀點"],
    featured: false,
    words: "3,900",
    excerpt:
      "用自然語言寫規格、再由工具生成程式碼，聽起來很美。實際導入後，我遇到的幾個現實問題。",
  },
  {
    slug: "cli-design-notes",
    title: "給工具一點靈魂：我的 CLI 設計筆記",
    date: "2026.01.20",
    tags: ["工具", "DX", "開源"],
    featured: false,
    words: "4,100",
    excerpt:
      "好用的命令列工具不只是功能正確，更要讓人用得開心。記錄我設計小工具時的幾個取捨。",
  },
  {
    slug: "build-a-blog-engine",
    title: "從零打造一個部落格引擎",
    date: "2026.01.15",
    tags: ["Ruby", "後端", "專案"],
    featured: false,
    words: "6,200",
    excerpt:
      "市面上的部落格框架很多，但自己寫一個最能學到東西。這篇是整個專案的架構回顧。",
  },
  {
    slug: "write-engineer-part-2",
    title: "寫作吧，工程師！（下）",
    date: "2026.01.11",
    tags: ["寫作", "技術文章"],
    featured: false,
    words: "2,800",
    excerpt:
      "面對空白頁的焦慮其實很正常。延續上篇，聊聊怎麼把腦中的想法穩穩地落成文字。",
  },
  {
    slug: "write-engineer-part-1",
    title: "寫作吧，工程師！（上）",
    date: "2026.01.07",
    tags: ["寫作", "技術文章"],
    featured: false,
    words: "2,600",
    excerpt:
      "工程師的寫作能力常被忽略，但它其實是提升專業表達的重要工具。先從為什麼要寫開始。",
  },
  {
    slug: "testing-isnt-hard",
    title: "把測試寫好，其實沒那麼難",
    date: "2026.01.03",
    tags: ["測試", "後端", "實務"],
    featured: true,
    words: "3,500",
    excerpt:
      "很多人覺得寫測試是負擔。換個角度想，測試其實是你對未來自己的一份溫柔。",
  },
  {
    slug: "n8n-2-tour",
    title: "n8n 2.0 新功能快速導覽",
    date: "2025.12.29",
    tags: ["n8n", "自動化", "AI Agent"],
    featured: false,
    words: "3,000",
    excerpt:
      "n8n 2.0 正式發布，這次大改版引入了不少實用功能。挑幾個我最有感的來分享。",
  },
  {
    slug: "localhost-not-127",
    title: "localhost 不一定是 127.0.0.1",
    date: "2025.12.25",
    tags: ["網路", "原理", "筆記"],
    featured: false,
    words: "1,800",
    excerpt:
      "一個看似理所當然的小知識，背後其實藏著作業系統與解析順序的細節。",
  },
  {
    slug: "learning-or-lazy-with-ai",
    title: "AI 時代寫程式，你是在學還是在偷懶？",
    date: "2025.12.24",
    tags: ["AI", "觀點", "學習"],
    featured: true,
    words: "3,200",
    excerpt:
      "AI 幫你寫完了程式，但你真的學到東西了嗎？聊聊工具與能力之間的微妙界線。",
  },
  {
    slug: "solo-product",
    title: "一個人也能做產品",
    date: "2025.10.08",
    tags: ["產品", "獨立開發", "心得"],
    featured: false,
    words: "4,400",
    excerpt:
      "從想法到上線，獨立開發者要顧的事很多。分享我用最小成本把點子做出來的過程。",
  },
];

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
  workTags: ["網站開發者", "講師", "技術書作者", "企業內訓", "技術顧問", "魔物獵人"],
};

export const timeline: TimelineEntry[] = [
  { year: "2025", award: "冠軍", group: "AI & Data 組", title: "「為你自己學 n8n」", win: true },
  { year: "2024", award: "冠軍", group: "Python 組", title: "「為你自己讀 CPython 原始碼」", win: true },
  { year: "2023", award: "冠軍", group: "Software Development 組", title: "「為你自己學 Rust」", win: true },
  { year: "2023", award: "冠軍", group: "影片教學組", title: "「Vite 原始碼解讀」", win: true },
  { year: "2022", award: "優選", group: "影片教學組", title: "「為你自己學 GitLab CI/CD」", win: false },
  { year: "2021", award: "冠軍", group: "永豐金融 APIs 組", title: "「看手冊學金流串接」", win: true },
];

export const partners = [
  "工業技術研究院",
  "中華電信研究院",
  "聯新國際醫療",
  "國軍高雄總醫院",
  "國泰世華銀行",
  "聯經數位",
  "商業發展研究院",
  "友達光電",
];

/** Headline counters shown on the article-list page (curated, not derived). */
export const articleStats = { posts: "48", years: "12", since: "2014" };

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleIndex(slug: string): number {
  return articles.findIndex((a) => a.slug === slug);
}

/** Articles grouped by year, newest year first — used by the list page. */
export function getArticlesByYear(): { year: string; count: number; items: Article[] }[] {
  const groups = new Map<string, Article[]>();
  for (const a of articles) {
    const year = a.date.slice(0, 4);
    const bucket = groups.get(year) ?? [];
    bucket.push(a);
    groups.set(year, bucket);
  }
  return [...groups.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, items]) => ({ year, count: items.length, items }));
}
