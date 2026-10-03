import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { thinkingImages, type ThinkingArticle } from "@/lib/thinking-content"

type ThinkingArticlePageProps = {
  article: ThinkingArticle
  locale: "en" | "pt"
  counterpartHref: string
  counterpartLabel: string
}

export function ThinkingArticlePage({
  article,
  locale,
  counterpartHref,
  counterpartLabel,
}: ThinkingArticlePageProps) {
  const labels =
    locale === "en"
      ? {
          back: "Back to Thinking",
          thinking: "Thinking",
          published: "Ichthus point of view",
          next: "Continue exploring",
          home: "Back to Ichthus",
        }
      : {
          back: "Voltar para Ideias",
          thinking: "Ideias",
          published: "Ponto de vista Ichthus",
          next: "Continue explorando",
          home: "Voltar para Ichthus",
        }

  const homeHref = `/${locale}`
  const thinkingHref = `/${locale}/thinking`
  const editorialImage = thinkingImages[article.number]

  return (
    <main className="min-h-screen bg-[#f2f2ef] text-black">
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href={homeHref} className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>

          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.1em] sm:gap-8">
            <Link href={thinkingHref} className="hidden text-black/45 transition hover:text-black sm:inline">
              {labels.thinking}
            </Link>
            <Link href={counterpartHref} className="border-b border-black pb-0.5">
              {counterpartLabel}
            </Link>
          </div>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
              <p>{article.number}</p>
              <p>{article.eyebrow}</p>
              <p>{article.readTime}</p>
              <p>{labels.published}</p>
            </div>

            <div>
              <h1 className="max-w-[1200px] text-[clamp(3.5rem,8vw,8.7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                {article.title}
              </h1>
              <p className="mt-12 max-w-4xl border-t border-black/15 pt-7 text-xl leading-[1.4] tracking-[-0.025em] text-black/70 sm:text-2xl lg:text-3xl">
                {article.dek}
              </p>
            </div>
          </div>
        </section>

        {editorialImage && (
          <section className="border-y border-black/15 bg-[#111]">
            <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={editorialImage.src}
                  alt={locale === "en" ? editorialImage.altEn : editorialImage.altPt}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-black/15 bg-white">
          <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
              <div className="hidden lg:block">
                <Link
                  href={thinkingHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black/55 transition hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {labels.back}
                </Link>
              </div>

              <div className="max-w-[980px]">
                {article.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    className={index === 0 ? "" : "mt-20 border-t border-black/15 pt-16 sm:mt-24 sm:pt-20"}
                  >
                    <div className="grid gap-6 sm:grid-cols-[64px_1fr]">
                      <span className="text-sm text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="max-w-3xl text-3xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                          {section.heading}
                        </h2>
                        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-black/65 sm:text-xl sm:leading-9">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}

                <div className="mt-24 border-t border-black/15 pt-12 sm:mt-32 sm:pt-16">
                  <p className="max-w-4xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    {article.closing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
              {labels.next}
            </p>
            <div>
              <Link
                href={thinkingHref}
                className="group flex items-end justify-between gap-8 border-t border-white/15 py-8"
              >
                <p className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
                  {labels.thinking}
                </p>
                <ArrowUpRight className="h-6 w-6 text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href={homeHref}
                className="group flex items-end justify-between gap-8 border-t border-b border-white/15 py-8"
              >
                <p className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  {labels.home}
                </p>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
