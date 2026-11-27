import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Capabilities({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const capabilities = [
    {
      number: '01',
      title: t("Estratégia & Marca", "Strategy & Brand"),
      description: t("Posicionamento, estratégia de marca, identidade, mensagem, pesquisa e go-to-market.", "Positioning, brand strategy, identity, messaging, research and go-to-market."),
    },
    {
      number: '02',
      title: t("Experiências Digitais", "Digital Experiences"),
      description: t("Sites, plataformas, produtos digitais, UX/UI e experiências de conversão.", "Websites, platforms, digital products, UX/UI and conversion experiences."),
    },
    {
      number: '03',
      title: t("Crescimento & Aquisição", "Growth & Acquisition"),
      description: t("Estratégia de campanhas, mídia paga, conteúdo, performance, analytics e experimentação.", "Campaign strategy, paid media, content, performance, analytics and experimentation."),
    },
    {
      number: '04',
      title: t("Tecnologia & IA", "Technology & AI"),
      description: t("CRM, agentes de IA, automações, integrações, sistemas de atendimento e software sob medida.", "CRM, AI agents, automations, integrations, customer systems and custom software."),
    },
  ]

  return (
    <section id="atuacao" aria-labelledby="capabilities-title" data-cursor-surface="light" className="border-y border-line bg-paper py-[clamp(96px,12vw,180px)] text-ink">
      <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-16">
        <h2 id="capabilities-title" className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-graphite">
          {t("Capacidades", "Capabilities")}
        </h2>
        <div className="border-t border-line">
          {capabilities.map((capability) => (
            <article key={capability.number} className="grid gap-4 border-b border-line py-9 sm:grid-cols-[42px_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6 sm:py-11 lg:grid-cols-[56px_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
              <span className="pt-1 text-[12px] text-graphite">{capability.number}</span>
              <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.04em] lg:text-4xl">
                {capability.title}
              </h3>
              <p className="max-w-xl text-[16px] leading-7 text-graphite">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
