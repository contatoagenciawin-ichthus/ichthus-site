import { NextResponse } from "next/server"
import { POST } from "../route"

export const runtime = "nodejs"

export async function GET() {
  const request = new Request("https://qa.ichthusmkt.com.br/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Ichthus-QA",
      Referer: "https://qa.ichthusmkt.com.br/en/contact",
      "x-vercel-ip-country": "BR",
    },
    body: JSON.stringify({
      locale: "en",
      name: "Ichthus QA",
      company: "Ichthus QA",
      email: "qa@ichthusmkt.com.br",
      market: "Brazil",
      message: "Automated end-to-end contact backend validation. This is a test lead.",
      website: "",
      sourcePath: "/en/contact",
    }),
  })

  const response = await POST(request)
  const payload = await response.json()

  return NextResponse.json(
    {
      qa: true,
      contactStatus: response.status,
      contactResponse: payload,
    },
    { status: response.ok ? 200 : response.status },
  )
}
