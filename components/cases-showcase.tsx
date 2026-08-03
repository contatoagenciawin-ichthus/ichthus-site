import { ArrowUpRight } from "lucide-react"

const cases = [
  { client: "Dr. Juliano Plastina", sector: "Saúde / Infoproduto", title: "Um funil que aprende com o tráfego.", description: "Landing pages, régua de e-mails, mapa de calor e suporte à operação de mídia para transformar atenção em diagnóstico e evolução contínua.", tags: ["Funil", "Landing pages", "E-mail", "Dados"] },
  { client: "Eduardo Brasil", sector: "Jurídico", title: "Conteúdo transformado em canal próprio.", description: "Sistema de newsletter com estúdio editorial, aquisição via Brevo e dashboard próprio para organizar publicação, distribuição e leitura da operação.", tags: ["Newsletter", "Aquisição", "Dashboard", "Relacionamento"] },
  { client: "Pet Endoscopia", sector: "Saúde animal", title: "Autoridade técnica orientada à captação.", description: "Revisão de posicionamento, reconstrução do site e páginas de campanha para tutores, veterinários, clínicas e hospitais.", tags: ["Estratégia", "Site", "Funil", "Tráfego"] },
  { client: "Veritas Medi", sector: "Saúde", title: "Dez ofertas, uma estrutura de aquisição.", description: "Organização de um sistema de captação e criação de dez landing pages para kits, preservando clareza comercial e capacidade de mensuração.", tags: ["Arquitetura", "Landing pages", "Captação"] },
  { client: "Kone Máquinas", sector: "Indústria B2B", title: "Complexidade técnica apresentada com clareza.", description: "Presença digital para máquinas operatrizes e centros de usinagem, estruturada para apoiar credibilidade e oportunidades comerciais.", tags: ["B2B", "Site", "Posicionamento"] },
  { client: "Sucos Vem Viver", sector: "Marca própria", title: "Uma nova marca pronta para ganhar mercado.", description: "Construção de presença e estrutura digital para a marca própria de sucos do Empório Liasch, conectando identidade, produto e lançamento.", tags: ["Marca", "Digital", "Lançamento"] },
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
          <p className="max-w-md text-sm leading-relaxed text-white/45">Uma seleção de projetos recentes em que estratégia, comunicação e tecnologia precisaram trabalhar juntas.</p>
        </div>
        <div>
          {cases.map((item, index) => (
            <article key={item.client} className="group grid gap-8 border-b border-white/15 py-12 transition-colors lg:grid-cols-[80px_0.65fr_1.35fr_36px] lg:items-start lg:gap-10 lg:py-16">
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
              <ArrowUpRight className="hidden h-6 w-6 text-white/20 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e05c58] lg:block" />
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-6 border border-white/15 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e05c58]">Aquisição regional</p>
            <h3 className="mt-4 text-2xl font-black uppercase tracking-tight lg:text-3xl">Estratégias locais para André Ávila e Dra. Amanda Fialho</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/50">Campanhas desenhadas para realidades geográficas e jornadas distintas: atuação odontológica em Americana e Caconde, e captação médica regional em São Caetano do Sul.</p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Google Ads / Estratégia</span>
        </div>
      </div>
    </section>
  )
}
