import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Locale = "en" | "pt"

const kone =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public/machines/hero-ka-70.png"
const innovclean =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/innovclean-site/main/public/brand/london-aerial.jpg"
const vemViver =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets/hero-grapes.jpg"

export function MobileSelectedWork({ locale }: { locale: Locale }) {
  const copy =
    locale === "en"
      ? {
          heading: "Selected Work / 01—04",
          intro: "Four projects. Four different proofs.",
          kone: {
            title: <>Engineering,<br />translated.</>,
            text: "Five decades of Brazilian engineering, reframed for digital and international audiences.",
            meta: "Industry / B2B / Digital",
          },
          innov: {
            title: <>Built here.<br />Relevant there.</>,
            text: "An ongoing digital partnership supporting a UK commercial services company from Brazil.",
            meta: "International / Digital",
          },
          vem: {
            title: <>A story becomes<br />a brand.</>,
            text: "A history that began in 1992, rebuilt as a strategic consumer brand platform.",
            meta: "Strategy / Brand",
          },
          la: {
            title: <>One thread,<br />end to end.</>,
            text: "Acquisition, service, CRM, quoting, operations and AI connected in one system.",
            meta: "Growth / CX / AI",
          },
          operation: "Connected operations",
          flow: "Demand → conversation → operation.",
        }
      : {
          heading: "Projetos selecionados / 01—04",
          intro: "Quatro projetos. Quatro provas diferentes.",
          kone: {
            title: <>Engenharia,<br />traduzida.</>,
            text: "Cinco décadas de engenharia brasileira reposicionadas para audiências digitais e internacionais.",
            meta: "Indústria / B2B / Digital",
          },
          innov: {
            title: <>Feito daqui.<br />Relevante lá.</>,
            text: "Uma parceria digital contínua com uma empresa britânica de serviços, conduzida a partir do Brasil.",
            meta: "Internacional / Digital",
          },
          vem: {
            title: <>Uma história vira<br />uma marca.</>,
            text: "Uma história iniciada em 1992 reconstruída como plataforma estratégica de marca e consumo.",
            meta: "Estratégia / Marca",
          },
          la: {
            title: <>Um só fluxo,<br />de ponta a ponta.</>,
            text: "Aquisição, atendimento, CRM, orçamento, operação e IA conectados em um único sistema.",
            meta: "Crescimento / CX / IA",
          },
          operation: "Operação conectada",
          flow: "Demanda → conversa → operação.",
        }

  return (
    <section className="border-t border-black/15 bg-white lg:hidden">
      <div className="px-5 pb-6 pt-6 sm:px-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/45">
          {copy.heading}
        </p>
        <p className="mt-2 text-sm text-black/40">{copy.intro}</p>
      </div>

      <Link href={`/${locale}/work/kone`} className="mobile-work-card block border-t border-black/15">
        <div className="relative h-[52vw] min-h-[190px] max-h-[280px] overflow-hidden bg-[#ecece7]">
          <img
            loading="lazy"
            decoding="async"
            src={kone}
            alt="Kone industrial drilling machine"
            className="absolute inset-0 h-full w-full object-contain p-[9%]"
          />
          <span className="absolute left-5 top-5 text-[9px] font-medium uppercase tracking-[0.13em] text-black/40">
            01 / Kone Máquinas
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 px-5 py-6 sm:px-8">
          <div>
            <h2 className="text-[2.55rem] font-bold leading-[0.9] tracking-[-0.06em]">
              {copy.kone.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-5 text-black/50">{copy.kone.text}</p>
            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-black/35">{copy.kone.meta}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5" />
        </div>
      </Link>

      <Link href={`/${locale}/work/innovclean`} className="mobile-work-card block border-t border-black/15">
        <div className="relative h-[52vw] min-h-[190px] max-h-[280px] overflow-hidden bg-[#173d35]">
          <img
            loading="lazy"
            decoding="async"
            src={innovclean}
            alt={locale === "en" ? "London aerial view" : "Vista aérea de Londres"}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#173d35]/22" />
          <div className="absolute inset-x-0 bottom-0 flex justify-between border-t border-white/15 bg-[#173d35]/82 px-5 py-3 text-white">
            <span className="text-[9px] font-medium uppercase tracking-[0.13em]">02 / InnovClean</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/50">London / UK</span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 bg-[#f0eee7] px-5 py-6 sm:px-8">
          <div>
            <h2 className="text-[2.55rem] font-bold leading-[0.9] tracking-[-0.06em]">
              {copy.innov.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-5 text-black/50">{copy.innov.text}</p>
            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-black/35">{copy.innov.meta}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5" />
        </div>
      </Link>

      <Link href={`/${locale}/work/vem-viver`} className="mobile-work-card block border-t border-black/15">
        <div className="relative h-[52vw] min-h-[190px] max-h-[280px] overflow-hidden bg-[#173d2d]">
          <img
            loading="lazy"
            decoding="async"
            src={vemViver}
            alt={locale === "en" ? "Vem Viver brand composition" : "Composição de marca da Vem Viver"}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/45 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 text-[9px] font-medium uppercase tracking-[0.13em] text-white/75">
            03 / Vem Viver
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 bg-[#f2eee5] px-5 py-6 text-[#172119] sm:px-8">
          <div>
            <h2 className="text-[2.55rem] font-bold leading-[0.9] tracking-[-0.06em]">
              {copy.vem.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-5 text-black/50">{copy.vem.text}</p>
            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-black/35">{copy.vem.meta}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5" />
        </div>
      </Link>

      <Link href={`/${locale}/work/la-marcia`} className="mobile-work-card block border-y border-black/15">
        <div className="relative h-[60vw] min-h-[225px] max-h-[320px] overflow-hidden bg-[#0a2938] p-4 text-white">
          <div className="flex h-full flex-col justify-between border border-white/15 bg-[#0f3548] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Marc.I.A.</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.13em] text-white/35">{copy.operation}</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-[#14bf63]" />
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {(locale === "en" ? ["Lead", "Chat", "Quote", "Job"] : ["Lead", "Chat", "Orçam.", "Serviço"]).map((item, index) => (
                <div key={item} className="border border-white/15 bg-white/[0.04] p-2">
                  <p className="text-[7px] text-white/25">0{index + 1}</p>
                  <p className="mt-4 text-[10px] font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="border-t border-white/15 pt-3 text-base font-semibold tracking-[-0.035em]">{copy.flow}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-6 bg-[#f28a26] px-5 py-6 sm:px-8">
          <div>
            <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.13em] text-black/45">04 / LA + Marc.I.A.</p>
            <h2 className="text-[2.55rem] font-bold leading-[0.9] tracking-[-0.06em]">
              {copy.la.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-5 text-black/60">{copy.la.text}</p>
            <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.12em] text-black/45">{copy.la.meta}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5" />
        </div>
      </Link>
    </section>
  )
}
