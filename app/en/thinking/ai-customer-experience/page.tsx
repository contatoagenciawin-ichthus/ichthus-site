import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingEn } from "@/lib/thinking-content"

const article = thinkingEn[1]

export const metadata: Metadata = {
  title: `${article.title} — Thinking`,
  description: article.dek,
  alternates: {
    canonical: "/en/thinking/ai-customer-experience",
    languages: {
      en: "/en/thinking/ai-customer-experience",
      "pt-BR": "/pt/thinking/ia-e-experiencia-do-cliente",
    },
  },
  openGraph: {
    title: article.title,
    description: article.dek,
    locale: "en",
    type: "article",
  },
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
