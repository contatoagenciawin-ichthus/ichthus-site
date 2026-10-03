import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const requestHeaders = await headers()
  const acceptLanguage = requestHeaders.get("accept-language")?.toLowerCase() ?? ""
  const prefersPortuguese =
    acceptLanguage.startsWith("pt") || acceptLanguage.includes("pt-br")

  redirect(prefersPortuguese ? "/pt" : "/en")
}
