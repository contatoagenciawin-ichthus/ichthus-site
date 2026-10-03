import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { KoneMachineMotion } from "@/components/work/kone-machine-motion"

export const metadata: Metadata = {
  title: "Kone Máquinas — Work — Ichthus",
  description:
    "A digital experience for a Brazilian industrial manufacturer with more than five decades of engineering history.",
  alternates: {
    canonical: "/en/work/kone",
    languages: {
      en: "/en/work/kone",
      "pt-BR": "/pt/work/kone",
    },
  },
  openGraph: {
    description: "A digital experience for a Brazilian industrial manufacturer with more than five decades of engineering history.",
    locale: "en",
    type: "website",
  }
}

const raw = "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public"

const machines = [
  { model: "KA-70", type: "Column drilling machine", image: `${raw}/machines/hero-ka-70.png` },
  { model: "KFU-3", type: "Universal milling machine", image: `${raw}/machines/kfu-3.png` },
  { model: "KM-45 MF", type: "Industrial drilling machine", image: `${raw}/machines/km-45-mf.png` },
]

const principles = [
  {
    number: "01",
    title: "Engineering before decoration.",
    text: "The experience had to make technical capability easier to understand without turning an industrial manufacturer into a lifestyle brand.",
  },
  {
    number: "02",
    title: "Product is the protagonist.",
    text: "Machines, specifications and applications lead the visual system. Interface and motion organize attention rather than compete with the equipment.",
  },
  {
    number: "03",
    title: "International by design.",
    text: "Portuguese, English and Spanish were treated as part of the information architecture from the start, not as an afterthought.",
  },
]

export default function KoneCasePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f0] text-black">
      <header className="border-b border-black/15 bg-[#f3f3f0]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Work / Kone</span>
            <span className="flex items-center gap-2">
              <Link href="/pt/work/kone" className="text-black/35 transition hover:text-black">PT</Link>
              <span className="border-b border-black pb-0.5">EN</span>
            </span>
            <a
              href="https://www.kone.ind.br"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 border-b border-black pb-0.5"
            >
              Visit project <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>Kone Máquinas</p>
            <p>Industry / B2B</p>
            <p>Brazil</p>
            <p>2026</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.3vw,9rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Engineering,
              <br />
              translated for
              <br />
              a new audience.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Reframing more than five decades of Brazilian industrial engineering
                for a digital and international audience.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:justify-self-end sm:max-w-sm">
                <p>
                  Strategy, information architecture, digital experience, interface
                  design and multilingual product presentation.
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
              Brazilian engineering
              <br />
              Since 1974
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            The challenge
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              A strong industrial company should not look smaller online than it is in the real world.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                Kone develops and manufactures machine tools for demanding industrial
                applications. The digital challenge was not to make the company look
                fashionable. It was to make decades of technical capability easier to
                navigate, understand and trust.
              </p>
              <p className="mt-5">
                The new experience organizes product discovery, institutional history,
                technical credibility and sales paths without flattening the complexity
                of the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-14 flex items-end justify-between gap-8">
            <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
              Product first.
            </h2>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-black/40 sm:block">
              Selected machines
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
              Digital experience
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                From technical catalogue to a commercial experience.
              </h2>

              <div className="mt-16 overflow-hidden border border-white/15 bg-[#f2f2ee] text-black lg:mt-24">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-7">
                  <span className="text-sm font-bold tracking-[-0.025em]">KONE</span>
                  <div className="flex gap-5 text-[9px] font-medium uppercase tracking-[0.12em] text-black/45">
                    <span>Machines</span>
                    <span className="hidden sm:inline">Education</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div className="grid min-h-[620px] lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                        Brazilian engineering / Since 1974
                      </p>
                      <h3 className="mt-7 text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                        Unmatched
                        <br />
                        capacity.
                      </h3>
                    </div>
                    <div className="max-w-sm border-t border-black/15 pt-5">
                      <p className="text-sm leading-6 text-black/55">
                        Technical information and commercial pathways were reorganized
                        around how industrial buyers evaluate equipment.
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
            Principles
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
              International reach
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
                  Internationalization was built into the information system, keeping
                  the product story consistent across languages.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/70 sm:justify-self-end">
                  This matters for an industrial manufacturer whose credibility,
                  technical support and commercial conversations extend beyond a single
                  local market.
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
              The result
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                A digital foundation built to support credibility, product discovery and new commercial conversations.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                <p className="text-sm leading-6 text-black/55">
                  No decorative reinvention. The digital system was designed to make an
                  established industrial business easier to understand at the scale it
                  already operates.
                </p>
                <div className="sm:justify-self-end">
                  <a
                    href="https://www.kone.ind.br"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                  >
                    Visit Kone <ArrowUpRight className="h-4 w-4" />
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
              Strategy, brand, digital, growth and technology.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Next case
            </p>
            <Link href="/en/work/innovclean" className="mt-2 block text-2xl font-bold tracking-[-0.04em]">
              InnovClean →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
