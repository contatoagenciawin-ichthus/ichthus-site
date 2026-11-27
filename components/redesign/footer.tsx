import { Marquee } from '@/components/redesign/ui/marquee'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'


export function Footer({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  const sitemap = [
    { label: t("Trabalho", "Work"), href: '#projetos' },
    { label: t("Práticas", "Capabilities"), href: '#atuacao' },
    { label: t("Sobre", "About"), href: '#manifesto' },
    { label: t("Produtos", "Products"), href: '#produtos' },
    { label: t("Ideias", "Insights"), href: locale === 'en-US' ? '/en/thinking' : '/pt/thinking' },
    { label: t("Contato", "Contact"), href: '#contato' },
  ]
  return (
    <footer aria-label={t("Rodapé", "Footer")} data-cursor-surface="dark" className="site-dark overflow-hidden bg-ink text-paper">
      <Marquee label={t("Estratégia, marca, digital, crescimento e tecnologia", "Strategy, brand, digital, growth, and technology")} className="overflow-hidden border-b border-sand/20 py-4 font-mono text-[11px] tracking-[0.14em] text-sand">
        <span className="px-3">{t("ESTRATÉGIA · MARCA · DIGITAL · CRESCIMENTO · TECNOLOGIA ·", "STRATEGY · BRAND · DIGITAL · GROWTH · TECHNOLOGY ·")}</span>
      </Marquee>

      <div className="site-footer-layout site-shell grid grid-cols-1 gap-12 py-14 min-[769px]:grid-cols-12 min-[769px]:gap-8 min-[769px]:pb-20 min-[769px]:pt-16">
        <div className="col-span-1 min-[769px]:col-span-8">
          <div aria-hidden="true" className="h-[11.6vw] overflow-hidden">
            <p className="footer-wordmark select-none whitespace-nowrap font-display text-[20vw] font-semibold leading-[0.72] tracking-[-0.075em] text-paper/[0.12]">
              ICHTHUS
            </p>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-2 gap-10 min-[769px]:col-span-4 min-[769px]:grid-cols-2 min-[769px]:gap-8">
          <nav aria-label={t("Mapa do site", "Site navigation")} className="flex flex-col items-start gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-sand">
            {sitemap.map((item) => (
              <a key={item.label} href={item.href} className="site-link">
                <span className="site-link-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <nav aria-label={t("Redes sociais", "Social media")} className="flex flex-col items-start gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-sand">
            <a href="https://www.linkedin.com/company/ichthus-marketing" target="_blank" rel="noreferrer" className="site-link">
              <span className="site-link-label">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/ichthusmarketing/" target="_blank" rel="noreferrer" className="site-link">
              <span className="site-link-label">Instagram</span>
            </a>
            <a href={locale === 'en-US' ? '/pt' : '/en'} hrefLang={locale === 'en-US' ? 'pt-BR' : 'en-US'} lang={locale === 'en-US' ? 'pt-BR' : 'en-US'} className="site-link">{locale === 'en-US' ? 'Português (BR)' : 'English (US)'}</a>
          </nav>
        </div>

        <div className="col-span-1 flex flex-col gap-2 border-t border-sand/20 pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-sand/70 min-[769px]:col-span-12 min-[769px]:flex-row min-[769px]:items-center min-[769px]:justify-between">
          <p>© 2026 Ichthus</p>
          <p>{t("Brasil · Reino Unido · EUA", "Brazil · United Kingdom · US")}</p>
        </div>
      </div>
    </footer>
  )
}
