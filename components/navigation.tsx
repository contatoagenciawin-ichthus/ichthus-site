"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Cases", "#cases"], ["Abordagem", "#abordagem"], ["Ecossistema", "#ecossistema"],
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-6 py-6 lg:px-12 lg:py-8">
      <div className="flex items-center justify-between">
        <button onClick={() => setOpen(true)} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white"><Menu className="h-5 w-5" /> Menu</button>
        <Link href="#contato" className="flex items-center gap-2 bg-white px-5 py-3 text-[9px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#e05c58] hover:text-white">Iniciar conversa <ArrowUpRight className="h-3 w-3" /></Link>
      </div>
      <div className={`fixed inset-0 z-[100] bg-black transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
        <div className="mx-auto flex min-h-full max-w-7xl flex-col px-6 py-8 lg:px-12 lg:py-12">
          <div className="flex items-center justify-between border-b border-white/15 pb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[#e05c58]">Ichthus Marketing</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-white"><X className="h-8 w-8" /></button>
          </div>
          <div className="grid flex-1 gap-16 py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div className="flex flex-col">
              {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-4xl font-black uppercase tracking-tighter text-white transition-colors hover:text-[#e05c58] sm:text-6xl lg:text-7xl">{label}</Link>)}
            </div>
            <div className="space-y-10 lg:border-l lg:border-white/15 lg:pl-12">
              <div><p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Conecte-se</p><div className="mt-5 flex flex-col gap-2"><a href="https://www.instagram.com/ichthusmarketing/" target="_blank" rel="noreferrer" className="font-black uppercase hover:text-[#e05c58]">Instagram</a><a href="https://www.linkedin.com/company/ichthus-marketing" target="_blank" rel="noreferrer" className="font-black uppercase hover:text-[#e05c58]">LinkedIn</a></div></div>
              <div className="text-sm leading-relaxed text-white/45">Americana, SP<br /><a href="mailto:contato@ichthusmkt.com.br">contato@ichthusmkt.com.br</a><br /><a href="https://wa.me/5519998363352">+55 19 99836-3352</a></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
