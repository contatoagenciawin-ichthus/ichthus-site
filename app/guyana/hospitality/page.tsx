import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react"
import { HospitalityAuditForm } from "@/components/contact/hospitality-audit-form"

export const metadata: Metadata = {
  title: { absolute: "Hospitality Growth in Guyana — Ichthus" },
  description:
    "A guest acquisition and booking system for independent hotels, lodges, resorts and hospitality businesses in Guyana.",
  alternates: {
    canonical: "/guyana/hospitality",
  },
  openGraph: {
    title: "Hospitality Growth in Guyana — Ichthus",
    description:
      "Turn more guest enquiries into direct bookings with a connected acquisition, booking and follow-up system.",
    locale: "en",
    type: "website",
  },
}

const system = [
  {
    number: "01",
    title: "Acquire",
    text: "Bring qualified demand from Google, Meta and the channels your property already uses.",
  },
  {
    number: "02",
    title: "Respond",
    text: "Make the next step clear when a guest is ready to ask, compare or book.",
  },
  {
    number: "03",
    title: "Qualify",
    text: "Capture dates, party size, preferences and booking intent without unnecessary friction.",
  },
  {
    number: "04",
    title: "Book",
    text: "Connect the guest to the right direct reservation path, whether that is a booking engine or your team.",
  },
  {
    number: "05",
    title: "Follow up",
    text: "Recover enquiries that do not convert immediately and keep the conversation moving.",
  },
  {
    number: "06",
    title: "Measure",
    text: "See where enquiries come from, what converts and where the booking journey needs attention.",
  },
]

const programme = [
  {
    number: "01",
    title: "Diagnose",
    timing: "Week 1",
    text: "Audit the current guest journey, channels, booking path, tracking and operational handoffs.",
  },
  {
    number: "02",
    title: "Build",
    timing: "Weeks 1–4",
    text: "Create or improve the conversion layer, enquiry capture, qualification, tracking and follow-up.",
  },
  {
    number: "03",
    title: "Launch",
    timing: "Weeks 4–6",
    text: "Connect acquisition, test the booking journey end-to-end and train the people who will use it.",
  },
  {
    number: "04",
    title: "Optimise",
    timing: "Weeks 6–12",
    text: "Review performance weekly, remove friction and improve the path from demand to direct booking.",
  },
]

const fits = [
  "Independent hotels",
  "Boutique hotels",
  "Guest houses",
  "Serviced apartments",
  "Resorts",
  "Eco-lodges",
]

const whatsappAuditUrl =
  "https://wa.me/5519998363352?text=Hi%2C%20I%27d%20like%20to%20request%20the%20free%20Guest%20Booking%20Audit%20for%20my%20property."

const faqs = [
  {
    question: "Do we need to replace our website?",
    answer:
      "No. If the current website works, we improve the booking journey around it. A rebuild only becomes part of the project when the existing experience is blocking conversion.",
  },
  {
    question: "Can you work with our existing booking engine or PMS?",
    answer:
      "Yes. We prefer to preserve systems that already work. The goal is to connect acquisition, enquiries, booking and follow-up — not replace technology without a reason.",
  },
  {
    question: "What if we still handle reservations through WhatsApp, phone or email?",
    answer:
      "That is a valid starting point. We can structure the enquiry flow around the way your team already works and introduce new systems only when they improve the operation.",
  },
  {
    question: "Do you use AI to speak with guests?",
    answer:
      "Only where it is useful. Automation and AI can assist with first response, qualification and routing, with clear human escalation for situations that need your team.",
  },
  {
    question: "Is Ichthus based in Guyana?",
    answer:
      "Ichthus is based in Brazil and works internationally. Our delivery is remote and English-language, with business hours closely aligned with Guyana. Local and on-site coordination can be arranged when needed.",
  },
  {
    question: "What happens after the 90-day programme?",
    answer:
      "We review the operating data together and decide what should continue, what should change and which growth layer is worth expanding next.",
  },
]

export default function GuyanaHospitalityPage() {
  return (
    <main className="min-h-screen bg-[#f2f2ef] text-black">
      <header className="sticky top-0 z-50 border-b border-black/15 bg-[#f2f2ef]/95 backdrop-blur">
        <div className="mx-auto flex h-[70px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-5">
            <Link href="/en" className="text-lg font-bold tracking-[-0.04em] sm:text-xl">
              ICHTHUS
            </Link>
            <span className="hidden h-4 w-px bg-black/20 sm:block" />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-black/45 sm:block">
              Guyana / Hospitality
            </span>
          </div>

          <nav className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.11em] lg:flex">
            <a href="#system">System</a>
            <a href="#programme">Programme</a>
            <a href="#about">About</a>
          </nav>

          <a
            href="#audit"
            className="inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold"
          >
            Free audit <ArrowDownRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-36 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
          <div className="pt-2 text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-black/45">
            <p>Hospitality</p>
            <p>Guyana</p>
            <p>Guest acquisition</p>
            <p>Direct booking</p>
          </div>

          <div>
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.13em] text-black/45">
              A growth system for independent hospitality businesses
            </p>
            <h1 className="max-w-[1220px] text-[clamp(3.9rem,8.25vw,8.9rem)] font-bold leading-[0.84] tracking-[-0.078em]">
              More enquiries.
              <br />
              More direct
              <br />
              bookings.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.36] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                We help hotels, lodges and hospitality businesses in Guyana connect
                digital acquisition, guest enquiries, booking and follow-up into one
                clearer growth system.
              </p>
              <div className="sm:justify-self-end sm:max-w-sm">
                <p className="text-sm leading-6 text-black/50">
                  Built around your current operation. No forced rebuild. No
                  unnecessary software migration.
                </p>
                <div className="mt-6 flex flex-col items-start gap-4">
                  <a
                    href="#audit"
                    className="group inline-flex items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85"
                  >
                    Get a Free Guest Booking Audit
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <a
                    href={whatsappAuditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                  >
                    Talk to us on WhatsApp <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <p className="text-xs leading-5 text-black/35">
                    Free. No obligation. Available for selected independent hospitality businesses in Guyana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                The booking gap
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Your channels may already work.
                <br />
                The gaps between them may not.
              </h2>

              <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 lg:grid-cols-2">
                <p className="text-lg leading-8 text-black/60">
                  A guest finds your property on Google, Facebook, Instagram or an
                  OTA. Then the journey shifts to a website, booking engine, phone,
                  email or WhatsApp. Every handoff is a place where intent can slow
                  down or disappear.
                </p>
                <p className="text-lg leading-8 text-black/60">
                  The opportunity is not simply to add more marketing. It is to
                  connect discovery, enquiry, response, reservation and follow-up
                  into a path your team can actually operate.
                </p>
              </div>

              <div className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {["Discovery", "Enquiry", "Reservation", "Follow-up"].map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-black/15 py-7 sm:border-r sm:last:border-r-0 lg:border-b-0"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                      0{index + 1}
                    </p>
                    <p className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              What changes
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                From scattered guest intent to a connected booking journey.
              </h2>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="border border-black/15 bg-white p-6 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                    Current journey
                  </p>
                  <div className="mt-8 space-y-5">
                    {[
                      "Google / Meta / OTA",
                      "Website / WhatsApp / Phone / Email",
                      "Front desk",
                      "Manual follow-up / limited visibility",
                    ].map((item, index) => (
                      <div key={item}>
                        <p className="text-xl font-semibold tracking-[-0.04em]">{item}</p>
                        {index < 3 && <p className="mt-4 text-black/25">↓</p>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-black/15 bg-black p-6 text-white sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                    Connected journey
                  </p>
                  <div className="mt-8 space-y-5">
                    {[
                      "Google / Meta / Direct / Referral",
                      "Conversion layer",
                      "Response & qualification",
                      "Booking / human handoff",
                      "Follow-up & measurement",
                    ].map((item, index) => (
                      <div key={item}>
                        <p className="text-xl font-semibold tracking-[-0.04em]">{item}</p>
                        {index < 4 && <p className="mt-4 text-white/25">↓</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-6 text-black/45">
                The audit maps the current journey first. Only then do we recommend what should be kept, fixed, connected or built.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
                Guest Acquisition & Booking System
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                One clearer path from demand to booking.
              </h2>

              <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2">
                {system.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[260px] border-b border-white/15 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/30">
                        {item.number}
                      </span>
                      <Check className="h-4 w-4 text-white/40" />
                    </div>
                    <h3 className="mt-12 text-4xl font-semibold tracking-[-0.05em]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Built around what you have
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Already using a PMS or booking engine?
                </p>
                <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                  Keep what works.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
                  We work around existing systems whenever they support the
                  operation. Cloudbeds, SiteMinder or another platform does not need
                  to be replaced just because a new growth layer is being added.
                </p>
              </div>

              <div className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Still booking through WhatsApp, phone or email?
                </p>
                <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                  Start from reality.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
                  We can structure the enquiry and follow-up flow around how your
                  team already works, then introduce new technology only where it
                  removes friction or improves visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programme" className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                Guyana Hospitality Founding Programme
              </p>
              <p className="mt-4 max-w-[220px] text-sm leading-6 text-black/40">
                A focused 90-day implementation for a small group of hospitality
                businesses in Guyana.
              </p>
            </div>

            <div>
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                  Build the system.
                  <br />
                  Run it.
                  <br />
                  Learn from it.
                </h2>
                <p className="max-w-md text-lg leading-8 text-black/55 lg:justify-self-end">
                  We are selecting a small number of hospitality businesses for the
                  first local implementations of the system in Guyana, with close
                  weekly optimisation during the first 90 days.
                </p>
              </div>

              <div className="mt-14 border-t border-black/15">
                {programme.map((item) => (
                  <article
                    key={item.number}
                    className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[0.12fr_0.28fr_0.6fr]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/35">
                      {item.number}
                    </p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                        {item.timing}
                      </p>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-black/50">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Designed for
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Independent hospitality businesses with room to grow direct demand.
              </h2>
              <div className="mt-12 grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
                {fits.map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-black/15 py-7 sm:border-r sm:even:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                      0{index + 1}
                    </p>
                    <p className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                About Ichthus
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Strategy, digital, growth and technology in one team.
              </h2>

              <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                <p className="text-lg leading-8 text-black/60">
                  Ichthus is an independent Brazilian company working across strategy,
                  digital experiences, acquisition and technology. We connect the
                  commercial layer with the systems that have to make it work.
                </p>
                <div className="sm:justify-self-end sm:max-w-md">
                  <p className="text-lg leading-8 text-black/60">
                    Based in Brazil. Working internationally, in English, with
                    business hours closely aligned with Guyana and on-site
                    coordination available when needed.
                  </p>
                  <Link
                    href="/en#work"
                    className="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold"
                  >
                    View selected work <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Since 2014", "Independent operation"],
                  ["Strategy", "Positioning and direction"],
                  ["Growth", "Acquisition and conversion"],
                  ["Technology", "Automation and systems"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="border-b border-black/15 py-7 sm:border-r lg:border-b-0 last:border-r-0"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.04em]">{value}</p>
                    <p className="mt-2 text-xs leading-5 text-black/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
              What the audit looks at
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                See the booking journey before deciding what to change.
              </h2>

              <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2">
                {[
                  ["Discovery", "How guests find the property across search, social and marketplaces."],
                  ["Conversion", "What happens between landing on a channel and starting an enquiry."],
                  ["Response", "How guest questions move through website, phone, email and messaging."],
                  ["Reservation", "How availability, rates and confirmation are handled today."],
                  ["Follow-up", "What happens when an enquiry does not become a reservation immediately."],
                  ["Measurement", "What can currently be attributed, tracked and improved."],
                ].map(([title, text], index) => (
                  <article
                    key={title}
                    className="min-h-[210px] border-b border-white/15 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30">
                      0{index + 1}
                    </p>
                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-white/45">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Questions
            </p>

            <div className="border-t border-black/15">
              {faqs.map((item, index) => (
                <details key={item.question} className="group border-b border-black/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">
                    <div className="flex gap-6">
                      <span className="pt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/30">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                        {item.question}
                      </h3>
                    </div>
                    <span className="text-xl text-black/40 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pb-8 pl-10 text-base leading-7 text-black/55 sm:pl-12">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                Free Guest Booking Audit
              </p>
              <p className="mt-4 max-w-[240px] text-sm leading-6 text-black/40">
                Free. No obligation. Available for selected independent hospitality businesses in Guyana.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Where could your next direct booking be getting lost?
              </h2>

              <div className="my-10 border-y border-black/15 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
                <div>
                  <p className="text-xl font-semibold tracking-[-0.035em]">
                    Prefer to start with a conversation?
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                    No form required. Tell us which property you manage and we can start from there.
                  </p>
                </div>
                <a
                  href={whatsappAuditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex shrink-0 items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85 sm:mt-0"
                >
                  Talk to us on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Prefer email? Three fields are enough.
                </p>
                <HospitalityAuditForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.25fr_0.75fr] lg:px-12">
          <div>
            <Link href="/en" className="text-lg font-bold tracking-[-0.04em]">
              ICHTHUS
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                Guyana Hospitality
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                Guest acquisition, booking and follow-up systems for independent
                hospitality businesses.
              </p>
            </div>
            <div className="sm:justify-self-end sm:text-right">
              <p className="text-sm text-white/50">contato@ichthusmkt.com.br</p>
              <Link
                href="/en"
                className="mt-4 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold"
              >
                Ichthus corporate site <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
