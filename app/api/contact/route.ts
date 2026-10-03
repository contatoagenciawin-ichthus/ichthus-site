import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export const runtime = "nodejs"

type ContactPayload = {
  locale?: unknown
  name?: unknown
  company?: unknown
  email?: unknown
  market?: unknown
  message?: unknown
  website?: unknown
  sourcePath?: unknown
}

function textValue(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function validEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status })
}

export async function GET() {
  const databaseUrl = process.env.ICHTHUS_DATABASE_URL

  if (!databaseUrl) {
    return NextResponse.json({ ok: false }, { status: 503 })
  }

  try {
    const sql = neon(databaseUrl)
    await sql`select 1 from contact_leads limit 1`
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact API health check failed", error)
    return NextResponse.json({ ok: false }, { status: 503 })
  }
}

export async function POST(request: Request) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return jsonError("Invalid request.", 400)
  }

  const locale = body.locale === "pt" ? "pt" : "en"
  const name = textValue(body.name, 160)
  const company = textValue(body.company, 200)
  const email = textValue(body.email, 320).toLowerCase()
  const market = textValue(body.market, 200)
  const message = textValue(body.message, 5000)
  const sourcePath = textValue(body.sourcePath, 500)
  const honeypot = textValue(body.website, 300)

  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !company || !email || !market || !message) {
    return jsonError(
      locale === "pt"
        ? "Preencha todos os campos obrigatórios."
        : "Please complete all required fields.",
      400,
    )
  }

  if (!validEmail(email)) {
    return jsonError(locale === "pt" ? "E-mail inválido." : "Invalid email address.", 400)
  }

  const databaseUrl = process.env.ICHTHUS_DATABASE_URL

  if (!databaseUrl) {
    console.error("Contact API: ICHTHUS_DATABASE_URL is not configured")
    return jsonError(
      locale === "pt"
        ? "O formulário está temporariamente indisponível. Use o e-mail de contato."
        : "The form is temporarily unavailable. Please use the contact email.",
      503,
    )
  }

  const sql = neon(databaseUrl)

  const referrer = textValue(request.headers.get("referer"), 1000)
  const userAgent = textValue(request.headers.get("user-agent"), 1000)
  const countryCode = textValue(
    request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry"),
    8,
  )

  let leadId = ""

  try {
    const rows = await sql`
      insert into contact_leads (
        locale,
        name,
        company,
        email,
        market,
        message,
        source_path,
        referrer,
        user_agent,
        country_code,
        metadata
      )
      values (
        ${locale},
        ${name},
        ${company},
        ${email},
        ${market},
        ${message},
        ${sourcePath || null},
        ${referrer || null},
        ${userAgent || null},
        ${countryCode || null},
        ${JSON.stringify({
          host: request.headers.get("host"),
          forwardedHost: request.headers.get("x-forwarded-host"),
        })}
      )
      returning id
    `

    leadId = String(rows[0]?.id || "")
  } catch (error) {
    console.error("Contact API: failed to persist lead", error)
    return jsonError(
      locale === "pt"
        ? "Não foi possível registrar sua mensagem agora. Tente novamente em instantes."
        : "We could not record your message right now. Please try again shortly.",
      500,
    )
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || "contato@ichthusmkt.com.br"
  const from =
    process.env.CONTACT_FROM_EMAIL || "Ichthus Website <site@updates.ichthusmkt.com.br>"

  if (resendKey && leadId) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `New Ichthus inquiry — ${company}`,
          text: [
            "New inquiry from ichthusmkt.com.br",
            "",
            `Lead ID: ${leadId}`,
            `Name: ${name}`,
            `Company: ${company}`,
            `Email: ${email}`,
            `Market / location: ${market}`,
            `Locale: ${locale}`,
            `Country: ${countryCode || "unknown"}`,
            `Source: ${sourcePath || referrer || "website"}`,
            "",
            "Project context:",
            message,
          ].join("\\n"),
        }),
      })

      if (!response.ok) {
        const details = (await response.text()).slice(0, 1000)
        throw new Error(`Resend ${response.status}: ${details}`)
      }

      await sql`
        update contact_leads
        set notification_status = 'sent',
            notification_error = null
        where id = ${leadId}::uuid
      `
    } catch (error) {
      console.error("Contact API: notification failed", error)

      try {
        await sql`
          update contact_leads
          set notification_status = 'failed',
              notification_error = ${String(error).slice(0, 1500)}
          where id = ${leadId}::uuid
        `
      } catch (updateError) {
        console.error("Contact API: notification status update failed", updateError)
      }
    }
  } else if (leadId) {
    try {
      await sql`
        update contact_leads
        set notification_status = 'skipped',
            notification_error = 'RESEND_API_KEY not configured'
        where id = ${leadId}::uuid
      `
    } catch (error) {
      console.error("Contact API: skipped status update failed", error)
    }
  }

  return NextResponse.json({
    ok: true,
    message:
      locale === "pt"
        ? "Mensagem recebida. Entraremos em contato em breve."
        : "Message received. We’ll be in touch soon.",
  })
}
