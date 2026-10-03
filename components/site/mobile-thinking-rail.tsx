import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Locale = "en" | "pt"

const images = [
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/marketing-operating-system.webp",
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/ai-customer-experience.webp",
  "https://res.cloudinary.com/iqlvzhdw/image/upload/f_auto,q_auto,w_900/ichthus/thinking/brand-and-performance.webp",
]

export function MobileThinkingRail({ locale }: { locale: Locale }) {
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

  return (
    <div className="min-w-0 max-w-full overflow-hidden sm:hidden">
      <div className="thinking-mobile-rail flex w-full max-w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block w-[78vw] max-w-[330px] shrink-0 snap-start first:ml-0 last:mr-1"
          >
            <article className="overflow-hidden border border-black/15 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e7e2]">
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
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.12em] text-black/30">
          {locale === "en" ? "Swipe to explore" : "Deslize para explorar"}
        </p>
        <Link
          href={locale === "en" ? "/en/thinking" : "/pt/thinking"}
          className="inline-flex items-center gap-1.5 border-b border-black pb-0.5 text-xs font-semibold"
        >
          {locale === "en" ? "All Thinking" : "Todas as ideias"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
