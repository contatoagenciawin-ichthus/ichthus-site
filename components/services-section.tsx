const services = [
  { number: "01", title: "Posicionamento e conteúdo", text: "Direção de marca, linhas editoriais, LinkedIn, redes sociais e construção de autoridade." },
  { number: "02", title: "Aquisição e tráfego", text: "Google Ads, Meta Ads, páginas de campanha, segmentação regional e jornadas de captação." },
  { number: "03", title: "Sites e conversão", text: "Sites institucionais, landing pages, formulários, mensuração e experiências orientadas à ação." },
  { number: "04", title: "Funis e relacionamento", text: "Réguas de e-mail, newsletters, lançamentos, automações e continuidade depois do primeiro contato." },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-black px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#e05c58]">// O QUE CONECTAMOS</p>
            <h2 className="text-5xl font-black uppercase italic leading-[0.88] tracking-tighter sm:text-7xl lg:text-8xl">Da presença<br />à decisão.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-white/50 lg:justify-self-end">
            Cada frente pode existir isoladamente. O resultado mais forte aparece quando elas respondem à mesma estratégia comercial.
          </p>
        </div>
        <div className="grid border border-white/15 lg:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.number} className={`group p-8 transition-colors hover:bg-[#e05c58] lg:p-12 ${index % 2 === 0 ? "lg:border-r" : ""} ${index < 2 ? "border-b" : ""} border-white/15`}>
              <span className="font-mono text-xs text-white/30 group-hover:text-black/40">{service.number}</span>
              <h3 className="mt-12 text-3xl font-black uppercase tracking-tighter lg:text-4xl">{service.title}</h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/45 group-hover:text-white/85">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
