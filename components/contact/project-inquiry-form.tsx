"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

type Locale = "en" | "pt"
type SubmitState = "idle" | "submitting" | "success" | "error"

export function ProjectInquiryForm({ locale }: { locale: Locale }) {
  const [state, setState] = useState<SubmitState>("idle")
  const [feedback, setFeedback] = useState("")

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
          submitting: "Sending…",
          note: "A short note is enough. We’ll receive your message directly.",
          success: "Message received. We’ll be in touch soon.",
          fallback: "If you prefer, email contato@ichthusmkt.com.br.",
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
          submitting: "Enviando…",
          note: "Uma nota curta é suficiente. Receberemos sua mensagem diretamente.",
          success: "Mensagem recebida. Entraremos em contato em breve.",
          fallback: "Se preferir, escreva para contato@ichthusmkt.com.br.",
        }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    setState("submitting")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          name: String(data.get("name") || ""),
          company: String(data.get("company") || ""),
          email: String(data.get("email") || ""),
          market: String(data.get("market") || ""),
          message: String(data.get("message") || ""),
          website: String(data.get("website") || ""),
          sourcePath: window.location.pathname,
        }),
      })

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || copy.fallback)
      }

      form.reset()
      setState("success")
      setFeedback(result.message || copy.success)
    } catch (error) {
      setState("error")
      setFeedback(error instanceof Error ? error.message : copy.fallback)
    }
  }

  const inputClass =
    "w-full border-0 border-b border-black/20 bg-transparent px-0 py-4 text-lg text-black outline-none transition placeholder:text-black/25 focus:border-black"

  return (
    <form onSubmit={handleSubmit} className="border-t border-black/15">
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
            maxLength={160}
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
            maxLength={200}
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
            maxLength={320}
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
            maxLength={200}
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
          maxLength={5000}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <p className="text-xs leading-5 text-black/40">{copy.note}</p>

          <div aria-live="polite" className="mt-3 min-h-5">
            {state === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-black">
                <Check className="h-4 w-4" />
                {feedback}
              </p>
            )}

            {state === "error" && (
              <p className="text-sm leading-6 text-black">
                {feedback}{" "}
                <a
                  href="mailto:contato@ichthusmkt.com.br"
                  className="border-b border-black/40 pb-0.5"
                >
                  contato@ichthusmkt.com.br
                </a>
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex w-fit items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85 disabled:cursor-wait disabled:opacity-60"
        >
          {state === "submitting" ? copy.submitting : copy.submit}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  )
}
