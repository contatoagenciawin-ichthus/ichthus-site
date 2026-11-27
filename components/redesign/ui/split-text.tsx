'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function SplitText({
  lines,
  className,
}: {
  lines: string[]
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLSpanElement>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setHasEntered(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [reduceMotion])

  const hiddenState = { clipPath: 'inset(0 0 100% 0)', y: 24 }
  const visibleState = { clipPath: 'inset(-0.18em -0.1em -0.18em -0.1em)', y: 0 }

  return (
    <span ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span key={`${index}-${line}`} aria-hidden="true" className="block pb-[0.04em]">
          <motion.span
            className="split-text-motion block"
            initial={reduceMotion ? false : hiddenState}
            animate={reduceMotion || hasEntered ? visibleState : hiddenState}
            transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
      <span className="sr-only">{lines.join(' ')}</span>
    </span>
  )
}
