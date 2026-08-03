"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDownRight } from "lucide-react"

const slides = [
  { eyebrow: "Estratégia / Marketing / Crescimento", headline: "NEGÓCIOS COMPLEXOS. DIREÇÃO CLARA.", text: "Posicionamento, aquisição, conversão e relacionamento conectados ao que sua empresa precisa realizar.", image: "/images/hero-slide-1.jpg" },
  { eyebrow: "Da ideia à operação", headline: "NÃO ENTREGAMOS PEÇAS ISOLADAS.", text: "Construímos a estrutura que liga comunicação, canais, dados e tecnologia em uma mesma direção.", image: "/images/hero-slide-2.jpg" },
  { eyebrow: "Ichthus Marketing / Desde 2014", headline: "ESTRATÉGIA QUE CHEGA ATÉ A EXECUÇÃO.", text: "Para empresas técnicas, profissionais especializados e operações em crescimento.", image: "/images/hero-slide-3.jpg" },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="fixed inset-0 h-screen overflow-hidden bg-neutral-950">
      {slides.map((slide, index) => (
        <div key={slide.image} className={`absolute inset-0 transition-all duration-[1800ms] ${index === current ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}>
          <Image src={slide.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover brightness-[0.35] saturate-[0.75] contrast-110" />
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,.82)_100%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-12 lg:pb-16">
        <div className="max-w-6xl">
          <p className="mb-8 text-[9px] font-black uppercase tracking-[0.45em] text-[#e05c58] sm:text-[10px]">{slides[current].eyebrow}</p>
          <h1 className="text-5xl font-black uppercase leading-[0.82] tracking-tighter text-white sm:text-7xl lg:text-[7.5rem]">{slides[current].headline}</h1>
          <div className="mt-10 flex flex-col gap-8 border-t border-white/20 pt-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-base leading-relaxed text-white/65 lg:text-xl">{slides[current].text}</p>
            <a href="#cases" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white">Ver trabalhos <ArrowDownRight className="h-5 w-5 text-[#e05c58] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          </div>
        </div>
        <div className="mt-10 flex gap-3">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrent(index)} aria-label={`Exibir destaque ${index + 1}`} className={`h-[2px] transition-all ${index === current ? "w-16 bg-[#e05c58]" : "w-8 bg-white/25"}`} />)}
        </div>
      </div>
    </section>
  )
}
