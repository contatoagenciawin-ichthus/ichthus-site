"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"

const interests = ["Posicionamento e conteúdo", "Tráfego e aquisição", "Site ou funil", "Tecnologia / Proxy", "Livro / Editora"]

export function LeadCapture() {
  const [data, setData] = useState({ name: "", company: "", email: "", phone: "", interest: "", challenge: "" })

  function submit(event: FormEvent) {
    event.preventDefault()
    const message = ["Olá, Ichthus! Gostaria de conversar sobre um projeto.", `Nome: ${data.name}`, `Empresa: ${data.company || "Não informada"}`, `E-mail: ${data.email}`, `Telefone: ${data.phone || "Não informado"}`, `Interesse: ${data.interest || "A definir"}`, `Desafio: ${data.challenge || "Prefiro explicar na conversa"}`].join("\n")
    window.open(`https://wa.me/5519998363352?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  const field = "w-full border-b border-white/20 bg-transparent py-4 text-xl outline-none transition-colors placeholder:text-white/15 focus:border-[#e05c58] lg:text-2xl"

  return (
    <section id="contato" className="bg-black px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">// PRÓXIMA CONVERSA</p>
        <h2 className="max-w-6xl text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl">O que seu negócio<br /><span className="text-white/20">precisa destravar?</span></h2>
        <form onSubmit={submit} className="mt-20 grid gap-x-12 gap-y-10 lg:grid-cols-2">
          <input required aria-label="Nome" placeholder="Seu nome *" className={field} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          <input aria-label="Empresa" placeholder="Empresa ou projeto" className={field} value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
          <input required type="email" aria-label="E-mail" placeholder="Seu melhor e-mail *" className={field} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input type="tel" aria-label="Telefone" placeholder="Telefone / WhatsApp" className={field} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
          <div className="lg:col-span-2"><p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">Assunto principal</p><div className="flex flex-wrap gap-3">{interests.map((interest) => <button key={interest} type="button" onClick={() => setData({ ...data, interest })} className={`border px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-colors ${data.interest === interest ? "border-[#e05c58] bg-[#e05c58] text-white" : "border-white/20 text-white/45 hover:border-white"}`}>{interest}</button>)}</div></div>
          <textarea aria-label="Desafio" placeholder="Conte brevemente o desafio" rows={2} className={`${field} resize-none lg:col-span-2`} value={data.challenge} onChange={(e) => setData({ ...data, challenge: e.target.value })} />
          <button type="submit" className="group mt-6 flex items-center gap-5 text-left text-3xl font-black uppercase italic tracking-tighter lg:col-span-2 lg:text-5xl">Enviar pelo WhatsApp <ArrowRight className="h-10 w-10 text-[#e05c58] transition-transform group-hover:translate-x-3" /></button>
        </form>
      </div>
    </section>
  )
}
