import { EditorialHero } from '@/components/redesign/editorial-hero'
import { CustomCursor } from '@/components/redesign/ui/custom-cursor'
import { AudienceDoors } from '@/components/redesign/audience-doors'
import { Capabilities } from '@/components/redesign/capabilities'
import { Contact } from '@/components/redesign/contact'
import { Footer } from '@/components/redesign/footer'
import { Header } from '@/components/redesign/header'
import { Hero } from '@/components/redesign/hero'
import { Manifesto } from '@/components/redesign/manifesto'
import { Proof } from '@/components/redesign/proof'
import { SelectedWork } from '@/components/redesign/selected-work'

import type { SiteLocale } from '@/lib/site-locale'

export function SiteHome({ locale }: { locale: SiteLocale }) {
  return (
    <div className="ichthus-redesign">
      <CustomCursor />
      <Header locale={locale} />
      <main>
        <EditorialHero locale={locale} />
        <Hero locale={locale} />
        <div id="about" className="scroll-mt-[72px]" />
        <Manifesto locale={locale} />
        <AudienceDoors locale={locale} />
        <div id="work" className="scroll-mt-[72px]" />
        <SelectedWork locale={locale} />
        <Proof locale={locale} />
        <div id="capabilities" className="scroll-mt-[72px]" />
        <Capabilities locale={locale} />
        <div id="thinking" className="site-shell py-8 border-t border-line scroll-mt-[72px]"><a className="site-link inline-flex gap-2 font-semibold" href={locale === 'en-US' ? '/en/thinking' : '/pt/thinking'}><span className="site-link-label">{locale === 'en-US' ? 'Explore our insights' : 'Explore nossas ideias'}</span><span aria-hidden="true">↗</span></a></div>
        <div id="contact" className="scroll-mt-[72px]" />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
