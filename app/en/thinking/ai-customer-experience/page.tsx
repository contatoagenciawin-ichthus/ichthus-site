import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingEn } from "@/lib/thinking-content"

const article = thinkingEn[1]

export const metadata: Metadata = {
  title: `${article.title} — Thinking — Ichthus`,
  description: article.dek,
}

export default function Page() {
  return (
    <ThinkingArticlePage
      article={article}
      locale="en"
      counterpartHref="/pt/thinking/ia-e-experiencia-do-cliente"
      counterpartLabel="PT"
    />
  )
}
