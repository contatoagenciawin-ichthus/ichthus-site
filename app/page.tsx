"use client"

import { FormEvent, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { TopBar } from "@/components/top-bar"

const services = [
  ["01", "Estratégia", "Clareza para decidir o que comunicar, para quem e por quê.", "Diagnóstico, posicionamento e direção comercial."],
  ["02", "Aquisição", "Canais que encontram as pessoas certas no momento certo.", "Mídia, conteúdo e jornadas de captura."],
  ["03", "Conversão", "Experiências que transformam interesse em movimento.", "Sites, landing pages e automações."],
  ["04", "Relacionamento", "Sistemas que fazem cada contato continuar trabalhando.", "CRM, retenção e evolução baseada em dados."],
]

const cases = [
  ["Dr. Plastina", "Health", "A funnel that learns from its own traffic.", "/images/portfolio-1.jpg"],
  ["Eduardo Brasil", "Legal", "Editorial content turned into a private channel.", "/images/portfolio-2.jpg"],
  ["Pet Endoscopia", "Animal Health", "Technical authority built for capture.", "/images/portfolio-3.jpg"],
  ["SF Sistemas Construtivos", "Engineering", "Engineering complexity, presented with commercial clarity.", "/images/portfolio-4.jpg"],
  ["Kone Máquinas", "Industrial B2B", "Industrial credibility, translated into qualified opportunities.", "/images/portfolio-5.jpg"],
  ["Empório Liasch", "Wine / Hospitality", "An in-person experience, ported to digital.", "/images/portfolio-6.jpg"],
]

const steps = [
  ["01", "Diagnóstico", "Entender o negócio, o mercado, a oferta e os gargalos."],
  ["02", "Direção", "Escolher prioridades, proposta, jornada e indicadores."],
  ["03", "Construção", "Colocar conteúdo, campanhas, páginas e automações no mundo."],
  ["04", "Evolução", "Ler os dados, aprender e otimizar continuamente."],
]

function Hero({ locale }: { locale: "EN" | "PT" }) {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const isPortuguese = locale === "PT"
  const title = isPortuguese ? ["Clareza", "antes de", "escala."] : ["Clarity", "before", "scale."]
  const caption = isPortuguese ? "Clareza antes de escala." : "Clarity before scale."

  return (
    <section ref={heroRef} className="hero" id="top">
      <motion.p className="eyebrow hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        Strategy / Marketing / Growth
      </motion.p>
      <motion.h1 style={{ y: titleY, opacity: titleOpacity }} aria-label={title.join(" ")}>
        {title.map((line, lineIndex) => (
          <span className="hero-line" key={line}>
            {line.split(" ").map((word, wordIndex) => (
              <motion.span className="hero-word" key={word} initial={{ opacity: 0, y: "0.8em" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 + (lineIndex * 2 + wordIndex) * 0.18, ease: [0.22, 1, 0.36, 1] }}>
                {word}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>
      <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1 }}>
        <p>{caption}</p>
        <a className="hero-link" href="#work">View work →</a>
      </motion.div>
    </section>
  )
}

export default function Page() {
  const [locale, setLocale] = useState<"EN" | "PT">("EN")
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <TopBar locale={locale} onLocaleChange={setLocale} />


      <Hero locale={locale} />

      <section className="manifesto" id="about"><div className="shell manifesto-inner"><p className="eyebrow">01 / A point of view</p><h2>Hi. We&apos;re <em>Ichthus.</em></h2><p className="manifesto-copy">We bring the parts of marketing that are usually kept apart into one clear direction. So good work has somewhere useful to go.</p></div><div className="ticker" aria-label="Áreas de atuação"><span>Strategy&nbsp; / &nbsp;Production&nbsp; / &nbsp;Delivery&nbsp; — &nbsp;since 2014&nbsp;&nbsp;&nbsp;&nbsp;Strategy&nbsp; / &nbsp;Production&nbsp; / &nbsp;Delivery&nbsp; — &nbsp;since 2014</span></div></section>

      <section className="section shell" id="services"><div className="section-intro"><p className="eyebrow">02 / What we do</p><h2>The work is connected.</h2></div><div className="service-list">{services.map(([number, title, desc, detail]) => <article className="service-row" key={number}><span className="service-number">{number}</span><div><p className="service-label">{title}</p><h3>{desc}</h3><p className="service-detail">{detail}</p></div><ArrowUpRight className="row-arrow" aria-hidden="true" /></article>)}</div></section>

      <section className="work-section" id="work"><div className="shell"><div className="section-intro"><p className="eyebrow">03 / Selected work</p><h2>Proof, not promises.</h2></div><div className="case-list">{cases.map(([name, industry, outcome, image], index) => <article className="case" key={name}><div className="case-image"><img src={image} alt={`Projeto ${name}`} /></div><div className="case-meta"><div><p className="case-index">0{index + 1}</p><h3>{name}</h3></div><div><p className="case-industry">{industry}</p><p className="case-outcome">{outcome}</p><p className="case-tags">Strategy&nbsp; / &nbsp;Digital&nbsp; / &nbsp;Growth</p></div></div></article>)}</div></div></section>

      <section className="section shell" id="process"><div className="section-intro"><p className="eyebrow">04 / Process</p><h2>Direction, then momentum.</h2></div><div className="steps">{steps.map(([number, title, desc]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">05 / Start here</p><h2>What does your business need to <em>unlock?</em></h2><p className="contact-subtitle">Tell us where you are. We&apos;ll help you see what comes next.</p></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="success"><p className="eyebrow">Message received</p><h3>Obrigado. A conversa começa aqui.</h3><p>Entraremos em contato em breve.</p></div> : <><label>Nome<input required name="name" placeholder="Seu nome" /></label><label>Empresa<input required name="company" placeholder="Nome da empresa" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Budget<select name="budget" defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>&lt; $5k</option><option>$5–15k</option><option>$15–30k</option><option>$30k+</option></select></label><label className="full">Mensagem<textarea required name="message" rows={4} placeholder="O que você precisa destravar?" /></label><button className="submit-button" type="submit">Enviar mensagem <ArrowUpRight aria-hidden="true" /></button></>}</form></div></section>

      <footer className="footer shell"><div><a className="wordmark" href="#top">ICHTHUS</a><p>Clarity before scale.</p></div><div><p className="footer-label">Contact</p><a href="mailto:hello@ichthusmkt.com.br">hello@ichthusmkt.com.br</a><p>São Paulo / Brazil</p></div><div><p className="footer-label">Follow</p><a href="#top">Instagram</a><a href="#top">LinkedIn</a></div><div><p className="footer-label">Locale</p><button className="locale footer-locale" onClick={() => setLocale(locale === "EN" ? "PT" : "EN")}>{locale} / {locale === "EN" ? "PT" : "EN"}</button><p>© 2024 Ichthus</p></div></footer>
    </main>
  )
}
