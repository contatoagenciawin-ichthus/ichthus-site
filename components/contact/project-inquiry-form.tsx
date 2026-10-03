"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight } from "lucide-react"

type Locale = "en" | "pt"

export function ProjectInquiryForm({ locale }: { locale: Locale }) {
  const [isPreparing, setIsPreparing] = useState(false)

  const copy =
    locale === "en"
      ? {
          name: "Name",
          company: "Company",
          email: "Email",
          market: "Market / location",
          message: "What are you looking to build?",
          namePlaceholder: "Your name",
          companyPlaceholder: "Company or organisation",
          emailPlaceholder: "you@company.com",
          marketPlaceholder: "Georgetown, Guyana / São Paulo, Brazil / etc.",
          messagePlaceholder:
            "Tell us what is changing, what you need to build, and what a useful outcome would look like.",
          submit: "Start a conversation",
          preparing: "Preparing your message…",
          note: "A short note is enough. Your email app will open with the message prepared.",
        }
      : {
          name: "Nome",
          company: "Empresa",
          email: "E-mail",
          market: "Mercado / localização",
          message: "O que você quer construir?",
          namePlaceholder: "Seu nome",
          companyPlaceholder: "Empresa ou organização",
          emailPlaceholder: "voce@empresa.com.br",
          marketPlaceholder: "Georgetown, Guiana / São Paulo, Brasil / etc.",
          messagePlaceholder:
            "Conte o que está mudando, o que precisa ser construído e como seria um bom resultado.",
          submit: "Iniciar uma conversa",
          preparing: "Preparando sua mensagem…",
          note: "Uma nota curta é suficiente. Seu aplicativo de e-mail abrirá com a mensagem preparada.",
        }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPreparing(true)

    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const company = String(data.get("company") || "").trim()
    const email = String(data.get("email") || "").trim()
    const market = String(data.get("market") || "").trim()
    const message = String(data.get("message") || "").trim()

    const subject =
      locale === "en"
        ? `Ichthus website inquiry — ${company || name}`
        : `Contato pelo site Ichthus — ${company || name}`

    const body =
      locale === "en"
        ? [
            "Hello Ichthus,",
            "",
            "I'd like to start a conversation.",
            "",
            `Name: ${name}`,
            `Company: ${company}`,
            `Email: ${email}`,
            `Market / location: ${market}`,
            "",
            "What we're looking to build:",
            message,
            "",
            "Sent from the Ichthus website.",
          ].join("\n")
        : [
            "Olá, Ichthus.",
            "",
            "Gostaria de iniciar uma conversa.",
            "",
            `Nome: ${name}`,
            `Empresa: ${company}`,
            `E-mail: ${email}`,
            `Mercado / localização: ${market}`,
            "",
            "O que queremos construir:",
            message,
            "",
            "Enviado pelo site da Ichthus.",
          ].join("\n")

    window.location.href = `mailto:contato@ichthusmkt.com.br?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.setTimeout(() => setIsPreparing(false), 800)
  }

  const inputClass =
    "w-full border-0 border-b border-black/20 bg-transparent px-0 py-4 text-lg text-black outline-none transition placeholder:text-black/25 focus:border-black"

  return (
    <form onSubmit={handleSubmit} className="border-t border-black/15">
      <div className="grid gap-x-8 sm:grid-cols-2">
        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            01 / {copy.name}
          </span>
          <input
            className={inputClass}
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={copy.namePlaceholder}
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            02 / {copy.company}
          </span>
          <input
            className={inputClass}
            type="text"
            name="company"
            required
            autoComplete="organization"
            placeholder={copy.companyPlaceholder}
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            03 / {copy.email}
          </span>
          <input
            className={inputClass}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            04 / {copy.market}
          </span>
          <input
            className={inputClass}
            type="text"
            name="market"
            required
            autoComplete="country-name"
            placeholder={copy.marketPlaceholder}
          />
        </label>
      </div>

      <label className="block border-b border-black/15 py-7">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
          05 / {copy.message}
        </span>
        <textarea
          className="mt-4 min-h-[180px] w-full resize-y border-0 bg-transparent p-0 text-xl leading-8 text-black outline-none placeholder:text-black/25 sm:text-2xl"
          name="message"
          required
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-black/40">{copy.note}</p>
        <button
          type="submit"
          disabled={isPreparing}
          className="group inline-flex w-fit items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85 disabled:opacity-60"
        >
          {isPreparing ? copy.preparing : copy.submit}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  )
}
