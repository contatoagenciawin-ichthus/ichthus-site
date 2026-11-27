import { SplitText } from '@/components/redesign/ui/split-text'
import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Manifesto({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  return (
    <section id="manifesto" aria-labelledby="manifesto-title" data-cursor-surface="light" className="bg-paper-2 py-[clamp(96px,12vw,180px)] text-ink">
      <div className="site-shell site-grid">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">{t("Quem somos", "About us")}</p>
          <h2 id="manifesto-title" className="mb-8 font-display text-[clamp(2.6rem,5.4vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            <SplitText lines={[t("Independentes por natureza.", "Independent by nature."), t("Integrados por estratégia.", "Integrated by strategy.")]} />
          </h2>
          <RevealOnScroll className="max-w-[62ch] text-[18px] leading-[1.55] text-graphite">
            <p>
              {t("A Ichthus é uma empresa independente de estratégia, marca, marketing e tecnologia. Atuamos junto a empresas que precisam crescer, se modernizar, fortalecer seu posicionamento ou expandir para novos mercados.", "Ichthus is an independent strategy, brand, marketing, and technology company. We work with businesses looking to grow, modernize, strengthen their positioning, or expand into new markets.")}
            </p>
            <p className="mt-5">{t("Conectamos competências estratégicas, criativas e tecnológicas em uma única operação.", "We bring strategic, creative, and technological capabilities together in one operation.")}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
