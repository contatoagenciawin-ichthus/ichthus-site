import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingPt } from "@/lib/thinking-content"

const article = thinkingPt[0]

export const metadata: Metadata = {
  title: `${article.title} — Ideias`,
  description: article.dek,
  alternates: {
    canonical: "/pt/thinking/marketing-como-sistema-operacional",
    languages: {
      en: "/en/thinking/marketing-operating-system",
      "pt-BR": "/pt/thinking/marketing-como-sistema-operacional",
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
      counterpartHref="/en/thinking/marketing-operating-system"
      counterpartLabel="EN"
    />
  )
}
