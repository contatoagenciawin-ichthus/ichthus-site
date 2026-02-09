'use client';

import { useEffect, useState, type RefObject } from "react"

/**
 * Tracks scroll progress of an element through the viewport.
 * - `progress`: 0 when element enters viewport from below, 1 when it exits at top.
 * - `isVisible`: true when at least 25% of the element is visible.
 */
export function useParallaxSlide(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // IntersectionObserver for visibility
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    )
    observer.observe(el)

    // RAF-based scroll tracking for parallax
    let rafId: number

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const windowH = window.innerHeight
        // 0 = element just entering from bottom, 1 = element fully past top
        const raw = (windowH - rect.top) / (windowH + rect.height)
        setProgress(Math.max(0, Math.min(1, raw)))
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [ref])

  return { progress, isVisible }
}
