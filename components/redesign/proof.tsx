'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function Proof({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const proofPoints = [
    { value: '2014', label: t("Operação independente", "Independent since") },
    { value: 'BR · UK · US', label: t("Presença internacional", "International presence") },
  ]
  
  const portfolioLinks: Record<string, string> = {
    'LA Climatização': 'https://www.laclimatizacao.com.br/',
    'Vem Viver': 'https://loja.emporioliasch.com.br/',
    'Kone Máquinas': 'https://www.kone.ind.br/',
    'InnovClean Services': 'https://innovclean.co.uk/',
    'Instituto Fontes': 'https://fontesinstituto.com.br/',
    'Pet Endoscopia': 'https://www.petendoscopia.com/',
    'Eduardo Brasil': 'https://eduardobrasil.fonsecabrasilserrao.com/',
    'El Kadri & Cia': 'https://www.ekcadvogados.com.br/',
    'Instituto BellaVida': 'https://institutobellavida.com.br/',
    'Summit JiuJitsu': 'https://summitjj.com/',
  }
  const relationships = [
    ['01', 'Kone Máquinas', t("Fabricação industrial", "Industrial manufacturing"), t("Brasil / internacional", "Brazil / international")],
    ['02', 'InnovClean Services', t("Serviços comerciais", "Commercial services"), t("Reino Unido", "United Kingdom")],
    ['03', 'Vem Viver', t("Alimentos e bebidas", "Food & beverage"), t("Brasil", "Brazil")],
    ['04', 'LA Climatização', t("Serviços residenciais / climatização", "Residential services / HVAC"), t("Brasil", "Brazil")],
    ['05', 'Instituto Fontes', t("Educação / impacto social", "Education / social impact"), t("Brasil", "Brazil")],
    ['06', 'Pet Endoscopia', t("Saúde veterinária", "Veterinary care"), t("Brasil", "Brazil")],
    ['07', 'Eduardo Brasil', t("Serviços profissionais", "Professional services"), t("Brasil", "Brazil")],
    ['08', 'El Kadri & Cia', t("Jurídico / B2B", "Legal / B2B"), t("Brasil", "Brazil")],
    ['09', 'Instituto BellaVida', t("Saúde", "Healthcare"), t("Brasil", "Brazil")],
    ['10', 'Summit JiuJitsu', t("Esportes / educação esportiva", "Sports / athletic training"), t("Estados Unidos", "United States")],
  ]
  const reduceMotion = useReducedMotion()

  return (
    <section id="resultados" aria-label={t("Resultados e relações", "Results and relationships")} data-cursor-surface="light" className="bg-paper-2 text-ink">
      <div className="proof-statistics flex min-h-[50svh] items-center py-16">
        <div className="site-shell grid w-full grid-cols-2">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.value}
              className="flex min-h-36 flex-col justify-center border-b border-line px-4 py-7 first:pl-0 last:border-b-0 md:min-h-40 md:border-b-0 md:px-6 md:py-5 md:first:pl-0 md:last:pr-0"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={`mb-3 font-display text-[clamp(1.65rem,3.2vw,3rem)] md:text-[clamp(2rem,3.2vw,3.5rem)] font-bold leading-none tracking-[-0.045em] ${index === 0 ? 'text-red' : 'text-ink'}`}>
                {point.value}
              </p>
              <p className="max-w-[22ch] font-mono text-[11px] uppercase leading-[1.5] tracking-[0.05em] text-graphite">{point.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="site-shell pb-[clamp(96px,12vw,160px)] pt-10">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[clamp(2.6rem,3vw,3rem)] font-semibold leading-tight tracking-[-0.03em]">{t("Relações que construímos.", "Relationships we have built.")}</h2>
          <RevealOnScroll className="max-w-[40ch] text-[14px] leading-[1.5] text-graphite">
            <p>{t("Uma seleção de empresas e projetos em diferentes setores e mercados.", "A selection of companies and projects across industries and markets.")}</p>
          </RevealOnScroll>
        </div>

        <ol aria-label={t("Relações selecionadas", "Selected relationships")} className="m-0 list-none border-t border-line p-0">
          {relationships.map(([number, client, sector, country]) => (
            <li key={number} className="relationship-row grid min-h-14 grid-cols-[42px_minmax(0,1.5fr)_minmax(0,1fr)_auto] items-center gap-x-5 border-b border-line px-3 transition-colors duration-[420ms] hover:bg-paper focus-within:bg-paper">
              <span className="font-mono text-[11px] text-graphite">{number}</span>
              {portfolioLinks[client] ? (
                <a href={portfolioLinks[client]} target="_blank" rel="noopener noreferrer" className="site-link font-sans text-[17px] leading-tight text-ink"><span className="site-link-label">{client}</span> <span aria-hidden="true">↗</span></a>
              ) : <span className="font-sans text-[17px] leading-tight text-ink">{client}</span>}
              <span className="relationship-sector font-mono text-[11px] leading-tight text-graphite transition-colors duration-[420ms]">{sector}</span>
              <span className="text-right font-mono text-[11px] leading-tight text-graphite">{country}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
