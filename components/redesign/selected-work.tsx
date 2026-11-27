import Image from 'next/image'
import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { SplitText } from '@/components/redesign/ui/split-text'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function SelectedWork({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const cases = [
    {
      number: '01',
      client: 'Kone Máquinas',
      title: [t("Engenharia,", "Engineering,"), t("traduzida.", "translated.")],
      description: t("Cinco décadas de engenharia industrial, traduzidas em uma presença digital voltada ao mercado global.", "Five decades of industrial engineering translated into a digital presence for the global market."),
      tags: [t("INDÚSTRIA", "INDUSTRY"), 'B2B', 'DIGITAL', t("INTERNACIONAL", "INTERNATIONAL")],
      image: '/cases/kone-factory-interior.webp',
      alt: t("Fileiras de máquinas industriais da Kone em uma recriação visual baseada em fotografia de arquivo.", "Rows of Kone industrial machines in a visual reconstruction based on an archival photograph."),
      href: '/pt/work/kone',
    },
    {
      number: '02',
      client: 'InnovClean',
      title: [t("Feita aqui.", "Built here."), t("Relevante lá.", "Relevant there.")],
      description: t("Parceria digital contínua com uma empresa britânica de serviços, a partir do Brasil.", "An ongoing digital partnership with a British service company, delivered from Brazil."),
      tags: [t("INTERNACIONAL", "INTERNATIONAL"), 'DIGITAL', t("PARCERIA CONTÍNUA", "ONGOING PARTNERSHIP")],
      image: '/cases/innovclean-corporate-lobby.webp',
      alt: t("Imagem editorial ilustrativa de um lobby corporativo com equipamento profissional de limpeza e vista de Londres.", "Illustrative editorial image of a corporate lobby with professional cleaning equipment and a view of London."),
      href: '/pt/work/innovclean',
    },
    {
      number: '03',
      client: 'Vem Viver',
      title: [t("Uma história", "A story"), t("vira marca.", "becomes a brand.")],
      description: t("Uma história iniciada em 1992, transformada em marca para uma nova linha de sucos integrais.", "A story that began in 1992, transformed into a brand for a new line of pure fruit juices."),
      tags: [t("ESTRATÉGIA", "STRATEGY"), t("MARCA", "BRAND"), t("CONSUMO", "CONSUMER")],
      image: 'https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets/hero-grapes.jpg',
      alt: t("Composição de marca da Vem Viver com uvas.", "Vem Viver brand composition featuring grapes."),
      href: '/pt/work/vem-viver',
    },
    {
      number: '04',
      client: 'LA + Marc.I.A',
      title: [t("Uma linha,", "One journey,"), t("de ponta a ponta.", "end to end.")],
      description: t("A jornada inteira, da aquisição e conversa ao orçamento e serviço concluído.", "The entire journey, from acquisition and conversation to quote and completed service."),
      tags: [t("CRESCIMENTO", "GROWTH"), 'CX', 'CRM', t("IA", "AI"), t("TECNOLOGIA", "TECHNOLOGY")],
      image: '',
      alt: t("Imagem editorial ilustrativa de um técnico de climatização em uma casa contemporânea.", "Illustrative editorial image of an HVAC technician in a contemporary home."),
      href: '/pt/work/la-marcia',
    },
  ]
  return (
    <section id="projetos" aria-labelledby="selected-work-title" data-cursor-surface="light" className="bg-paper py-[clamp(96px,12vw,180px)] text-ink">
      <div className="site-shell site-grid mb-14 items-end md:mb-20">
        <div className="col-span-12 md:col-span-9">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">{t("Projetos selecionados", "Selected work")}</p>
          <h2 id="selected-work-title" className="max-w-[15ch] font-display text-[clamp(2.6rem,4.2vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            <SplitText lines={[t("Estratégia aplicada", "Strategy applied"), t("a negócios reais.", "to real businesses.")]} />
          </h2>
        </div>
        <p className="col-span-12 mt-6 text-[16px] leading-[1.55] text-graphite md:col-span-3 md:mt-0">{t("Uma seleção de projetos que demonstra a diversidade dos nossos clientes, mercados e competências.", "A selection of projects reflecting the diversity of our clients, markets, and capabilities.")}</p>
      </div>

      <div>
        {cases.map((project, index) => {
          const textFirst = index % 2 === 0
          const preserveImageDetail = project.number === '02'
          const textSpan = textFirst ? 'md:col-span-5' : 'md:col-span-7'
          const imageSpan = textFirst ? 'md:col-span-7' : 'md:col-span-5'

          return (
            <div key={project.number}>
              <article id={`case-${project.number}`} className="selected-case grid min-h-[78svh] grid-cols-1 border-t border-line md:grid-cols-12">
                <div className={`selected-case-copy ${textSpan} col-span-1 flex items-center px-[var(--site-margin)] py-12 md:px-10 md:py-16`}>
                  <div className="selected-case-sticky w-full">
                    <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite">{project.client}</p>
                    <h3 className="selected-case-title mb-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                      <SplitText lines={project.title} />
                    </h3>
                    <RevealOnScroll className="mb-6 max-w-[42ch] text-[16px] leading-[1.5] text-graphite">
                      <p>{project.description}</p>
                    </RevealOnScroll>
                    <p className="mb-8 max-w-[42ch] font-mono text-[10px] leading-[1.8] tracking-[0.06em] text-graphite">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tag}>{tagIndex > 0 ? ' / ' : ''}{tag}</span>
                      ))}
                    </p>
                    <a href={locale === 'en-US' ? project.href.replace('/pt/', '/en/') : project.href} target="_blank" rel="noreferrer" data-cursor-label={t("VER", "VIEW")} className="site-link inline-flex items-center gap-1 text-[14px] text-ink">
                      <span className="site-link-label">{t("Ver case", "View case study")}</span>
                      <span aria-hidden="true" className="site-link-arrow">↗</span>
                    </a>
                  </div>
                </div>

                <RevealOnScroll className={`selected-case-image ${imageSpan} col-span-1 min-h-[78svh]`}>
                  <a
                    href={locale === 'en-US' ? project.href.replace('/pt/', '/en/') : project.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-label={t("VER", "VIEW")}
                    aria-label={`${t("Ver o case", "View case study")} ${project.client}`}
                    className="selected-case-image-link relative block h-full min-h-[78svh] overflow-hidden bg-paper-2"
                  >
                    {project.number === '04' ? (
                      <div className="selected-case-image-media absolute inset-0 flex flex-col justify-between bg-[#0f3548] p-8 text-white md:p-12">
                        <div className="flex items-center justify-between border-b border-white/20 pb-5">
                          <p className="text-xl font-semibold">Marc.I.A.</p>
                          <span className="h-3 w-3 rounded-full bg-[#14bf63]" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {[t("Lead", "Lead"), t("Conversa", "Conversation"), t("Orçamento", "Quote"), t("Serviço", "Service")].map((step, i) => (
                            <div key={step} className="border border-white/20 p-4">
                              <p className="mb-4 text-xs text-white/70">0{i + 1}</p>
                              <p className="font-semibold">{step}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-2xl font-semibold leading-tight">{t("Operação conectada, de ponta a ponta.", "Connected operations, end to end.")}</p>
                      </div>
                    ) : project.number === '03' ? (
                      <img src={project.image} alt={project.alt} loading="lazy" decoding="async" className="selected-case-image-media absolute inset-0 h-full w-full object-cover" />
                    ) : (
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes={textFirst ? '(max-width: 768px) 100vw, 58.333vw' : '(max-width: 768px) 100vw, 41.667vw'}
                      unoptimized={preserveImageDetail}
                      className="selected-case-image-media object-cover"
                    />
                    )}
                  </a>
                </RevealOnScroll>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
