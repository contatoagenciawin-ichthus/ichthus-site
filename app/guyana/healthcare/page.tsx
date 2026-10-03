import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react"
import { HealthcareAuditForm } from "@/components/contact/healthcare-audit-form"

export const metadata: Metadata = {
  title: { absolute: "Healthcare Growth in Guyana — Ichthus" },
  description:
    "A patient access and growth system for private clinics, diagnostic centres, laboratories and healthcare providers in Guyana.",
  alternates: {
    canonical: "/guyana/healthcare",
  },
  openGraph: {
    title: "Healthcare Growth in Guyana — Ichthus",
    description:
      "Turn more patient enquiries into confirmed appointments with a clearer access, scheduling and follow-up system.",
    locale: "en",
    type: "website",
  },
}

const whatsappAuditUrl =
  "https://wa.me/5519998056642?text=Hi%2C%20I%27d%20like%20to%20request%20the%20free%20Patient%20Access%20Audit%20for%20my%20clinic."

const system = [
  {
    number: "01",
    title: "Discover",
    text: "Help the right patients find the right services through search, campaigns, referrals and your existing channels.",
  },
  {
    number: "02",
    title: "Enquire",
    text: "Make it easier to start a conversation without forcing patients through unnecessary steps.",
  },
  {
    number: "03",
    title: "Route",
    text: "Direct enquiries administratively to the right service, location or team without replacing clinical judgement.",
  },
  {
    number: "04",
    title: "Schedule",
    text: "Reduce friction between an enquiry and a confirmed appointment using the systems your team can operate.",
  },
  {
    number: "05",
    title: "Remind",
    text: "Support confirmations, administrative instructions and appointment reminders.",
  },
  {
    number: "06",
    title: "Follow up",
    text: "Recover unfinished access journeys where appropriate and keep administrative communication moving.",
  },
  {
    number: "07",
    title: "Measure",
    text: "Understand which channels create enquiries, appointments and avoidable friction.",
  },
]

const programme = [
  {
    number: "01",
    title: "Diagnose",
    timing: "Week 1",
    text: "Map how new patients discover the organisation, make contact, reach the right service and get to an appointment.",
  },
  {
    number: "02",
    title: "Build",
    timing: "Weeks 1–4",
    text: "Create or improve the access layer, enquiry flow, administrative routing, tracking and follow-up.",
  },
  {
    number: "03",
    title: "Launch",
    timing: "Weeks 4–6",
    text: "Connect acquisition where useful, test the patient access journey end-to-end and train the administrative team.",
  },
  {
    number: "04",
    title: "Optimise",
    timing: "Weeks 6–12",
    text: "Review performance weekly, remove friction and improve the path from patient demand to confirmed appointment.",
  },
]

const fits = [
  "Specialist clinics",
  "Multi-specialty clinics",
  "Diagnostic centres",
  "Medical laboratories",
  "Outpatient centres",
  "Surgical practices",
  "Rehabilitation centres",
  "Occupational health",
]

const faqs = [
  {
    question: "Do we need to replace our current appointment or clinical system?",
    answer:
      "No. We prefer to preserve systems that already work. The access and growth layer should connect around the existing operation whenever possible.",
  },
  {
    question: "Does the system make medical decisions?",
    answer:
      "No. The initial scope is administrative by design. Medical assessment, diagnosis, treatment decisions and clinical triage remain with qualified healthcare professionals and the appropriate clinical systems.",
  },
  {
    question: "What if our patients already contact us by phone or WhatsApp?",
    answer:
      "That is a valid starting point. We can structure access around the way patients already reach your team and introduce new technology only where it improves the experience or the operation.",
  },
  {
    question: "Can you help us generate more patient demand as well?",
    answer:
      "Yes, when acquisition is part of the opportunity. Google, Meta, landing pages and conversion work can be connected to the patient access system instead of treated as a separate marketing activity.",
  },
  {
    question: "Do you use AI with patients?",
    answer:
      "Only where it is appropriate and useful. AI and automation can support administrative response, routing and handoff, with clear boundaries around clinical decisions and sensitive information.",
  },
  {
    question: "Is Ichthus based in Guyana?",
    answer:
      "Ichthus is based in Brazil and works internationally. Our delivery is remote and English-language, with business hours closely aligned with Guyana. Local and on-site coordination can be arranged when needed.",
  },
]

export default function GuyanaHealthcarePage() {
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
              Guyana / Healthcare
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
            <p>Healthcare</p>
            <p>Guyana</p>
            <p>Patient access</p>
            <p>Growth systems</p>
          </div>

          <div>
            <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.13em] text-black/45">
              A patient access and growth system for private healthcare
            </p>
            <h1 className="max-w-[1220px] text-[clamp(3.9rem,8.25vw,8.9rem)] font-bold leading-[0.84] tracking-[-0.078em]">
              More appointments.
              <br />
              Fewer missed
              <br />
              enquiries.
            </h1>

            <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr]">
              <p className="max-w-2xl text-xl leading-[1.36] tracking-[-0.025em] sm:text-2xl lg:text-3xl">
                We help private clinics and healthcare providers in Guyana connect
                patient acquisition, enquiries, administrative routing, scheduling and
                follow-up into one clearer access system.
              </p>

              <div className="sm:justify-self-end sm:max-w-sm">
                <p className="text-sm leading-6 text-black/50">
                  Built around your existing clinical operation. No unnecessary system
                  replacement. No interference with medical decisions.
                </p>

                <div className="mt-6 flex flex-col items-start gap-4">
                  <a
                    href="#audit"
                    className="group inline-flex items-center gap-3 bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85"
                  >
                    Get a Free Patient Access Audit
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
                    Free. No obligation. Available for selected private healthcare organisations in Guyana.
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
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              The access gap
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Patients are finding you.
                <br />
                What happens next?
              </h2>

              <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 lg:grid-cols-2">
                <p className="text-lg leading-8 text-black/60">
                  A patient may arrive through Google, social media, a referral or
                  your website. Then the journey often moves to phone, WhatsApp,
                  email, a form or the reception team.
                </p>
                <p className="text-lg leading-8 text-black/60">
                  The opportunity is not simply to generate more demand. It is to
                  create a clearer administrative path from interest to the right
                  service and a confirmed appointment.
                </p>
              </div>

              <div className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {["Discovery", "Enquiry", "Scheduling", "Follow-up"].map((item, index) => (
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
                From scattered patient intent to a clearer path to care.
              </h2>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="border border-black/15 bg-white p-6 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                    Current journey
                  </p>
                  <div className="mt-8 space-y-5">
                    {[
                      "Search / Social / Referral",
                      "Website / Phone / WhatsApp / Email",
                      "Reception",
                      "Manual routing",
                      "Appointment / unknown outcome",
                    ].map((item, index) => (
                      <div key={item}>
                        <p className="text-xl font-semibold tracking-[-0.04em]">{item}</p>
                        {index < 4 && <p className="mt-4 text-black/25">↓</p>}
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
                      "Demand",
                      "Patient access layer",
                      "Administrative routing",
                      "Scheduling / human handoff",
                      "Reminder & follow-up",
                      "Measurement",
                    ].map((item, index) => (
                      <div key={item}>
                        <p className="text-xl font-semibold tracking-[-0.04em]">{item}</p>
                        {index < 5 && <p className="mt-4 text-white/25">↓</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-6 text-black/45">
                The audit maps the current patient access journey first. Only then do
                we recommend what should be kept, fixed, connected or built.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
              Patient Access & Growth System
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                One clearer path from patient demand to appointment.
              </h2>

              <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2">
                {system.map((item) => (
                  <article
                    key={item.number}
                    className="min-h-[250px] border-b border-white/15 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
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

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Clinical boundary
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Administrative by design.
                <br />
                Clinical decisions stay clinical.
              </h2>

              <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 lg:grid-cols-2">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                    What the system can support
                  </p>
                  <p className="mt-5 text-lg leading-8 text-black/60">
                    Acquisition, first administrative response, service routing,
                    scheduling, confirmations, reminders, follow-up and measurement.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                    What remains clinical
                  </p>
                  <p className="mt-5 text-lg leading-8 text-black/60">
                    Medical assessment, diagnosis, treatment decisions, prescriptions,
                    clinical triage and sensitive clinical workflows remain with
                    qualified healthcare professionals and appropriate systems.
                  </p>
                </div>
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
                  Already using an appointment or clinical system?
                </p>
                <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                  Keep what works.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
                  The access layer should connect around the existing operation where
                  possible. A growth project should not force an unnecessary clinical
                  system migration.
                </p>
              </div>

              <div className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                  Still scheduling through phone, WhatsApp or reception?
                </p>
                <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                  Start from reality.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
                  We can structure access around the way patients already reach your
                  team, then introduce technology only where it reduces friction or
                  improves visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              Designed for
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Private healthcare operations with demand to organise and grow.
              </h2>

              <div className="mt-12 grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {fits.map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-black/15 py-7 sm:border-r sm:even:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                      0{index + 1}
                    </p>
                    <p className="mt-5 text-xl font-semibold tracking-[-0.04em]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programme" className="border-b border-black/15 bg-[#f2f2ef]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
                Guyana Healthcare Founding Programme
              </p>
              <p className="mt-4 max-w-[230px] text-sm leading-6 text-black/40">
                A focused 90-day implementation for selected private healthcare organisations in Guyana.
              </p>
            </div>

            <div>
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                  Build access.
                  <br />
                  Run it.
                  <br />
                  Improve it.
                </h2>
                <p className="max-w-md text-lg leading-8 text-black/55 lg:justify-self-end">
                  The first 90 days are designed to turn an observed patient-access
                  problem into a working, measurable operating system with close weekly
                  optimisation.
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
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/35">
                        {item.timing}
                      </p>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-black/50">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/15 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.25fr_0.75fr] lg:gap-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black/45">
              About Ichthus
            </p>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Growth, digital experience and technology connected to real operations.
              </h2>

              <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                <p className="text-lg leading-8 text-black/60">
                  Ichthus is an independent Brazilian company working across strategy,
                  digital experiences, acquisition and technology, with experience in
                  healthcare and patient-facing operations.
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
                See the patient access journey before deciding what to change.
              </h2>

              <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2">
                {[
                  ["Discovery", "How new patients find the organisation across search, social, referral and other channels."],
                  ["Access", "How a patient starts a conversation and what information is required upfront."],
                  ["Routing", "How the enquiry reaches the appropriate service, location or administrative team."],
                  ["Scheduling", "What happens between initial contact and a confirmed appointment."],
                  ["Follow-up", "What happens when a patient access journey stops before confirmation."],
                  ["Measurement", "What the organisation can currently attribute, track and improve."],
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
                Free Patient Access Audit
              </p>
              <p className="mt-4 max-w-[240px] text-sm leading-6 text-black/40">
                Free. No obligation. Available for selected private healthcare organisations in Guyana.
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
                Where could your next appointment be getting lost?
              </h2>

              <div className="my-10 border-y border-black/15 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
                <div>
                  <p className="text-xl font-semibold tracking-[-0.035em]">
                    Prefer to start with a conversation?
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-black/45">
                    No form required. Tell us which clinic or healthcare organisation you manage and we can start from there.
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
                <HealthcareAuditForm />
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
                Guyana Healthcare
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                Patient access, growth and operational journey systems for private healthcare organisations.
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
