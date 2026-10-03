"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

type SubmitState = "idle" | "submitting" | "success" | "error"

export function HospitalityAuditForm() {
  const [state, setState] = useState<SubmitState>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    setState("submitting")
    setFeedback("")

    const property = String(data.get("property") || "")
    const role = String(data.get("role") || "")
    const whatsapp = String(data.get("whatsapp") || "")
    const propertyWebsite = String(data.get("propertyWebsite") || "")
    const rooms = String(data.get("rooms") || "")
    const bookingFlow = String(data.get("bookingFlow") || "")
    const notes = String(data.get("notes") || "")

    const message = [
      "Guyana Hospitality — Guest Booking Audit",
      "",
      `Role: ${role || "Not provided"}`,
      `WhatsApp / phone: ${whatsapp || "Not provided"}`,
      `Property website: ${propertyWebsite || "Not provided"}`,
      `Approx. number of rooms: ${rooms || "Not provided"}`,
      `Current reservation flow: ${bookingFlow || "Not provided"}`,
      "",
      "Additional context:",
      notes || "No additional context provided.",
    ].join("\n")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: "en",
          name: String(data.get("name") || ""),
          company: property,
          email: String(data.get("email") || ""),
          market: "Guyana — Hospitality",
          message,
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
        "Request received. We’ll review your booking journey and get back to you.",
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
  const selectClass =
    "w-full border-0 border-b border-black/20 bg-transparent px-0 py-4 text-lg text-black outline-none transition focus:border-black"

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
            02 / Property
          </span>
          <input
            className={inputClass}
            type="text"
            name="property"
            required
            maxLength={200}
            autoComplete="organization"
            placeholder="Hotel, lodge or property name"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            03 / Role
          </span>
          <input
            className={inputClass}
            type="text"
            name="role"
            required
            maxLength={160}
            autoComplete="organization-title"
            placeholder="Owner, GM, reservations, marketing…"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            04 / Email
          </span>
          <input
            className={inputClass}
            type="email"
            name="email"
            required
            maxLength={320}
            autoComplete="email"
            placeholder="you@property.com"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            05 / WhatsApp or phone
          </span>
          <input
            className={inputClass}
            type="tel"
            name="whatsapp"
            maxLength={80}
            autoComplete="tel"
            placeholder="+592 …"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            06 / Property website
          </span>
          <input
            className={inputClass}
            type="url"
            name="propertyWebsite"
            maxLength={500}
            autoComplete="url"
            placeholder="https://"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            07 / Approx. rooms
          </span>
          <input
            className={inputClass}
            type="text"
            name="rooms"
            maxLength={80}
            inputMode="numeric"
            placeholder="e.g. 24"
          />
        </label>

        <label className="block border-b border-black/10 py-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
            08 / Reservations today
          </span>
          <select className={selectClass} name="bookingFlow" required defaultValue="">
            <option value="" disabled>
              Select the main path
            </option>
            <option value="Booking engine / PMS">Booking engine / PMS</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="OTA / marketplace">OTA / marketplace</option>
            <option value="Mixed / several channels">Mixed / several channels</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="block border-b border-black/15 py-7">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
          09 / Anything we should know?
        </span>
        <textarea
          className="mt-4 min-h-[140px] w-full resize-y border-0 bg-transparent p-0 text-xl leading-8 text-black outline-none placeholder:text-black/25 sm:text-2xl"
          name="notes"
          maxLength={3000}
          placeholder="Optional: tell us where enquiries get stuck, what you want to improve, or which systems you already use."
        />
      </label>

      <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <p className="text-xs leading-5 text-black/40">
            We use this information only to review your guest booking journey and
            contact you about the audit.
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
          {state === "submitting" ? "Sending…" : "Request the audit"}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  )
}
