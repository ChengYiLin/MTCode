import { Metadata } from 'next/types';
import { cache } from 'react';

import CustomMDX from '@/components/CustomMDX';
import GiscusComment from '@/components/GiscusComment';
import PageTitle from '@/components/utils/PageTitle';
import { dateFormate } from '@/lib/date';
import { client } from '@/lib/sanity/client';

interface IPageParams {
  params: {
    slug: string;
  };
}

/**
 * @description Use `cache` to prevent deduplicate request
 * @reference https://beta.nextjs.org/docs/data-fetching/caching#graphql-and-cache
 */
const getPostInfo = cache(async (slug: string) => {
  const res: {
    title: string;
    subTitle: string;
    slug: string;
    createTime: Date;
    blog: string;
  } = await client.fetch(
    `*[_type == 'post' && (slug.current in path("${slug}"))][0]{
      title,
      subTitle,
      "slug": slug.current,
      createTime,
      blog
    }`,
  );

  return res;
});

/**
 * @description Handle Dynamic Metadata
 * @reference https://beta.nextjs.org/docs/guides/seo#dynamic-metadata
 */
export async function generateMetadata({
  params,
}: IPageParams): Promise<Metadata> {
  const postInfo = await getPostInfo(params.slug);
  return { title: postInfo.title };
}

/**
 * @description Revalidation time for a layout or page
 * @reference https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
 */
export const revalidate = 300;

/**
 * @description Statically generate dynamic route
 * @reference https://beta.nextjs.org/docs/api-reference/generate-static-params
 */
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

export default async function Blog({ params }: IPageParams) {
  const { slug } = params;
  const post = await getPostInfo(slug);

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

        <div className="py-8">
          <GiscusComment />
        </div>
      </div>
    </div>
  );
}
