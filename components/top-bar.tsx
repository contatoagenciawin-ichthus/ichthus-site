"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

type Locale = "EN" | "PT"

type TopBarProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const navigation = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["About", "#about"],
]

export function TopBar({ locale, onLocaleChange }: TopBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="site-header">
      <div className="announcement-strip">
        <a href="#about">
          A decade of clarity-first marketing · Since 2014 · →
        </a>
      </div>
      <div className={`main-topbar${isScrolled ? " is-scrolled" : ""}`}>
        <nav className="topbar-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="topbar-wordmark" href="#top" aria-label="Ichthus, início">ICHTHUS</a>
        <div className="topbar-actions">
          <div className="locale-switcher" aria-label="Selecionar idioma">
            <button className={locale === "EN" ? "is-active" : ""} onClick={() => onLocaleChange("EN")} aria-pressed={locale === "EN"}>EN</button>
            <span aria-hidden="true">|</span>
            <button className={locale === "PT" ? "is-active" : ""} onClick={() => onLocaleChange("PT")} aria-pressed={locale === "PT"}>PT</button>
          </div>
          <a className="topbar-cta" href="#contact">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </header>
  )
}
