import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "InnovClean Services — Projeto — Ichthus",
  description:
    "Uma parceria digital contínua apoiando uma empresa britânica de serviços com marca, site e infraestrutura digital.",
}

const raw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/innovclean-site/main/public/brand"

const services = [
  "Direção de marca",
  "Experiência digital",
  "Arquitetura de conteúdo",
  "Fundação de SEO",
  "Desenvolvimento responsivo",
  "Infraestrutura de e-mail",
  "Suporte contínuo",
]

const principles = [
  {
    number: "01",
    title: "Clareza local.",
    text: "A experiência precisava parecer nativa ao mercado em que atua: linguagem direta, inglês britânico, contexto londrino e caminhos comerciais claros.",
  },
  {
    number: "02",
    title: "Continuidade acima do lançamento.",
    text: "A relação não é uma entrega pontual de site. Presença digital, infraestrutura e evolução contínua são tratadas como uma responsabilidade conectada.",
  },
  {
    number: "03",
    title: "Marca sem excesso.",
    text: "Arquitetura, grid, tipografia e imagens contidas criam caráter sem perder a compreensão imediata da proposta de serviço.",
  },
]

export default function InnovCleanCasePage() {
  return (
    <main className="min-h-screen bg-[#f2f0e9] text-[#111]">
      <header className="border-b border-black/15 bg-[#f2f0e9]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Projeto / InnovClean</span>
            <span className="flex items-center gap-2">
              <span className="border-b border-black pb-0.5">PT</span>
              <Link href="/en/work/innovclean" className="text-black/35 transition hover:text-black">EN</Link>
            </span>
            <a
              href="https://innovclean.co.uk"
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
            <p>InnovClean Services Ltd</p>
            <p>Serviços comerciais</p>
            <p>London / Reino Unido</p>
            <p>Parceria contínua</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.2vw,8.8rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Uma parceria
              <br />
              internacional,
              <br />
              feita para ser local.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Apoiando uma empresa britânica de serviços a partir do Brasil com presença digital
                consistente, infraestrutura e evolução contínua.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:max-w-sm sm:justify-self-end">
                <p>
                  Direção de marca, website strategy, content, responsive development,
                  Fundação de SEO, email infrastructure and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183c34] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative min-h-[72vh] overflow-hidden bg-[#d9ddd8]">
            <img
              src={`${raw}/london-aerial.jpg`}
              alt="London commercial district"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <img
              src={`${raw}/mark-construction-light.png`}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
            />
            <div className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:left-8 sm:top-8">
              InnovClean / London
            </div>
            <div className="absolute bottom-5 left-5 max-w-xl text-4xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:bottom-8 sm:left-8 sm:text-6xl lg:text-7xl">
              Feito para espaços
              <br />
              de trabalho modernos.
            </div>
            <div className="absolute bottom-5 right-5 text-right text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-white/75 sm:bottom-8 sm:right-8">
              Reino Unido
              <br />
              Serviços comerciais
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            A relação
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Trabalho internacional não é apenas uma questão de localização. É uma questão de compreender contexto.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                A InnovClean é uma empresa familiar de limpeza comercial que atende Londres
                and the Reino Unido. Our role has extended beyond a single website
                apoiando a presença digital da empresa e sua
                infraestrutura de negócio ao longo do tempo.
              </p>
              <p className="mt-5">
                O trabalho exigiu um princípio simples: operar a partir do Brasil sem
                fazer a experiência parecer importada. Linguagem, lógica de serviço,
                contexto de mercado e expectativas do cliente precisam parecer nativos ao negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                  Presença digital
                </p>
                <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                  Clara o bastante para ser compreendida antes de tentar impressionar.
                </h2>
              </div>

              <p className="mt-10 max-w-md text-base leading-7 text-black/55 lg:mb-2">
                A evolução de 2026 levou o site para uma base limpa em Next.js, com
                expressão de marca mais forte, comportamento responsivo, fundamentos de busca e
                uma jornada comercial mais focada.
              </p>
            </div>

            <div className="overflow-hidden border border-black/15 bg-[#f0f1ed]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                <img
                  src={`${raw}/logo-250x100-para-fundo-claro.png`}
                  alt="InnovClean Services"
                  className="h-7 w-auto object-contain"
                />
                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-black/40">
                  London / UK
                </span>
              </div>
              <div className="grid min-h-[580px] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                      Limpeza comercial · Londres
                    </p>
                    <h3 className="mt-7 text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                      Desenhado
                      <br />
                      em torno do
                      <br />
                      seu espaço.
                    </h3>
                  </div>
                  <p className="max-w-xs border-t border-black/15 pt-5 text-sm leading-6 text-black/55">
                    Uma proposta de serviço construída em torno de confiabilidade, responsabilidade
                    ambiental e comunicação próxima.
                  </p>
                </div>
                <div className="relative min-h-[400px] overflow-hidden">
                  <img
                    src={`${raw}/london-skyline.jpg`}
                    alt="London office skyline"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#183c34]/15" />
                  <img
                    src={`${raw}/mark-construction-light.png`}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
              Escopo
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                A digital internacional, not a list of isolated deliverables.
              </h2>

              <div className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:mt-24">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex min-h-36 items-start justify-between border-b border-r border-white/15 p-5 sm:p-7"
                  >
                    <span className="text-[10px] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-[75%] text-xl font-semibold leading-tight tracking-[-0.03em]">
                      {service}
                    </p>
                  </div>
                ))}
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

      <section className="relative min-h-[72vh] overflow-hidden bg-[#183c34] text-white">
        <img
          src={`${raw}/sustainability-forest.jpg`}
          alt="Forest representing environmental responsibility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102b24]/65" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1600px] items-end px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
              Território de marca
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Qualidade, confiabilidade e responsabilidade sem perder o lado humano.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0e9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Por que importa
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Prova de que nosso trabalho pode cruzar fronteiras sem perder relevância local.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                <p className="max-w-lg text-sm leading-6 text-black/55">
                  A InnovClean representa mais do que um site internacional no
                  portfólio. Ela demonstra continuidade, confiança e a capacidade de
                  apoiar uma empresa que opera em outro mercado ao longo do tempo.
                </p>
                <div className="sm:justify-self-end">
                  <a
                    href="https://innovclean.co.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                  >
                    Ver InnovClean <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 bg-[#f2f0e9]">
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
            <Link href="/pt/work/vem-viver" className="mt-2 block text-2xl font-bold tracking-[-0.04em]">
              Vem Viver →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
