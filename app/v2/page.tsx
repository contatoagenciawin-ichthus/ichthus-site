'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './v2.module.css'

const cases = [
  { number: '01', category: 'Saúde / Infoproduto', name: 'Dr. Juliano Plastina', line: 'Um funil que aprende com o tráfego.', tags: ['Funil', 'Landing pages', 'E-mail', 'Dados'], href: 'https://metodoppe.com.br', image: '/images/portfolio-1.jpg' },
  { number: '02', category: 'Jurídico', name: 'Eduardo Brasil', line: 'Conteúdo transformado em canal próprio.', tags: ['Newsletter', 'Aquisição', 'Dashboard', 'Relacionamento'], href: 'https://eduardobrasil.fonsecabrasilserrao.com', image: '/images/portfolio-2.jpg' },
  { number: '03', category: 'Saúde animal', name: 'Pet Endoscopia', line: 'Autoridade técnica orientada à captação.', tags: ['Estratégia', 'Site', 'Funil', 'Tráfego'], href: 'https://www.petendoscopia.com', image: '/images/portfolio-3.jpg' },
  { number: '04', category: 'Engenharia / B2B', name: 'SF Sistemas Construtivos', line: 'Complexidade técnica apresentada com clareza comercial.', tags: ['B2B', 'Site', 'Posicionamento', 'Captação'], href: 'https://www.sfsistemasconstrutivos.com.br', image: '/images/portfolio-4.jpg' },
  { number: '05', category: 'Indústria B2B', name: 'Kone Máquinas', line: 'Complexidade técnica apresentada com clareza.', tags: ['B2B', 'Site', 'Posicionamento'], href: 'https://www.kone.ind.br', image: '/images/portfolio-5.jpg' },
  { number: '06', category: 'Vinhos / Experiências', name: 'Empório Liasch', line: 'Uma experiência física traduzida para o digital.', tags: ['Site', 'Experiência', 'Conteúdo', 'Conversão'], href: 'https://www.emporioliasch.com.br', image: '/images/portfolio-6.jpg' },
]

export default function V2Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCase, setActiveCase] = useState(0)

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/" aria-label="Ichthus — início">ichthus<span>®</span></Link>
        <nav id="main-navigation" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegação principal">
          {['Sobre', 'Serviços', 'Cases', 'Sites & LPs', 'Abordagem', 'Ecossistema'].map((item) => (
            <Link key={item} href={item === 'Sites & LPs' ? '/sites' : `/#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</Link>
          ))}
          <Link className={styles.navCta} href="#contato" onClick={() => setMenuOpen(false)}>Iniciar conversa <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className={styles.menuButton} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">Abrir menu</span><i /><i />
        </button>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Estratégia / Marketing / Crescimento</p>
          <h1 id="hero-title"><span>NEGÓCIOS</span><span>COMPLEXOS.</span><span>DIREÇÃO CLARA.</span></h1>
          <div className={styles.heroBottom}>
            <p>Posicionamento, aquisição, conversão e relacionamento conectados ao que sua empresa precisa realizar.</p>
            <Link className={styles.textLink} href="#cases">Ver trabalhos <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <Image className={styles.heroImage} src="/images/hero-slide-1.jpg" alt="Composição visual da Ichthus" fill priority sizes="(max-width: 768px) 100vw, 42vw" />
          <span className={styles.imageCaption}>ICH / 001 — DIREÇÃO ANTES DA ESCALA</span>
        </div>
      </section>

      <section className={styles.cases} id="cases" aria-labelledby="cases-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>01 — Trabalhos selecionados</p>
          <div><h2 id="cases-title">Problemas reais.<br />Estruturas próprias.</h2><p>Uma seleção de projetos recentes em que estratégia, comunicação e tecnologia precisaram trabalhar juntas.</p></div>
        </div>
        <div className={styles.caseList} onMouseLeave={() => setActiveCase(0)}>
          {cases.map((item, index) => (
            <Link className={styles.caseRow} href={item.href} target="_blank" rel="noreferrer" key={item.number} onMouseEnter={() => setActiveCase(index)}>
              <span className={styles.caseNumber}>{item.number}</span>
              <span className={styles.caseMain}><span className={styles.caseCategory}>{item.category}</span><strong>{item.name}</strong><span className={styles.caseLine}>{item.line}</span></span>
              <span className={styles.caseTags}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</span><span className={styles.arrow} aria-hidden="true">↗</span>
            </Link>
          ))}
          <div className={styles.preview} aria-hidden="true"><Image src={cases[activeCase].image} alt="" fill sizes="220px" /></div>
        </div>
      </section>

      <section className={styles.contact} id="contato"><p className={styles.eyebrow}>02 — Próximo movimento</p><h2>Clareza começa<br />com conversa.</h2><Link className={styles.contactLink} href="mailto:ola@ichthus.com.br">ola@ichthus.com.br <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><span>ichthus®</span><span>Estratégia para negócios complexos.</span><span>© {new Date().getFullYear()}</span></footer>
    </main>
  )
}
