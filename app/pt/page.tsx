import type { Metadata } from "next"
import { SiteHome } from "@/components/redesign/home"

export const metadata: Metadata = {
  title: { absolute: "Ichthus — Estratégia, Marca, Digital, Crescimento & Tecnologia" },
  description:
    "Empresa independente de estratégia, marca e digital atuando na interseção entre crescimento e tecnologia.",
  alternates: {
    canonical: "/pt",
    languages: {
      en: "/en",
      "pt-BR": "/pt",
    },
  },
  openGraph: {
    title: "Ichthus",
    description:
      "Estratégia, marca, digital, crescimento e tecnologia para empresas em movimento.",
    locale: "pt_BR",
  },
}

export default function Home() {
  return <SiteHome locale="pt-BR" />
}
