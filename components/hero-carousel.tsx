// components/hero-carousel.tsx
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

const slides = [
  {
    headline: "ESTRATÉGIA. EXECUÇÃO. RESULTADOS.",
    cta: "Ver Nossos Trabalhos",
    image: "/images/hero-slide-1.jpg",
  },
  {
    headline: "MARKETING DE RESULTADO",
    cta: "Como Trabalhamos",
    image: "/images/hero-slide-2.jpg",
  },
  {
    headline: "10 ANOS+. 500+ PROJETOS. FOCO E EXECUÇÃO.",
    cta: "Conhecer a Ichthus",
    image: "/images/hero-slide-3.jpg",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  const [textFading, setTextFading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advanceSlide = useCallback((nextIndex?: number) => {
    const next = nextIndex !== undefined ? nextIndex : (currentIndex + 1) % slides.length

    // 1. Inicia transição de texto (imediata)
    setTextFading(true)
    
    // 2. Troca o texto no meio do fade
    setTimeout(() => {
      setCurrentIndex(next)
      setTextFading(false)
    }, 600)

    // 3. Troca a imagem com ATRASO (Delay estratégico como na 1820)
    setTimeout(() => {
      setImageIndex(next)
    }, 1200) 
  }, [currentIndex])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(() => advanceSlide(), 8000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [advanceSlide, isPaused])

  return (
    <section
      className="fixed inset-0 w-full h-screen overflow-hidden bg-neutral-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Camada de Textura (Film Grain / Noise) */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

      {/* Background Images com Filtro de Envelhecimento */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            i === imageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover contrast-[1.1] brightness-[0.5] sepia-[0.15] saturate-[0.85]"
            priority
            quality={100}
          />
        </div>
      ))}

      {/* Overlay de Vinheta para foco central */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.8)_100%)]" />

      {/* Content Editorial */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className={`max-w-5xl transition-all duration-1000 ease-out ${
            textFading ? "opacity-0 translate-y-8 blur-sm" : "opacity-100 translate-y-0 blur-0"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase mb-12">
            {slides[currentIndex].headline}
          </h1>
          
          <a
            href="#trabalhos"
            className="group inline-flex items-center text-[10px] font-bold tracking-[0.5em] text-white/80 transition-all uppercase hover:text-white"
          >
            <span className="mr-3 transition-transform duration-500 group-hover:-translate-x-3">[</span>
            {slides[currentIndex].cta}
            <span className="ml-3 transition-transform duration-500 group-hover:translate-x-3">]</span>
          </a>
        </div>

        {/* Indicador Numérico Progressivo */}
        <div className="absolute bottom-16 flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] text-white/40">
          <span className={textFading ? "opacity-20" : "opacity-100"}>0{currentIndex + 1}</span>
          
          <div className="relative h-[1px] w-32 bg-white/10">
            <div 
              key={currentIndex}
              className="absolute h-full bg-white/60 animate-progress"
              style={{ animationDuration: '8000ms' }}
            />
          </div>
          
          <span>0{slides.length}</span>
        </div>
      </div>
    </section>
  )
}
