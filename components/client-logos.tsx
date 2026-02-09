// components/client-logos.tsx
"use client"

import React from "react"
import Image from "next/image"

const logoIds = Array.from({ length: 62 }, (_, i) => i + 1)

// Lista de logos que precisam de tratamento especial (fundo escuro)
const darkLogos = [3, 7, 12, 18, 23, 29, 34, 41, 47, 53] // Ajuste conforme necessário

export function ClientLogos() {
  // Duplicamos apenas 2x para scroll suave contínuo
  const duplicatedLogos = [...logoIds, ...logoIds]

  return (
    <section className="relative z-20 bg-black py-32 overflow-hidden border-t border-white/5">
      
      {/* Título Monumental */}
      <div className="mb-24 px-6 text-center">
        <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
          MARCAS QUE <br /> CONFIARAM EM NÓS.
        </h2>
        <p className="mt-8 text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">
          [ Portfólio de Colaborações ]
        </p>
      </div>

      {/* Container do Carrossel */}
      <div className="group relative flex w-full overflow-hidden py-16 bg-neutral-900/10">
        <div className="flex animate-scroll-logos items-center">
          {duplicatedLogos.map((id, i) => {
            const isDarkLogo = darkLogos.includes(id)
            
            return (
              <div key={`${id}-${i}`} className="flex items-center flex-shrink-0">
                
                {/* Colchete de Fechamento */}
                <span className="text-white/20 text-3xl font-extralight mx-8 lg:mx-12 select-none">]</span>
                
                <div className="px-8 lg:px-16 flex items-center justify-center">
                  {/* Container com fundo condicional para logos escuras */}
                  <div className={`
                    relative flex items-center justify-center
                    w-[120px] lg:w-[180px]
                    h-20 lg:h-28
                    ${isDarkLogo ? 'bg-white/5 rounded-lg px-6' : ''}
                  `}>
                    <Image
                      src={`/images/logos/logo-${id}.png`}
                      alt={`Cliente ${id}`}
                      width={200}
                      height={80}
                      className={`
                        h-16 lg:h-24 w-auto max-w-full
                        object-contain
                        ${isDarkLogo ? 'brightness-200' : 'invert brightness-100'}
                        opacity-60 hover:opacity-100
                        transition-all duration-500
                        grayscale
                        scale-100 hover:scale-110
                      `}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = 'none'
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="text-white/30 text-xs font-mono">
                              LOGO_${id}
                            </div>
                          `
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Colchete de Abertura */}
                <span className="text-white/20 text-3xl font-extralight mx-8 lg:mx-12 select-none">[</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 text-center">
        <span className="text-[9px] font-mono tracking-[0.4em] text-white/10 uppercase italic">
          // ESTRATÉGIA_PRODUÇÃO_ENTREGA
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll-logos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-logos {
          animation: scroll-logos 240s linear infinite;
          display: flex;
          width: max-content;
        }
        
        .group:hover .animate-scroll-logos {
          animation-play-state: paused;
        }
      `}</style>

      {/* Degradês laterais */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
    </section>
  )
}