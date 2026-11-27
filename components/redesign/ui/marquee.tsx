'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Marquee({
  children,
  className,
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={className} role="group" aria-label={label}>
      <motion.div
        className="motion-marquee flex w-max whitespace-nowrap"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  )
}
