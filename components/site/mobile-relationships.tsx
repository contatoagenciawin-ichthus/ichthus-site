type Locale = "en" | "pt"

const relationships = [
  ["Kone Máquinas", "Brazil / Intl."],
  ["InnovClean", "United Kingdom"],
  ["Vem Viver", "Brazil"],
  ["LA Climatização", "Brazil"],
  ["Instituto Fontes", "Brazil"],
  ["Pet Endoscopia", "Brazil"],
  ["Eduardo Brasil", "Brazil"],
  ["El Kadri & Cia", "Brazil"],
  ["Instituto BellaVida", "Brazil"],
]

export function MobileRelationships({ locale }: { locale: Locale }) {
  const proof =
    locale === "en"
      ? [
          ["Since 2014", "Independent operation"],
          ["Brazil + UK", "Active relationships"],
          ["Strategy → Tech", "Connected capabilities"],
          ["Work + ventures", "We advise and build"],
        ]
      : [
          ["Desde 2014", "Operação independente"],
          ["Brasil + UK", "Relações ativas"],
          ["Estratégia → Tech", "Capacidades conectadas"],
          ["Clientes + ventures", "Pensamos e construímos"],
        ]

  return (
    <section className="bg-[#111] px-5 py-14 text-white sm:px-8 lg:hidden">
      <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/40">
        {locale === "en" ? "Selected relationships" : "Relações selecionadas"}
      </p>
      <p className="mt-2 max-w-xs text-sm leading-5 text-white/35">
        {locale === "en"
          ? "A compact view of companies and projects across markets."
          : "Uma visão compacta de empresas e projetos em diferentes mercados."}
      </p>

      <div className="mt-7 grid grid-cols-2 border-l border-t border-white/15">
        {relationships.map(([name, market], index) => (
          <div key={name} className="min-h-[92px] border-b border-r border-white/15 p-3.5">
            <p className="text-[8px] text-white/25">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-3 text-sm font-semibold leading-tight tracking-[-0.02em]">{name}</p>
            <p className="mt-1 text-[9px] text-white/35">{market}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 border-l border-t border-white/15">
        {proof.map(([value, label]) => (
          <div key={value} className="min-h-[112px] border-b border-r border-white/15 p-4">
            <p className="text-xl font-semibold leading-tight tracking-[-0.04em]">{value}</p>
            <p className="mt-2 max-w-[135px] text-[10px] leading-4 text-white/40">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
