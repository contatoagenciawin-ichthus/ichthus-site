'use client'
import { useEffect, useRef } from 'react'
import { Bodoni_Moda } from 'next/font/google'

const editorial = Bodoni_Moda({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap' })
const base = 'https://dehilquias.ichthusmkt.com.br/hair-scroll'
const count = 60

export function HairCaseMotion({ alt, note }: { alt: string; note: string }) {
  const root = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const el = root.current, cv = canvas.current
    if (!el || !cv || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    let alive = true, active = false, started = false, raf = 0
    let last: HTMLImageElement | undefined
    const images: (HTMLImageElement | undefined)[] = Array(count)
    const paint = () => {
      raf = 0
      if (!alive || !active) return
      const rect = el.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
      const desired = Math.round(progress * (count - 1))
      const image = images[desired]
      if (image?.complete && image.naturalWidth) last = image
      if (!last) return
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.round(rect.width * ratio)), h = Math.max(1, Math.round(rect.height * ratio))
      if (cv.width !== w) cv.width = w
      if (cv.height !== h) cv.height = h
      const scale = Math.max(w / last.naturalWidth, h / last.naturalHeight)
      const iw = last.naturalWidth * scale, ih = last.naturalHeight * scale
      ctx.drawImage(last, (w-iw)/2, (h-ih)/2, iw, ih)
      cv.style.opacity = '1'
    }
    const schedule = () => { if (active && !raf) raf = requestAnimationFrame(paint) }
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      if (!active) return
      if (!started) {
        started = true
        for (let i = 0; i < count; i++) {
          const img = new Image()
          images[i] = img
          img.decoding = 'async'
          img.onload = schedule
          img.src = base + '/frames/frame_' + String(1 + Math.round(i * 119 / (count-1))).padStart(4, '0') + '.webp'
        }
      }
      schedule()
    }, {rootMargin:'200px'})
    observer.observe(el)
    window.addEventListener('scroll', schedule, {passive:true})
    window.addEventListener('resize', schedule)
    return () => { alive = false; observer.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return <div ref={root} className="absolute inset-0 isolate overflow-hidden bg-[#201b19] text-[#f5eee5]">
    <img src={base + '/poster.webp'} alt={alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
    <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-0" />
    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,10,.85),rgba(17,12,10,.4)_45%,transparent_90%),linear-gradient(0deg,rgba(17,12,10,.75),transparent_45%)]" />
    <div className="absolute inset-0 flex flex-col justify-center px-[6%]">
      <p className="mb-5 text-[10px] tracking-[0.18em]">AMERICANA · SÃO PAULO</p>
      <p className={editorial.className + ' text-[clamp(2.4rem,5.1vw,6.5rem)] leading-[0.99] tracking-[-0.065em]'}>De Hilquias<br/><em className="text-[#dbc2a0]">Hair</em></p>
      <p className="mt-7 max-w-[28ch] text-sm leading-relaxed">A arte do corte encontra um jeito próprio de cuidar de você.</p>
      <span className="mt-5 w-fit border border-white/50 px-4 py-3 text-[10px] uppercase tracking-widest">Conheça o salão ↗</span>
    </div>
    <span className="absolute bottom-4 left-[6%] right-4 text-[10px] text-white/80">{note}</span>
  </div>
}
