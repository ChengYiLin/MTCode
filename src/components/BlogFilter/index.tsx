import { groq } from 'next-sanity';
import { FC } from 'react';

export const categoryQuery = groq`*[_type == 'category' && !(_id in path("drafts.**"))] {
  "id": _id,
  title
}`;

export interface ICategory {
  id: string;
  title: string;
}

interface IFilterTag {
  value: string;
}

const FilterTag: FC<IFilterTag> = ({ value }) => {
  return (
    <div className="cursor-pointer rounded-full bg-slate-200 px-3 py-1 text-sm dark:bg-slate-500 hover:dark:bg-slate-600">
      {value}
    </div>
  );
};

interface Props {
  categories: ICategory[];
}

const BlogFilter: FC<Props> = ({ categories }) => {
  return (
    <>
      <div className="mx-4 border-b-2 border-stone-200 dark:border-stone-600">
        <p className="text-lg leading-normal"># 標籤</p>
        <div className="flex flex-col items-start gap-4 px-4 py-4">
          {Array.isArray(categories) &&
            categories.map((categoryInfo) => (
              <FilterTag key={categoryInfo.id} value={categoryInfo.title} />
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogFilter;
