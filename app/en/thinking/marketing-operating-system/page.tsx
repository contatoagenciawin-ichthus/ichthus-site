import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingEn } from "@/lib/thinking-content"

const article = thinkingEn[0]

export const metadata: Metadata = {
  title: `${article.title} — Thinking`,
  description: article.dek,
  alternates: {
    canonical: "/en/thinking/marketing-operating-system",
    languages: {
      en: "/en/thinking/marketing-operating-system",
      "pt-BR": "/pt/thinking/marketing-como-sistema-operacional",
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
      counterpartHref="/pt/thinking/marketing-como-sistema-operacional"
      counterpartLabel="PT"
    />
  )
}
