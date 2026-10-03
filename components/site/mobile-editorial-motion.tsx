type Locale = "en" | "pt"

const kone =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/kone/main/public/machines/hero-ka-70.png"
const innovclean =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/innovclean-site/main/public/brand/london-aerial.jpg"
const vemViver =
  "https://raw.githubusercontent.com/contatoagenciawin-ichthus/vem-viver-brandbook/main/src/assets/hero-grapes.jpg"

export function MobileEditorialMotion({ locale }: { locale: Locale }) {
  const labels =
    locale === "en"
      ? ["Engineering", "International", "Brand", "Systems"]
      : ["Engenharia", "Internacional", "Marca", "Sistemas"]

  return (
    <div className="mt-8 lg:hidden">
      <div className="relative h-[39svh] min-h-[300px] max-h-[430px] overflow-hidden border border-white/15 bg-[#0d0d0d]">
        <div className="ichthus-mobile-hero-frame">
          <div className="absolute inset-0 bg-[#e8e8e3]" />
          <img
            src={kone}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="ichthus-mobile-hero-drift absolute inset-0 h-full w-full object-contain p-[12%]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-black/10 bg-[#e8e8e3]/90 px-4 py-3 text-black">
            <span className="text-[9px] font-medium uppercase tracking-[0.14em]">01 / {labels[0]}</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-black/35">Kone Máquinas</span>
          </div>
        </div>

        <div className="ichthus-mobile-hero-frame">
          <img
            src={innovclean}
            alt=""
            aria-hidden="true"
            className="ichthus-mobile-hero-drift absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#173d35]/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 bg-[#173d35]/85 px-4 py-3">
            <span className="text-[9px] font-medium uppercase tracking-[0.14em]">02 / {labels[1]}</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">London / UK</span>
          </div>
        </div>

        <div className="ichthus-mobile-hero-frame">
          <img
            src={vemViver}
            alt=""
            aria-hidden="true"
            className="ichthus-mobile-hero-drift absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102b20]/55 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 bg-[#173d2d]/85 px-4 py-3">
            <span className="text-[9px] font-medium uppercase tracking-[0.14em]">03 / {labels[2]}</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">Vem Viver</span>
          </div>
        </div>

        <div className="ichthus-mobile-hero-frame bg-[#0a2938] p-5">
          <div className="flex h-full flex-col justify-between border border-white/15 bg-[#0f3548] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Marc.I.A.</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-white/35">
                  {locale === "en" ? "Connected operations" : "Operação conectada"}
                </p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-[#14bf63]" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(locale === "en"
                ? ["Lead", "Chat", "Quote", "Job"]
                : ["Lead", "Conversa", "Orçamento", "Serviço"]
              ).map((item, index) => (
                <div key={item} className="border border-white/15 bg-white/[0.04] p-3">
                  <p className="text-[8px] text-white/25">0{index + 1}</p>
                  <p className="mt-5 text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/15 pt-4">
              <p className="text-lg font-semibold leading-tight tracking-[-0.035em]">
                {locale === "en"
                  ? "Demand → conversation → operation."
                  : "Demanda → conversa → operação."}
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-white/15 bg-[#0a2938]/92 px-4 py-3">
            <span className="text-[9px] font-medium uppercase tracking-[0.14em]">04 / {labels[3]}</span>
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">LA / Proxy</span>
          </div>
        </div>

        <div aria-hidden="true" className="absolute left-4 top-4 z-20 flex gap-1.5">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="h-px w-5 bg-white/35" />
          ))}
        </div>
      </div>
    </div>
  )
}
