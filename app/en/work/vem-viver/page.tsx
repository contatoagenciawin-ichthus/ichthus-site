import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vem Viver — Work",
  description:
    "A brand strategy case turning a story that began in 1992 into a new consumer proposition built around quality, trust and consistency.",
  alternates: {
    canonical: "/en/work/vem-viver",
    languages: {
      en: "/en/work/vem-viver",
      "pt-BR": "/pt/work/vem-viver",
    },
  },
  openGraph: {
    description: "A brand strategy case turning a story that began in 1992 into a new consumer proposition built around quality, trust and consistency.",
    locale: "en",
    type: "website",
  }
}

const raw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets"

const products = [
  {
    number: "01",
    name: "Red grape",
    note: "Structure, depth and presence at the table.",
    image: `${raw}/glass-red.jpg`,
  },
  {
    number: "02",
    name: "White grape",
    note: "Freshness, clarity and balance.",
    image: `${raw}/glass-white.jpg`,
  },
  {
    number: "03",
    name: "Rosé grape",
    note: "A softer expression between red and white.",
    image: `${raw}/glass-rose.jpg`,
  },
  {
    number: "04",
    name: "Orange",
    note: "A familiar complement to broaden everyday occasions.",
    image: `${raw}/glass-orange.jpg`,
  },
]

const foundations = [
  {
    number: "01",
    title: "A real story before a marketing story.",
    text: "The brand platform begins with what already existed: more than three decades of choices, relationships and product judgement. Strategy was built from that history rather than imposed on top of it.",
  },
  {
    number: "02",
    title: "Quality as a decision criterion.",
    text: "The principle is simple: the brand should only carry products it would be proud to serve. That standard guides portfolio, partnerships, communication and future growth.",
  },
  {
    number: "03",
    title: "Trust over attention.",
    text: "Vem Viver does not need to be the loudest product on the shelf. Its position is built through consistency, clarity and the confidence of knowing what the brand stands behind.",
  },
]

export default function VemViverCasePage() {
  return (
    <main className="min-h-screen bg-[#f2eee5] text-[#172119]">
      <header className="border-b border-black/15 bg-[#f2eee5] text-black">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Work / Vem Viver</span>
            <span className="flex items-center gap-2">
              <Link href="/pt/work/vem-viver" className="text-black/35 transition hover:text-black">PT</Link>
              <span className="border-b border-black pb-0.5">EN</span>
            </span>
            <span className="border-b border-black pb-0.5">Strategy & Brand</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>Vem Viver</p>
            <p>Food & Beverage</p>
            <p>Brazil</p>
            <p>Brand Platform / 2026</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.1vw,8.7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              A story from
              <br />
              1992, rebuilt for
              <br />
              a new chapter.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Turning an established history of care, product judgement and trust
                into a brand platform for a new line of whole juices.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:max-w-sm sm:justify-self-end">
                <p>
                  History, purpose, positioning, audience, personality, communication,
                  product logic and brand promise organised into one decision system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173d2d] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative min-h-[74vh] overflow-hidden bg-[#d9c7a3]">
            <img
              loading="lazy"
              decoding="async"
              src={`${raw}/hero-grapes.jpg`}
              alt="Grapes and juice composition for Vem Viver"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/70 via-transparent to-black/10" />
            <div className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:left-8 sm:top-8">
              Vem Viver / Brand Platform
            </div>
            <div className="absolute bottom-6 left-5 max-w-4xl text-4xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:bottom-8 sm:left-8 sm:text-6xl lg:text-8xl">
              A brand built
              <br />
              from what was
              <br />
              already true.
            </div>
            <div className="absolute bottom-5 right-5 text-right text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-white/75 sm:bottom-8 sm:right-8">
              Since 1992
              <br />
              Americana / Brazil
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            The context
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              The opportunity was not to invent a brand. It was to recognise the one that had been forming for decades.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                Vem Viver first appeared in 1992 as a small natural juice house in
                Americana. The name later moved into a restaurant, while its founder
                built new experience in the wine business and an increasingly
                disciplined eye for origin, selection and trust.
              </p>
              <p className="mt-5">
                More than three decades later, the name returned for a new line of
                whole juices. The strategic challenge was to preserve continuity
                without turning history into nostalgia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-[#1b3b2f] text-white">
        <img
          loading="lazy"
          decoding="async"
          src={`${raw}/history-vineyard.jpg`}
          alt="Vineyard representing the history behind Vem Viver"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102b20]/68" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] items-end px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
              Brand purpose
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Whole juices of high quality, chosen with care to belong in the good moments of life.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#faf8f2]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Product logic
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                Before growing the range, grow trust.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
                The launch portfolio was intentionally narrow. Grape leads because it
                connects to the founder&apos;s wine repertoire; orange broadens everyday
                use without competing with that central story.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.number} className="border-b border-r border-black/15">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e0d4]">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.12em] text-white/75">
                    {product.number}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-2xl font-bold tracking-[-0.04em]">{product.name}</p>
                  <p className="mt-2 text-sm leading-6 text-black/50">{product.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173d2d] text-[#f7f0df]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">
              Positioning
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Between mass-market and exclusive, Vem Viver builds its own space.
              </h2>

              <div className="mt-16 grid gap-10 border-t border-white/20 pt-8 lg:mt-24 lg:grid-cols-2">
                <p className="max-w-xl text-xl leading-[1.4] tracking-[-0.025em] text-white/90 sm:text-2xl">
                  Not the cheapest option. Not an inaccessible premium signal. The
                  position is built around confidence and consistently delivered
                  quality.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/60 lg:justify-self-end">
                  The goal is not to become the impulse choice on the shelf. It is to
                  become the safe choice: recognised, understood and chosen with
                  confidence.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-3 items-end gap-4 border-t border-white/15 pt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                    Popular
                  </p>
                  <div className="mt-4 h-px bg-white/20" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#d8ad54]">
                    Vem Viver
                  </p>
                  <div className="mt-4 h-[3px] bg-[#d8ad54]" />
                  <p className="mt-4 text-xs italic text-white/55">
                    trust / quality / consistency
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                    High value
                  </p>
                  <div className="mt-4 h-px bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Strategic foundations
          </div>
          <div className="divide-y divide-black/15 border-t border-black/15">
            {foundations.map((item) => (
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

      <section className="grid min-h-[76vh] lg:grid-cols-2">
        <div className="relative min-h-[52vh] overflow-hidden bg-[#d7cdbb] lg:min-h-[76vh]">
          <img
            loading="lazy"
            decoding="async"
            src={`${raw}/table-setting.jpg`}
            alt="Vem Viver table setting"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-[52vh] flex-col justify-between bg-[#f0e6d3] p-7 sm:p-10 lg:min-h-[76vh] lg:p-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Brand personality
          </p>
          <h2 className="max-w-xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Confident.
            <br />
            Close.
            <br />
            Selective.
          </h2>
          <p className="max-w-md text-base leading-7 text-black/55">
            Clear and respectful rather than loud. Elegant without becoming distant.
            Simple without becoming generic. The brand prefers to show rather than
            over-promise.
          </p>
        </div>
      </section>

      <section className="relative min-h-[72vh] overflow-hidden bg-[#183528] text-white">
        <img
          loading="lazy"
          decoding="async"
          src={`${raw}/care-hands.jpg`}
          alt="Hands representing care in product selection"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#102b20]/75" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1600px] items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="grid w-full gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
              Brand promise
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Products chosen with judgement, ready to be served with confidence.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee5] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              The result
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                A brand platform designed to guide decisions, not sit in a presentation.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                <p className="max-w-lg text-sm leading-6 text-black/55">
                  The platform gives future product, communication, partnership and
                  experience decisions a shared criterion. Visual tools may evolve;
                  the logic behind the brand remains clear.
                </p>
                <div className="sm:justify-self-end">
                  <span className="inline-flex border-b border-black pb-1 text-sm font-semibold">
                    Brand Platform / 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 bg-[#f2eee5]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-16">
          <div>
            <p className="text-lg font-bold tracking-[-0.04em] text-black">ICHTHUS</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
              Strategy, brand, digital, growth and technology.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Next case
            </p>
            <Link
              href="/en/work/la-marcia"
              className="mt-2 block text-2xl font-bold tracking-[-0.04em] text-black"
            >
              LA / Marc.I.A. →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
