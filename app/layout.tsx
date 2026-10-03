import React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ichthusmkt.com.br"),
  title: {
    default: "Ichthus",
    template: "%s — Ichthus",
  },
  description:
    "Strategy, brand, digital, growth and technology for companies in motion.",
  openGraph: {
    title: "Ichthus",
    description:
      "Strategy, brand, digital, growth and technology for companies in motion.",
    locale: "en",
    type: "website",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const lang = requestHeaders.get("x-ichthus-locale") ?? "pt-BR"

  return (
    <html lang={lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
