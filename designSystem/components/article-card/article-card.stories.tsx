import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./article-card";
import type { PostMeta } from "@/lib/posts";

const meta: Meta<typeof ArticleCard> = {
  title: "Blog/ArticleCard",
  component: ArticleCard,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

const base: PostMeta = {
  slug: "reimagine-dev-workflow-with-ai",
  title: "用 AI 重新想像你的開發流程",
  date: "2026-03-02",
  tags: ["AI", "SDD"],
  featured: false,
  published: true,
  description:
    "把 AI 放進日常開發後，最大的改變不是寫得更快，而是思考的方式變了。本文整理我這半年來的工作流調整。",
};

export const Default: Story = {
  args: { article: base },
};

export const Featured: Story = {
  args: { article: { ...base, featured: true } },
};

export const ManyTags: Story = {
  args: {
    article: {
      ...base,
      tags: ["AI", "SDD", "工具", "流程", "觀點"],
    },
  },
};

export const LongTitle: Story = {
  args: {
    article: {
      ...base,
      title:
        "Spec-as-source 是理想還是負擔？從實際導入後遇到的幾個現實問題說起",
    },
  },
};
