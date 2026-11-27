'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function Header({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const headerLinks = [
    { label: t("Trabalho", "Work"), href: '#projetos' },
    { label: t("Práticas", "Capabilities"), href: '#atuacao' },
    { label: t("Sobre", "About"), href: '#manifesto' },
  ]
  
  const menuLinks = [
    { label: t("Trabalho", "Work"), href: '#projetos' },
    { label: t("Práticas", "Capabilities"), href: '#atuacao' },
    { label: t("Sobre", "About"), href: '#manifesto' },
    { label: t("Produtos", "Products"), href: '#produtos' },
    { label: t("Ideias", "Insights"), href: locale === 'en-US' ? '/en/thinking' : '/pt/thinking' },
    { label: t("Contato", "Contact"), href: '#contato' },
  ]
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusable = () => menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
    focusable()[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab') return
      const elements = Array.from(focusable())
      if (!elements.length) return
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus()
    }
  }, [menuOpen])

  const darkSurface = menuOpen
  const headerTone = menuOpen
    ? 'bg-ink text-paper'
    : 'border-b border-line bg-paper text-ink backdrop-blur-[12px]'

  return (
    <>
      <header
        data-cursor-surface={darkSurface ? 'dark' : 'light'}
        className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-[background-color,color] duration-300 ${darkSurface ? 'site-dark' : ''} ${headerTone}`}
      >
        <div className="site-shell site-grid h-full items-center">
          <a href="#inicio" className="col-span-6 font-display text-[15px] font-semibold tracking-[0.02em] min-[769px]:col-span-3" aria-label={t("Ichthus — início", "Ichthus — home")}>
            ICHTHUS
          </a>

          <nav aria-label={t("Navegação principal", "Main navigation")} className="col-span-6 hidden items-center justify-end gap-8 min-[769px]:flex">
            {headerLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-link font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="site-link-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="col-span-6 flex items-center justify-end gap-5 min-[769px]:col-span-3">
            <a href="#contato" className="site-link hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] min-[769px]:inline-flex">
              <span className="site-link-label">{t("Contato", "Contact")}</span>
              <span aria-hidden="true" className="site-link-arrow">↗</span>
            </a>
            <button
              ref={triggerRef}
              type="button"
              aria-label={menuOpen ? t("Fechar menu", "Close menu") : t("Abrir menu", "Open menu")}
              aria-expanded={menuOpen}
              aria-controls="ichthus-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-10 shrink-0 flex-col items-center justify-center gap-[5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-current"
            >
              <motion.span
                aria-hidden="true"
                className="header-menu-line h-px w-4 bg-current"
                animate={menuOpen ? { y: 3, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.24 }}
              />
              <motion.span
                aria-hidden="true"
                className="header-menu-line h-px w-4 bg-current"
                animate={menuOpen ? { y: -3, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.24 }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="ichthus-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={t("Menu principal", "Main menu")}
            data-cursor-surface="dark"
            className="site-dark fixed inset-0 z-40 overflow-y-auto bg-ink text-paper"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: 'easeOut' }}
          >
            <nav aria-label={t("Todas as páginas", "All pages")} className="site-shell flex min-h-svh flex-col justify-center pb-12 pt-28">
              <div className="flex flex-col items-start">
                {menuLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="menu-link-motion site-link font-display text-[clamp(2.6rem,7vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.36, delay: reduceMotion ? 0 : index * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="site-link-label">{link.label}</span>
                  </motion.a>
                ))}
              </div>
              <nav className="mt-12 flex gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper" aria-label={t("Escolher idioma", "Choose language")}>
                <a href="/pt" hrefLang="pt-BR" lang="pt-BR" aria-current={locale === 'pt-BR' ? 'page' : undefined}>PT-BR</a>
                <a href="/en" hrefLang="en-US" lang="en-US" aria-current={locale === 'en-US' ? 'page' : undefined}>EN-US</a>
              </nav>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
