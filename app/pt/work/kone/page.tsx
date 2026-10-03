import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { KoneMachineMotion } from "@/components/work/kone-machine-motion"

export const metadata: Metadata = {
  title: "Kone Máquinas — Projeto",
  description:
    "Uma experiência digital para uma fabricante industrial brasileira com mais de cinco décadas de história em engenharia.",
  alternates: {
    canonical: "/pt/work/kone",
    languages: {
      en: "/en/work/kone",
      "pt-BR": "/pt/work/kone",
    },
  },
  openGraph: {
    description: "Uma experiência digital para uma fabricante industrial brasileira com mais de cinco décadas de história em engenharia.",
    locale: "pt_BR",
    type: "website",
  }
}

const raw = "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public"

const machines = [
  { model: "KA-70", type: "Furadeira de coluna", image: `${raw}/machines/hero-ka-70.png` },
  { model: "KFU-3", type: "Fresadora universal", image: `${raw}/machines/kfu-3.png` },
  { model: "KM-45 MF", type: "Furadeira industrial", image: `${raw}/machines/km-45-mf.png` },
]

const principles = [
  {
    number: "01",
    title: "Engenharia antes da decoração.",
    text: "A experiência precisava tornar a capacidade técnica mais fácil de compreender sem transformar uma fabricante industrial em uma marca de lifestyle.",
  },
  {
    number: "02",
    title: "O produto é o protagonista.",
    text: "Máquinas, especificações e aplicações conduzem o sistema visual. Interface e movimento organizam a atenção em vez de competir com os equipamentos.",
  },
  {
    number: "03",
    title: "Internacional desde o desenho.",
    text: "Português, inglês e espanhol foram tratados como parte da arquitetura da informação desde o início, não como uma adaptação posterior.",
  },
]

export default function KoneCasePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f0] text-black">
      <header className="border-b border-black/15 bg-[#f3f3f0]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Projeto / Kone</span>
            <span className="flex items-center gap-2">
              <span className="border-b border-black pb-0.5">PT</span>
              <Link href="/en/work/kone" className="text-black/35 transition hover:text-black">EN</Link>
            </span>
            <a
              href="https://www.kone.ind.br"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border-b border-black pb-0.5"
            >
              Ver projeto <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>Kone Máquinas</p>
            <p>Indústria / B2B</p>
            <p>Brazil</p>
            <p>2026</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.3vw,9rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Engenharia,
              <br />
              traduzida para
              <br />
              uma nova audiência.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Reposicionando mais de cinco décadas de engenharia industrial brasileira
                para uma audiência digital e internacional.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:justify-self-end sm:max-w-sm">
                <p>
                  Estratégia, arquitetura da informação, experiência digital, interface
                  e apresentação multilíngue de produtos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative min-h-[68vh] overflow-hidden bg-[#ecece7] lg:min-h-[78vh]">
            <div className="absolute left-5 top-5 z-10 text-[10px] font-medium uppercase tracking-[0.16em] text-black/50 sm:left-8 sm:top-8">
              Kone / KA-70
            </div>
            <KoneMachineMotion
              src={`${raw}/machines/hero-ka-70.png`}
              alt="Kone KA-70 industrial drilling machine"
            />
            <div className="absolute bottom-5 right-5 z-10 text-right text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-black/50 sm:bottom-8 sm:right-8">
              Engenharia brasileira
              <br />
              Desde 1974
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            O desafio
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Uma empresa industrial forte não deveria parecer menor no digital do que é no mundo real.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                A Kone desenvolve e fabrica máquinas-ferramenta para aplicações industriais
                exigentes. O desafio digital não era fazer a empresa parecer
                moderna por aparência. Era tornar décadas de capacidade técnica mais fáceis de
                navegar, compreender e confiar.
              </p>
              <p className="mt-5">
                A nova experiência organiza descoberta de produtos, história institucional,
                credibilidade técnica e caminhos comerciais sem reduzir a complexidade
                do negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-14 flex items-end justify-between gap-8">
            <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
              Produto em primeiro lugar.
            </h2>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-black/40 sm:block">
              Máquinas selecionadas
            </span>
          </div>

          <div className="grid border-l border-t border-black/15 md:grid-cols-3">
            {machines.map((machine, index) => (
              <article key={machine.model} className="border-b border-r border-black/15">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f1ed]">
                  <img
                    src={machine.image}
                    alt={machine.model}
                    className="h-full w-full object-contain p-[12%] transition-transform duration-700 hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.12em] text-black/35">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-2xl font-bold tracking-[-0.04em]">{machine.model}</p>
                  <p className="mt-1 text-sm text-black/50">{machine.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
              Experiência digital
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Do catálogo técnico a uma experiência comercial.
              </h2>

              <div className="mt-16 overflow-hidden border border-white/15 bg-[#f2f2ee] text-black lg:mt-24">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-7">
                  <span className="text-sm font-bold tracking-[-0.025em]">KONE</span>
                  <div className="flex gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-black/45">
                    <span>Máquinas</span>
                    <span className="hidden sm:inline">Conteúdo técnico</span>
                    <span>Contato</span>
                  </div>
                </div>
                <div className="grid min-h-[620px] lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                        Engenharia brasileira / Desde 1974
                      </p>
                      <h3 className="mt-7 text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                        Capacidade
                        <br />
                        sem igual.
                      </h3>
                    </div>
                    <div className="max-w-sm border-t border-black/15 pt-5">
                      <p className="text-sm leading-6 text-black/55">
                        Informações técnicas e caminhos comerciais foram reorganizados
                        a partir de como compradores industriais avaliam equipamentos.
                      </p>
                    </div>
                  </div>
                  <div className="relative min-h-[420px] bg-[#e9e9e4]">
                    <img
                      src={`${raw}/machines/kfu-3.png`}
                      alt="Kone milling machine"
                      className="absolute inset-0 h-full w-full object-contain p-[9%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Princípios
          </div>
          <div className="divide-y divide-black/15 border-t border-black/15">
            {principles.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 py-9 sm:grid-cols-[90px_0.9fr_1.1fr] sm:gap-8 sm:py-11"
              >
                <span className="text-sm text-black/35">{item.number}</span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-black/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C54E8] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/65">
              Alcance internacional
            </div>
            <div>
              <p className="max-w-6xl text-[clamp(3.4rem,8vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                PT
                <span className="text-white/35"> / </span>
                EN
                <span className="text-white/35"> / </span>
                ES
              </p>
              <div className="mt-12 grid gap-8 border-t border-white/30 pt-7 sm:grid-cols-2">
                <p className="max-w-2xl text-xl leading-[1.4] tracking-[-0.025em] sm:text-2xl">
                  A internacionalização foi incorporada ao sistema de informação, mantendo
                  a narrativa dos produtos consistente entre os idiomas.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/70 sm:justify-self-end">
                  Isso importa para uma fabricante industrial cuja credibilidade,
                  suporte técnico e conversas comerciais ultrapassam um único
                  mercado local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              O resultado
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Uma base digital construída para sustentar credibilidade, descoberta de produtos e novas conversas comerciais.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                <p className="text-sm leading-6 text-black/55">
                  Sem reinvenção decorativa. O sistema digital foi desenhado para tornar uma
                  empresa industrial estabelecida mais fácil de compreender na escala em que ela
                  já opera.
                </p>
                <div className="sm:justify-self-end">
                  <a
                    href="https://www.kone.ind.br"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                  >
                    Ver Kone <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 bg-[#f3f3f0]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-16">
          <div>
            <p className="text-lg font-bold tracking-[-0.04em]">ICHTHUS</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
              Estratégia, marca, digital, crescimento e tecnologia.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Próximo case
            </p>
            <Link href="/pt/work/innovclean" className="mt-2 block text-2xl font-bold tracking-[-0.04em]">
              InnovClean →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
