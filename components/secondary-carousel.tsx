// components/secondary-carousel.tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import { useParallaxSlide } from "@/hooks/use-parallax-slide"

const slides = [
  {
    headline: "NÓS PENSAMOS, NÓS DESENVOLVEMOS, NÓS ENTREGAMOS",
    cta: "Ver Cases de Sucesso",
    image: "/images/secondary-slide-1.jpg",
  },
  {
    headline: "BRANDING, MARCA, DESIGN, EVOLUÇÃO",
    cta: "Crie sua Estratégia",
    image: "/images/secondary-slide-2.jpg",
  },
  {
    headline: "PEÇAS QUE SE CONECTAM. NADA EXISTE POR ACASO.",
    cta: "Agendar Conversa",
    image: "/images/secondary-slide-3.jpg",
  },
]

function ParallaxSlide({ slide, index }: { slide: (typeof slides)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { progress, isVisible } = useParallaxSlide(ref)

  // Ajuste de Parallax para profundidade sem vazar bordas
  const yOffset = (progress - 0.5) * 15

  return (
    <section
      ref={ref}
      className="sticky top-0 w-full h-screen overflow-hidden bg-neutral-950 border-t border-white/5"
    >
      {/* Background image com tratamento cinematográfico */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-[120%] -top-[10%] will-change-transform transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${yOffset}%)` }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover grayscale-[0.3] contrast-[1.1] brightness-[0.4]"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-neutral-950/40" />
        </div>
      </div>

      {/* Content Editorial */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div
          className="max-w-5xl transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(80px)",
          }}
        >
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter text-white uppercase mb-12">
            {slide.headline}
          </h2>
          
          <a
            href="#cases"
            className="group inline-flex items-center text-[10px] font-bold tracking-[0.5em] text-white/80 transition-all uppercase hover:text-white"
          >
            <span className="mr-3 transition-transform duration-500 group-hover:-translate-x-3">[</span>
            {slide.cta}
            <span className="ml-3 transition-transform duration-500 group-hover:translate-x-3">]</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SecondaryCarousel() {
  return (
    <div className="relative bg-neutral-950">
      {slides.map((slide, i) => (
        <ParallaxSlide key={slide.headline} slide={slide} index={i} />
      ))}
    </div>
  )
}