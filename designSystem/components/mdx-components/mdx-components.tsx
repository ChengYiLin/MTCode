import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function getMdxComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-9 mb-4 text-[28px] font-semibold text-hh-text-emphasize">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-9 mb-4 text-2xl font-semibold text-hh-text-emphasize">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-[30px] mb-3.5 text-xl font-semibold text-hh-text-emphasize">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-[22px] text-[17px] leading-[1.9] text-hh-text-primary">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-[22px] list-disc pl-[22px] text-[17px] leading-[1.9] text-hh-text-primary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-[22px] list-decimal pl-[22px] text-[17px] leading-[1.9] text-hh-text-primary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-2.5">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-[22px] border-l-4 border-hh-primary pl-4 text-hh-text-secondary italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded-hh-s bg-hh-surface-neutral px-1.5 py-0.5 font-mono text-[15px] text-[#d4380d]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-[26px] overflow-x-auto rounded-[10px] bg-hh-ink-dark px-5 py-[18px] font-mono text-sm leading-[1.7] text-[#e6e6e6] [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[#e6e6e6]">
        {children}
      </pre>
    ),
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hh-primary underline underline-offset-4 transition-colors hover:text-hh-primary-hover"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href ?? "#"}
          className="text-hh-primary underline underline-offset-4 transition-colors hover:text-hh-primary-hover"
        >
          {children}
        </Link>
      );
    },
    hr: () => <hr className="border-hh-border-subdued my-8" />,
  };
}
