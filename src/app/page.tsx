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
  Baby,
} from "lucide-react";

const personaIcons = {
  Briefcase,
  Activity,
  Heart,
  Sprout,
  RefreshCw,
  Baby,
} as const;

export const metadata: Metadata = {
  title: "EMS Energi | EMS Træning København Østerbro — 20 min effektiv træning",
  description:
    "EMS træning i København Østerbro. 20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Aktiverer 90% af dine muskler. Også efterfødselstræning. Book EMS træning hos EMS Energi.",
  keywords: [
    "EMS træning København",
    "EMS Østerbro",
    "elektrisk muskelstimulation",
    "20 min træning",
    "EMS træning booking",
    "EMS Energi",
    "helkropstræning",
    "effektiv træning København",
    "efterfødselstræning",
    "postpartum træning",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "EMS Energi | EMS Træning København Østerbro — 20 min effektiv træning",
    description:
      "EMS træning i København Østerbro. 20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Også efterfødselstræning. Book din første EMS session.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMS Energi | EMS Træning København Østerbro",
    description:
      "20 minutters effektiv helkropstræning med elektrisk muskelstimulation. Book din første EMS session hos EMS Energi.",
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
    slug: "den-travle-professionelle",
    title: "Den travle professionelle",
    body: "Du har 45 minutter mellem møder — ikke 2 timer i et fitnesscenter. EMS giver effektiv træning på minimal tid.",
  },
  {
    icon: "Activity" as const,
    slug: "atleten-der-vil-mere",
    title: "Atleten der vil mere",
    body: "Supplement til din eksisterende træning. Aktivér muskelgrupper din normale rutine ikke rammer.",
  },
  {
    icon: "Heart" as const,
    slug: "genoptraening",
    title: "Genoptræning",
    body: "Skånsom træning efter skader. EMS belaster ikke led og bruges af fysioterapeuter til rehabilitering.",
  },
  {
    icon: "Sprout" as const,
    slug: "nybegynderen",
    title: "Nybegynderen",
    body: "Aldrig trænet seriøst? Vi tilpasser intensiteten til dig. Ingen forkundskaber nødvendige.",
  },
  {
    icon: "RefreshCw" as const,
    slug: "tilbage-i-form",
    title: "Tilbage i form",
    body: "Lang pause fra træning? EMS kickstarter din krop uden at overbelaste den.",
  },
  {
    icon: "Baby" as const,
    slug: "efterfoedselstraening",
    title: "Efterfødselstræning",
    body: "Genopbyg din core og bækkenbund skånsomt efter fødslen. EMS er ideel til travle mødre — effektiv træning på kun 20 minutter.",
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
    body: "Du udfører enkle øvelser — squats, lunges, armøvelser — mens dragten sender impulser til alle muskelgrupper samtidig. Vi træner max 2 personer ad gangen, så du får personlig vejledning hele vejen.",
  },
  {
    number: "04",
    title: "Færdig",
    subtitle: "",
    body: "Dragten af, og du er klar til resten af din dag. Ingen lang omklædning nødvendig.",
  },
];

const pricingPlans = [
  {
    name: "Performance",
    subtitle: "4 sessioner",
    price: "599 kr",
    priceSuffix: "/md",
    description: "Træn op til 4 gange om måneden.",
    features: [
      "Op til 4 EMS sessioner/md",
      "Adgang til alle hold",
      "Personlig instruktør",
      "Løbende månedligt",
    ],
    cta: "Kom I Gang",
    featured: false,
  },
  {
    name: "Booster",
    subtitle: "8 sessioner",
    price: "1.099 kr",
    priceSuffix: "/md",
    description: "Træn op til 8 gange om måneden.",
    features: [
      "Op til 8 EMS sessioner/md",
      "Adgang til alle hold",
      "Personlig instruktør",
      "Løbende månedligt",
    ],
    cta: "Kom I Gang",
    featured: true,
  },
  {
    name: "Limitless Power",
    subtitle: "Ubegrænset",
    price: "1.599 kr",
    priceSuffix: "/md",
    description: "Træn ubegrænset — op til 15 gange pr. måned.",
    features: [
      "Ubegrænset EMS sessioner (op til 15/md)",
      "Adgang til alle hold",
      "Personlig instruktør",
      "Medbring +1 én gang om måneden",
      "Løbende månedligt",
    ],
    cta: "Kom I Gang",
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
  {
    question: "Kan jeg træne EMS hvis jeg er gravid?",
    answer:
      "Nej, EMS frarådes under graviditet. Vi anbefaler at vente til efter fødslen og evt. konsultere din læge før genoptagelse af træning.",
  },
  {
    question: "Kan jeg træne EMS efter fødslen?",
    answer:
      "Ja, EMS er fremragende til efterfødselstræning. Vi anbefaler at vente til 6-8 uger efter fødslen (eller efter lægens godkendelse ved kejsersnit). EMS er særligt effektivt til at genopbygge core og bækkenbund skånsomt.",
  },
  {
    question: "Træner jeg alene eller sammen med andre?",
    answer:
      "Vi træner max 2 personer ad gangen. Du får altid personlig vejledning fra din instruktør, og træningen tilpasses individuelt til dig — uanset om du træner alene eller samtidig med én anden.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="pt-28 sm:pt-32 md:pt-40">
        {/* ──────────────────────────────────────────────
            1. Hero Section
        ────────────────────────────────────────────── */}
        <section id="hero" className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center bg-off-white py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
              {/* Text column */}
              <div>
                <ScrollReveal>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                    EMS Fitness Studio
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                    20 minutter.
                    <br />
                    Hele kroppen.
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                    EMS tr&aelig;ning aktiverer 90% af dine muskler samtidig.
                    Effektiv helkropstr&aelig;ning der passer ind mellem dine
                    m&oslash;der — med m&aring;lbare resultater.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="mt-8">
                    <Link
                      href="/booking"
                      className="inline-block w-full sm:w-auto text-center rounded-lg bg-navy px-8 py-4 font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Book Din F&oslash;rste Session
                    </Link>
                  </div>
                  <Link
                    href="#hvad-er-ems"
                    className="mt-4 block text-sm text-slate transition-colors hover:text-navy"
                  >
                    Se hvordan det virker &darr;
                  </Link>
                </ScrollReveal>
              </div>

              {/* Image placeholder */}
              <ScrollReveal delay={200}>
                {/* TODO: Replace with hero image — person mid-EMS-session, professional setting */}
                <div className="hidden md:flex aspect-[3/4] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
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
                <div className="flex aspect-[4/3] max-h-[280px] sm:max-h-none items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Tr&aelig;ner justerer elektroder p&aring; klient
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <span className="text-sm uppercase tracking-widest text-navy">
                  Hvad er EMS
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                  Elektrisk Muskelstimulation
                </h2>
                <p className="mt-6 leading-relaxed text-slate">
                  EMS sender kontrollerede elektriske impulser direkte til
                  dine muskler gennem en specialdesignet dragt. Mens du
                  udf&oslash;rer simple &oslash;velser, aktiveres over 300
                  muskelgrupper simultant — inklusive de dybe stabiliserende
                  muskler, som konventionel tr&aelig;ning sj&aelig;ldent
                  rammer.
                </p>
                <p className="mt-4 leading-relaxed text-slate">
                  En 20-minutters session giver effektiv
                  helkropstr&aelig;ning. Sk&aring;nsomt for led og ryg.
                  Velegnet til alle niveauer.
                </p>
                <p className="mt-4 leading-relaxed text-slate">
                  Hver session foreg&aring;r med en personlig instrukt&oslash;r.
                  Vi tr&aelig;ner maksimalt 2 personer samtidig, s&aring; du altid
                  f&aring;r individuel opm&aelig;rksomhed og tilpasset intensitet.
                </p>
                <Link
                  href="#fordele"
                  className="mt-6 inline-flex items-center text-navy font-medium hover:text-navy-light transition-colors"
                >
                  Se fordelene &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            3. Who is it for (from om-os — personas)
        ────────────────────────────────────────────── */}
        <section id="hvem-er-det-for" className="bg-baby-blue py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-navy">
                Hvem er det for
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                EMS passer til dig
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {personas.map((persona, index) => {
                const IconComponent = personaIcons[persona.icon];
                return (
                  <ScrollReveal key={persona.title} delay={index * 100}>
                    <Link
                      href={`/${persona.slug}`}
                      className="block rounded-xl border border-navy/[0.06] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <IconComponent className="h-6 w-6 text-navy" strokeWidth={1.5} />
                      <h3 className="mt-4 font-serif text-lg text-navy">
                        {persona.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {persona.body}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-navy">
                        L&aelig;s mere &rarr;
                      </span>
                    </Link>
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
              <h2 className="font-serif text-4xl text-navy">
                Hvorfor v&aelig;lge EMS?
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
              {whyEms.map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 150}>
                  <div className="relative pt-10 md:pt-12">
                    <span className="absolute top-0 left-0 font-serif text-5xl md:text-7xl font-bold leading-none text-navy/[0.06] select-none">
                      {item.number}
                    </span>
                    <h3 className="font-serif text-xl text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate">
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
        <section id="din-foerste-session" className="bg-baby-blue py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-navy">
                Din f&oslash;rste session
              </span>
              <h2 className="mt-3 font-serif text-4xl text-navy">
                S&aring;dan foreg&aring;r det
              </h2>
            </ScrollReveal>

            {/* Responsive timeline — vertical on mobile, horizontal on desktop */}
            <div className="relative mt-10 md:mt-16">
              {/* Connector line: vertical on mobile, horizontal on desktop */}
              <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-navy/20 md:left-[12.5%] md:right-[12.5%] md:top-8 md:bottom-auto md:h-px md:w-auto" />

              <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 100}>
                    <div className="relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-none md:text-center md:px-4">
                      <span className="relative z-10 font-serif text-3xl md:text-5xl font-bold leading-none text-navy/15 text-center select-none md:block">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-navy md:mt-3">
                          {step.title}
                        </h3>
                        {step.subtitle && (
                          <span className="mt-1 md:mt-2 inline-block rounded-full bg-navy/10 px-3 py-0.5 text-sm font-medium text-navy">
                            {step.subtitle}
                          </span>
                        )}
                        <p className="mt-2 text-sm leading-relaxed text-slate">
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
                href="/booking"
                className="inline-flex items-center font-medium text-navy transition-colors hover:text-navy-light"
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
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-navy">
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
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                  Medlemskab
                </span>
                <h2 className="mt-4 font-serif text-4xl text-navy">
                  V&aelig;lg den rette plan
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 120} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-xl bg-white p-5 sm:p-6 md:p-8 ${
                      plan.featured
                        ? "border-2 border-navy shadow-lg mt-6 sm:mt-0"
                        : "border-2 border-border-medium"
                    }`}
                  >
                    {/* Featured badge */}
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-navy px-5 py-1.5 text-sm text-white">
                          Mest Popul&aelig;r
                        </span>
                      </div>
                    )}

                    {/* Plan name */}
                    <h3 className="font-serif text-2xl text-navy">
                      {plan.name}
                    </h3>
                    {plan.subtitle && (
                      <p className="mt-1 text-sm text-slate">
                        {plan.subtitle}
                      </p>
                    )}

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-serif text-4xl text-navy">
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-slate">{plan.priceSuffix}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3 leading-relaxed text-slate">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-navy">&#10003;</span>
                          <span className="text-navy">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto pt-8">
                      <Link
                        href="/booking"
                        className={`block w-full rounded-lg py-3 text-center font-medium transition ${
                          plan.featured
                            ? "bg-navy text-white hover:bg-navy-light"
                            : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate">
              Alle priser er inkl. moms.
            </p>
            <p className="mt-3 text-center text-sm text-navy font-medium">
              &#x1F465; Max 2 per session — personlig tr&aelig;ning garanteret
            </p>
            <p className="mt-2 text-center">
              <Link
                href="/virksomheder"
                className="text-sm font-medium text-navy transition-colors hover:text-navy-light"
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
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                  Ofte Stillede Sp&oslash;rgsm&aring;l
                </span>
                <h2 className="mt-4 font-serif text-4xl text-navy">
                  Svar p&aring; dine sp&oslash;rgsm&aring;l
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid gap-x-12 md:grid-cols-2">
                <FaqAccordion items={faqItems.slice(0, 6)} />
                <FaqAccordion items={faqItems.slice(6)} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            9. Location
        ────────────────────────────────────────────── */}
        <section id="find-os" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-navy">
                Find Os
              </span>
              <h2 className="mt-3 font-serif text-4xl text-navy">
                Centralt p&aring; &Oslash;sterbro
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:gap-12 md:grid-cols-2">
              {/* Left — Info */}
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-serif text-xl text-navy mb-2">Adresse</h3>
                    <p className="text-slate leading-relaxed">
                      Nordre Frihavnsgade 65, kl. tv<br />
                      2100 &Oslash;sterbro
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-navy mb-2">Transport</h3>
                    <p className="text-slate leading-relaxed">
                      &#x1F6B6; 5 min gang fra Nordhavn St.<br />
                      &#x1F6B2; Direkte adgang fra cykelstien<br />
                      &#x1F697; Gratis parkering i sidegaderne
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-navy mb-2">Kontakt</h3>
                    <p className="text-slate leading-relaxed">
                      <a href="tel:+4531425364" className="hover:text-navy transition-colors">+45 31 42 53 64</a><br />
                      <a href="mailto:info@emsenergi.dk" className="hover:text-navy transition-colors">info@emsenergi.dk</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-navy mb-2">&Aring;bningstider</h3>
                    <p className="text-slate leading-relaxed">
                      Man&ndash;Fre 06:30&ndash;21:00<br />
                      L&oslash;r&ndash;S&oslash;n 08:00&ndash;18:00
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right — Map placeholder */}
              <ScrollReveal delay={150}>
                {/* TODO: Add Google Maps embed — Nordre Frihavnsgade 65, kl. tv, 2100 Østerbro */}
                <div className="bg-baby-blue rounded-xl h-full min-h-[400px] flex items-center justify-center">
                  <span className="text-slate font-serif text-lg">Google Maps</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            11. CTA Section
        ────────────────────────────────────────────── */}
        <section id="book" className="bg-white py-12 sm:py-16 md:py-24 lg:py-32 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight md:text-5xl text-navy">
                Klar til at pr&oslash;ve?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
                20 minutter. Ingen binding. Start din EMS rejse i dag.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="/booking"
                  className="inline-block w-full sm:w-auto text-center rounded-lg bg-navy px-10 py-4 text-lg font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book Din F&oslash;rste Session
                </Link>
              </div>
              <p className="mt-6 text-xs sm:text-sm text-slate flex flex-wrap justify-center gap-x-4 gap-y-1">
                <span>&#10003; 20 min. effektiv tr&aelig;ning</span>
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
