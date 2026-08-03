import { ArrowUpRight } from "lucide-react"

const ventures = [
  { label: "Tecnologia", name: "Proxy", text: "Sistemas, produtos digitais e inteligência aplicada a operações e conhecimento especializado.", status: "Site em implantação" },
  { label: "Publishing", name: "Editora Ichthus", text: "Catálogo próprio, curadoria editorial e desenvolvimento de livros de autoridade e legado.", status: "Catálogo disponível na Amazon", href: "https://www.amazon.com.br/s?k=editora+ichthus" },
]

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="bg-[#e05c58] px-6 py-28 text-black lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-black/55">// NEGÓCIOS DO ECOSSISTEMA</p>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <h2 className="text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl">Também<br />construímos<br />os nossos.</h2>
          <p className="max-w-xl text-xl font-medium leading-snug lg:justify-self-end lg:text-2xl">Aplicamos estratégia e tecnologia em operações próprias. É onde transformamos experiência em produtos, sistemas e propriedade intelectual.</p>
        </div>
        <div className="mt-20 grid border-y border-black lg:grid-cols-2">
          {ventures.map((venture, index) => {
            const content = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50">{venture.label}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <h3 className="mt-14 text-4xl font-black uppercase tracking-tighter lg:text-5xl">{venture.name}</h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-black/65">{venture.text}</p>
                <p className="mt-10 text-[10px] font-black uppercase tracking-[0.25em]">{venture.status}</p>
              </>
            )
            const classes = `block p-8 transition-colors hover:bg-black hover:text-white lg:p-12 ${index === 0 ? "border-b border-black lg:border-b-0 lg:border-r" : ""}`
            return venture.href ? <a key={venture.name} className={classes} href={venture.href} target="_blank" rel="noreferrer">{content}</a> : <article key={venture.name} className={classes}>{content}</article>
          })}
        </div>
      </div>
    </section>
  )
}
