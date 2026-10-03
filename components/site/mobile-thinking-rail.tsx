"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

type Locale = "en" | "pt"

const images = [
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/marketing-operating-system.webp",
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/ai-customer-experience.webp",
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/brand-and-performance.webp",
]

export function MobileThinkingRail({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const didSwipe = useRef(false)

  const items =
    locale === "en"
      ? [
          {
            eyebrow: "Growth / Operations",
            title: "Marketing is not a department. It is an operating system.",
            href: "/en/thinking/marketing-operating-system",
          },
          {
            eyebrow: "AI / Customer Experience",
            title: "What AI changes — and what it doesn’t — in customer experience.",
            href: "/en/thinking/ai-customer-experience",
          },
          {
            eyebrow: "Brand / Performance",
            title: "Brand and performance should not live in separate rooms.",
            href: "/en/thinking/brand-and-performance",
          },
        ]
      : [
          {
            eyebrow: "Crescimento / Operações",
            title: "Marketing não é um departamento. É um sistema operacional.",
            href: "/pt/thinking/marketing-como-sistema-operacional",
          },
          {
            eyebrow: "IA / Experiência do Cliente",
            title: "O que a IA muda — e o que não muda — na experiência do cliente.",
            href: "/pt/thinking/ia-e-experiencia-do-cliente",
          },
          {
            eyebrow: "Marca / Performance",
            title: "Marca e performance não deveriam viver em salas separadas.",
            href: "/pt/thinking/marca-e-performance",
          },
        ]

  const active = items[index]

  function go(next: number) {
    setIndex(Math.max(0, Math.min(items.length - 1, next)))
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    didSwipe.current = false
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || touchStartY.current === null) return

    const touch = event.touches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    if (Math.abs(deltaY) > Math.abs(deltaX)) return

    let nextDrag = Math.max(-72, Math.min(72, deltaX * 0.55))

    if ((index === 0 && deltaX > 0) || (index === items.length - 1 && deltaX < 0)) {
      nextDrag *= 0.3
    }

    setDragX(nextDrag)

    if (Math.abs(deltaX) > 10) {
      didSwipe.current = true
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || touchStartY.current === null) {
      setDragX(0)
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    touchStartX.current = null
    touchStartY.current = null
    setDragX(0)

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return

    didSwipe.current = true

    if (deltaX < 0) go(index + 1)
    else go(index - 1)
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden sm:hidden">
      <div
        className="w-full max-w-full overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          setDragX(0)
          touchStartX.current = null
          touchStartY.current = null
        }}
      >
        <div
          key={active.href}
          className="thinking-active-card w-full max-w-full"
          style={{
            transform: `translate3d(${dragX}px, 0, 0)`,
            opacity: Math.max(0.82, 1 - Math.abs(dragX) / 420),
          }}
        >
          <Link
            href={active.href}
            className="group block w-full max-w-full"
            onClick={(event) => {
              if (didSwipe.current) {
                event.preventDefault()
                didSwipe.current = false
              }
            }}
          >
            <article className="w-full max-w-full overflow-hidden border border-black/15 bg-white">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e7e7e2]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={images[index]}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 group-active:scale-[1.015]"
                />
                <span className="absolute left-3 top-3 bg-[#f2f2ef]/92 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em]">
                  0{index + 1}
                </span>
              </div>

              <div className="w-full max-w-full p-4 pb-5">
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <p className="min-w-0 text-[9px] font-medium uppercase leading-4 tracking-[0.11em] text-black/40">
                    {active.eyebrow}
                  </p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black/35" />
                </div>

                <h2 className="mt-4 max-w-full break-words text-[clamp(1.45rem,6.5vw,1.8rem)] font-bold leading-[1.02] tracking-[-0.042em]">
                  {active.title}
                </h2>

                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-black/30">
                  {locale === "en" ? "Open article" : "Abrir artigo"}
                </p>
              </div>
            </article>
          </Link>
        </div>
      </div>

      <div className="mt-4 flex w-full max-w-full items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-1.5">
          {items.map((item, itemIndex) => (
            <button
              key={item.href}
              type="button"
              onClick={() => go(itemIndex)}
              aria-label={
                locale === "en"
                  ? `Go to idea ${itemIndex + 1}`
                  : `Ir para ideia ${itemIndex + 1}`
              }
              className={`h-1.5 shrink-0 transition-all ${
                itemIndex === index ? "w-6 bg-black" : "w-1.5 bg-black/20"
              }`}
            />
          ))}
          <span className="ml-2 whitespace-nowrap text-[9px] text-black/30">
            {index + 1} / {items.length}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label={locale === "en" ? "Previous idea" : "Ideia anterior"}
            className="grid h-9 w-9 place-items-center border border-black/15 bg-transparent disabled:opacity-25"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === items.length - 1}
            aria-label={locale === "en" ? "Next idea" : "Próxima ideia"}
            className="grid h-9 w-9 place-items-center border border-black/15 bg-transparent disabled:opacity-25"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex w-full max-w-full items-center justify-between gap-3 border-t border-black/10 pt-3">
        <p className="min-w-0 text-[9px] uppercase tracking-[0.12em] text-black/30">
          {locale === "en" ? "Swipe left or right" : "Deslize para a esquerda ou direita"}
        </p>
        <Link
          href={locale === "en" ? "/en/thinking" : "/pt/thinking"}
          className="inline-flex shrink-0 items-center gap-1.5 border-b border-black pb-0.5 text-xs font-semibold"
        >
          {locale === "en" ? "All ideas" : "Todas"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
