import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ichthus | Marketing Estruturado',
  description: 'Marketing estruturado com objetivos claros e resultados mensuraveis. Mais de 10 anos construindo cases de sucesso.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

