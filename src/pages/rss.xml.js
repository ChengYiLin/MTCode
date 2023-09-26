import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function GET() {
  return rss({
    title: 'MartinCode | Blog',
    description: 'My journey learning Astro',
    site: 'https://my-blog-site.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  })
}
