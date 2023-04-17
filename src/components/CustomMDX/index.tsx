// components/mdx-remote.js
import Link from 'next/link';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

const CustomMDX = (props: MDXRemoteProps) => {
  return (
    /* @ts-expect-error Async Server Component */
    <MDXRemote
      {...props}
      components={{
        h1: ({ children }) => <h2 className="py-2 text-4xl">{children}</h2>,
        h2: ({ children }) => <h3 className="py-2 text-3xl">{children}</h3>,
        h3: ({ children }) => <h4 className="py-2 text-2xl">{children}</h4>,
        h4: ({ children }) => <h5 className="py-2 text-xl">{children}</h5>,
        p: ({ children }) => <p>{children}</p>,
        a: ({ children, href }) => (
          <Link href={href || '/'} target="_blank" className="text-sky-500">
            {children}
          </Link>
        ),
        ul: ({ children }) => (
          <ul className="list-disc py-2 pl-5">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal py-2 pl-6">{children}</ol>
        ),
        li: ({ children }) => <li className="pb-2">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="my-2 ml-6 border-l-4 border-l-slate-400 py-2 pl-4">
            <div className="text-lg text-slate-400">{children}</div>
          </blockquote>
        ),
      }}
    />
  );
};

export default CustomMDX;
