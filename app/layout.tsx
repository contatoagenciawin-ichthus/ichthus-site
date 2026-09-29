import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ichthusmkt.com.br'),
  title: 'Ichthus — Clarity before scale',
  description: 'Brand, acquisition, conversion and relationship, connected to what your business actually needs to achieve.',
  openGraph: { title: 'Ichthus — Clarity before scale', description: 'Independent marketing studio since 2014.', locale: 'en_US', type: 'website' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
