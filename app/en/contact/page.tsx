import type { Metadata } from "next"
import Link from "next/link"
import { ProjectInquiryForm } from "@/components/contact/project-inquiry-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Ichthus about strategy, brand, digital, growth or technology.",
  alternates: {
    canonical: "/en/contact",
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
          <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
            ICHTHUS
          </Link>
          <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.1em]">
            <Link href="/pt/contact" className="text-black/35 transition hover:text-black">PT</Link>
            <span className="border-b border-black pb-0.5">EN</span>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Contact</p>
            <p>New business</p>
            <p>Brazil / International</p>
          </div>

          <div>
            <h1 className="max-w-[1180px] text-[clamp(3.8rem,8.3vw,9rem)] font-bold leading-[0.85] tracking-[-0.078em]">
              Have something
              <br />
              important
              <br />
              to build?
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16">
              <p className="max-w-2xl text-xl leading-[1.4] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Tell us what is changing, what needs to be built, and where the business needs to go next.
              </p>
              <div className="text-sm leading-6 text-black/50 sm:max-w-sm sm:justify-self-end">
                <p>
                  Strategy, brand, digital experiences, growth, customer systems and technology.
                </p>
                <p className="mt-4">
                  Prefer email?{" "}
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
                Project inquiry
              </p>
              <p className="mt-3 max-w-[210px] text-sm leading-6 text-black/40">
                Enough context to begin. No deck or formal brief required.
              </p>
            </div>
            <ProjectInquiryForm locale="en" />
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.25fr_0.75fr] lg:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
            Where we work
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">Based in Brazil.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Independent operation with projects, clients and ventures built from Brazil.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-[-0.04em]">Working internationally.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Remote collaboration, English-language delivery and market-specific work when context requires it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
