import { SplitText } from '@/components/redesign/ui/split-text'
import { getTranslator, type SiteLocale } from '@/lib/site-locale'

export function Contact({ locale = 'pt-BR' }: { locale?: SiteLocale } = {}) {
  const t = getTranslator(locale)
  return (
    <section id="contato" aria-labelledby="contact-title" data-cursor-surface="light" className="flex min-h-svh flex-col justify-end bg-paper pb-[clamp(48px,7vw,96px)] pt-28 text-ink">
      <div className="site-shell site-grid mt-auto w-full">
        <div className="col-span-12 min-[769px]:col-span-9">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-graphite">{t("Contato", "Contact")}</p>
          <h2 id="contact-title" className="mb-12 font-display text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.055em] md:mb-16">
            <SplitText lines={[t("Vamos construir", "Let’s build"), t("o próximo passo", "the next step"), t("do seu negócio.", "for your business.")]} />
          </h2>
          <p className="mb-8 text-[18px] text-graphite">{t("Projetos, parcerias e operações contínuas. No Brasil e internacionalmente.", "Projects, partnerships, and ongoing operations. In Brazil and internationally.")}</p>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-10 border-t border-line pt-8 min-[769px]:col-span-9 min-[769px]:grid-cols-2 min-[769px]:gap-8">
          <a href="mailto:contato@ichthusmkt.com.br" className="site-link w-fit text-[20px] text-ink">
            <span className="site-link-label">contato@ichthusmkt.com.br</span>
          </a>
          <address className="not-italic font-mono text-[11px] uppercase leading-[1.9] tracking-[0.12em] text-graphite">
            <span className="block">{t("Base no Brasil", "Based in Brazil")}</span>
            <span className="block">{t("Atuação internacional", "International reach")}</span>
          </address>
        </div>

        <a
          href={locale === 'en-US' ? '/en/contact' : '/pt/contact'}
          className="col-span-12 mt-12 inline-flex h-14 w-fit items-center justify-center rounded-none bg-red px-7 font-display text-[19px] font-semibold text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink md:mt-16"
        >
          {t("Iniciar uma conversa", "Start a conversation")}
        </a>
      </div>
    </section>
  )
}
