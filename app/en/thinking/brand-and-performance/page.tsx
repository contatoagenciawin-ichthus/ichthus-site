import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingEn } from "@/lib/thinking-content"

const article = thinkingEn[2]

export const metadata: Metadata = {
  title: `${article.title} — Thinking`,
  description: article.dek,
  alternates: {
    canonical: "/en/thinking/brand-and-performance",
    languages: {
      en: "/en/thinking/brand-and-performance",
      "pt-BR": "/pt/thinking/marca-e-performance",
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
      counterpartHref="/pt/thinking/marca-e-performance"
      counterpartLabel="PT"
    />
  )
}
