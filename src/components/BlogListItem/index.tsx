import Image from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
}

const BlogListItem: FC<Props> = ({ title }) => {
  return (
    <div className="group cursor-pointer overflow-clip rounded-xl shadow-lg hover:shadow-2xl dark:bg-stone-900 dark:hover:bg-stone-800">
      <div className="relative h-48 overflow-clip">
        <Image
          src="/assets/template.webp"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          alt="123"
        />
      </div>
      <div className="py-4 px-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-1 mb-2 flex text-xs text-slate-400 dark:text-slate-600">
          <p>{'2023/02/17'}</p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This is a test. This is a test. This is a test. This is a test. This
          is a test. This is a test.
        </p>
      </div>
    </div>
  );
};

export default BlogListItem;
