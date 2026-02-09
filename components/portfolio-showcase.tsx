// components/portfolio-showcase.tsx
"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

const PORTFOLIO_IMAGES = Array.from({ length: 12 }, (_, i) => `/images/portfolio-${i + 1}.jpg`)

interface FloatingImage {
  id: number
  src: string
  x: number
  y: number
  width: number
  height: number
  opacity: number
  scale: number
}

export function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [images, setImages] = useState<FloatingImage[]>([])
  const nextIdRef = useRef(0)
  const lastSpawnPos = useRef({ x: 0, y: 0 })

  // Função para criar uma imagem em local aleatório
  const spawnImage = useCallback((mouseX: number, mouseY: number) => {
    const width = 200 + Math.random() * 150
    const height = width * 0.7
    
    // Calcula posição aleatória próxima ao mouse, mas com offset randômico
    const x = mouseX + (Math.random() - 0.5) * 600
    const y = mouseY + (Math.random() - 0.5) * 600

    const newImage: FloatingImage = {
      id: nextIdRef.current++,
      src: PORTFOLIO_IMAGES[Math.floor(Math.random() * PORTFOLIO_IMAGES.length)],
      x,
      y,
      width,
      height,
      opacity: 0,
      scale: 0.8
    }

    setImages(prev => [...prev.slice(-15), newImage]) // Mantém no máximo 15 na memória

    // Timer para "matar" a imagem rápido (efeito flash)
    setTimeout(() => {
      setImages(prev => prev.filter(img => img.id !== newImage.id))
    }, 1200)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const dist = Math.hypot(clientX - lastSpawnPos.current.x, clientY - lastSpawnPos.current.y)

    // Só spawna se o mouse andou uma certa distância (para não sobrecarregar)
    if (dist > 80) {
      spawnImage(clientX, clientY)
      lastSpawnPos.current = { x: clientX, y: clientY }
    }
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen bg-neutral-950 overflow-hidden select-none cursor-crosshair"
    >
      {/* Imagens Flutuantes */}
      {images.map((img) => (
        <div
          key={img.id}
          className="absolute pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: img.x,
            top: img.y,
            width: img.width,
            height: img.height,
            opacity: 1,
            transform: `translate(-50%, -50%) scale(1)`,
          }}
        >
          <div className="relative w-full h-full grayscale-[0.5] contrast-[1.2] brightness-[0.7] border border-white/10">
            <Image
              src={img.src}
              alt="Work"
              fill
              className="object-cover animate-in fade-in zoom-in duration-500"
              sizes="300px"
            />
          </div>
        </div>
      ))}

      {/* Conteúdo Central Monumental */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter text-center uppercase leading-[0.85]">
          500+ PROJETOS <br /> ENTREGUES
        </h2>
        
        <p className="mt-8 text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">
          [ Movimente para explorar ]
        </p>

        <div className="mt-12 pointer-events-auto">
          <a
            href="#cases"
            className="group inline-flex items-center text-[10px] font-bold tracking-[0.4em] text-white uppercase"
          >
            <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-2">[</span>
            Explorar Cases
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">]</span>
          </a>
        </div>
      </div>

      {/* Vinheta para profundidade */}
      <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle,_transparent_20%,_rgba(0,0,0,0.9)_100%)]" />
    </section>
  )
}