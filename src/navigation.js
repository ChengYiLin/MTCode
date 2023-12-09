import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首頁',
      href: getPermalink('/'),
    },
    {
      text: '部落格',
      links: [
        {
          text: '全部文章',
          href: getBlogPermalink(),
        },
        {
          text: '依據 分類',
          href: getPermalink('documentation', 'category'),
        },
        {
          text: '依據 標籤',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: '關於我',
      href: getPermalink('/about'),
    },
    {
      text: '聯繫我',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Home',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mtcode.tw/' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=61550755944923',
    },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ChengYiLin' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2023 MTCode. All Rights Reserved.`,
};
