import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LA / Marc.I.A. — Work — Ichthus",
  description:
    "A connected customer operation for a service business, linking demand, conversations, quoting, scheduling, CRM and AI-assisted workflows.",
}

const flow = [
  ["01", "Demand", "Website, paid and organic acquisition"],
  ["02", "Conversation", "WhatsApp and assisted service"],
  ["03", "Customer", "Context and relationship history"],
  ["04", "Visit", "Technical evaluation when needed"],
  ["05", "Quote", "Items, terms, approval and versions"],
  ["06", "Work order", "Scheduling, execution and records"],
  ["07", "History", "A shared operational memory"],
]

const capabilities = [
  {
    number: "01",
    title: "Conversation becomes context.",
    text: "An enquiry does not remain trapped inside a message thread. Customer, service need and next action become structured operational context.",
  },
  {
    number: "02",
    title: "AI acts through rules.",
    text: "Marc.I.A. is designed around authorised actions, policy checks, auditability and human handoff instead of unrestricted autonomous behaviour.",
  },
  {
    number: "03",
    title: "The CRM stays underneath.",
    text: "The product is the assistant and the workflow around it. The CRM works as operational memory, keeping clients, visits, quotes and work orders connected.",
  },
]

const modules = [
  "Attendances",
  "Customers",
  "Site visits",
  "Quotes",
  "Work orders",
]

export default function LaMarciaCasePage() {
  return (
    <main className="min-h-screen bg-[#eef2f2] text-[#101718]">
      <header className="border-b border-black/15 bg-[#eef2f2]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.12em] sm:gap-8">
            <span className="hidden text-black/45 sm:inline">Work / LA + Marc.I.A.</span>
            <span className="border-b border-black pb-0.5">Growth / Technology / AI</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/55">
            <p>LA Climatização</p>
            <p>Home services / HVAC</p>
            <p>Brazil</p>
            <p>Ongoing product pilot</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.5rem,8.1vw,8.7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
              From first
              <br />
              message to
              <br />
              finished job.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Building a connected customer operation for a service business, with
                acquisition, conversations, quoting and delivery sharing the same context.
              </p>
              <div className="text-sm leading-6 text-black/55 sm:max-w-sm sm:justify-self-end">
                <p>
                  Digital acquisition, customer experience, CRM, WhatsApp, quoting,
                  workflow design, AI assistance and operational architecture.
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
                  Marc.I.A. / Operational system
                </p>
                <p className="mt-2 text-sm text-white/60">First tenant: LA Climatização</p>
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
                One conversation can create a customer, trigger a visit, become a quote,
                generate a work order and remain part of the same operational history.
              </p>
              <p className="max-w-md text-sm leading-6 text-white/45 lg:justify-self-end">
                The system is designed so that customer context survives the handoffs
                between marketing, service, commercial decisions and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black/15 pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            The problem
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              A lead is only valuable if the business can keep the thread.
            </h2>
            <div className="max-w-md text-base leading-7 text-black/60 lg:justify-self-end lg:pt-2">
              <p>
                For a busy technical service company, customer information can quickly
                become fragmented across WhatsApp, memory, notes, visits, quotes and
                execution.
              </p>
              <p className="mt-5">
                The project began by connecting that operational chain. Instead of
                adding another isolated dashboard, the goal became a simpler assistant
                backed by a structured system of record.
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
                Conversation layer
              </p>
              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl">
                The interface starts where the customer already is.
              </h2>
            </div>
            <p className="mt-10 max-w-md text-base leading-7 text-black/55">
              WhatsApp is treated as a customer channel, not as the database. Messages
              create structured context while automatic, human and paused modes keep
              control with the operation.
            </p>
          </div>

          <div className="overflow-hidden border border-black/15 bg-[#f5f7f7]">
            <div className="flex items-center justify-between border-b border-black/10 bg-[#e9efec] px-5 py-4">
              <div>
                <p className="text-sm font-semibold">Customer conversation</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-black/40">
                  WhatsApp / assisted flow
                </p>
              </div>
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/50">
                automatic
              </span>
            </div>

            <div className="grid min-h-[590px] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="flex flex-col justify-end gap-4 bg-[#efece4] p-5 sm:p-8">
                <div className="max-w-[78%] rounded-[20px_20px_20px_5px] bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Good morning. I'd like a quote for a new air conditioning installation.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:32</p>
                </div>

                <div className="ml-auto max-w-[84%] rounded-[20px_20px_5px_20px] bg-[#d9fdd3] px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Of course. I can help with the quote. To start, what is the unit
                    capacity and which city is the installation in?
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:32</p>
                </div>

                <div className="max-w-[74%] rounded-[20px_20px_20px_5px] bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">12,000 BTU, in Hortolândia.</p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:33</p>
                </div>

                <div className="ml-auto max-w-[84%] rounded-[20px_20px_5px_20px] bg-[#d9fdd3] px-4 py-3 shadow-sm">
                  <p className="text-sm leading-6">
                    Perfect. I'll register those details and prepare the next step for
                    the quote.
                  </p>
                  <p className="mt-1 text-right text-[9px] text-black/35">10:33</p>
                </div>
              </div>

              <aside className="border-t border-black/10 bg-white p-5 lg:border-l lg:border-t-0 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/35">
                  Context created
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Customer", "New lead"],
                    ["Service", "New AC installation"],
                    ["Capacity", "12,000 BTU"],
                    ["City", "Hortolândia"],
                    ["Next action", "Prepare quote"],
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
              Product direction
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                The assistant is the product. The CRM is the operational memory underneath.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-black/25 pt-7 sm:grid-cols-2">
                <p className="max-w-xl text-xl leading-[1.4] tracking-[-0.025em] sm:text-2xl">
                  The system is being shaped around natural requests such as preparing a
                  quote, scheduling a visit or surfacing what needs attention today.
                </p>
                <p className="max-w-md text-sm leading-6 text-black/60 sm:justify-self-end">
                  Complexity stays below the interface: multi-tenant data, permissions,
                  command handling, audit trails, communication rules and domain state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
            Operational memory
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              What needs attention, before another screen gets opened.
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
                    <p className="text-sm font-semibold text-[#55717f]">Overview</p>
                    <h3 className="mt-1 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      What needs your attention
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                      Priorities first. The system surfaces the next action without forcing
                      the user to search through several modules.
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-xl bg-[#0f3548] px-5 py-3 text-sm font-semibold text-white">
                    + New attendance
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    ["Open", "8", "active attendances"],
                    ["Visits today", "2", "scheduled visits"],
                    ["Prepare quote", "3", "waiting proposal"],
                    ["Work orders", "4", "scheduled today"],
                    ["No date", "1", "may be forgotten"],
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
                        Priorities
                      </p>
                      <p className="mt-1 text-xl font-semibold">Resolve now</p>
                    </div>
                    <div className="divide-y divide-black/10">
                      {[
                        ["Customer A", "Prepare installation quote", "Today"],
                        ["Customer B", "Confirm technical visit", "14:30"],
                        ["Customer C", "Follow up proposal", "Tomorrow"],
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
                        Connected flow
                      </p>
                      <p className="mt-3 text-2xl font-semibold leading-tight">
                        From lead to service completion.
                      </p>
                    </div>
                    <div className="space-y-3 text-sm text-white/70">
                      <p>✓ Next action registered</p>
                      <p>✓ Quote with approval flow</p>
                      <p>✓ Work order with execution history</p>
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
              Architecture
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                AI with boundaries, not AI with unlimited access.
              </h2>

              <div className="mt-16 grid gap-px border border-white/15 bg-white/15 lg:mt-24 lg:grid-cols-4">
                {[
                  ["Conversation", "Customer request and context"],
                  ["Policy layer", "Mode, consent and allowed behaviour"],
                  ["Command layer", "Authorised domain action"],
                  ["Audit", "What changed and why"],
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
            Product principles
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
              What this proves
            </p>
            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Marketing, service and operations do not have to live in separate systems.
              </h2>
              <div className="mt-14 grid gap-8 border-t border-white/20 pt-7 sm:grid-cols-2">
                <p className="max-w-xl text-sm leading-6 text-white/55">
                  LA is the first real operating environment for Marc.I.A., a Proxy
                  product direction developed alongside the business. The work connects
                  Ichthus acquisition and experience capabilities with Proxy technology.
                </p>
                <p className="max-w-md text-sm leading-6 text-white/55 sm:justify-self-end">
                  The project is ongoing. This case documents the system direction and
                  implemented operational foundation without presenting unverified
                  performance claims.
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
              Strategy, brand, digital, growth and technology.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
              Selected Work
            </p>
            <Link href="/en" className="mt-2 block text-2xl font-bold tracking-[-0.04em]">
              Back to Ichthus →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
