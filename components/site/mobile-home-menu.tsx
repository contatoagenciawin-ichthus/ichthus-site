"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function MobileHomeMenu({ locale }: { locale: "en" | "pt" }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const copy =
    locale === "en"
      ? {
          menu: "Menu",
          close: "Close",
          work: "Work",
          capabilities: "Capabilities",
          about: "About",
          thinking: "Thinking",
          contact: "Contact",
        }
      : {
          menu: "Menu",
          close: "Fechar",
          work: "Projetos",
          capabilities: "Capacidades",
          about: "Sobre",
          thinking: "Ideias",
          contact: "Contato",
        }

  const close = () => setOpen(false)

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`mobile-home-navigation-${locale}`}
        onClick={() => setOpen((value) => !value)}
        className="text-[10px] font-medium uppercase tracking-[0.1em]"
      >
        {open ? copy.close : copy.menu}
      </button>

      {open && (
        <div
          id={`mobile-home-navigation-${locale}`}
          className="absolute right-0 top-8 z-[70] w-[220px] border border-black/15 bg-[#f2f2ef] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
        >
          <nav
            aria-label={locale === "en" ? "Mobile navigation" : "Navegação mobile"}
            className="flex flex-col"
          >
            <a onClick={close} href="#work" className="border-b border-black/10 px-4 py-3 text-sm font-semibold">
              {copy.work}
            </a>
            <a onClick={close} href="#capabilities" className="border-b border-black/10 px-4 py-3 text-sm font-semibold">
              {copy.capabilities}
            </a>
            <a onClick={close} href="#about" className="border-b border-black/10 px-4 py-3 text-sm font-semibold">
              {copy.about}
            </a>
            <a onClick={close} href="#thinking" className="border-b border-black/10 px-4 py-3 text-sm font-semibold">
              {copy.thinking}
            </a>
            <Link onClick={close} href={`/${locale}/contact`} className="px-4 py-3 text-sm font-semibold">
              {copy.contact}
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
