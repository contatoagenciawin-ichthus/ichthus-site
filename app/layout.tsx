import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ichthusmkt.com.br'),
  title: 'Ichthus Marketing | Estratégia que chega até a execução',
  description: 'Posicionamento, aquisição, conversão e relacionamento para empresas técnicas, especialistas e operações em crescimento.',
  openGraph: {
    title: 'Ichthus Marketing | Estratégia que chega até a execução',
    description: 'Clareza para conectar comunicação, canais, dados e tecnologia ao crescimento do negócio.',
    locale: 'pt_BR',
    type: 'website',
  },
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
