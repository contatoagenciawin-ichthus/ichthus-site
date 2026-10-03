import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vem Viver — Projeto",
  description:
    "Um case de estratégia de marca que transforma uma história iniciada em 1992 em uma nova proposta de consumo baseada em qualidade, confiança e consistência.",
  alternates: {
    canonical: "/pt/work/vem-viver",
    languages: {
      en: "/en/work/vem-viver",
      "pt-BR": "/pt/work/vem-viver",
    },
  },
  openGraph: {
    description: "Um case de estratégia de marca que transforma uma história iniciada em 1992 em uma nova proposta de consumo baseada em qualidade, confiança e consistência.",
    locale: "pt_BR",
    type: "website",
  }
}

const raw =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets"

const products = [
  {
    number: "01",
    name: "Uva tinta",
    note: "Estrutura, profundidade e presença à mesa.",
    image: `${raw}/glass-red.jpg`,
  },
  {
    number: "02",
    name: "Uva branca",
    note: "Frescor, clareza e equilíbrio.",
    image: `${raw}/glass-white.jpg`,
  },
  {
    number: "03",
    name: "Uva rosé",
    note: "Uma expressão mais delicada entre a tinta e a branca.",
    image: `${raw}/glass-rose.jpg`,
  },
  {
    number: "04",
    name: "Laranja",
    note: "Um complemento familiar para ampliar as ocasiões do dia a dia.",
    image: `${raw}/glass-orange.jpg`,
  },
]

const foundations = [
  {
    number: "01",
    title: "Uma história real antes de uma história de marketing.",
    text: "A plataforma de marca começa pelo que já existia: mais de três décadas de escolhas, relações e critério de produto. A estratégia foi construída a partir dessa história, não imposta sobre ela.",
  },
  {
    number: "02",
    title: "Qualidade como critério de decisão.",
    text: "O princípio é simples: a marca só deve levar produtos que teria orgulho de servir. Esse padrão orienta portfólio, parcerias, comunicação e crescimento futuro.",
  },
  {
    number: "03",
    title: "Confiança acima de atenção.",
    text: "A Vem Viver não precisa ser o produto mais barulhento da prateleira. Sua posição é construída por consistência, clareza e pela confiança de saber o que a marca endossa.",
  },
]

export default function VemViverCasePage() {
  return (
    <main className="min-h-screen bg-[#f2eee5] text-[#172119]">
      <header className="border-b border-black/15 bg-[#f2eee5] text-black">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Projeto / Vem Viver</span>
            <span className="flex items-center gap-2">
              <span className="border-b border-black pb-0.5">PT</span>
              <Link href="/en/work/vem-viver" className="text-black/35 transition hover:text-black">EN</Link>
            </span>
            <span className="border-b border-black pb-0.5">Estratégia & Marca</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>Vem Viver</p>
            <p>Alimentos & Bebidas</p>
            <p>Brazil</p>
            <p>Plataforma de Marca / 2026</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.1vw,8.7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Uma história de
              <br />
              1992, reconstruída para
              <br />
              um novo capítulo.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Transformando uma história consolidada de cuidado, critério de produto e confiança
                em uma plataforma de marca para uma nova linha de sucos integrais.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:max-w-sm sm:justify-self-end">
                <p>
                  História, propósito, posicionamento, público, personalidade, comunicação,
                  lógica de produto e promessa de marca organizados em um único sistema de decisão.
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
              src={`${raw}/hero-grapes.jpg`}
              alt="Composição com uvas e suco da Vem Viver"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/70 via-transparent to-black/10" />
            <div className="absolute left-5 top-5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:left-8 sm:top-8">
              Vem Viver / Plataforma de Marca
            </div>
            <div className="absolute bottom-6 left-5 max-w-4xl text-4xl font-bold leading-[0.92] tracking-[-0.055em] text-white sm:bottom-8 sm:left-8 sm:text-6xl lg:text-8xl">
              Uma marca construída
              <br />
              a partir do que
              <br />
              já era verdadeiro.
            </div>
            <div className="absolute bottom-5 right-5 text-right text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-white/75 sm:bottom-8 sm:right-8">
              Desde 1992
              <br />
              Americana / Brasil
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            O contexto
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              A oportunidade não era inventar uma marca. Era reconhecer a que vinha se formando havia décadas.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                A Vem Viver surgiu em 1992 como uma pequena casa de sucos naturais em
                Americana. O nome depois passou por um restaurante, enquanto seu fundador
                construía nova experiência no universo dos vinhos e um olhar cada vez mais
                criterioso para origem, seleção e confiança.
              </p>
              <p className="mt-5">
                Mais de três décadas depois, o nome voltou para uma nova linha de
                sucos integrais. O desafio estratégico era preservar continuidade
                sem transformar história em nostalgia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-[#1b3b2f] text-white">
        <img
          src={`${raw}/history-vineyard.jpg`}
          alt="Vinhedo representando a história por trás da Vem Viver"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102b20]/68" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] items-end px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/60">
              Propósito de marca
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Sucos integrais de alta qualidade, escolhidos com cuidado para fazer parte dos bons momentos da vida.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#faf8f2]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Lógica de produto
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                Antes de ampliar a linha, ampliar a confiança.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
                O portfólio inicial foi intencionalmente enxuto. A uva lidera porque
                se conecta ao repertório de vinhos do fundador; a laranja amplia as ocasiões
                do dia a dia sem competir com essa história central.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.number} className="border-b border-r border-black/15">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e0d4]">
                  <img
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
              Posicionamento
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Entre o popular e o exclusivo, a Vem Viver constrói seu próprio espaço.
              </h2>

              <div className="mt-16 grid gap-10 border-t border-white/20 pt-8 lg:mt-24 lg:grid-cols-2">
                <p className="max-w-xl text-xl leading-[1.4] tracking-[-0.025em] text-white/90 sm:text-2xl">
                  Não a opção mais barata. Nem um sinal premium inacessível. O
                  posicionamento é construído em torno de confiança e de uma qualidade
                  entregue com consistência.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/60 lg:justify-self-end">
                  O objetivo não é se tornar a escolha por impulso na prateleira. É
                  se tornar a escolha segura: reconhecida, compreendida e escolhida com
                  confiança.
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
                    confiança / qualidade / consistência
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                    Alto valor
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
            Fundamentos estratégicos
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
            src={`${raw}/table-setting.jpg`}
            alt="Mesa posta da Vem Viver"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-[52vh] flex-col justify-between bg-[#f0e6d3] p-7 sm:p-10 lg:min-h-[76vh] lg:p-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Personalidade da marca
          </p>
          <h2 className="max-w-xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Confiante.
            <br />
            Próxima.
            <br />
            Seletiva.
          </h2>
          <p className="max-w-md text-base leading-7 text-black/55">
            Clara e respeitosa, em vez de barulhenta. Elegante sem se tornar distante.
            Simples sem se tornar genérica. A marca prefere mostrar em vez de
            prometer demais.
          </p>
        </div>
      </section>

      <section className="relative min-h-[72vh] overflow-hidden bg-[#183528] text-white">
        <img
          src={`${raw}/care-hands.jpg`}
          alt="Mãos representando cuidado na seleção de produtos"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#102b20]/75" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-[1600px] items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="grid w-full gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
              Promessa de marca
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Produtos escolhidos com critério, prontos para serem servidos com confiança.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee5] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              O resultado
            </div>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Uma plataforma de marca feita para orientar decisões, não para ficar parada em uma apresentação.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                <p className="max-w-lg text-sm leading-6 text-black/55">
                  A plataforma dá às futuras decisões de produto, comunicação, parceria e
                  experiência um critério comum. As ferramentas visuais podem evoluir;
                  a lógica por trás da marca permanece clara.
                </p>
                <div className="sm:justify-self-end">
                  <span className="inline-flex border-b border-black pb-1 text-sm font-semibold">
                    Plataforma de Marca / 2026
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
              Estratégia, marca, digital, crescimento e tecnologia.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Próximo case
            </p>
            <Link
              href="/pt/work/la-marcia"
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
