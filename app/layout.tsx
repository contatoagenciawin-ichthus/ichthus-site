import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ichthusmkt.com.br"),
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
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
