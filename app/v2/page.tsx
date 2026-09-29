import Link from "next/link"

const cases = [
  { index: "01", sector: "VETERINARY / AUTHORITY", title: "Pet Endoscopia", statement: "Autoridade técnica não precisa parecer complicada.", note: "Posicionamento, conteúdo e direção visual para transformar profundidade técnica em comunicação compreensível." },
  { index: "02", sector: "B2B / GROWTH", title: "Eduardo Brasil", statement: "Conteúdo que não termina no post.", note: "Estratégia editorial conectada a distribuição, relacionamento e geração de demanda." },
  { index: "03", sector: "TECHNOLOGY / AI", title: "Proxy", statement: "Marketing não termina quando o lead responde.", note: "Produtos próprios para atendimento, CRM, automação e inteligência operacional." },
]

const capabilities = [
  ["01", "Strategy", "Posicionamento, oferta, jornada, canais e direção comercial."],
  ["02", "Creative", "Identidade, conteúdo, campanhas e experiências digitais."],
  ["03", "Growth", "Aquisição, mídia, conversão, relacionamento e mensuração."],
  ["04", "Technology", "Sites, sistemas, automações, IA e integrações."],
]

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[#f2eee7] text-[#111] selection:bg-[#e05c58] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f2eee7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/v2" className="text-xl font-black uppercase tracking-[-0.06em]">ICHTHUS<span className="text-[#e05c58]">.</span></Link>
          <div className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.22em] md:flex">
            <a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#ecosystem">Ecosystem</a>
          </div>
          <a href="#contact" className="rounded-full border border-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition hover:bg-black hover:text-white">Start a conversation</a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/15 px-5 pb-10 pt-16 lg:px-10 lg:pb-16 lg:pt-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-black/50">
            <span>Strategy · Creative · Growth · Technology</span><span>Brazil → Global</span>
          </div>
          <h1 className="max-w-[1400px] text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.085em] sm:text-[15vw] lg:text-[10.8vw]">
            Clarity<br/><span className="text-[#e05c58]">before</span><br/>scale.
          </h1>
          <div className="mt-14 grid gap-10 border-t border-black pt-8 lg:grid-cols-[1fr_1fr]">
            <p className="max-w-xl text-2xl font-semibold leading-[1.05] tracking-tight lg:text-4xl">We connect strategy, creative and technology to turn digital presence into commercial direction.</p>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-black/65 lg:text-lg">Ichthus works with technical businesses, specialized professionals and growing operations. Not isolated deliverables. Systems that connect communication, acquisition, conversion and relationship.</p>
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.28em]">Independent since 2014 ↘</p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full border-[60px] border-[#e05c58]/10 lg:h-[520px] lg:w-[520px]" />
      </section>

      <section className="bg-[#111] px-5 py-8 text-[#f2eee7] lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap justify-between gap-4 text-[11px] font-black uppercase tracking-[0.28em]">
          <span>We diagnose.</span><span>We direct.</span><span>We build.</span><span>We evolve.</span>
        </div>
      </section>

      <section id="work" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex items-end justify-between border-b border-black pb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#e05c58]">Selected work / thinking</p>
            <span className="text-sm font-bold">01—03</span>
          </div>
          <div>
            {cases.map((item) => (
              <article key={item.index} className="group grid gap-8 border-b border-black/20 py-12 transition lg:grid-cols-[80px_0.75fr_1.25fr] lg:items-start lg:py-16">
                <span className="text-sm font-black">{item.index}</span>
                <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-black/45">{item.sector}</p><h3 className="text-3xl font-black uppercase tracking-[-0.055em] lg:text-5xl">{item.title}</h3></div>
                <div><p className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.055em] transition group-hover:text-[#e05c58] lg:text-6xl">{item.statement}</p><p className="mt-7 max-w-2xl text-base leading-relaxed text-black/55">{item.note}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-[#e05c58] px-5 py-24 text-[#111] lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-10 text-[10px] font-black uppercase tracking-[0.35em]">What we connect</p>
          <h2 className="max-w-6xl text-[14vw] font-black uppercase leading-[0.75] tracking-[-0.085em] lg:text-[8vw]">Not pieces.<br/>A system.</h2>
          <div className="mt-20 grid border-y border-black lg:grid-cols-4">
            {capabilities.map(([n,title,text], i) => <article key={n} className={`py-8 lg:p-8 ${i<3 ? "border-b border-black lg:border-b-0 lg:border-r" : ""}`}><span className="text-xs font-black">{n}</span><h3 className="mt-12 text-3xl font-black uppercase tracking-[-0.05em]">{title}</h3><p className="mt-5 max-w-xs leading-relaxed text-black/65">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="bg-[#111] px-5 py-24 text-[#f2eee7] lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#e05c58]">Ichthus ecosystem</p><h2 className="mt-8 text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] lg:text-8xl">We also<br/>build<br/>our own.</h2></div>
            <div className="border-t border-white/25">
              <div className="grid gap-6 border-b border-white/25 py-9 sm:grid-cols-[1fr_2fr]"><h3 className="text-3xl font-black uppercase">Proxy</h3><p className="text-lg leading-relaxed text-white/60">Technology, AI, automation and relationship infrastructure built from problems we encounter in real operations.</p></div>
              <div className="grid gap-6 border-b border-white/25 py-9 sm:grid-cols-[1fr_2fr]"><h3 className="text-3xl font-black uppercase">Editora Ichthus</h3><p className="text-lg leading-relaxed text-white/60">Publishing as another expression of the same principle: organize knowledge, give it form and put it into circulation.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1500px] border-t border-black pt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#e05c58]">Next move</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h2 className="text-[14vw] font-black uppercase leading-[0.76] tracking-[-0.085em] lg:text-[8vw]">Build what<br/>comes next.</h2>
            <div><p className="text-xl font-semibold leading-tight">For companies that need more than marketing output.</p><a href="mailto:contato@ichthusmkt.com.br" className="mt-8 inline-block border-b-2 border-black pb-2 text-sm font-black uppercase tracking-[0.18em]">contato@ichthusmkt.com.br ↗</a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/20 px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-[1500px] flex-wrap justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-black/45"><span>Ichthus Marketing © 2026</span><span>Americana · São Paulo · Brazil</span><span>Home V2 / Direction study</span></div></footer>
    </main>
  )
}
