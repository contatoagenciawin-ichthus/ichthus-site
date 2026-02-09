"use client"

import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionDivider } from "@/components/section-divider"
import { SecondaryCarousel } from "@/components/secondary-carousel"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { ClientLogos } from "@/components/client-logos"
import { LeadCapture } from "@/components/lead-capture"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, BarChart3, Users, Target, Sparkles } from "lucide-react"

export default function Page() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroCarousel />

      <div className="relative z-20">
        {/* Spacer to push content below the hero viewport */}
        <div className="h-screen" aria-hidden="true" />

        {/* Section Divider - Cases de Sucesso */}
        <SectionDivider />

        {/* Secondary Carousel */}
        <SecondaryCarousel />

        {/* Portfolio Showcase - Floating Images */}
        <PortfolioShowcase />

        {/* SEÇÃO QUEM SOMOS: BRUTALISTA CLEAN 
          Fundo branco para dar o "choque" visual e respiro no meio do site negro.
        */}
        <section className="bg-white text-black py-32 lg:py-48 px-6 overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
                  // QUEM SOMOS
                </p>
                <h2 className="text-[10vw] lg:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-12">
                  UMA DÉCADA DE <br />
                  <span className="text-black/10">RESULTADOS.</span>
                </h2>
              </div>
              
              <div className="flex flex-col justify-end h-full">
                <p className="text-xl lg:text-3xl font-medium leading-tight text-black/80 max-w-xl italic">
                  "Desde 2014, transformamos presença digital em máquinas de crescimento. Nosso método não é baseado em palpites, mas em dados e execução impecável."
                </p>
              </div>
            </div>

            {/* Stats em Grid Brutalista - Linhas pretas finas, sem ícones grandes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-black mt-24">
              {[
                { stat: "+200%", label: "Crescimento Médio", icon: BarChart3 },
                { stat: "100+", label: "Clientes Atendidos", icon: Users },
                { stat: "10+", label: "Anos de Mercado", icon: Target },
                { stat: "R$50M+", label: "Receita Gerada", icon: Sparkles },
              ].map((item, i) => (
                <div key={i} className={`p-10 border-black border-b lg:border-b-0 ${i !== 3 ? 'lg:border-r' : ''} flex flex-col gap-6 group hover:bg-black hover:text-white transition-all duration-500`}>
                  <item.icon className="w-5 h-5 text-[#e05c58]" />
                  <span className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">{item.stat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO METODOLOGIA: DARK BRUTALIST 
          Conecta o branco da seção anterior com o preto do Lead Capture.
        */}
        <section className="bg-black text-white py-32 lg:py-48 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <p className="text-[10px] font-black tracking-[0.5em] text-[#e05c58] uppercase mb-8">
                // NOSSA ABORDAGEM
              </p>
              <h2 className="text-[10vw] lg:text-[6vw] font-black leading-[0.85] tracking-tighter uppercase italic">
                MÉTODO QUE <br /> <span className="text-white/20">ENTREGA.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
              {[
                { 
                  step: "01", 
                  title: "DIAGNÓSTICO", 
                  description: "Analisamos seus números, seu mercado e seus concorrentes para encontrar as brechas de crescimento." 
                },
                { 
                  step: "02", 
                  title: "ESTRATÉGIA", 
                  description: "Criamos um plano personalizado com metas claras, KPIs definidos e um cronograma realista." 
                },
                { 
                  step: "03", 
                  title: "EXECUÇÃO", 
                  description: "Implementamos, otimizamos e escalamos as campanhas com foco total em ROI mensurável." 
                },
              ].map((item, i) => (
                <div 
                  key={item.step} 
                  className={`group p-12 transition-all duration-700 hover:bg-[#e05c58] ${i !== 2 ? 'lg:border-r border-white/10' : ''} border-b lg:border-b-0 border-white/10`}
                >
                  <span className="text-7xl font-black text-white/5 group-hover:text-black/20 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-3xl font-black mt-8 mb-6 tracking-tighter italic uppercase">{item.title}</h3>
                  <p className="text-white/40 group-hover:text-white transition-colors leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture - WhatsApp (Componente Brutalista Negro) */}
        <LeadCapture />

        {/* Client Logos Carousel */}
        <ClientLogos />

        {/* Footer (Estilo Outdoor) */}
        <SiteFooter />
      </div>
    </main>
  )
}