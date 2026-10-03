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
  const [dragging, setDragging] = useState(false)
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

  function go(next: number) {
    setIndex(Math.max(0, Math.min(items.length - 1, next)))
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    didSwipe.current = false
    setDragging(true)
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || touchStartY.current === null) return

    const touch = event.touches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    if (Math.abs(deltaY) > Math.abs(deltaX)) return

    let nextDrag = deltaX

    if ((index === 0 && deltaX > 0) || (index === items.length - 1 && deltaX < 0)) {
      nextDrag *= 0.28
    }

    setDragX(nextDrag)

    if (Math.abs(deltaX) > 10) {
      didSwipe.current = true
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || touchStartY.current === null) {
      setDragging(false)
      setDragX(0)
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current

    touchStartX.current = null
    touchStartY.current = null
    setDragging(false)
    setDragX(0)

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return

    didSwipe.current = true

    if (deltaX < 0) go(index + 1)
    else go(index - 1)
  }

  return (
    <div className="min-w-0 max-w-full sm:hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          setDragging(false)
          setDragX(0)
          touchStartX.current = null
          touchStartY.current = null
        }}
      >
        <div
          className={`flex ${
            dragging
              ? ""
              : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          }`}
          style={{
            transform: `translate3d(calc(-${index * 100}% + ${dragX}px), 0, 0)`,
          }}
        >
          {items.map((item, itemIndex) => (
            <div key={item.href} className="w-full shrink-0">
              <Link
                href={item.href}
                className="group block"
                onClick={(event) => {
                  if (didSwipe.current) {
                    event.preventDefault()
                    didSwipe.current = false
                  }
                }}
              >
                <article className="overflow-hidden border border-black/15 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e7e2]">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={images[itemIndex]}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-700 group-active:scale-[1.015]"
                    />
                    <span className="absolute left-3 top-3 bg-[#f2f2ef]/92 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.12em]">
                      0{itemIndex + 1}
                    </span>
                  </div>

                  <div className="min-h-[186px] p-4">
                    <div className="flex items-start justify-between gap-5">
                      <p className="text-[9px] font-medium uppercase leading-4 tracking-[0.11em] text-black/40">
                        {item.eyebrow}
                      </p>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-black/35" />
                    </div>
                    <h2 className="mt-4 text-[1.72rem] font-bold leading-[0.98] tracking-[-0.045em]">
                      {item.title}
                    </h2>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
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
              className={`h-1.5 transition-all ${
                itemIndex === index ? "w-6 bg-black" : "w-1.5 bg-black/20"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
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
          <Link
            href={locale === "en" ? "/en/thinking" : "/pt/thinking"}
            className="ml-1 inline-flex items-center gap-1.5 border-b border-black pb-0.5 text-xs font-semibold"
          >
            {locale === "en" ? "All" : "Todas"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <p className="mt-3 text-[9px] uppercase tracking-[0.12em] text-black/30">
        {locale === "en" ? "Swipe left or right" : "Deslize para a esquerda ou direita"}
      </p>
    </div>
  )
}
