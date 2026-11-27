'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

type SurfaceTone = 'light' | 'dark'

function getSurfaceTone(target: EventTarget | null): SurfaceTone {
  if (!(target instanceof Element)) return 'light'
  const markedSurface = target.closest<HTMLElement>('[data-cursor-surface]')
  if (markedSurface?.dataset.cursorSurface === 'dark') return 'dark'
  if (markedSurface?.dataset.cursorSurface === 'light') return 'light'

  let element: Element | null = target
  while (element && element !== document.documentElement) {
    const color = getComputedStyle(element).backgroundColor
    const channels = color.match(/[\d.]+/g)?.map(Number)
    if (channels && channels.length >= 3 && (channels[3] ?? 1) > 0) {
      const [red, green, blue] = channels
      const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255
      return luminance < 0.35 ? 'dark' : 'light'
    }
    element = element.parentElement
  }
  return 'light'
}

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const pointer = useRef({ x: 0, y: 0 })
  const expandedRef = useRef(false)
  const labelRef = useRef('')
  const toneRef = useRef<SurfaceTone>('light')
  const [expanded, setExpanded] = useState(false)
  const [label, setLabel] = useState('')
  const [tone, setTone] = useState<SurfaceTone>('light')

  useEffect(() => {
    document.documentElement.classList.add('site-cursor-active')

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      pointer.current = { x: event.clientX, y: event.clientY }
      x.set(event.clientX - (expandedRef.current ? 36 : 6))
      y.set(event.clientY - (expandedRef.current ? 36 : 6))

      const target = event.target instanceof Element ? event.target : null
      const interactive = target?.closest('a, button, [role="button"], [data-cursor-hover]')
      const nextExpanded = Boolean(interactive)
      const nextLabel = interactive?.getAttribute('data-cursor-label') ?? ''
      const nextTone = getSurfaceTone(target)

      if (expandedRef.current !== nextExpanded) {
        expandedRef.current = nextExpanded
        setExpanded(nextExpanded)
        x.set(event.clientX - (nextExpanded ? 36 : 6))
        y.set(event.clientY - (nextExpanded ? 36 : 6))
      }
      if (labelRef.current !== nextLabel) {
        labelRef.current = nextLabel
        setLabel(nextLabel)
      }
      if (toneRef.current !== nextTone) {
        toneRef.current = nextTone
        setTone(nextTone)
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.classList.remove('site-cursor-active')
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className={`site-cursor ${expanded ? 'site-cursor-expanded' : ''} ${tone === 'dark' ? 'site-cursor-on-dark' : ''}`}
      style={{ x, y }}
    >
      {label && <span>{label}</span>}
    </motion.div>
  )
}
