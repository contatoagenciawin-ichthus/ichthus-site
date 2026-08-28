import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const cases = [
  {
    client: "Dr. Juliano Plastina",
    sector: "Saúde / Infoproduto",
    title: "Um funil que aprende com o tráfego.",
    description: "Landing pages, régua de e-mails, mapa de calor e suporte à operação de mídia para transformar atenção em diagnóstico e evolução contínua.",
    tags: ["Funil", "Landing pages", "E-mail", "Dados"],
    href: "https://metodoppe.com.br",
    linkLabel: "Abrir landing page",
  },
  {
    client: "Monise Ribeiro",
    sector: "Produto digital / E-book",
    title: "Conteúdo autoral transformado em produto digital.",
    description: "Rota própria de venda do e-book Redescobrindo-se, com narrativa da oferta, benefícios, preço, FAQ de entrega e checkout integrado para aquisição imediata.",
    tags: ["Landing page", "E-book", "Checkout", "Produto digital"],
    href: "https://www.moniseribeiro.com.br/redescobrindo-se",
    linkLabel: "Abrir landing page",
  },
  {
    client: "Pet Endoscopia",
    sector: "Saúde animal",
    title: "Autoridade técnica orientada à captação.",
    description: "Revisão de posicionamento, reconstrução do site e páginas de campanha para tutores, veterinários, clínicas e hospitais.",
    tags: ["Estratégia", "Site", "Funil", "Tráfego"],
    href: "https://www.petendoscopia.com",
    linkLabel: "Abrir site",
  },
  {
    client: "SF Sistemas Construtivos",
    sector: "Engenharia / B2B",
    title: "Complexidade técnica apresentada com clareza comercial.",
    description: "Estrutura digital para uma empresa de construção a seco, equilibrando repertório técnico, credibilidade, portfólio, serviços e geração de oportunidades.",
    tags: ["B2B", "Site", "Posicionamento", "Captação"],
    href: "https://www.sfsistemasconstrutivos.com.br",
    linkLabel: "Abrir site",
  },
  {
    client: "Kone Máquinas",
    sector: "Indústria B2B",
    title: "Complexidade técnica apresentada com clareza.",
    description: "Presença digital para máquinas operatrizes e centros de usinagem, estruturada para apoiar credibilidade e oportunidades comerciais.",
    tags: ["B2B", "Site", "Posicionamento"],
    href: "https://www.kone.ind.br",
    linkLabel: "Abrir site",
  },
  {
    client: "Empório Liasch",
    sector: "Vinhos / Experiências",
    title: "Uma experiência física traduzida para o digital.",
    description: "Site estruturado para apresentar o Empório, sua curadoria, experiências e viagens, combinando posicionamento, prova social, conteúdo e caminhos de reserva e contato.",
    tags: ["Site", "Experiência", "Conteúdo", "Conversão"],
    href: "https://www.emporioliasch.com.br",
    linkLabel: "Abrir site",
  },
]

export function CasesShowcase() {
  return (
    <section id="cases" className="bg-neutral-950 px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">// TRABALHOS SELECIONADOS</p>
            <h2 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter sm:text-7xl lg:text-8xl">Problemas reais.<br /><span className="text-white/20">Estruturas próprias.</span></h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/45">Uma seleção de projetos recentes em que estratégia, comunicação e tecnologia precisaram trabalhar juntas.</p>
            <Link href="/sites" className="mt-7 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition-colors hover:text-[#e05c58]">
              Ver sites & landing pages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div>
          {cases.map((item, index) => (
            <a
              key={item.client}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.linkLabel}: ${item.client}`}
              className="group grid gap-8 border-b border-white/15 py-12 transition-colors hover:bg-white/[0.025] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e05c58] lg:grid-cols-[80px_0.65fr_1.35fr_150px] lg:items-start lg:gap-10 lg:px-4 lg:py-16"
            >
              <span className="font-mono text-xs text-white/20">0{index + 1}</span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e05c58]">{item.sector}</p>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-tight">{item.client}</h3>
              </div>
              <div>
                <h4 className="text-3xl font-black tracking-tighter lg:text-4xl">{item.title}</h4>
                <p className="mt-5 max-w-2xl leading-relaxed text-white/50">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="border border-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/45">{tag}</span>)}
                </div>
              </div>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-[#e05c58] lg:justify-end">
                <span>{item.linkLabel}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 grid gap-6 border border-white/15 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e05c58]">Tráfego em operação</p>
            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight lg:text-3xl">André Ávila, Dra. Amanda Fialho e Pet Endoscopia</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/50">Estratégias de aquisição em andamento para operações com jornadas e públicos distintos, conectando segmentação, campanha, página de destino e leitura de conversão.</p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Google Ads / Meta Ads / Estratégia</span>
        </div>
      </div>
    </section>
  )
}
