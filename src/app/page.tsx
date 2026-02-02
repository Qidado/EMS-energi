import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import {
  Briefcase,
  Activity,
  Heart,
  Sprout,
  RefreshCw,
  Star,
} from "lucide-react";

const personaIcons = {
  Briefcase,
  Activity,
  Heart,
  Sprout,
  RefreshCw,
  Star,
} as const;

export const metadata: Metadata = {
  title: "EMS Energi | EMS Træning København Vesterbro — 20 min effektiv træning",
  description:
    "EMS træning i København Vesterbro. 20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Aktiverer 90% af dine muskler. Book gratis prøvetræning hos EMS Energi.",
  keywords: [
    "EMS træning København",
    "EMS Vesterbro",
    "elektrisk muskelstimulation",
    "20 min træning",
    "gratis prøvetræning",
    "EMS Energi",
    "helkropstræning",
    "effektiv træning København",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "EMS Energi | EMS Træning København Vesterbro — 20 min effektiv træning",
    description:
      "EMS træning i København Vesterbro. 20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Book gratis prøvetræning.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMS Energi | EMS Træning København Vesterbro",
    description:
      "20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Book gratis prøvetræning hos EMS Energi.",
  },
  alternates: {
    canonical: "/",
    languages: {
      da: "/",
      en: "/en/",
    },
  },
};

/* ────────────────────────────────────────────── data ── */

const whyEms = [
  {
    number: "01",
    title: "20 Min Effektiv Træning",
    body: "En session aktiverer over 300 muskler simultant. Effektiv helkropstræning på den tid det tager at drikke en kop kaffe.",
  },
  {
    number: "02",
    title: "Skånsomt for Kroppen",
    body: "Ingen tunge vægte. Minimal belastning på led og sener. Velegnet til personer med ryg-, knæ- eller skulderproblemer.",
  },
  {
    number: "03",
    title: "Målbare Resultater",
    body: "De fleste mærker fremgang efter 4-6 sessioner. Vi følger din udvikling og tilpasser programmet løbende.",
  },
];

const personas = [
  {
    icon: "Briefcase" as const,
    title: "Den travle professionelle",
    body: "Du har 45 minutter mellem møder — ikke 2 timer i et fitnesscenter. EMS giver effektiv træning på minimal tid.",
  },
  {
    icon: "Activity" as const,
    title: "Atleten der vil mere",
    body: "Supplement til din eksisterende træning. Aktivér muskelgrupper din normale rutine ikke rammer.",
  },
  {
    icon: "Heart" as const,
    title: "Genoptræning",
    body: "Skånsom træning efter skader. EMS belaster ikke led og bruges af fysioterapeuter til rehabilitering.",
  },
  {
    icon: "Sprout" as const,
    title: "Nybegynderen",
    body: "Aldrig trænet seriøst? Vi tilpasser intensiteten til dig. Ingen forkundskaber nødvendige.",
  },
  {
    icon: "RefreshCw" as const,
    title: "Tilbage i form",
    body: "Lang pause fra træning? EMS kickstarter din krop uden at overbelaste den.",
  },
  {
    icon: "Star" as const,
    title: "Seniorer (55+)",
    body: "Styrk muskulatur og balance med minimal belastning. Ideel til at vedligeholde mobilitet.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ankomst",
    subtitle: "2 min",
    body: "Vi byder dig velkommen og udleverer din EMS-dragt. Dragten sidder tæt for optimal kontakt med elektroderne.",
  },
  {
    number: "02",
    title: "Kalibrering",
    subtitle: "3 min",
    body: "Din instruktør tilslutter elektroderne og justerer intensiteten til dit niveau. Du bestemmer hvor meget du kan mærke.",
  },
  {
    number: "03",
    title: "Træning",
    subtitle: "20 min",
    body: "Du udfører enkle øvelser — squats, lunges, armøvelser — mens dragten sender impulser til alle muskelgrupper samtidig.",
  },
  {
    number: "04",
    title: "Færdig",
    subtitle: "",
    body: "Dragten af, og du er klar til resten af din dag. Ingen lang omklædning nødvendig.",
  },
];

const trainers = [
  {
    name: "[Instruktør Navn]",
    role: "Head Instructor",
    bio: "Certificeret EMS-instruktør med X års erfaring. Fokus på at finde den rette intensitet til hver enkelt.",
  },
  {
    name: "[Instruktør Navn]",
    role: "Instruktør",
    bio: "Baggrund i sportsvidenskab. Speciale i genoptræning og skånsom træning.",
  },
  {
    name: "[Instruktør Navn]",
    role: "Instruktør",
    bio: "Tidligere personlig træner. Fokus på præstationsoptimering og atlettræning.",
  },
];

const pricingPlans = [
  {
    name: "Prøvetræning",
    subtitle: "Din første session",
    price: "GRATIS",
    priceSuffix: "",
    description: "Oplev EMS helt uforpligtende.",
    features: [
      "20 min EMS session",
      "Personlig instruktør",
      "Introduktion til udstyret",
      "Ingen binding",
    ],
    cta: "Book Gratis",
    featured: false,
  },
  {
    name: "Månedskort",
    subtitle: "Ubegrænset træning",
    price: "599 kr",
    priceSuffix: "/md",
    description: "For dig der vil have mest ud af EMS.",
    features: [
      "Ubegrænset EMS sessioner",
      "Personlig træningsplan",
      "Gratis lån af træningstøj",
      "Fleksibel opsigelse",
    ],
    cta: "Kom I Gang",
    featured: true,
  },
  {
    name: "10-Turs Kort",
    subtitle: "Klippekort",
    price: "2.499 kr",
    priceSuffix: "",
    description: "Træn i dit eget tempo.",
    features: [
      "10 EMS sessioner",
      "Personlig instruktør",
      "Gyldighed: 6 måneder",
      "Ingen binding",
    ],
    cta: "Køb Nu",
    featured: false,
  },
];

const faqItems = [
  {
    question: "Er EMS sikkert?",
    answer:
      "Ja. EMS er godkendt og anvendes af fysioterapeuter, eliteatleter og rehabiliteringscentre verden over. Vores udstyr er CE-mærket og vedligeholdes efter producentens standarder.",
  },
  {
    question: "Hvem bør ikke træne EMS?",
    answer:
      "EMS frarådes hvis du har pacemaker, er gravid, har epilepsi, eller har aktive infektioner. Ved kroniske sygdomme anbefaler vi at konsultere din læge først.",
  },
  {
    question: "Hvad skal jeg medbringe?",
    answer:
      "Ingenting. Vi stiller træningstøj til rådighed. Du træner barfodet. Medbring gerne vand.",
  },
  {
    question: "Gør det ondt?",
    answer:
      "Nej. Du mærker en summende fornemmelse og en kontraktion i musklerne. Intensiteten justeres til dit niveau — du er altid i kontrol.",
  },
  {
    question: "Hvor hurtigt ser jeg resultater?",
    answer:
      "De fleste mærker øget styrke og energi efter 2-3 sessioner. Synlige ændringer typisk efter 6-8 sessioner ved regelmæssig træning (1-2 gange ugentligt).",
  },
  {
    question: "Kan jeg kombinere EMS med anden træning?",
    answer:
      "Absolut. Mange bruger EMS som supplement til løb, cykling eller traditionel styrketræning for at aktivere muskelgrupper de ellers ikke rammer.",
  },
  {
    question: "Hvor tit skal jeg træne?",
    answer:
      "Vi anbefaler 1-2 sessioner om ugen med mindst 48 timers restitution mellem træninger. Dine muskler har brug for restitution.",
  },
  {
    question: "Tilbyder I firmapakker?",
    answer:
      "Ja. Kontakt os for virksomhedsaftaler og firmapakker. Vi tilbyder også on-site introduktioner på jeres kontor.",
  },
  {
    question: "Taler I engelsk?",
    answer:
      "Yes! All our trainers speak fluent English. International clients welcome.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* ──────────────────────────────────────────────
            1. Hero Section
        ────────────────────────────────────────────── */}
        <section id="hero" className="relative flex min-h-[70vh] sm:min-h-[80vh] md:min-h-screen items-center bg-off-white py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
              {/* Text column */}
              <div>
                <ScrollReveal>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
                    EMS Fitness Studio
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-black">
                    20 minutter.
                    <br />
                    Hele kroppen.
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-secondary">
                    EMS tr&aelig;ning aktiverer 90% af dine muskler samtidig.
                    Effektiv helkropstr&aelig;ning der passer ind mellem dine
                    m&oslash;der — med m&aring;lbare resultater.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="mt-8">
                    <Link
                      href="#find-os"
                      className="inline-block w-full sm:w-auto text-center rounded-lg bg-signal-orange px-8 py-4 font-medium text-white transition-colors hover:bg-orange-hover"
                    >
                      Book Gratis Pr&oslash;vetr&aelig;ning
                    </Link>
                  </div>
                  <Link
                    href="#hvad-er-ems"
                    className="mt-4 block text-sm text-secondary transition-colors hover:text-black"
                  >
                    Se hvordan det virker &darr;
                  </Link>
                </ScrollReveal>
              </div>

              {/* Image placeholder */}
              <ScrollReveal delay={200}>
                {/* TODO: Replace with hero image — person mid-EMS-session, professional setting */}
                <div className="hidden md:flex aspect-[3/4] items-center justify-center rounded-xl bg-warm-grey">
                  <span className="font-serif text-xl text-secondary">
                    Hero billede
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. What is EMS Section (from om-os — richer)
        ────────────────────────────────────────────── */}
        <section id="hvad-er-ems" className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-8 md:gap-16 md:grid-cols-2">
              <ScrollReveal>
                {/* TODO: Replace with photo of trainer adjusting electrodes on client */}
                <div className="flex aspect-[4/3] max-h-[280px] sm:max-h-none items-center justify-center rounded-xl bg-warm-grey">
                  <span className="font-serif text-xl text-secondary">
                    Tr&aelig;ner justerer elektroder p&aring; klient
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <span className="text-sm uppercase tracking-widest text-orange-text">
                  Hvad er EMS
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-black">
                  Elektrisk Muskelstimulation
                </h2>
                <p className="mt-6 leading-relaxed text-secondary">
                  EMS sender kontrollerede elektriske impulser direkte til
                  dine muskler gennem en specialdesignet dragt. Mens du
                  udf&oslash;rer simple &oslash;velser, aktiveres over 300
                  muskelgrupper simultant — inklusive de dybe stabiliserende
                  muskler, som konventionel tr&aelig;ning sj&aelig;ldent
                  rammer.
                </p>
                <p className="mt-4 leading-relaxed text-secondary">
                  En 20-minutters session giver effektiv
                  helkropstr&aelig;ning. Sk&aring;nsomt for led og ryg.
                  Velegnet til alle niveauer.
                </p>
                <Link
                  href="#fordele"
                  className="mt-6 inline-flex items-center text-orange-text font-medium hover:text-orange-hover transition-colors"
                >
                  L&aelig;s mere om EMS &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            3. Who is it for (from om-os — personas)
        ────────────────────────────────────────────── */}
        <section id="hvem-er-det-for" className="bg-warm-grey py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                Hvem er det for
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-black">
                EMS passer til dig
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {personas.map((persona, index) => {
                const IconComponent = personaIcons[persona.icon];
                return (
                  <ScrollReveal key={persona.title} delay={index * 100}>
                    <div className="rounded-xl border border-black/[0.06] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <IconComponent className="h-6 w-6 text-orange-text" strokeWidth={1.5} />
                      <h3 className="mt-4 font-serif text-lg text-black">
                        {persona.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {persona.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Benefits / Why Choose EMS (from om-os — richer)
        ────────────────────────────────────────────── */}
        <section id="fordele" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <h2 className="font-serif text-4xl text-black">
                Hvorfor v&aelig;lge EMS?
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
              {whyEms.map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 150}>
                  <div className="relative pt-10 md:pt-12">
                    <span className="absolute top-0 left-0 font-serif text-5xl md:text-7xl font-bold leading-none text-black/[0.06] select-none">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-xl text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-secondary">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            5. First Session Process (from om-os — timeline)
        ────────────────────────────────────────────── */}
        <section id="din-foerste-session" className="bg-warm-grey py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                Din f&oslash;rste session
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                S&aring;dan foreg&aring;r det
              </h2>
            </ScrollReveal>

            {/* Desktop layout — horizontal */}
            <div className="relative mt-16 hidden md:block">
              {/* Horizontal connector line */}
              <div className="pointer-events-none absolute top-8 left-[12.5%] right-[12.5%] h-px bg-signal-orange/20" />

              <div className="grid grid-cols-4">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 150}>
                    <div className="relative px-4 text-center">
                      <span className="relative z-10 block font-serif text-5xl font-bold leading-none text-signal-orange/15 select-none">
                        {step.number}
                      </span>
                      <h3 className="mt-3 font-serif text-lg text-black">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <span className="mt-2 inline-block rounded-full bg-signal-orange/10 px-3 py-0.5 text-sm font-medium text-orange-text">
                          {step.subtitle}
                        </span>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {step.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Mobile layout — vertical with numbers on left */}
            <div className="relative mt-10 md:hidden">
              {/* Vertical connector line */}
              <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-signal-orange/20" />

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 100}>
                    <div className="relative grid grid-cols-[40px_1fr] gap-4">
                      <span className="relative z-10 font-serif text-3xl font-bold leading-none text-signal-orange/15 text-center select-none">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-black">
                          {step.title}
                        </h3>
                        {step.subtitle && (
                          <span className="mt-1 inline-block rounded-full bg-signal-orange/10 px-3 py-0.5 text-sm font-medium text-orange-text">
                            {step.subtitle}
                          </span>
                        )}
                        <p className="mt-2 text-sm leading-relaxed text-secondary">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className="mt-16 text-center">
              <Link
                href="#find-os"
                className="inline-flex items-center font-medium text-orange-text transition-colors hover:text-orange-hover"
              >
                Book din f&oslash;rste session &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            6. Testimonials
        ────────────────────────────────────────────── */}
        <section id="udtalelser" className="bg-off-white py-12 sm:py-16 md:py-24 lg:py-32">
          <ScrollReveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
              Hvad vores medlemmer siger
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            7. Pricing (full — from priser)
        ────────────────────────────────────────────── */}
        <section id="priser" className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
                  Medlemskab
                </span>
                <h2 className="mt-4 font-serif text-4xl text-black">
                  V&aelig;lg den rette plan
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid items-start gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 120}>
                  <div
                    className={`relative rounded-xl bg-white p-5 sm:p-6 md:p-8 ${
                      plan.featured
                        ? "border-2 border-signal-orange shadow-lg mt-6 sm:mt-0"
                        : "border border-warm-grey-dark"
                    }`}
                  >
                    {/* Featured badge */}
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-signal-orange px-5 py-1.5 text-sm text-white">
                          Mest Popul&aelig;r
                        </span>
                      </div>
                    )}

                    {/* Plan name */}
                    <h3 className="font-serif text-2xl text-black">
                      {plan.name}
                    </h3>
                    {plan.subtitle && (
                      <p className="mt-1 text-sm text-secondary">
                        {plan.subtitle}
                      </p>
                    )}

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-serif text-4xl text-black">
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-secondary">{plan.priceSuffix}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3 leading-relaxed text-secondary">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-orange-text">&#10003;</span>
                          <span className="text-black">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href="#find-os"
                        className={`block w-full rounded-lg py-3 text-center font-medium transition ${
                          plan.featured
                            ? "bg-signal-orange py-4 text-white hover:bg-orange-hover"
                            : "border-2 border-signal-orange text-orange-text hover:bg-signal-orange hover:text-white"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-secondary">
              Alle priser er inkl. moms.
            </p>
            <p className="mt-2 text-center">
              <Link
                href="#faq"
                className="text-sm font-medium text-orange-text transition-colors hover:text-orange-hover"
              >
                Se alle priser og firmapakker &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            8. FAQ
        ────────────────────────────────────────────── */}
        <section id="faq" className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
                  Ofte Stillede Sp&oslash;rgsm&aring;l
                </span>
                <h2 className="mt-4 font-serif text-4xl text-black">
                  Svar p&aring; dine sp&oslash;rgsm&aring;l
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid gap-x-12 md:grid-cols-2">
                <FaqAccordion items={faqItems.slice(0, 5)} />
                <FaqAccordion items={faqItems.slice(5)} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            9. Team
        ────────────────────────────────────────────── */}
        <section id="team" className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                M&oslash;d Tr&aelig;nerne
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Dit team
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-secondary">
                Certificerede instrukt&oslash;rer med passion for resultater.
              </p>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {trainers.map((trainer, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="transition hover:-translate-y-0.5 hover:shadow-md rounded-xl p-4">
                    {/* TODO: Professional headshot */}
                    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-warm-grey">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-orange-text">{trainer.role}</p>
                    <p className="mt-2 leading-relaxed text-secondary">
                      {trainer.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            10. Location
        ────────────────────────────────────────────── */}
        <section id="find-os" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                Find Os
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Centralt p&aring; Vesterbro
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:gap-12 md:grid-cols-2">
              {/* Left — Info */}
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">Adresse</h3>
                    <p className="text-secondary leading-relaxed">
                      Vesterbrogade 42<br />
                      1620 K&oslash;benhavn V
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">Transport</h3>
                    <p className="text-secondary leading-relaxed">
                      &#x1F6B6; 5 min gang fra K&oslash;benhavn H<br />
                      &#x1F6B2; 2 min fra Cykelruten<br />
                      &#x1F697; Parkering i sidegaderne
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">Kontakt</h3>
                    <p className="text-secondary leading-relaxed">
                      <a href="tel:+4531425364" className="hover:text-black transition-colors">+45 31 42 53 64</a><br />
                      <a href="mailto:info@emsenergi.dk" className="hover:text-black transition-colors">info@emsenergi.dk</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">&Aring;bningstider</h3>
                    <p className="text-secondary leading-relaxed">
                      Man&ndash;Fre 06:30&ndash;21:00<br />
                      L&oslash;r&ndash;S&oslash;n 08:00&ndash;18:00
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right — Map placeholder */}
              <ScrollReveal delay={150}>
                {/* TODO: Add Google Maps embed — Vesterbrogade 42, 1620 København V */}
                <div className="bg-warm-grey rounded-xl h-full min-h-[400px] flex items-center justify-center">
                  <span className="text-secondary font-serif text-lg">Google Maps</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            11. CTA Section
        ────────────────────────────────────────────── */}
        <section id="book" className="bg-forest-green py-12 sm:py-16 md:py-24 lg:py-32 text-center text-white">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight md:text-5xl">
                Klar til at pr&oslash;ve?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
                20 minutter. Ingen binding. Din f&oslash;rste session er gratis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="#find-os"
                  className="inline-block w-full sm:w-auto text-center rounded-lg bg-white px-10 py-4 text-lg font-medium text-forest-green transition-all hover:shadow-lg hover:scale-105"
                >
                  Book Gratis Pr&oslash;vetr&aelig;ning
                </Link>
              </div>
              <p className="mt-6 text-xs sm:text-sm text-white/50 flex flex-wrap justify-center gap-x-4 gap-y-1">
                <span>&#10003; Gratis f&oslash;rste session</span>
                <span>&#10003; Ingen binding</span>
                <span>&#10003; Book online p&aring; 30 sekunder</span>
              </p>
            </ScrollReveal>
          </div>
        </section>
        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </main>

      <Footer />
    </>
  );
}
