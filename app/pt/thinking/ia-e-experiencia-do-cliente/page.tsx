import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingPt } from "@/lib/thinking-content"

const article = thinkingPt[1]

export const metadata: Metadata = {
  title: `${article.title} — Ideias`,
  description: article.dek,
  alternates: {
    canonical: "/pt/thinking/ia-e-experiencia-do-cliente",
    languages: {
      en: "/en/thinking/ai-customer-experience",
      "pt-BR": "/pt/thinking/ia-e-experiencia-do-cliente",
    },
  },
  openGraph: {
    title: article.title,
    description: article.dek,
    locale: "pt_BR",
    type: "article",
  },
}

export default function Page() {
  return (
    <ThinkingArticlePage
      article={article}
      locale="pt"
      counterpartHref="/en/thinking/ai-customer-experience"
      counterpartLabel="EN"
    />
  )
}
