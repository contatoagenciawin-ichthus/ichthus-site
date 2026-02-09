"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const primaryServices = [
  { label: "Websites Next.js", description: "Performance brutal para conversão" },
  { label: "Funis de Venda", description: "Máquinas de escala para infoprodutos" },
  { label: "Social Media", description: "Gestão estratégica de autoridade" },
  { label: "Gestão de Infoprodutos", description: "Do lançamento à gestão da escada de produtos" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-500
      ${isScrolled 
        ? 'bg-transparent' 
        : 'bg-transparent'
      }
    `}>
      <div className="px-6 lg:px-12 py-6 lg:py-8 flex justify-between items-center">
        
        {/* Esquerda: Menu Flutuante */}
        <div className="flex flex-col gap-2 z-10">
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 lg:gap-4 text-white hover:text-[#e05c58] transition-colors"
          >
            <div className="w-6 lg:w-8 h-[2px] bg-white group-hover:bg-[#e05c58] transition-colors" />
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em]">
              Menu
            </span>
          </button>
          
          {/* Links rápidos visíveis apenas em desktop */}
          <div className="hidden lg:flex flex-col gap-1 mt-8 opacity-40 hover:opacity-100 transition-opacity">
            {["Cases de Sucesso", "Serviços", "Sobre"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#e05c58] hover:translate-x-1 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Direita: CTA Principal */}
        <Link 
          href="#contato" 
          className="
            bg-white text-black 
            px-4 py-2 lg:px-6 lg:py-2.5
            text-[9px] lg:text-[10px] font-black uppercase 
            tracking-[0.3em] lg:tracking-widest 
            hover:bg-[#e05c58] hover:text-white hover:scale-105
            transition-all 
            flex items-center gap-2
            z-10
            whitespace-nowrap
          "
        >
          <span className="hidden sm:inline">Atendimento</span>
          <span className="sm:hidden">Atendimento</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Overlay do Menu Full Screen */}
      <div className={`
        fixed inset-0 bg-black z-[100] 
        transition-all duration-700 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <div className="h-full flex flex-col p-6 lg:p-20 overflow-y-auto">
          
          {/* Header do Menu */}
          <div className="flex justify-between items-center w-full mb-12 lg:mb-20">
            <span className="text-[#e05c58] text-[9px] lg:text-[10px] font-black tracking-[0.4em] lg:tracking-[0.5em] uppercase">
              // Navegação Direta 
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-[#e05c58] hover:rotate-90 transition-all p-2"
              aria-label="Fechar menu"
            >
              <X className="w-8 h-8 lg:w-10 lg:h-10" />
            </button>
          </div>

          {/* Grid de Conteúdo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 flex-1">
            
            {/* Serviços Focados */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <h3 className="text-white/20 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">
                Principais Serviços
              </h3>
              {primaryServices.map((service) => (
                <Link 
                  key={service.label} 
                  href="#contato" 
                  onClick={() => setIsOpen(false)}
                  className="group"
                >
                  <h4 className="
                    text-3xl lg:text-6xl font-black text-white 
                    group-hover:text-[#e05c58] 
                    transition-all tracking-tighter uppercase
                    leading-tight
                  ">
                    {service.label}
                  </h4>
                  <p className="text-white/40 text-sm mt-2 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Outros e Social */}
            <div className="flex flex-col justify-between lg:border-l border-white/10 lg:pl-12">
              <div className="flex flex-col gap-8 lg:gap-12">
                <div className="flex flex-col gap-4">
                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest">
                    Conecte-se!
                  </span>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://instagram.com/ichthusmarketing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl lg:text-2xl font-black text-white hover:text-[#e05c58] hover:translate-x-2 transition-all"
                    >
                      INSTAGRAM
                    </a>
                    <a 
                      href="#" 
                      className="text-xl lg:text-2xl font-black text-white hover:text-[#e05c58] hover:translate-x-2 transition-all"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Footer do Menu */}
              <div className="mt-12 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 border-white/10">
                <p className="text-white/30 text-xs font-medium leading-relaxed">
                  Americana, SP <br /> 
                  <a href="mailto:contato@ichthusmkt.com.br" className="hover:text-[#e05c58] transition-colors">
                    contato@ichthusmkt.com.br
                  </a> <br />
                  <a href="tel:+5519998363352" className="hover:text-[#e05c58] transition-colors">
                    +55 19 99836.3352
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}