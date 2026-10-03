"use client"

import { useEffect, useRef } from "react"

type KoneMachineMotionProps = {
  src: string
  alt: string
}

export function KoneMachineMotion({ src, alt }: KoneMachineMotionProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    const image = imageRef.current
    const detail = detailRef.current
    if (!frame || !image || !detail) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    let raf = 0

    const update = () => {
      raf = 0

      const rect = frame.getBoundingClientRect()
      const viewport = window.innerHeight
      const raw = (viewport - rect.top) / (viewport + rect.height)
      const progress = Math.min(1, Math.max(0, raw))

      const eased = progress * progress * (3 - 2 * progress)
      const scale = 0.96 + eased * 0.085
      const translateY = 34 - eased * 62
      const translateX = -7 + eased * 14

      image.style.transform =
        `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`

      const centerDistance = Math.abs(progress - 0.5) * 2
      const detailOpacity = Math.max(0, 0.2 - centerDistance * 0.2)
      detail.style.opacity = String(detailOpacity)
    }

    const requestUpdate = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
    }
  }, [])

  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={detailRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[16%] bottom-[8%] h-px bg-black/20 opacity-0 transition-opacity duration-500"
      />

      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain p-[7vw] will-change-transform sm:p-[5vw] motion-reduce:transform-none"
      />
    </div>
  )
}
