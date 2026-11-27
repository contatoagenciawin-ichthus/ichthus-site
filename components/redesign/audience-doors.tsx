import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { SplitText } from '@/components/redesign/ui/split-text'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function AudienceDoors({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const audienceDoors = [
    {
      eyebrow: t("Para empresas e indústrias", "For companies and industrial businesses"),
      title: t("Posicionamento, transformação digital e expansão", "Positioning, digital transformation, and expansion"),
      description:
        t("Estratégia e execução para empresas que precisam fortalecer sua marca, modernizar operações e alcançar novos mercados.", "Strategy and execution for businesses looking to strengthen their brand, modernize operations, and reach new markets."),
      action: t("Ver projetos institucionais", "View corporate projects"),
      href: '#projetos',
    },
    {
      eyebrow: t("Para negócios de serviço", "For service businesses"),
      title: t("Marketing, crescimento e tecnologia aplicada", "Marketing, growth, and applied technology"),
      description:
        t("Operações integradas de marketing, aquisição, atendimento e inteligência artificial.", "Integrated marketing, acquisition, customer service, and AI operations."),
      action: t("Conhecer nossas capacidades", "Explore our capabilities"),
      href: '#atuacao',
    },
  ]
  return (
    <section
      id="publicos"
      aria-labelledby="audience-doors-title"
      data-cursor-surface="dark"
      className="site-dark bg-ink py-[clamp(96px,12vw,180px)] text-paper"
    >
      <div className="site-shell">
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-sand">
          <span aria-hidden="true" className="h-[2px] w-8 shrink-0 bg-red" />
          <p>{t("Com quem trabalhamos", "Who we work with")}</p>
        </div>

        <h2 id="audience-doors-title" className="mt-7 font-display text-[clamp(2.6rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
          <SplitText lines={[t("Diferentes negócios.", "Different businesses."), t("Diferentes desafios.", "Different challenges.")]} />
        </h2>

        <div className="audience-doors-grid mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-2">
          {audienceDoors.map((door, index) => (
            <article
              key={door.eyebrow}
              className={`audience-door flex flex-col px-10 py-10 ${
                index === 0 ? 'border-b md:border-b-0 md:border-r' : ''
              }`}
              style={index === 0 ? { borderColor: 'rgba(247,246,243,0.18)' } : undefined}
            >
              <div className="audience-door-copy flex h-full flex-col transition-opacity duration-[420ms]">
                <p className="audience-door-eyebrow mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-sand transition-colors duration-[420ms]">
                  {door.eyebrow}
                </p>
                <h3 className="mb-5 max-w-[24ch] font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-paper">
                  {door.title}
                </h3>
                <RevealOnScroll className="mb-9 max-w-[34ch]">
                  <p className="audience-door-description text-[16px] leading-[1.55] text-sand transition-colors duration-[420ms]">
                    {door.description}
                  </p>
                </RevealOnScroll>
                <a href={door.href} className="site-link mt-auto inline-flex w-fit items-center gap-1 text-[14px] text-paper">
                  <span className="site-link-label">{door.action}</span>
                  <span aria-hidden="true" className="site-link-arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
