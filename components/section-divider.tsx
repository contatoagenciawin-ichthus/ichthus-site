// components/section-divider.tsx
"use client"

import { useEffect, useRef, useState } from "react"

export function SectionDivider() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 flex items-center justify-center overflow-hidden border-y border-white/5"
      style={{ minHeight: "45vh" }}
    >
      {/* Identificadores de Canto (Estilo Produção/Boutique) */}
      <span className="absolute top-10 left-10 text-white/10 font-mono text-[9px] tracking-[0.3em] uppercase select-none">
        // INDEX_WORK_01
      </span>
      <span className="absolute bottom-10 right-10 text-white/10 font-mono text-[9px] tracking-[0.3em] uppercase select-none">
        © 2026_ICHTHUS
      </span>

      <div className="flex items-center gap-8 lg:gap-12 px-6">
        <div
          className={`h-[1px] bg-white/10 transition-all duration-1000 ease-out ${
            isVisible ? "w-20 lg:w-40 opacity-100" : "w-0 opacity-0"
          }`}
        />

        <h2
          className={`text-[10px] lg:text-xs font-bold text-white tracking-[0.7em] uppercase transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Cases de Sucesso
        </h2>

        <div
          className={`h-[1px] bg-white/10 transition-all duration-1000 ease-out ${
            isVisible ? "w-20 lg:w-40 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>

      {/* Indicador de progresso vertical minimalista */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
    </section>
  )
}