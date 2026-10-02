import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { thinkingEn } from "@/lib/thinking-content"

export const metadata: Metadata = {
  title: "Thinking — Ichthus",
  description: "Ideas on business, brand, growth, customer experience and technology.",
}

export default function ThinkingIndex() {
  return (
    <main className="min-h-screen bg-[#f2f2ef] text-black">
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">ICHTHUS</Link>
          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.1em]">
            <Link href="/pt/thinking" className="text-black/35 transition hover:text-black">PT</Link>
            <span className="border-b border-black pb-0.5">EN</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Thinking</p>
            <p>Ichthus point of view</p>
          </div>
          <div>
            <h1 className="max-w-6xl text-[clamp(4rem,8.6vw,9rem)] font-bold leading-[0.84] tracking-[-0.08em]">
              Ideas we use
              <br />
              to make better
              <br />
              decisions.
            </h1>
            <p className="mt-12 max-w-3xl border-t border-black/15 pt-7 text-xl leading-8 text-black/60 sm:text-2xl">
              Business, brand, growth, customer experience and technology — connected rather than treated as separate disciplines.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">Current essays</p>
            <div className="border-t border-black/15">
              {thinkingEn.map((article) => (
                <Link
                  key={article.slug}
                  href={`/en/thinking/${article.slug}`}
                  className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                >
                  <span className="text-sm text-black/30">{article.number}</span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">{article.eyebrow}</p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-black/45">{article.dek}</p>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
