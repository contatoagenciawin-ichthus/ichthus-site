import { ArrowUpRight } from 'lucide-react'
import { thinkingEn, thinkingPt } from '@/lib/thinking-content'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Insights({ locale }: { locale: SiteLocale }) {
  const t = getTranslator(locale)
  const articles = locale === 'en-US' ? thinkingEn : thinkingPt
  const base = locale === 'en-US' ? '/en/thinking' : '/pt/thinking'
  return (
    <section id="thinking" aria-labelledby="insights-title" data-cursor-surface="light" className="border-b border-line bg-paper py-[clamp(72px,10vw,140px)] text-ink">
      <div id="ideias" className="site-shell grid scroll-mt-[72px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-16">
        <div>
          <h2 id="insights-title" className="text-[11px] font-medium uppercase tracking-[0.12em] text-graphite">{t("Ideias", "Insights")}</h2>
          <p className="mt-3 max-w-[24ch] text-[14px] leading-6 text-graphite">{t("Perspectivas sobre negócios, marca, crescimento e tecnologia.", "Perspectives on business, brand, growth, and technology.")}</p>
        </div>
        <div className="border-t border-line">
          {articles.map(article => (
            <a key={article.slug} href={base + '/' + article.slug} className="site-link group grid items-center gap-4 border-b border-line py-8 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-graphite">{article.eyebrow}</p>
                <h3 className="mt-2 max-w-4xl font-display text-3xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-4xl">{article.title}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
          <a href={base} className="site-link mt-8 inline-flex items-center gap-2 text-sm font-semibold"><span className="site-link-label">{t("Ver todas as ideias", "View all insights")}</span><ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  )
}
