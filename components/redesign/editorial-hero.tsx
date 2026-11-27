import { ArrowDownRight } from 'lucide-react'
import type { SiteLocale } from '@/lib/site-locale'

export function EditorialHero({ locale }: { locale: SiteLocale }) {
  return locale === 'en-US' ? (
    <section id="inicio" data-cursor-surface="light" className="mx-auto max-w-[1600px] px-5 pb-20 pt-[136px] sm:px-8 sm:pb-28 sm:pt-[168px] lg:px-12 lg:pb-36 lg:pt-[184px]">
        <div className="grid gap-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Independent</p>
            <p>Strategy / Brand</p>
            <p>Digital / Growth</p>
            <p>Technology</p>
          </div>

          <div>
            <h1 className="max-w-[1220px] text-[clamp(2.8rem,8.6vw,9.3rem)] font-bold leading-[0.84] tracking-[-0.08em]">
              We build brands,
              <br />
              digital experiences
              <br />
              and growth systems.
            </h1>

            <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Strategy, design, acquisition and technology connected from thinking
                through execution.
              </p>
              <div className="sm:justify-self-end">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                >
                  View selected work <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  ) : (
    <section id="inicio" data-cursor-surface="light" className="mx-auto max-w-[1600px] px-5 pb-20 pt-[136px] sm:px-8 sm:pb-28 sm:pt-[168px] lg:px-12 lg:pb-36 lg:pt-[184px]">
        <div className="grid gap-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Independente</p>
            <p>Estratégia / Marca</p>
            <p>Digital / Crescimento</p>
            <p>Tecnologia</p>
          </div>

          <div>
            <h1 className="max-w-[1220px] text-[clamp(2.8rem,8.6vw,9.3rem)] font-bold leading-[0.84] tracking-[-0.08em]">
              Construímos marcas,
              <br />
              experiências digitais
              <br />
              e sistemas de crescimento.
            </h1>

            <div className="mt-14 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr]">
              <p className="max-w-2xl text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                Estratégia, design, aquisição e tecnologia conectados do pensamento
                à execução.
              </p>
              <div className="sm:justify-self-end">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                >
                  Ver projetos selecionados <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
