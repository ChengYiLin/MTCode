import { Metadata } from 'next';

import BlogFilter, { categoryQuery, ICategory } from '@/components/BlogFilter';
import BlogListItem, { IPostInfo, postsQuery } from '@/components/BlogListItem';
import PageTitle from '@/components/utils/PageTitle';
import { client } from '@/lib/sanity/client';
import getImageUrl from '@/lib/sanity/imageUrl';

export const metadata: Metadata = {
  title: '部落格',
};

export default async function Blog() {
  const posts: IPostInfo[] = (await client.fetch(postsQuery)) || [];
  const categories: ICategory[] = (await client.fetch(categoryQuery)) || [];

  return (
    <>
      <PageTitle>Blog</PageTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
        <div className="grid grid-cols-1 gap-10 sm:col-span-8 sm:col-start-1 lg:grid-cols-2">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((postInfo) => (
              <BlogListItem
                key={postInfo.id}
                imageUrl={getImageUrl(postInfo.mainImage)}
                title={postInfo.title}
                slug={postInfo.slug}
                createTime={postInfo.createTime}
                categories={postInfo.categories}
                abstract={postInfo.abstract}
              />
            ))
          ) : (
            <p>Coming Soon~</p>
          )}
        </div>
        <aside className="col-span-3 col-start-10 hidden rounded-xl sm:block">
          <BlogFilter categories={categories} />
        </aside>
      </div>
    </>
  );
}
