import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Products({ locale }: { locale: SiteLocale }) {
  const t = getTranslator(locale)
  return (
    <section id="produtos" aria-labelledby="products-title" data-cursor-surface="dark" className="site-dark bg-ink py-[clamp(80px,10vw,140px)] text-paper">
      <div className="site-shell site-grid gap-y-10">
        <div className="col-span-12 md:col-span-6">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-sand">{t('Produtos próprios', 'Our products')}</p>
          <h2 id="products-title" className="max-w-[14ch] font-display text-[clamp(2.6rem,4.2vw,3.6rem)] font-semibold tracking-tight">{t('Tecnologia que desenvolvemos.', 'Technology we build.')}</h2>
          <p className="mt-6 max-w-[38ch] text-[16px] leading-relaxed text-sand">{t('Desenvolvemos soluções próprias para conectar marketing, atendimento e operação comercial.', 'We develop our own solutions to connect marketing, customer service and commercial operations.')}</p>
        </div>
        <article className="col-span-12 border border-sand/30 p-8 md:col-span-6 md:p-12">
          <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.12em] text-sand">{t('Inteligência aplicada ao atendimento', 'Intelligence applied to customer service')}</p>
          <h3 className="mb-5 font-display text-[clamp(2.8rem,5vw,4.5rem)] font-semibold">Marc.I.A.</h3>
          <p className="max-w-[42ch] text-[16px] leading-relaxed text-sand">{t('Uma solução que integra atendimento por WhatsApp, inteligência artificial e CRM para organizar conversas e oportunidades comerciais. Conheça nossa aplicação para clínicas.', 'A solution integrating WhatsApp customer service, artificial intelligence and CRM to organize conversations and sales opportunities. Explore our application for clinics.')}</p>
          <a href="https://clinicas.ichthusmkt.com.br/" target="_blank" rel="noopener noreferrer" className="site-link mt-8 inline-flex items-center gap-2 text-paper"><span className="site-link-label">{t('Conhecer Marc.I.A. para clínicas', 'Explore Marc.I.A. for clinics')}</span><span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
  )
}
