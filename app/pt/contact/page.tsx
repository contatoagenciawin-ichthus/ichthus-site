import type { Metadata } from "next"
import Link from "next/link"
import { ProjectInquiryForm } from "@/components/contact/project-inquiry-form"

export const metadata: Metadata = {
  title: "Contato",
  description: "Inicie uma conversa com a Ichthus sobre estratégia, marca, digital, crescimento ou tecnologia.",
  alternates: {
    canonical: "/pt/contact",
    languages: {
      en: "/en/contact",
      "pt-BR": "/pt/contact",
    },
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f2f2ef] text-black">
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/pt" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.1em]">
            <span className="border-b border-black pb-0.5">PT</span>
            <Link href="/en/contact" className="text-black/35 transition hover:text-black">EN</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Contato</p>
            <p>Novos projetos</p>
            <p>Brasil / Internacional</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.8rem,8.3vw,9rem)] font-bold leading-[0.85] tracking-[-0.078em]">
              Tem algo
              <br />
              importante
              <br />
              para construir?
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16">
              <p className="max-w-2xl text-xl leading-[1.4] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Conte o que está mudando, o que precisa ser construído e para onde o negócio precisa avançar.
              </p>
              <div className="text-sm leading-6 text-black/50 sm:max-w-sm sm:justify-self-end">
                <p>
                  Estratégia, marca, experiências digitais, crescimento, sistemas de atendimento e tecnologia.
                </p>
                <p className="mt-4">
                  Prefere e-mail?{" "}
                  <a href="mailto:contato@ichthusmkt.com.br" className="border-b border-black/40 pb-0.5 text-black">
                    contato@ichthusmkt.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                Novo projeto
              </p>
              <p className="mt-3 max-w-[210px] text-sm leading-6 text-black/40">
                Contexto suficiente para começar. Não precisa preparar apresentação ou briefing formal.
              </p>
            </div>
            <ProjectInquiryForm locale="pt" />
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.25fr_0.75fr] lg:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
            Onde trabalhamos
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">Base no Brasil.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Operação independente com projetos, clientes e ventures construídos a partir do Brasil.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">Atuação internacional.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Colaboração remota, entregas em inglês e trabalho contextualizado ao mercado quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
