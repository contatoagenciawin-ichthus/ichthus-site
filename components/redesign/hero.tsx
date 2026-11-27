'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { RevealOnScroll } from '@/components/redesign/ui/reveal-on-scroll'
import { SplitText } from '@/components/redesign/ui/split-text'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function Hero({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const desktopHeadline = locale === 'en-US' ? ['We build brands', 'that sustain', 'growth.'] : ['Construímos marcas', 'que sustentam', 'crescimento.']
  const mobileHeadline = locale === 'en-US' ? ['We build', 'brands that', 'sustain', 'growth.'] : ['Construímos', 'marcas que', 'sustentam', 'crescimento.']
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [conceptAvailable, setConceptAvailable] = useState(true)
  const [conceptLoaded, setConceptLoaded] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])


  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-labelledby="hero-title"
      data-cursor-surface="dark"
      className="hero-section site-dark relative isolate flex min-h-svh overflow-hidden bg-ink text-paper"
    >
      <motion.div className="hero-parallax absolute inset-x-0 top-0 h-[105%]" style={{ y: reduceMotion ? 0 : parallaxY }}>
        <Image
          src={conceptAvailable ? "/ichthus-hero-concept.webp" : "/ichthus-hero-poster.png"}
          onLoad={() => { if (conceptAvailable) setConceptLoaded(true) }}
          onError={() => { setConceptAvailable(false); setConceptLoaded(false) }}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%] md:object-[72%_10%]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(5,10,18,.88) 0%, rgba(5,10,18,.68) 30%, rgba(5,10,18,.40) 48%, rgba(5,10,18,.10) 78%, rgba(5,10,18,.04) 100%), linear-gradient(180deg, rgba(5,10,18,.38), transparent 25%, transparent 55%, rgba(5,10,18,.62) 100%)" }}
      />

      <div className="site-shell site-grid relative z-10 mt-auto pb-6 pt-24 md:pb-8 md:pt-24">
        <div className="col-span-12 lg:col-span-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-sand md:mb-4">
            {t("Independente · Brasil · Reino Unido · EUA · Desde 2014", "Independent · Brazil · UK · US · Since 2014")}
          </p>

          <h1
            id="hero-title"
            className="mb-4 font-display font-extrabold leading-[0.92] tracking-[-0.045em] md:mb-4"
          >
            <span className="hidden min-[769px]:block text-[clamp(2.2rem,min(6.2vw,12svh),5.45rem)]">
              <SplitText lines={desktopHeadline} />
            </span>
            <span className="block min-[769px]:hidden text-[clamp(2.55rem,8vw,4.9rem)]">
              <SplitText lines={mobileHeadline} />
            </span>
          </h1>

          <RevealOnScroll className="mb-5 max-w-[46ch] text-[17px] leading-[1.5] text-paper md:mb-5 md:text-[18px]">
            <p>{t("Estratégia, marca, digital e tecnologia operando como um só sistema — do posicionamento à receita.", "Strategy, brand, digital, and technology working as one system, from positioning to revenue.")}</p>
          </RevealOnScroll>
        </div>

        <div className="col-span-12 mt-3 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:mt-4">
          <a href="#projetos" className="site-link inline-flex items-center gap-1 pb-1 text-[14px] text-paper md:text-[15px]">
            <span className="site-link-label">{t("Ver o trabalho selecionado", "View selected work")}</span>
            <span aria-hidden="true" className="site-link-arrow">↗</span>
          </a>
          <div className="flex items-center gap-5 font-mono text-[11px] tracking-[0.14em] text-sand">
            {conceptLoaded && <span className="max-w-[25ch] text-right text-[10px] leading-tight">{t("Estudo conceitual da futura sede", "Concept study of a future headquarters")}</span>}
            <span>01 — 04</span>
            <motion.span
              aria-hidden="true"
              className="hero-scroll-indicator text-[18px] leading-none"
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
