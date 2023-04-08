import BlogFilter, { categoryQuery, ICategory } from '@/components/BlogFilter';
import BlogListItem, { IPostInfo, postsQuery } from '@/components/BlogListItem';
import { client } from '@/lib/sanity/client';
import getImageUrl from '@/lib/sanity/imageUrl';

export default async function Blog() {
  const posts: IPostInfo[] = (await client.fetch(postsQuery)) || [];
  const categories: ICategory[] = (await client.fetch(categoryQuery)) || [];

  return (
    <>
      <div className="mx-auto box-border max-w-screen-xl px-8 sm:px-12">
        <h1 className="pb-5 pt-8 text-3xl font-bold leading-normal sm:pb-10 sm:pt-16 sm:text-6xl">
          Blog
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <div className="grid grid-cols-1 gap-10 sm:col-span-8 sm:col-start-1 lg:grid-cols-2">
            {Array.isArray(posts) &&
              posts.map((postInfo) => (
                <BlogListItem
                  key={postInfo.id}
                  imageUrl={getImageUrl(postInfo.mainImage)}
                  title={postInfo.title}
                  createTime={postInfo.createTime}
                  categories={postInfo.categories}
                  abstract={postInfo.abstract}
                />
              ))}
          </div>
          <aside className="col-span-3 col-start-10 hidden rounded-xl sm:block">
            <BlogFilter categories={categories} />
          </aside>
        </div>
      </div>
    </>
  );
}
