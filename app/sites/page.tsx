import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Fingerprint,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Workflow,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Sites & Landing Pages | Ichthus Marketing",
  description:
    "Projetos de sites, landing pages e estruturas digitais desenvolvidos pela Ichthus Marketing para aquisição, posicionamento e conversão.",
}

const projects = [
  {
    number: "01",
    client: "Protocolo Presença Exponencial",
    sector: "Saúde / Infoproduto",
    type: "Landing page de conversão",
    title: "Uma página desenhada para transformar atenção em ação.",
    description:
      "Arquitetura de conversão, narrativa comercial, prova, oferta, CTA e mensuração reunidos em uma experiência responsiva para aquisição de candidatos ao programa.",
    tags: ["Landing page", "Conversão", "Analytics", "Responsivo"],
    url: "https://metodoppe.com.br",
    displayUrl: "metodoppe.com.br",
  },
  {
    number: "02",
    client: "Pet Endoscopia",
    sector: "Saúde animal",
    type: "Site institucional + comercial",
    title: "Autoridade técnica organizada para públicos diferentes.",
    description:
      "Site desenvolvido para apresentar uma operação veterinária especializada a tutores, veterinários, clínicas e hospitais, com jornadas e pontos de contato próprios.",
    tags: ["Site", "Arquitetura", "B2C + B2B", "WhatsApp"],
    url: "https://www.petendoscopia.com",
    displayUrl: "petendoscopia.com",
  },
  {
    number: "03",
    client: "SF Sistemas Construtivos",
    sector: "Engenharia / B2B",
    type: "Site institucional",
    title: "Complexidade técnica apresentada com clareza comercial.",
    description:
      "Estrutura digital para uma empresa de construção a seco, equilibrando repertório técnico, credibilidade, portfólio, serviços e geração de oportunidades.",
    tags: ["B2B", "Site", "Posicionamento", "Captação"],
    url: "https://www.sfsistemasconstrutivos.com.br",
    displayUrl: "sfsistemasconstrutivos.com.br",
  },
  {
    number: "04",
    client: "Peludinhos Dermatologia Veterinária",
    sector: "Saúde animal",
    type: "Site de serviço especializado",
    title: "Especialização traduzida em uma jornada mais simples.",
    description:
      "Presença digital estruturada para explicar serviços especializados, organizar a decisão do tutor e abrir uma frente específica de relacionamento com clínicas e médicos-veterinários.",
    tags: ["Site", "Serviços", "B2B + B2C", "Conversão"],
    url: "https://peludinhosdermatologia.com.br",
    displayUrl: "peludinhosdermatologia.com.br",
  },
  {
    number: "05",
    client: "Empório Liasch",
    sector: "Vinhos / Experiências",
    type: "Site institucional + experiência",
    title: "Uma experiência física traduzida para o digital.",
    description:
      "Site construído para apresentar o Empório, sua curadoria de vinhos, experiências e viagens, organizando posicionamento, prova social, conteúdo e caminhos de reserva e contato.",
    tags: ["Site", "Experiência", "Conteúdo", "Conversão"],
    url: "https://www.emporioliasch.com.br",
    displayUrl: "emporioliasch.com.br",
  },
]

const capabilities = [
  {
    icon: ShoppingBag,
    title: "Venda integrada",
    text: "Landing page, checkout, meios de pagamento e regras diferentes para produtos digitais, físicos ou combinações dos dois.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega controlada",
    text: "Acesso autenticado, links assinados ou temporários, permissões e limites de download configurados conforme a operação.",
  },
  {
    icon: Fingerprint,
    title: "Rastreabilidade",
    text: "Identificação individual da compra e do usuário, com hash, registro de acesso e marcação do arquivo quando aplicável.",
  },
  {
    icon: PackageCheck,
    title: "Físico + digital",
    text: "Uma mesma jornada pode vender livro físico, PDF, ePub ou kits, tratando entrega, disponibilidade e comunicação de cada formato.",
  },
  {
    icon: Workflow,
    title: "Automações",
    text: "Confirmações, liberação de conteúdo, recuperação de pagamento, e-mails transacionais e integrações com a operação comercial.",
  },
  {
    icon: BarChart3,
    title: "Mensuração",
    text: "Eventos, pixels e leitura do funil para entender origem, comportamento, conversão e pontos de abandono.",
  },
]

export default function SitesPage() {
  return (
    <main className="bg-black text-white">
      <Navigation />

      <section className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-12 lg:pb-36 lg:pt-52">
        <div className="pointer-events-none absolute -right-[10vw] top-20 text-[38vw] font-black italic leading-none tracking-tighter text-white/[0.025]">
          WEB
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-14 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-[#e05c58]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Ichthus
          </Link>

          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">
                // SITES & LANDING PAGES
              </p>
              <h1 className="max-w-5xl text-[15vw] font-black uppercase italic leading-[0.78] tracking-tighter sm:text-8xl lg:text-[7.5rem]">
                Sites que não terminam <span className="text-white/20">no layout.</span>
              </h1>
            </div>
            <div className="border-l border-white/15 pl-8 lg:pl-10">
              <p className="text-xl font-medium leading-tight text-white/85 lg:text-2xl">
                Estratégia, conteúdo, experiência e tecnologia construídos em torno do que a página precisa realizar.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/45 lg:text-base">
                De sites institucionais a páginas de venda e estruturas com checkout, automações e entrega digital. O projeto começa pela jornada do usuário e termina em uma solução pronta para operar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-black lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.45em] text-[#e05c58]">// PROJETOS NO AR</p>
              <h2 className="text-5xl font-black uppercase italic leading-[0.88] tracking-tighter sm:text-7xl">
                Trabalho que você <span className="text-black/15">pode abrir.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-black/50">
              Uma seleção objetiva de projetos publicados. Cada link abre o ambiente real do cliente em uma nova aba.
            </p>
          </div>

          <div className="grid border-l border-t border-black/15 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.client}
                className="group flex min-h-[34rem] flex-col border-b border-r border-black/15 p-7 transition-colors hover:bg-black hover:text-white lg:p-10"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="font-mono text-xs text-black/25 transition-colors group-hover:text-white/25">
                    {project.number}
                  </span>
                  <span className="text-right text-[9px] font-black uppercase tracking-[0.25em] text-[#e05c58]">
                    {project.type}
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black/35 transition-colors group-hover:text-white/35">
                    {project.sector}
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase tracking-tight lg:text-3xl">{project.client}</h3>
                  <h4 className="mt-8 max-w-xl text-3xl font-black leading-[0.98] tracking-tighter lg:text-4xl">
                    {project.title}
                  </h4>
                  <p className="mt-6 max-w-xl leading-relaxed text-black/50 transition-colors group-hover:text-white/50">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-black/45 transition-colors group-hover:border-white/15 group-hover:text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border-t border-black/20 pt-5 text-xs font-black uppercase tracking-[0.18em] transition-colors group-hover:border-white/20"
                  >
                    {project.displayUrl}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e05c58]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e05c58] px-6 py-24 text-black lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="mb-7 text-[10px] font-black uppercase tracking-[0.45em] text-black/55">// ALÉM DA PÁGINA</p>
              <h2 className="max-w-xl text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-7xl">
                Quando a página também precisa <span className="text-black/25">vender e entregar.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-black/70">
                Em produtos digitais, a landing page é apenas a superfície. A operação pode incluir pagamento, controle de acesso, entrega do arquivo, identificação do comprador e acompanhamento pós-venda.
              </p>
            </div>

            <div className="grid border-l border-t border-black/25 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="min-h-64 border-b border-r border-black/25 p-7 lg:p-9">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                    <span className="font-mono text-[10px] text-black/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 text-xl font-black uppercase tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-white/15 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
          <div>
            <p className="mb-7 text-[10px] font-black uppercase tracking-[0.45em] text-[#e05c58]">// PROJETO SOB MEDIDA</p>
            <h2 className="max-w-4xl text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl">
              A tecnologia entra <span className="text-white/20">onde o negócio exige.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/50">
              Se a solução precisa ir além de uma página — com autenticação, pagamentos, banco de dados, área do cliente ou integrações — desenhamos a arquitetura junto com a experiência comercial.
            </p>
            <a
              href="https://wa.me/5519998363352?text=Quero%20falar%20sobre%20um%20site%20ou%20landing%20page"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#e05c58] hover:text-white"
            >
              Falar sobre um projeto <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
