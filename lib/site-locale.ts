export type SiteLocale = 'pt-BR' | 'en-US'

export function getTranslator(locale: SiteLocale) {
  return (pt: string, en: string): string => locale === 'en-US' ? en : pt
}
