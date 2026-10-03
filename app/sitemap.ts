import type { MetadataRoute } from "next"

const baseUrl = "https://ichthusmkt.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/en", priority: 1, changeFrequency: "weekly" as const },
    { path: "/pt", priority: 1, changeFrequency: "weekly" as const },
    { path: "/en/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pt/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/en/thinking", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/pt/thinking", priority: 0.8, changeFrequency: "weekly" as const },

    { path: "/en/work/kone", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/pt/work/kone", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/en/work/innovclean", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/pt/work/innovclean", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/en/work/vem-viver", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/pt/work/vem-viver", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/en/work/la-marcia", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/pt/work/la-marcia", priority: 0.85, changeFrequency: "monthly" as const },

    { path: "/en/thinking/marketing-operating-system", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/pt/thinking/marketing-como-sistema-operacional", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/en/thinking/ai-customer-experience", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/pt/thinking/ia-e-experiencia-do-cliente", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/en/thinking/brand-and-performance", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/pt/thinking/marca-e-performance", priority: 0.75, changeFrequency: "monthly" as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
