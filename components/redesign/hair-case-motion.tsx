'use client'
import { useEffect, useRef, useState } from 'react'

const base = 'https://hiquias-hair.vercel.app/hair-scroll'
export function HairCaseMotion({ alt, note }: { alt: string; note: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [frame, setFrame] = useState(0)
  const [images, setImages] = useState<string[]>([])
  useEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let alive = true
    let timer: ReturnType<typeof setInterval> | undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) { if (timer) clearInterval(timer); timer = undefined; return }
      const urls = Array.from({length: 30}, (_, i) => base + '/frames/frame_' + String(1 + Math.round(i * 119 / 29)).padStart(4, '0') + '.webp')
      Promise.all(urls.map(url => new Promise<string>(resolve => { const img = new Image(); img.onload = () => resolve(url); img.onerror = () => resolve(''); img.src = url }))).then(loaded => {
        if (!alive || !el.getBoundingClientRect || el.getBoundingClientRect().bottom < 0 || el.getBoundingClientRect().top > window.innerHeight) return
        const valid = loaded.filter(Boolean)
        if (valid.length < 2) return
        setImages(valid)
        if (!timer) timer = setInterval(() => setFrame(i => (i + 1) % (valid.length * 2 - 2)), 125)
      })
    }, {threshold: 0.15})
    observer.observe(el)
    return () => { alive = false; observer.disconnect(); if (timer) clearInterval(timer) }
  }, [])
  const index = frame < images.length ? frame : 2 * images.length - 2 - frame
  return <div ref={root} className="absolute inset-0 overflow-hidden bg-[#171411]">
    <img src={images[index] || base + '/poster.webp'} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
    <span className="absolute bottom-4 left-4 right-4 text-xs text-white drop-shadow-md">{note}</span>
  </div>
}
