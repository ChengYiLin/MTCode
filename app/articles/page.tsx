import type { Metadata } from "next";
import { ArticlesView } from "./articles-view";

export const metadata: Metadata = {
  title: "文章",
  description: "記錄學習心得與技術分享。",
};

export default function ArticlesPage() {
  return <ArticlesView page={1} />;
}
