import CustomMDX from '@/components/CustomMDX';
import PageTitle from '@/components/utils/PageTitle';
import { dateFormate } from '@/lib/date';
import { client } from '@/lib/sanity/client';
interface IPostInfo {
  title: string;
  subTitle: string;
  slug: string;
  createTime: Date;
  blog: string;
}

export const revalidate = 300;

export async function generateStaticParams() {
  const slugList: { slug: string }[] = await client.fetch(
    `*[_type == 'post' && !(_id in path("drafts.**"))] {
      "slug": slug.current,
    }`,
  );

  return slugList.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const post: IPostInfo = await client.fetch(
    `*[_type == 'post' && (slug.current in path("${slug}"))][0]{
      title,
      subTitle,
      "slug": slug.current,
      createTime,
      blog
    }`,
  );

  return (
    <div>
      <PageTitle>
        {post.title}
        {post.subTitle && (
          <>
            ，
            <br className="sm:hidden" />
            {post.subTitle}
          </>
        )}
      </PageTitle>

      <p>{dateFormate(post.createTime, 'YYYY-MM-DD')}</p>

      <div className="w-full py-8 sm:w-3/4">
        <CustomMDX source={post.blog} />
      </div>
    </div>
  );
}
