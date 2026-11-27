import { SplitText } from '@/components/redesign/ui/split-text'
import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Manifesto({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  return (
    <section id="manifesto" aria-labelledby="manifesto-title" data-cursor-surface="light" className="bg-paper-2 py-[clamp(96px,12vw,180px)] text-ink">
      <div className="site-shell site-grid">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">01 / Manifesto</p>
          <h2 id="manifesto-title" className="mb-8 font-display text-[clamp(2.6rem,5.4vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            <SplitText lines={[t("Marca, digital e crescimento", "Brand, digital, and growth"), t("no mesmo sistema.", "in one system.")]} />
          </h2>
          <RevealOnScroll className="max-w-[62ch] text-[18px] leading-[1.55] text-graphite">
            <p id="ideias">
              {t("Somos uma empresa independente de estratégia, marca e digital. Trabalhamos com companhias em movimento — crescendo, reposicionando-se, modernizando ou construindo novas capacidades — da estratégia à execução, no mesmo time.", "We are an independent strategy, brand, and digital company. We work with businesses in motion, whether growing, repositioning, modernizing, or building new capabilities, with one team from strategy through execution.")}
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
