'use client'

import { ArrowDownRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'

const stops = [0, 0.33, 0.66, 1]

function ScrollWord({ word, index, progress }: { word: string; index: number; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const center = stops[index]
  const opacity = useTransform(() => Math.max(0, Math.min(1, (0.21 - Math.abs(progress.get() - center)) / 0.105)))
  const y = useTransform(() => `${Math.max(-1, Math.min(1, (center - progress.get()) / 0.21)) * 55}%`)
  return <motion.span aria-hidden="true" style={{ opacity, y }} className="col-start-1 row-start-1 self-center text-red">{word}</motion.span>
}

export function EditorialHero({ locale }: { locale: SiteLocale }) {
  const t = getTranslator(locale)
  const section = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const words = locale === 'en-US'
    ? ['brands.', 'digital experiences.', 'technology.', 'growth systems.']
    : ['marcas.', 'experiências digitais.', 'tecnologia.', 'sistemas de crescimento.']
  const fixed = t('Construímos', 'We build')

  return (
    <section ref={section} id="inicio" data-cursor-surface="light" className="editorial-scroll relative bg-paper text-ink">
      <div className="editorial-sticky mx-auto flex max-w-[1600px] flex-col justify-center px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.25fr)_minmax(0,0.75fr)] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>{t('Independente', 'Independent')}</p>
            <p>{t('Estratégia / Marca', 'Strategy / Brand')}</p>
            <p>{t('Digital / Crescimento', 'Digital / Growth')}</p>
            <p>{t('Tecnologia', 'Technology')}</p>
          </div>
          <div className="min-w-0">
            <h1 className="editorial-heading font-bold leading-[0.88] tracking-[-0.075em]">
              <span className="sr-only">{t('Construímos marcas, experiências digitais, tecnologia e sistemas de crescimento.', 'We build brands, digital experiences, technology, and growth systems.')}</span>
              <span aria-hidden="true" className="editorial-animated block">
                <span className="block">{fixed}</span>
                <span className="editorial-words mt-[0.12em] grid items-center overflow-hidden py-[0.12em]">
                  {words.map((word, index) => <ScrollWord key={word} word={word} index={index} progress={scrollYProgress} />)}
                  <span className="invisible col-start-1 row-start-1">{words[3]}</span>
                </span>
              </span>
              <span aria-hidden="true" className="editorial-static">{t('Construímos marcas, experiências digitais, tecnologia e sistemas de crescimento.', 'We build brands, digital experiences, technology, and growth systems.')}</span>
            </h1>
            <div className="mt-8 grid gap-6 border-t border-black/15 pt-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr]">
              <p className="max-w-2xl text-lg leading-[1.35] tracking-[-0.025em] sm:text-xl lg:text-2xl">{t('Estratégia, design, aquisição e tecnologia conectados do pensamento à execução.', 'Strategy, design, acquisition and technology connected from thinking through execution.')}</p>
              <div className="flex flex-wrap items-start gap-5 sm:justify-self-end">
                <a href="#projetos" className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">{t('Ver projetos selecionados', 'View selected work')} <ArrowDownRight className="h-4 w-4" /></a>
                <a href="#visao" className="editorial-animated inline-flex items-center gap-2 text-sm font-medium text-graphite">{t('Continuar', 'Continue')} <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
