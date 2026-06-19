import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-20">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Martin 👋
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          I write about web development, software engineering, and the tools I
          use day-to-day. Welcome to MTCode.
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Link href="/blog" className={cn(buttonVariants())}>
            Read the blog
          </Link>
          <a
            href="https://github.com/martinlin"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recent Posts
            </h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
