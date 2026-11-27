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
        <Manifesto locale={locale} />
        <AudienceDoors locale={locale} />
        <SelectedWork locale={locale} />
        <Proof locale={locale} />
        <Capabilities locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
