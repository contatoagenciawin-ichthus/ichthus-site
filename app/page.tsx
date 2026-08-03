import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { CasesShowcase } from "@/components/cases-showcase"
import { ServicesSection } from "@/components/services-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { ClientLogos } from "@/components/client-logos"
import { LeadCapture } from "@/components/lead-capture"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <HeroCarousel />

      <div className="relative z-20">
        <div className="h-screen" aria-hidden="true" />

        <section id="sobre" className="bg-white px-6 py-28 text-black lg:px-12 lg:py-40">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">
                // DESDE 2014
              </p>
              <h2 className="text-[14vw] font-black uppercase italic leading-[0.82] tracking-tighter lg:text-[5.8vw]">
                Clareza<br />antes de<br /><span className="text-black/15">escala.</span>
              </h2>
            </div>
            <div className="max-w-2xl border-l border-black/15 pl-8 lg:pl-14">
              <p className="text-2xl font-medium leading-tight lg:text-4xl">
                A Ichthus organiza posicionamento, aquisição, conversão e relacionamento para negócios que precisam transformar presença digital em direção comercial.
              </p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-black/60 lg:text-lg">
                Trabalhamos especialmente com empresas técnicas, profissionais especializados e operações em crescimento. Não entregamos peças isoladas: conectamos comunicação, canais e tecnologia ao que o negócio precisa realizar.
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />
        <CasesShowcase />

        <section id="abordagem" className="bg-white px-6 py-28 text-black lg:px-12 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">// COMO TRABALHAMOS</p>
            <h2 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
              Estratégia que chega até a execução.
            </h2>
            <div className="mt-20 grid border-y border-black lg:grid-cols-4">
              {[
                ["01", "Diagnóstico", "Negócio, mercado, oferta, canais e gargalos."],
                ["02", "Direção", "Prioridades, proposta, jornada e indicadores."],
                ["03", "Construção", "Conteúdo, campanhas, páginas e automações."],
                ["04", "Evolução", "Leitura de dados, aprendizado e otimização contínua."],
              ].map(([step, title, description], index) => (
                <article key={step} className={`p-8 lg:p-10 ${index < 3 ? "border-b border-black lg:border-b-0 lg:border-r" : ""}`}>
                  <span className="text-5xl font-black text-black/10">{step}</span>
                  <h3 className="mt-8 text-xl font-black uppercase tracking-tight">{title}</h3>
                  <p className="mt-4 leading-relaxed text-black/55">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EcosystemSection />
        <ClientLogos />
        <LeadCapture />
        <SiteFooter />
      </div>
    </main>
  )
}
