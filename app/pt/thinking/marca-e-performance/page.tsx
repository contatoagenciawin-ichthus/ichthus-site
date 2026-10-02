import type { Metadata } from "next"
import { ThinkingArticlePage } from "@/components/thinking/thinking-article-page"
import { thinkingPt } from "@/lib/thinking-content"

const article = thinkingPt[2]

export const metadata: Metadata = {
  title: `${article.title} — Ideias`,
  description: article.dek,
  alternates: {
    canonical: "/pt/thinking/marca-e-performance",
    languages: {
      en: "/en/thinking/brand-and-performance",
      "pt-BR": "/pt/thinking/marca-e-performance",
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
      counterpartHref="/en/thinking/brand-and-performance"
      counterpartLabel="EN"
    />
  )
}
