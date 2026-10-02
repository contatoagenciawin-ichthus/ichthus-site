import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { KoneMachineMotion } from "@/components/work/kone-machine-motion"

const koneRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public"
const innovRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/innovclean-site/main/public/brand"
const vemRaw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets"

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
  "Marketing não é um departamento. É um sistema operacional.",
  "O que a IA muda — e o que não muda — na experiência do cliente.",
  "Marca e performance não deveriam viver em salas separadas.",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f2ef] text-black">
      <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f2f2ef]/95 backdrop-blur">
        <div className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.11em] lg:flex">
            <a href="/pt#work">Projetos</a>
            <a href="/pt#capabilities">Capacidades</a>
            <a href="/pt#about">Sobre</a>
            <a href="/pt#thinking">Ideias</a>
            <a href="/pt#contact">Contato</a>
          </nav>

          <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.1em]">
            <span className="text-black/35">PT</span>
            <span className="border-b border-black pb-0.5">EN</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-36 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Independente</p>
            <p>Estratégia / Marca</p>
            <p>Digital / Crescimento</p>
            <p>Tecnologia</p>
          </div>

          <div>
            <h1 className="max-w-[1220px] text-[clamp(4rem,8.6vw,9.3rem)] font-bold leading-[0.84] tracking-[-0.08em]">
              Construímos marcas,
              <br />
              experiências digitais
              <br />
              e sistemas de crescimento.
            </h1>

            <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Strategy, design, acquisition and technology connected from thinking
                through execution.
              </p>
              <div className="sm:justify-self-end">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                >
                  Ver projetos selecionados <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-black/15 bg-white">
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

        <Link href="/work/kone" className="group block border-t border-black/15">
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
                  Engineering,
                  <br />
                  translated.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Reframing five decades of Brazilian industrial engineering for a
                  digital and international audience.
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

        <Link href="/work/innovclean" className="group block border-t border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.62fr_0.38fr]">
            <div className="relative min-h-[58vh] overflow-hidden bg-[#183c34] lg:min-h-[72vh]">
              <img
                src={`${innovRaw}/london-aerial.jpg`}
                alt="London aerial view"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.018]"
              />
              <div className="absolute inset-0 bg-[#183c34]/18" />
              <img
                src={`${innovRaw}/mark-construction-light.png`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <p className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.13em] text-white/70 sm:bottom-8 sm:left-8">
                London / United Kingdom
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
                  Built here.
                  <br />
                  Relevant there.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  An ongoing digital partnership supporting a UK commercial services
                  company from Brazil.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Internacional / Digital / Parceria contínua
                </p>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/work/vem-viver" className="group block border-t border-black/15">
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
                  A story
                  <br />
                  becomes
                  <br />
                  a brand.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Turning a history that began in 1992 into a strategic platform for a
                  new consumer proposition.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Estratégia / Marca / Consumo
                </p>
              </div>
            </div>

            <div className="relative min-h-[58vh] overflow-hidden bg-[#173d2d] lg:min-h-[72vh]">
              <img
                src={`${vemRaw}/hero-grapes.jpg`}
                alt="Vem Viver brand composition"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.018]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/35 via-transparent to-transparent" />
            </div>
          </article>
        </Link>

        <Link href="/work/la-marcia" className="group block border-y border-black/15">
          <article className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.62fr_0.38fr]">
            <div className="relative min-h-[62vh] overflow-hidden bg-[#0f3548] p-5 text-white sm:p-8 lg:min-h-[72vh] lg:p-12">
              <div className="flex h-full min-h-[54vh] flex-col justify-between border border-white/15 bg-[#0a2938] p-5 sm:min-h-[60vh] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Marc.I.A.</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/40">
                      Connected operations
                    </p>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-[#14bf63]" />
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Lead", "Chat", "Quote", "Job"].map((item, index) => (
                    <div key={item} className="border border-white/15 bg-white/[0.04] p-4">
                      <p className="text-[9px] text-white/25">0{index + 1}</p>
                      <p className="mt-6 text-lg font-semibold">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/15 pt-5">
                  <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                    Demand → conversation → quote → work order → history.
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
                  One thread,
                  <br />
                  end to end.
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-6 text-black/60">
                  Connecting acquisition, customer service, CRM, quoting, operations
                  and AI-assisted workflows.
                </p>
                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.12em] text-black/45">
                  Crescimento / CX / CRM / IA / Tecnologia
                </p>
              </div>
            </div>
          </article>
        </Link>
      </section>

      <section id="about" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Quem somos
          </p>
          <div>
            <p className="max-w-6xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Ichthus is an independent strategy, brand and digital company working at
              the intersection of growth and technology.
            </p>

            <div className="mt-14 grid gap-10 border-t border-black/15 pt-7 sm:grid-cols-2">
              <p className="max-w-xl text-lg leading-8 text-black/60">
                We work with companies in motion: growing, repositioning, modernising or
                building new capabilities. Our role can begin with strategy and continue
                through design, acquisition, software and operation.
              </p>
              <div className="sm:justify-self-end">
                <p className="max-w-sm text-sm leading-6 text-black/45">
                  Independent and based in Brazil. Working with companies here and
                  abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Capacidades
            </p>
            <div className="border-t border-black/15">
              {capabilities.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-black/15 py-9 sm:grid-cols-[70px_0.9fr_1.1fr] sm:gap-8 sm:py-11"
                >
                  <span className="text-sm text-black/30">{item.number}</span>
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-black/50">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="thinking" className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Ideias
            </p>
            <p className="mt-3 max-w-[180px] text-sm leading-6 text-black/40">
              Ideias sobre negócios, marca, crescimento e tecnologia.
            </p>
          </div>

          <div className="border-t border-black/15">
            {thinking.map((title, index) => (
              <article
                key={title}
                className="group grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center"
              >
                <span className="text-sm text-black/30">0{index + 1}</span>
                <h2 className="max-w-4xl text-3xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                  {title}
                </h2>
                <ArrowUpRight className="hidden h-5 w-5 text-black/30 sm:block" />
              </article>
            ))}
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
                ["Proxy", "Sistemas de tecnologia e IA."],
                ["ScribMed", "IA clínica e documentação médica."],
                ["Editora Ichthus", "Publicação e propriedade intelectual."],
              ].map(([name, text]) => (
                <article key={name} className="min-h-[300px] border-b border-r border-white/15 p-6 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30">
                    Venture
                  </p>
                  <div className="mt-24">
                    <h2 className="text-3xl font-bold tracking-[-0.045em]">{name}</h2>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">{text}</p>
                  </div>
                </article>
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
                Have something
                <br />
                important to build?
              </h2>
              <div className="mt-14 flex flex-col gap-6 border-t border-black/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
                <a
                  href="mailto:contato@ichthusmkt.com.br"
                  className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl"
                >
                  contato@ichthusmkt.com.br
                </a>
                <p className="text-sm leading-6 text-black/45 sm:text-right">
                  Brazil
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
