import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingPt } from "@/lib/thinking-content"

const article = thinkingPt[2]

export const metadata: Metadata = {
  title: `${article.title} — Ideias — Ichthus`,
  description: article.dek,
}

export default function Page() {
  return (
    <ThinkingArticlePage
      article={article}
      locale="pt"
      counterpartHref="/en/thinking/brand-and-performance"
      counterpartLabel="EN"
    />
  )
}
