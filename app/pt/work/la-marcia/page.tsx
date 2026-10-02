import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LA / Marc.I.A. — Projeto — Ichthus",
  description:
    "Uma operação de atendimento conectada para uma empresa de serviços, ligando demanda, conversas, orçamentos, agenda, CRM e fluxos assistidos por IA.",
}

const flow = [
  ["01", "Demanda", "Site, aquisição paga e orgânica"],
  ["02", "Conversa", "WhatsApp e atendimento assistido"],
  ["03", "Cliente", "Contexto e histórico de relacionamento"],
  ["04", "Vistoria", "Avaliação técnica quando necessário"],
  ["05", "Orçamento", "Itens, condições, aprovação e versões"],
  ["06", "Ordem de serviço", "Agenda, execução e registros"],
  ["07", "Histórico", "Uma memória operacional compartilhada"],
]

const capabilities = [
  {
    number: "01",
    title: "Conversa becomes context.",
    text: "An enquiry does not remain trapped inside a message thread. Cliente, service need and next action become structured operational context.",
  },
  {
    number: "02",
    title: "A IA age por meio de regras.",
    text: "A Marc.I.A. é desenhada em torno de ações autorizadas, verificações de política, auditabilidade e handoff humano, em vez de comportamento autônomo irrestrito.",
  },
  {
    number: "03",
    title: "O CRM permanece por baixo.",
    text: "O produto é a assistente e o fluxo ao redor dela. O CRM funciona como memória operacional, mantendo clientes, vistorias, orçamentos e ordens de serviço conectados.",
  },
]

const modules = [
  "Atendimentos",
  "Clientes",
  "Vistorias",
  "Orçamentos",
  "Ordem de serviços",
]

export default function LaMarciaCasePage() {
  return (
    <main className="min-h-screen bg-[#eef2f2] text-[#101718]">
      <header className="border-b border-black/15 bg-[#eef2f2]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Projeto / LA + Marc.I.A.</span>
            <span className="border-b border-black pb-0.5">Crescimento / Tecnologia / IA</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>LA Climatização</p>
            <p>Serviços técnicos / Climatização</p>
            <p>Brazil</p>
            <p>Produto piloto em evolução</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.1vw,8.7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              Da primeira
              <br />
              mensagem ao
              <br />
              serviço concluído.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Construindo uma operação de atendimento conectada para uma empresa de serviços, com
                aquisição, conversas, orçamentos e execução compartilhando o mesmo contexto.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:max-w-sm sm:justify-self-end">
                <p>
                  Aquisição digital, experiência do cliente, CRM, WhatsApp, orçamentos,
                  desenho de fluxo, assistência por IA e arquitetura operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f3548] px-5 py-8 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative min-h-[76vh] overflow-hidden border border-white/15 bg-[#0a2938] p-6 sm:p-10 lg:p-14">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                  Marc.I.A. / Sistema operacional
                </p>
                <p className="mt-2 text-sm text-white/60">Primeiro tenant: LA Climatização</p>
              </div>
              <div className="h-3 w-3 rounded-full bg-[#14bf63] shadow-[0_0_0_8px_rgba(20,191,99,0.10)]" />
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 xl:grid-cols-7">
              {flow.map(([number, title, text], index) => (
                <article
                  key={title}
                  className="relative min-h-[210px] min-w-0 border border-white/15 bg-white/[0.035] p-5 xl:p-4 2xl:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-[0.14em] text-white/30">
                      {number}
                    </span>
                    {index < flow.length - 1 && (
                      <span className="hidden text-white/25 xl:block">→</span>
                    )}
                  </div>
                  <h2 className="mt-10 max-w-full break-words text-xl font-semibold leading-[1.02] tracking-[-0.045em] 2xl:text-2xl">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-5 border-t border-white/15 pt-7 lg:grid-cols-[1.2fr_0.8fr]">
              <p className="max-w-3xl text-2xl leading-[1.25] tracking-[-0.035em] text-white/92 sm:text-3xl">
                Uma conversa pode criar um cliente, disparar uma vistoria, virar um orçamento,
                gerar uma ordem de serviço e continuar parte do mesmo histórico operacional.
              </p>
              <p className="max-w-md text-sm leading-6 text-white/45 lg:justify-self-end">
                O sistema é desenhado para que o contexto do cliente sobreviva às transições
                entre marketing, atendimento, decisões comerciais e execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            O problema
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Um lead só tem valor se a empresa conseguir manter o fio da conversa.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                Para uma empresa de serviços técnicos com rotina intensa, as informações do cliente podem rapidamente
                se fragmentar entre WhatsApp, memória, anotações, vistorias, orçamentos e
                execução.
              </p>
              <p className="mt-5">
                O projeto começou conectando essa cadeia operacional. Em vez de
                adicionar mais um painel isolado, o objetivo passou a ser uma assistente mais simples
                apoiada por um sistema estruturado de registro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.42fr_0.58fr] lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                Conversa layer
              </p>
              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                A interface começa onde o cliente já está.
              </h2>
            </div>
            <p className="mt-10 max-w-md text-base leading-7 text-black/55">
              O WhatsApp é tratado como canal de atendimento, não como banco de dados. As mensagens
              criam contexto estruturado enquanto os modos automático, humano e pausado mantêm
              o controle com a operação.
            </p>
          </div>

          <div className="overflow-hidden border border-black/15 bg-[#f5f7f7]">
            <div className="flex items-center justify-between border-b border-black/10 bg-[#e9efec] px-5 py-4">
              <div>
                <p className="text-sm font-semibold">Cliente conversation</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-black/40">
                  WhatsApp / fluxo assistido
                </p>
              </div>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/50">
                automático
              </span>
            </div>

            <div className="grid min-h-[590px] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="flex flex-col justify-end gap-4 bg-[#efece4] p-5 sm:p-8">
                <div className="max-w-[78%] rounded-[20px_20px_20px_5px] bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Bom dia. Gostaria de cotar uma nova instalação de ar-condicionado.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:32</p>
                </div>

                <div className="ml-auto max-w-[84%] rounded-[20px_20px_5px_20px] bg-[#d9fdd3] px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Claro. Posso ajudar com o orçamento. Para começar, qual é a capacidade do
                    equipamento e em qual cidade será a instalação?
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:32</p>
                </div>

                <div className="max-w-[74%] rounded-[20px_20px_20px_5px] bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">12 mil BTUs, em Hortolândia.</p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:33</p>
                </div>

                <div className="ml-auto max-w-[84%] rounded-[20px_20px_5px_20px] bg-[#d9fdd3] px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Perfeito. Vou registrar esses dados e preparar o próximo passo para
                    o orçamento.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:33</p>
                </div>
              </div>

              <aside className="border-t border-black/10 bg-white p-5 lg:border-l lg:border-t-0 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/35">
                  Contexto criado
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Cliente", "Novo lead"],
                    ["Service", "Nova instalação de ar-condicionado"],
                    ["Capacidade", "12,000 BTU"],
                    ["Cidade", "Hortolândia"],
                    ["Próxima ação", "Preparar orçamento"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-black/10 pb-4">
                      <p className="text-[10px] uppercase tracking-[0.1em] text-black/35">{label}</p>
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f28a26] text-[#131313]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/55">
              Direção de produto
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                A assistente é o produto. O CRM é a memória operacional por baixo.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/25 pt-7 sm:grid-cols-2">
                <p className="max-w-xl text-xl leading-[1.4] tracking-[-0.025em] sm:text-2xl">
                  O sistema está sendo moldado em torno de pedidos naturais, como preparar um
                  orçamento, agendar uma vistoria ou mostrar o que precisa de atenção hoje.
                </p>
                <p className="max-w-md text-sm leading-6 text-black/60 sm:justify-self-end">
                  A complexidade fica abaixo da interface: dados multi-tenant, permissões,
                  tratamento de comandos, trilhas de auditoria, regras de comunicação e estado do domínio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Memória operacional
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              O que precisa de atenção, antes de abrir outra tela.
            </h2>

            <div className="mt-14 overflow-hidden border border-black/15 bg-white shadow-[0_28px_70px_rgba(15,53,72,0.10)] lg:mt-20">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 bg-[#0f3548] px-5 py-4 text-white sm:px-7">
                <div>
                  <p className="text-sm font-semibold">Marc.I.A.</p>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-white/45">LA Climatização</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {modules.map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-white/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.08em] text-white/65"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#f4f6f7] p-5 sm:p-7 lg:p-10">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                  <div>
                    <p className="text-sm font-semibold text-[#55717f]">Visão geral</p>
                    <h3 className="mt-1 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      O que precisa da sua atenção
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                      Prioridades primeiro. O sistema mostra a próxima ação sem obrigar
                      o usuário a procurar em vários módulos.
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-xl bg-[#0f3548] px-5 py-3 text-sm font-semibold text-white">
                    + Novo atendimento
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    ["Em aberto", "8", "atendimentos ativos"],
                    ["Vistorias today", "2", "visitas agendadas"],
                    ["Preparar orçamento", "3", "aguardando proposta"],
                    ["Ordem de serviços", "4", "agendadas hoje"],
                    ["Sem data", "1", "podem ser esquecidos"],
                  ].map(([label, value, note], index) => (
                    <article
                      key={label}
                      className={`border p-4 ${index === 2 ? "border-[#f2c28f] bg-[#fff5e9]" : "border-[#dbe3e7] bg-white"}`}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/40">{label}</p>
                      <p className="mt-2 text-3xl font-semibold">{value}</p>
                      <p className="mt-1 text-xs text-black/40">{note}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1.6fr_0.9fr]">
                  <article className="border border-[#dbe3e7] bg-white">
                    <div className="border-b border-black/10 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/40">
                        Prioridades
                      </p>
                      <p className="mt-1 text-xl font-semibold">Resolver agora</p>
                    </div>
                    <div className="divide-y divide-black/10">
                      {[
                        ["Cliente A", "Preparar orçamento de instalação", "Hoje"],
                        ["Cliente B", "Confirmar vistoria técnica", "14:30"],
                        ["Cliente C", "Retomar proposta", "Amanhã"],
                      ].map(([customer, action, timing]) => (
                        <div key={customer} className="grid grid-cols-[10px_1fr_auto] items-center gap-4 p-5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#f28a26]" />
                          <div>
                            <p className="text-sm font-semibold">{customer}</p>
                            <p className="mt-1 text-xs text-black/45">{action}</p>
                          </div>
                          <span className="text-xs font-semibold text-[#55717f]">{timing}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="flex min-h-[300px] flex-col justify-between bg-[#0f3548] p-6 text-white">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                        Fluxo conectado
                      </p>
                      <p className="mt-3 text-2xl font-semibold leading-tight">
                        Do lead à conclusão do serviço.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-white/70">
                      <p>✓ Próxima ação registered</p>
                      <p>✓ Orçamento with approval flow</p>
                      <p>✓ Ordem de serviço with execution history</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
              Arquitetura
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                IA com limites, não IA com acesso irrestrito.
              </h2>

              <div className="mt-16 grid gap-px border border-white/15 bg-white/15 lg:mt-24 lg:grid-cols-4">
                {[
                  ["Conversa", "Cliente request and context"],
                  ["Camada de políticas", "Modo, consentimento e comportamento permitido"],
                  ["Camada de comandos", "Ação de domínio autorizada"],
                  ["Auditoria", "O que mudou e por quê"],
                ].map(([title, text], index) => (
                  <article key={title} className="min-h-[250px] bg-[#111] p-6 sm:p-7">
                    <span className="text-[10px] tracking-[0.14em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Princípios de produto
          </div>
          <div className="divide-y divide-black/15 border-t border-black/15">
            {capabilities.map((item) => (
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

      <section className="bg-[#0f3548] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">
              O que isso prova
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Marketing, atendimento e operação não precisam viver em sistemas separados.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-white/20 pt-7 sm:grid-cols-2">
                <p className="max-w-xl text-sm leading-6 text-white/55">
                  A LA é o primeiro ambiente operacional real da Marc.I.A., uma direção de produto da Proxy
                  desenvolvida junto ao negócio. O trabalho conecta
                  as capacidades de aquisição e experiência da Ichthus com a tecnologia da Proxy.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/55 sm:justify-self-end">
                  O projeto está em evolução. Este case documenta a direção do sistema e
                  a fundação operacional implementada sem apresentar
                  resultados de performance não verificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/15 bg-[#eef2f2]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-16">
          <div>
            <p className="text-lg font-bold tracking-[-0.04em]">ICHTHUS</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
              Estratégia, marca, digital, crescimento e tecnologia.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Projetos selecionados
            </p>
            <Link href="/pt" className="mt-2 block text-2xl font-bold tracking-[-0.04em]">
              Voltar para Ichthus →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
