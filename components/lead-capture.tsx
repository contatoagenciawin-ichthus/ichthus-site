"use client"

import { useState, useCallback, type FormEvent } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

const REVENUE_OPTIONS = [
  { value: "ate-10k", label: "Até R$10k" },
  { value: "10k-50k", label: "R$10k - R$50k" },
  { value: "50k-100k", label: "R$50k - R$100k" },
  { value: "acima-200k", label: "Acima de R$200k" },
]

export function LeadCapture() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", revenue: "", challenge: "" })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulação de envio
    setTimeout(() => {
      const message = encodeURIComponent(`Olá! Nome: ${formData.name}\nFaturamento: ${formData.revenue}`)
      window.open(`https://wa.me/5519998363352?text=${message}`, "_blank")
      setSending(false)
    }, 1000)
  }

  return (
    <section id="contato" className="bg-black text-white py-32 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Estilo 1820 */}
        <div className="mb-32 border-b border-white/10 pb-12">
          <h2 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic">
            TEM UMA VISÃO? <br />
            <span className="text-white/20">VAMOS ESCALAR JUNTOS.</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          
          {/* Nome */}
          <div className="group relative">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-[#e05c58] transition-colors">Seu Nome</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl lg:text-4xl outline-none focus:border-white transition-all placeholder:text-white/5"
              placeholder="Seu Nome"
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email */}
          <div className="group relative">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-[#e05c58] transition-colors">Seu Melhor E-mail</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl lg:text-4xl outline-none focus:border-white transition-all placeholder:text-white/5"
              placeholder="hello@world.com"
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Faturamento (Select Customizado) */}
          <div className="group relative lg:col-span-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">Média de Faturamento</label>
            <div className="flex flex-wrap gap-4 mt-6">
              {REVENUE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFormData({...formData, revenue: opt.value})}
                  className={`px-8 py-3 border rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                    formData.revenue === opt.value 
                    ? "bg-white text-black border-white" 
                    : "border-white/20 text-white/40 hover:border-white hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mensagem/Desafio */}
          <div className="group relative lg:col-span-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-focus-within:text-[#e05c58] transition-colors">Seu Desafio</label>
            <textarea
              rows={1}
              className="w-full bg-transparent border-b border-white/20 py-8 text-2xl lg:text-5xl outline-none focus:border-white transition-all placeholder:text-white/5 resize-none overflow-hidden"
              placeholder="Conte-nos sua meta..."
              onChange={e => setFormData({...formData, challenge: e.target.value})}
            />
          </div>

          {/* Submit Monumental */}
          <div className="lg:col-span-2 pt-12">
            <button
              type="submit"
              disabled={sending}
              className="group flex items-center gap-8 text-4xl lg:text-7xl font-black uppercase italic tracking-tighter hover:italic-none transition-all"
            >
              <span className="relative">
                {sending ? "Sending..." : "Falar com um Especialista"}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#e05c58] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
              {sending ? (
                <Loader2 className="w-12 h-12 lg:w-20 lg:h-20 animate-spin text-white/20" />
              ) : (
                <ArrowRight className="w-12 h-12 lg:w-20 lg:h-20 group-hover:translate-x-4 transition-transform text-[#e05c58]" />
              )}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}