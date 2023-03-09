import BlogFilter from '@/components/BlogFilter';
import BlogListItem from '@/components/BlogListItem';

export default function Blog() {
  return (
    <>
      <div className="mx-auto box-border max-w-screen-xl px-8 sm:px-12">
        <h1 className="pt-8 pb-5 text-3xl font-bold leading-normal sm:pt-16 sm:pb-10 sm:text-6xl">
          Blog
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <div className="grid grid-cols-1 gap-10 sm:col-span-8 sm:col-start-1 lg:grid-cols-2">
            <BlogListItem title="Title1" />
            <BlogListItem title="Title2" />
            <BlogListItem title="Title3" />
            <BlogListItem title="Title4" />
          </div>
          <aside className="col-span-3 col-start-10 hidden rounded-xl sm:block">
            <BlogFilter />
          </aside>
        </div>
      </div>
    </>
  );
}
