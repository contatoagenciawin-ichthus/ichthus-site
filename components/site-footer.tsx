import Link from "next/link"

const nav = [["Sobre", "/#sobre"], ["Serviços", "/#servicos"], ["Cases", "/#cases"], ["Sites & Landing Pages", "/sites"], ["Ecossistema", "/#ecossistema"], ["Contato", "/#contato"]]
const social = [["Instagram", "https://www.instagram.com/ichthusmarketing/"], ["LinkedIn", "https://www.linkedin.com/company/ichthus-marketing"], ["WhatsApp", "https://wa.me/5519998363352"]]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pb-10 pt-24 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="text-5xl font-black uppercase italic leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl">Estratégia.<br /><span className="text-white/20">Execução.</span><br />Evolução.</h2>
          <div className="lg:justify-self-end lg:text-right"><p className="text-lg leading-relaxed text-white/45">Americana, São Paulo<br />Atendimento em todo o Brasil.</p><Link href="/#contato" className="mt-6 inline-block text-sm font-black uppercase tracking-[0.2em] text-[#e05c58]">Iniciar conversa →</Link></div>
        </div>
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div><p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">Navegação</p><nav className="mt-5 flex flex-col gap-2">{nav.map(([label, href]) => <Link key={href} href={href} className="text-sm font-bold uppercase tracking-wider hover:text-[#e05c58]">{label}</Link>)}</nav></div>
          <div><p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">Social</p><div className="mt-5 flex flex-col gap-2">{social.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-wider hover:text-[#e05c58]">{label}</a>)}</div></div>
          <div><p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">Contato</p><div className="mt-5 flex flex-col gap-2 text-sm"><a href="mailto:contato@ichthusmkt.com.br" className="hover:text-[#e05c58]">contato@ichthusmkt.com.br</a><a href="https://wa.me/5519998363352" className="hover:text-[#e05c58]">+55 19 99836-3352</a></div></div>
          <div><p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">Ecossistema</p><div className="mt-5 flex flex-col gap-2 text-sm font-bold uppercase tracking-wider"><span>Ichthus Marketing</span><span>Proxy</span><a href="https://www.amazon.com.br/s?k=editora+ichthus" target="_blank" rel="noreferrer" className="hover:text-[#e05c58]">Editora Ichthus</a></div></div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-[9px] font-mono uppercase tracking-[0.25em] text-white/25 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Ichthus Marketing</p><p>Desde 2014</p></div>
      </div>
    </footer>
  )
}
