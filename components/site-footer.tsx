"use client"

import Link from "next/link"

const navLinks = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Sobre", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
]

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ichthusmarketing/" },
  { label: "Facebook", href: "https://www.facebook.com/ichthusmarketing" },
  { label: "LinkedIn", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/5519998363352" },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-32 pb-10 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Topo: Grande Tagline Brutalista */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-end">
          <h2 className="text-[8vw] lg:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase italic">
            ESTRATÉGIA QUE <br />
            <span className="text-white/20">FUNCIONA.</span>
          </h2>
          
          <div className="flex flex-col lg:items-end gap-6">
            <p className="text-lg text-white/40 max-w-sm lg:text-right font-medium">
              Parceria que cresce junto. <br />
              Atendimento em todo o Brasil.
            </p>
            <Link 
              href="#contato" 
              className="text-[#e05c58] text-xl font-black uppercase tracking-widest hover:text-white transition-colors italic"
            >
              VAMOS COMEÇAR? —&gt;
            </Link>
          </div>
        </div>

        {/* Meio: Grid de Informações Estilo "Ficha Técnica" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-white/10">
          
          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Menu</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest hover:text-[#e05c58] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Social</span>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest hover:text-[#e05c58] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato Direto */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Contato</span>
            <div className="flex flex-col gap-2">
              <a href="mailto:contato@ichthusmkt.com.br" className="text-sm font-bold lowercase hover:text-[#e05c58] transition-colors italic">
                contato@ichthusmkt.com.br
              </a>
              <a href="https://wa.me/5519998363352" className="text-sm font-bold uppercase tracking-widest">
                +55 19 99836.3352
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Office</span>
            <p className="text-sm text-white/60 font-medium leading-relaxed">
              Americana, São Paulo <br />
              Brasil — Worldwide
            </p>
          </div>
        </div>

        {/* Bottom: Grande Logo Textual ou Copyright Minimalista */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[12vw] md:text-[6vw] font-black tracking-tighter text-white opacity-5 select-none leading-none">
            ICHTHUS
          </div>
          <div className="text-right flex flex-col items-center md:items-end">
            <p className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
              © {currentYear} ICHTHUS MARKETING | 10 ANOS TRANSFORMANDO NEGÓCIOS
            </p>
            <p className="text-[9px] font-mono tracking-[0.3em] text-[#e05c58] mt-2">
              ESTRATÉGIA . PRODUÇÃO . ENTREGA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}