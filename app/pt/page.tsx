import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { KoneMachineMotion } from "@/components/work/kone-machine-motion"
import { MobileHomeMenu } from "@/components/site/mobile-home-menu"
import { MobileEditorialMotion } from "@/components/site/mobile-editorial-motion"
import { MobileSelectedWork } from "@/components/site/mobile-selected-work"
import { MobileRelationships } from "@/components/site/mobile-relationships"
import { MobileThinkingRail } from "@/components/site/mobile-thinking-rail"

export const metadata: Metadata = {
  title: { absolute: "Ichthus — Estratégia, Marca, Digital, Crescimento & Tecnologia" },
  description:
    "Empresa independente de estratégia, marca e digital atuando na interseção entre crescimento e tecnologia.",
  alternates: {
    canonical: "/pt",
    languages: {
      en: "/en",
      "pt-BR": "/pt",
    },
  },
  openGraph: {
    title: "Ichthus",
    description:
      "Estratégia, marca, digital, crescimento e tecnologia para empresas em movimento.",
    locale: "pt_BR",
  },
}

const koneRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public"
const innovRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/innovclean-site/main/public/brand"
const vemRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets"

const relationships = [
  ["Kone Máquinas", "Indústria", "Brasil / Internacional"],
  ["InnovClean Services", "Serviços comerciais", "Reino Unido"],
  ["Vem Viver", "Alimentos & bebidas", "Brasil"],
  ["LA Climatização", "Serviços técnicos / Climatização", "Brasil"],
  ["Instituto Fontes", "Educação / Impacto social", "Brasil"],
  ["Pet Endoscopia", "Saúde veterinária", "Brasil"],
  ["Eduardo Brasil", "Serviços profissionais", "Brasil"],
  ["El Kadri & Cia", "Jurídico / B2B", "Brasil"],
  ["Instituto BellaVida", "Saúde", "Brasil"],
]

const proof = [
  ["Desde 2014", "Operação independente"],
  ["Brasil + Reino Unido", "Projetos e relações contínuas"],
  ["Estratégia → Tecnologia", "Um sistema integrado de capacidades"],
  ["Clientes + ventures", "Pensamos e construímos"],
]

const capabilities = [
  {
    number: "01",
    title: "Estratégia & Marca",
    text: "Posicionamento, estratégia de marca, identidade, mensagem, pesquisa e go-to-market.",
  },
  {
    number: "02",
    title: "Experiências Digitais",
    text: "Sites, plataformas, produtos digitais, UX/UI e experiências de conversão.",
  },
  {
    number: "03",
    title: "Crescimento & Aquisição",
    text: "Estratégia de campanhas, mídia paga, conteúdo, performance, analytics e experimentação.",
  },
  {
    number: "04",
    title: "Tecnologia & IA",
    text: "CRM, agentes de IA, automações, integrações, sistemas de atendimento e software sob medida.",
  },
]

const thinking = [
  {
    title: "Marketing não é um departamento. É um sistema operacional.",
    eyebrow: "Crescimento / Operação",
    href: "/pt/thinking/marketing-como-sistema-operacional",
  },
  {
    title: "O que a IA muda — e o que não muda — na experiência do cliente.",
    eyebrow: "IA / Experiência do cliente",
    href: "/pt/thinking/ia-e-experiencia-do-cliente",
  },
  {
    title: "Marca e performance não deveriam viver em salas separadas.",
    eyebrow: "Marca / Performance",
    href: "/pt/thinking/marca-e-performance",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-[#f2f2ef] text-black">
      <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f2f2ef]/95 backdrop-blur">
        <div className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.11em] lg:flex">
            <a href="/pt#work">Projetos</a>
            <a href="/pt#capabilities">Capacidades</a>
            <a href="/pt#about">Sobre</a>
            <a href="/pt#thinking">Ideias</a>
            <Link href="/pt/contact">Contato</Link>
          </nav>

          <div className="flex items-center gap-4">
            <MobileHomeMenu locale="pt" />
            <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.1em]">
              <span className="border-b border-black pb-0.5">PT</span>
              <Link href="/en" className="text-black/35 transition hover:text-black">EN</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] bg-[#111] px-5 pb-5 pt-8 text-white sm:px-8 sm:pb-8 sm:pt-12 lg:bg-transparent lg:px-12 lg:pb-36 lg:pt-28 lg:text-black">
        <div className="grid gap-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="lg:hidden">
            <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/40">
              Independente / Brasil / Internacional
            </p>
          </div>

          <div className="hidden pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45 lg:block">
            <p>Independente</p>
            <p>Estratégia / Marca</p>
            <p>Digital / Crescimento</p>
            <p>Tecnologia</p>
          </div>

          <div>
            <h1 className="max-w-[1220px] text-[clamp(2.85rem,10.7vw,4rem)] font-bold leading-[0.87] tracking-[-0.068em] sm:text-[clamp(3.5rem,8.5vw,5.4rem)] lg:text-[clamp(4rem,8.6vw,9.3rem)] lg:leading-[0.84] lg:tracking-[-0.08em]">
              Construímos marcas,
              <br />
              experiências digitais
              <br />
              e sistemas de crescimento.
            </h1>

            <div className="mt-8 grid gap-5 border-t border-white/20 pt-5 sm:grid-cols-2 lg:mt-20 lg:gap-8 lg:border-black/15 lg:pt-7">
              <p className="max-w-2xl text-base leading-[1.45] tracking-[-0.02em] text-white/72 sm:text-xl lg:text-3xl lg:leading-[1.35] lg:text-black">
                Estratégia, design, aquisição e tecnologia conectados do pensamento à execução.
              </p>
              <div className="sm:justify-self-end">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm font-semibold lg:border-black"
                >
                  Ver projetos selecionados <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <MobileEditorialMotion locale="pt" />
          </div>
        </div>
      </section>

      <div id="work">
        <MobileSelectedWork locale="pt" />

        <section className="hidden border-t border-black/15 bg-white lg:block">
        <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-7 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Projetos selecionados / 01—04
            </p>
            <p className="hidden max-w-md text-right text-sm leading-6 text-black/45 sm:block">
              Quatro projetos. Quatro provas diferentes do que a Ichthus consegue construir.
            </p>
          </div>
        </div>

        <Link href="/pt/work/kone" className="group block border-t border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.38fr_0.62fr]">
            <div className="flex min-h-[430px] flex-col justify-between p-5 sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/40">
                  01 / Kone Máquinas
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div>
                <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                  Engenharia,
                  <br />
                  traduzida.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Traduzindo cinco décadas de engenharia industrial brasileira para uma
                  audiência digital e internacional.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Indústria / B2B / Digital / Internacional
                </p>
              </div>
            </div>

            <div className="relative min-h-[58vh] overflow-hidden bg-[#ecece7] lg:min-h-[72vh]">
              <KoneMachineMotion
                src={`${koneRaw}/machines/hero-ka-70.png`}
                alt="Kone industrial drilling machine"
              />
            </div>
          </article>
        </Link>

        <Link href="/pt/work/innovclean" className="group block border-t border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.62fr_0.38fr]">
            <div className="relative min-h-[58vh] overflow-hidden bg-[#183c34] lg:min-h-[72vh]">
              <img
                loading="lazy"
                decoding="async"
                src={`${innovRaw}/london-aerial.jpg`}
                alt="London aerial view"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.018]"
              />
              <div className="absolute inset-0 bg-[#183c34]/18" />
              <img
                loading="lazy"
                decoding="async"
                src={`${innovRaw}/mark-construction-light.png`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <p className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.13em] text-white/70 sm:bottom-8 sm:left-8">
                Londres / Reino Unido
              </p>
            </div>

            <div className="flex min-h-[430px] flex-col justify-between bg-[#f0eee7] p-5 sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/40">
                  02 / InnovClean
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div>
                <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                  Feito daqui.
                  <br />
                  Relevante lá.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Uma parceria digital contínua com uma empresa britânica de serviços,
                  conduzida a partir do Brasil.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Internacional / Digital / Parceria contínua
                </p>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/pt/work/vem-viver" className="group block border-t border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.38fr_0.62fr]">
            <div className="flex min-h-[430px] flex-col justify-between bg-[#f2eee5] p-5 text-[#172119] sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/40">
                  03 / Vem Viver
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div>
                <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                  Uma história
                  <br />
                  vira
                  <br />
                  uma marca.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Transformando uma história iniciada em 1992 em uma plataforma estratégica para uma
                  nova proposta de consumo.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Estratégia / Marca / Consumo
                </p>
              </div>
            </div>

            <div className="relative min-h-[58vh] overflow-hidden bg-[#173d2d] lg:min-h-[72vh]">
              <img
                loading="lazy"
                decoding="async"
                src={`${vemRaw}/hero-grapes.jpg`}
                alt="Composição de marca da Vem Viver"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.018]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/35 via-transparent to-transparent" />
            </div>
          </article>
        </Link>

        <Link href="/pt/work/la-marcia" className="group block border-y border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.62fr_0.38fr]">
            <div className="relative min-h-[62vh] overflow-hidden bg-[#0f3548] p-5 text-white sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex h-full min-h-[54vh] flex-col justify-between border border-white/15 bg-[#0a2938] p-5 sm:min-h-[60vh] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Marc.I.A.</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/40">
                      Operação conectada
                    </p>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-[#14bf63]" />
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Lead", "Conversa", "Orçamento", "Serviço"].map((item, index) => (
                    <div key={item} className="border border-white/15 bg-white/[0.04] p-4">
                      <p className="text-[9px] text-white/25">0{index + 1}</p>
                      <p className="mt-6 text-lg font-semibold">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/15 pt-5">
                  <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                    Demanda → conversa → orçamento → ordem de serviço → histórico.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[430px] flex-col justify-between bg-[#f28a26] p-5 sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/50">
                  04 / LA + Marc.I.A.
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div>
                <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                  Um só fluxo,
                  <br />
                  de ponta a ponta.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/60">
                  Conectando aquisição, atendimento, CRM, orçamentos, operação
                  e fluxos assistidos por IA.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/45">
                  Crescimento / CX / CRM / IA / Tecnologia
                </p>
              </div>
            </div>
          </article>
        </Link>
      </section>
      </div>

      <MobileRelationships locale="pt" />

      <section className="hidden bg-[#111] text-white lg:block">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                Relações selecionadas
              </p>
              <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/35">
                Uma pequena seleção de empresas e projetos em diferentes setores e mercados.
              </p>
            </div>

            <div>
              <div className="border-t border-white/15">
                {relationships.map(([name, sector, market], index) => (
                  <div
                    key={name}
                    className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[56px_1.25fr_0.9fr_0.7fr] sm:items-center sm:gap-6 sm:py-7"
                  >
                    <span className="text-xs text-white/25">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{name}</p>
                    <p className="text-sm text-white/45">{sector}</p>
                    <p className="text-sm text-white/45 sm:text-right">{market}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
                {proof.map(([value, label]) => (
                  <div key={value} className="min-h-[170px] border-b border-r border-white/15 p-5 sm:p-6">
                    <p className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{value}</p>
                    <p className="mt-3 max-w-[180px] text-xs leading-5 text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mobile-section-reveal mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-44">
        <div className="grid gap-7 border-t border-black/15 pt-6 sm:gap-10 sm:pt-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Quem somos
          </p>
          <div>
            <p className="max-w-6xl text-[2.65rem] font-bold leading-[0.94] tracking-[-0.055em] sm:text-5xl lg:text-8xl lg:leading-[0.98]">
              A Ichthus é uma empresa independente de estratégia, marca e digital que atua
              na interseção entre crescimento e tecnologia.
            </p>

            <div className="mt-8 grid gap-5 border-t border-black/15 pt-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:pt-7 lg:mt-14 lg:gap-10">
              <p className="max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                Trabalhamos com empresas em movimento: crescendo, se reposicionando, se
                modernizando ou construindo novas capacidades. Nosso trabalho pode começar
                na estratégia e continuar por design, aquisição, software e operação.
              </p>
              <div className="sm:justify-self-end">
                <p className="max-w-sm text-sm leading-6 text-black/45">
                  Independente e baseada no Brasil. Trabalhando com empresas daqui e
                  de outros mercados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mobile-section-reveal border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Capacidades
            </p>
            <div className="border-t border-black/15">
              {capabilities.map((item) => (
                <article
                  key={item.number}
                  className="grid grid-cols-[34px_1fr] gap-x-4 gap-y-2 border-b border-black/15 py-5 md:grid-cols-[70px_0.9fr_1.1fr] md:gap-8 md:py-11"
                >
                  <span className="pt-1 text-xs text-black/30 md:pt-0 md:text-sm">{item.number}</span>
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.04em] md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="col-start-2 max-w-xl text-sm leading-5 text-black/50 md:col-start-auto md:text-base md:leading-7">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="thinking" className="mobile-section-reveal mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-36">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Ideias
            </p>
            <p className="mt-3 max-w-[180px] text-sm leading-6 text-black/40">
              Ideias sobre negócios, marca, crescimento e tecnologia.
            </p>
          </div>

          <div>
            <MobileThinkingRail locale="pt" />

            <div className="hidden border-t border-black/15 sm:block">
              {thinking.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                >
                  <span className="text-sm text-black/30">0{index + 1}</span>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                      {item.eyebrow}
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                      {item.title}
                    </h2>
                  </div>
                  <ArrowUpRight className="hidden h-5 w-5 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </Link>
              ))}
            </div>
            <div className="mt-6 hidden text-right sm:block">
              <Link href="/pt/thinking" className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">
                Ver todas as ideias <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                Construído por nós
              </p>
              <p className="mt-3 max-w-[180px] text-sm leading-6 text-white/35">
                Também construímos nossos próprios produtos e negócios.
              </p>
            </div>

            <div className="grid border-l border-t border-white/15 sm:grid-cols-3">
              {[
                ["Proxy", "Sistemas de tecnologia e IA.", "https://proxy.ichthusmkt.com.br/"],
                ["ScribMed", "IA clínica e documentação médica.", "https://www.scribmed.app/"],
                ["Editora Ichthus", "Publicação e propriedade intelectual.", "https://www.editoraichthus.com.br/"],
              ].map(([name, text, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-h-[300px] border-b border-r border-white/15 p-6 transition-colors hover:bg-white hover:text-black sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 transition-colors group-hover:text-black/35">
                      Venture
                    </p>
                    <ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:text-black/45" />
                  </div>
                  <div className="mt-24">
                    <h2 className="text-3xl font-bold tracking-[-0.045em]">{name}</h2>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/45 transition-colors group-hover:text-black/50">{text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
          <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Contato
            </p>
            <div>
              <h2 className="max-w-6xl text-[clamp(3.7rem,8vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                Tem algo
                <br />
                importante para construir?
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 sm:items-end">
                <div>
                  <Link
                    href="/pt/contact"
                    className="group inline-flex items-center gap-3 text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
                  >
                    Iniciar uma conversa
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                  <p className="mt-3 text-sm text-black/40">Ou escreva para contato@ichthusmkt.com.br</p>
                </div>
                <p className="text-sm leading-6 text-black/45 sm:text-right">
                  Brasil
                  <br />
                  Atuação internacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="text-lg font-bold tracking-[-0.04em]">ICHTHUS</p>
            <p className="mt-2 text-xs text-black/40">Independente / Brasil / Internacional</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-medium uppercase tracking-[0.1em] text-black/50">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Proxy</span>
            <span>Editora Ichthus</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
