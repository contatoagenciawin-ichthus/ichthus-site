import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export const runtime = "nodejs"

export async function GET() {
  const databaseUrl = process.env.ICHTHUS_DATABASE_URL
  const resendKey = process.env.RESEND_API_KEY

  if (!databaseUrl) {
    return NextResponse.json({ ok: false, database: false, resend: Boolean(resendKey) }, { status: 503 })
  }

  try {
    const sql = neon(databaseUrl)
    const rows = await sql`select count(*)::int as count from contact_leads`
    return NextResponse.json({
      ok: true,
      database: true,
      resend: Boolean(resendKey),
      leadCount: rows[0]?.count ?? 0,
    })
  } catch (error) {
    console.error("Contact QA failed", error)
    return NextResponse.json(
      { ok: false, database: false, resend: Boolean(resendKey) },
      { status: 503 },
    )
  }
}
