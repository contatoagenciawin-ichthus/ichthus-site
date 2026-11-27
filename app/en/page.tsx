import type { Metadata } from "next"
import { SiteHome } from "@/components/redesign/home"

export const metadata: Metadata = {
  title: { absolute: "Ichthus — Strategy, Brand, Digital, Growth & Technology" },
  description:
    "Independent strategy, brand and digital company working at the intersection of growth and technology.",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      "pt-BR": "/pt",
    },
  },
  openGraph: {
    title: "Ichthus",
    description:
      "Strategy, brand, digital, growth and technology for companies in motion.",
    locale: "en",
  },
}

export default function Home() {
  return <SiteHome locale="en-US" />
}
