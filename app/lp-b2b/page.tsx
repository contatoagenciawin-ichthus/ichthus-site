import { ArrowRight, BarChart3, Users, Target, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const whatsappLink =
  "https://wa.me/5519998363352?text=Olá,%20vim%20pela%20página%20da%20Ichthus%20e%20quero%20entender%20como%20vocês%20podem%20nos%20ajudar%20a%20gerar%20mais%20oportunidades."

export default function LpB2BPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative px-6 pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
              // MARKETING B2B
            </p>

            <h1 className="text-[13vw] lg:text-[6.2vw] font-black leading-[0.86] tracking-tighter uppercase italic">
              SEU NEGÓCIO É
              <br />
              EXCELENTE, SÓ QUE.
              <br />
              <span className="text-white/20">O PROBLEMA É QUE</span>
              <br />
              NINGUÉM SABE.
            </h1>

            <p className="mt-10 max-w-3xl text-xl lg:text-3xl leading-tight text-white/75 italic">
              Empresas sólidas perdem oportunidades todos os dias porque não
              conseguem se destacar. Geralmente, a presença digital não acompanha a qualidade da operação.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#e05c58] text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-[#c94d49] transition-colors"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center border border-white/20 px-8 py-4 font-black uppercase tracking-wider text-sm text-white hover:bg-white hover:text-black transition-colors"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-5 text-sm text-white/45">
              Atendimento comercial: (19) 99836-3352
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA ─────────────────────────────────────────── */}
      <section className="bg-white text-black py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
                // O CENÁRIO MAIS COMUM
              </p>
              <h2 className="text-[11vw] lg:text-[5vw] font-black leading-[0.86] tracking-tighter uppercase italic">
                MUITA
                <br />
                COMPETÊNCIA.
                <br />
                <span className="text-black/10">POUCA
                <br />
                VISIBILIDADE.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8 justify-center lg:pt-20">
              <p className="text-xl lg:text-2xl leading-tight text-black/80 italic">
                Algumas das melhores empresas não conseguem  se destacar, porque têm um
                problema em comum: são excelentes no que fazem, crescem por indicação, dependem de
                relacionamento e não têm um sistema comercial previsível.
              </p>
              <p className="text-lg leading-relaxed text-black/70">
                Essas empresas crescem por tempo demais no improviso. Sem posicionamento claro, sem funil de captação e sem conexão entre marketing e vendas, acabam perdendo espaço para concorrentes tecnicamente inferiores, mas comercialmente mais organizados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-black mt-20">
            {[
              "Crescimento dependente de indicação e sem previsibilidade.",
              "Site e redes que existem, mas não geram oportunidade real.",
              "Marketing desconectado do processo comercial.",
              "Execução sem estratégia, sem metas e sem marcos claros.",
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 lg:p-10 border-black border-b lg:border-b-0 ${
                  i !== 3 ? "lg:border-r" : ""
                } hover:bg-black hover:text-white transition-all duration-500`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#e05c58] block mb-6">
                  0{i + 1}
                </span>
                <p className="text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAL ──────────────────────────────────────── */}
      <section className="bg-black text-white py-24 lg:py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
              // O QUE FAZEMOS DIFERENTE
            </p>
            <h2 className="text-[10vw] lg:text-[5.5vw] font-black leading-[0.86] tracking-tighter uppercase italic">
              NÃO VENDEMOS
              <br />
              POSTS.
              <br />
              <span className="text-white/20">CONECTAMOS OPORTUNIDADES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                title: "DIAGNÓSTICO REAL",
                description:
                  "Antes de qualquer execução, mapeamos o gargalo: posicionamento, jornada, conversão ou processo comercial.",
              },
              {
                title: "ESTRATÉGIA COM META",
                description:
                  "Cada projeto começa com metas numéricas combinadas. Você sabe o que esperar e em quanto tempo — sem achismo.",
              },
              {
                title: "EXECUÇÃO CONECTADA",
                description:
                  "Conteúdo, presença digital e estrutura de conversão trabalhando juntos, não como peças soltas sem conexão.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`group p-12 transition-all duration-700 hover:bg-[#e05c58] ${
                  i !== 2 ? "lg:border-r border-white/10" : ""
                } border-b lg:border-b-0 border-white/10`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white mb-8 block transition-colors">
                  0{i + 1}
                </span>
                <h3 className="text-3xl font-black tracking-tighter italic uppercase mb-6">
                  {item.title}
                </h3>
                <p className="text-white/45 group-hover:text-white leading-relaxed text-lg transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARATIVO ──────────────────────────────────────── */}
      <section className="bg-white text-black py-24 lg:py-32 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
              // A DIFERENÇA NA PRÁTICA
            </p>
            <h2 className="text-[10vw] lg:text-[5.5vw] font-black leading-[0.86] tracking-tighter uppercase italic">
              AGÊNCIA
              <br />
              OU PARCEIRO
              <br />
              <span className="text-black/10">DE NEGÓCIO?</span>
            </h2>
          </div>

          <div className="border-t border-black">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-black">
              <div className="p-6 lg:p-8" />
              <div className="p-6 lg:p-8 border-l border-black">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
                  Agência comum
                </span>
              </div>
              <div className="p-6 lg:p-8 border-l border-black">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#e05c58]">
                  Ichthus
                </span>
              </div>
            </div>

            {[
              {
                item: "Diagnóstico antes de executar",
                agencia: "—",
                ichthus: "Sempre",
                destaque: true,
              },
              {
                item: "Metas numéricas combinadas",
                agencia: "Raramente",
                ichthus: "Em todo projeto",
                destaque: false,
              },
              {
                item: "Estratégia documentada",
                agencia: "Post a post",
                ichthus: "Antes de qualquer post",
                destaque: true,
              },
              {
                item: "Marcos de conquista claros",
                agencia: "—",
                ichthus: "Visíveis desde o início",
                destaque: false,
              },
              {
                item: "Conexão entre marketing e vendas",
                agencia: "Quase nunca",
                ichthus: "É o ponto central",
                destaque: true,
              },
              {
                item: "Acompanhamento ativo",
                agencia: "Relatório mensal",
                ichthus: "Contínuo e direto",
                destaque: false,
              },
            ].map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-[1fr_1fr_1fr] border-b border-black/10 hover:bg-black/[0.02] transition-colors"
              >
                <div className="p-6 lg:p-8">
                  <p className="font-black text-sm uppercase tracking-wide">{row.item}</p>
                </div>
                <div className="p-6 lg:p-8 border-l border-black/10">
                  <p className="text-black/35 text-sm">{row.agencia}</p>
                </div>
                <div className="p-6 lg:p-8 border-l border-black/10">
                  <p className="text-sm font-black text-black flex items-center gap-2">
                    <span className="text-[#e05c58]">✓</span> {row.ichthus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ────────────────────────────────────── */}
      <section
        id="como-funciona"
        className="bg-black text-white py-24 lg:py-32 px-6 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
              // COMO FUNCIONA
            </p>
            <h2 className="text-[10vw] lg:text-[5.5vw] font-black leading-[0.86] tracking-tighter uppercase italic">
              DIAGNÓSTICO.
              <br />
              PROJETO.
              <br />
              <span className="text-white/20">RESULTADO.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/10">
            {[
              {
                step: "01",
                title: "DIAGNÓSTICO",
                description:
                  "Analisamos posicionamento, presença digital e jornada comercial para identificar onde estão os gargalos reais.",
              },
              {
                step: "02",
                title: "PROJETO PERSONALIZADO",
                description:
                  "Montamos um plano com metas, marcos e entregas definidas — sem pacote genérico, sem receita de bolo.",
              },
              {
                step: "03",
                title: "EXECUÇÃO E ACOMPANHAMENTO",
                description:
                  "Executamos com você, ajustamos com base em dados e medimos o que importa: oportunidades geradas, não curtidas.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`p-10 lg:p-12 border-white/10 border-b lg:border-b-0 ${
                  i !== 2 ? "lg:border-r" : ""
                } hover:bg-white hover:text-black transition-all duration-500 group`}
              >
                <span className="text-7xl font-black text-white/10 group-hover:text-black/10 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-2xl font-black mt-8 mb-6 tracking-tighter italic uppercase">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/60 group-hover:text-black/70 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENCIAIS ──────────────────────────────────────── */}
      <section className="bg-white text-black py-24 lg:py-32 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
                // UMA DÉCADA DE RESULTADO
              </p>
              <h2 className="text-[10vw] lg:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase italic">
                DESDE 2014<br />
                <span className="text-black/10">TRANSFORMANDO<br />PRESENÇA EM<br />OPORTUNIDADE.</span>
              </h2>
            </div>
            <div className="lg:pt-24">
              <p className="text-xl lg:text-2xl leading-tight text-black/70 italic">
                "Nosso método não é baseado em palpites. É construído sobre mais
                de uma década de execução real, dados e ajustes contínuos com
                empresas e profissionais que precisavam crescer de forma estruturada."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-black">
            {[
              { stat: "+200%", label: "Crescimento médio em geração de oportunidades", icon: BarChart3 },
              { stat: "100+", label: "Projetos entregues em diferentes setores B2B", icon: Users },
              { stat: "10+", label: "Anos de operação e aprendizado acumulado", icon: Target },
              { stat: "R$50M+", label: "Em receita impactada diretamente", icon: Sparkles },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-10 border-black border-b lg:border-b-0 ${
                  i !== 3 ? "lg:border-r" : ""
                } flex flex-col gap-6 group hover:bg-black hover:text-white transition-all duration-500`}
              >
                <item.icon className="w-5 h-5 text-[#e05c58]" />
                <span className="text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                  {item.stat}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="bg-black text-white py-24 lg:py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
                // PRÓXIMO PASSO
              </p>
              <h2 className="text-[11vw] lg:text-[5.4vw] font-black leading-[0.86] tracking-tighter uppercase italic">
                SEU NEGÓCIO
                <br />
                NÃO PRECISA DE
                <br />
                MAIS UMA AGÊNCIA.
              </h2>
              <p className="mt-10 text-xl lg:text-3xl leading-tight text-white/75 italic max-w-2xl">
                Precisa de um parceiro que entenda de posicionamento e autoridade, defina metas
                reais e conecte marketing a resultado comercial.
              </p>
            </div>

            <div className="border border-white/10 p-10 lg:p-12">
              <p className="text-lg leading-relaxed text-white/75 mb-8">
                Fale com nosso time no WhatsApp e entenda, de forma direta, onde
                sua geração de demanda pode estar travando hoje.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-[#e05c58] text-white px-8 py-4 font-black uppercase tracking-wider text-sm hover:bg-[#c94d49] transition-colors"
              >
                Iniciar conversa
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-5 text-sm text-white/40">
                Atendimento comercial direto: (19) 99836-3352
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}