import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { SplitText } from '@/components/redesign/ui/split-text'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function AudienceDoors({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const audienceDoors = [
    {
      eyebrow: t("Para empresas e indústrias", "For companies and industrial businesses"),
      title: t("Reposicionamento, digital e internacionalização", "Repositioning, digital transformation, and international expansion"),
      description:
        t("Para companhias com operação estabelecida que precisam modernizar marca, canais digitais e presença em novos mercados. Projetos de 3 a 9 meses, conduzidos em parceria com a liderança.", "For established companies looking to modernize their brand, digital channels, and presence in new markets. Projects lasting 3 to 9 months, in partnership with leadership."),
      action: t("Ver projetos institucionais", "View corporate projects"),
      href: '#projetos',
    },
    {
      eyebrow: t("Para negócios de serviço", "For service businesses"),
      title: t("Marketing contínuo, com operação e IA", "Ongoing marketing, operations, and AI"),
      description:
        t("Para negócios de serviço que precisam de marca, conteúdo, tráfego, site e atendimento rodando todo mês como um sistema único, com apoio da Marc.I.A.", "For service businesses that need brand, content, paid media, website, and customer service working together every month, supported by Marc.I.A."),
      action: t("Conhecer o modelo contínuo", "Explore ongoing services"),
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
          <p>{t("02 / Com quem trabalhamos", "02 / Who we work with")}</p>
        </div>

        <h2 id="audience-doors-title" className="mt-7 font-display text-[clamp(2.6rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
          <SplitText lines={[t("Duas formas de trabalhar com a gente.", "Two ways to work with us."), t("Escolha o seu ponto de partida.", "Choose your starting point.")]} />
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
