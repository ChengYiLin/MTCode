import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import dayjs from 'dayjs';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { FC } from 'react';

export const postsQuery = groq`*[_type == 'post' && !(_id in path("drafts.**"))] {
  "id": _id,
  title,
  mainImage,
  createTime,
  "categories": categories[] -> title,
  abstract,
}`;

export interface IPostInfo {
  id: string;
  title: string;
  mainImage: SanityImageSource;
  createTime: Date;
  categories: string[];
  abstract: string;
}

interface Props {
  title: string;
  imageUrl: string;
  createTime: Date;
  categories: string[];
  abstract: string;
}

const BlogListItem: FC<Props> = ({
  title,
  imageUrl,
  createTime,
  categories,
  abstract,
}) => {
  return (
    <div className="group cursor-pointer overflow-clip rounded-xl shadow-lg hover:shadow-2xl dark:bg-stone-900 dark:hover:bg-stone-800">
      <div className="relative h-52 overflow-clip">
        <Image
          src={imageUrl}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          alt={title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mb-2 mt-1 flex items-center justify-between text-xs">
          <p className="text-slate-400 dark:text-slate-600">
            {dayjs(createTime).format('YYYY-MM-DD')}
          </p>
          <div>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <p
                  key={category}
                  className="rounded-md bg-slate-200 px-2 py-1 dark:bg-slate-500"
                >
                  {category}
                </p>
              ))}
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          {abstract}
        </p>
      </div>
    </div>
  );
};

export default BlogListItem;
