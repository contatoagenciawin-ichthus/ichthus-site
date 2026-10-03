"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

type SubmitState = "idle" | "submitting" | "success" | "error"

export function HealthcareAuditForm() {
  const [state, setState] = useState<SubmitState>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const organisation = String(data.get("organisation") || "")

    setState("submitting")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale: "en",
          name: String(data.get("name") || ""),
          company: organisation,
          email: String(data.get("email") || ""),
          market: "Guyana — Healthcare",
          message: [
            "Guyana Healthcare — Free Patient Access Audit",
            "",
            `Clinic / organisation / website: ${organisation}`,
            "",
            "The prospect requested the free audit through the low-friction healthcare landing form.",
          ].join("\n"),
          website: String(data.get("website") || ""),
          sourcePath: window.location.pathname,
        }),
      })

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.message ||
            "We could not submit your request right now. Please try again.",
        )
      }

      form.reset()
      setState("success")
      setFeedback(
        "Request received. We’ll take a first look at your patient access journey and get back to you.",
      )
    } catch (error) {
      setState("error")
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not submit your request right now. Please try again.",
      )
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

      <div className="grid gap-x-8 sm:grid-cols-3">
        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            01 / Name
          </span>
          <input
            className={inputClass}
            type="text"
            name="name"
            required
            maxLength={160}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            02 / Clinic or website
          </span>
          <input
            className={inputClass}
            type="text"
            name="organisation"
            required
            maxLength={500}
            autoComplete="organization"
            placeholder="Clinic, centre or website"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            03 / Email
          </span>
          <input
            className={inputClass}
            type="email"
            name="email"
            required
            maxLength={320}
            autoComplete="email"
            placeholder="you@clinic.com"
          />
        </label>
      </div>

      <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs leading-5 text-black/40">
            Three fields are enough to start. We can learn the rest from the organisation
            and from the conversation.
          </p>

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
          {state === "submitting" ? "Sending…" : "Request my free audit"}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  )
}
