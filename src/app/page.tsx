import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";

/* ────────────────────────────────────────────── data ── */

const whyEms = [
  {
    number: "01",
    title: "20 Min = 4 Timer",
    body: "En enkelt session aktiverer over 300 muskler simultant. Videnskabelige studier viser det svarer til flere timers konventionel træning. Perfekt til dig der værdsætter din tid.",
  },
  {
    number: "02",
    title: "Skånsomt & Effektivt",
    body: "Ingen tunge vægte. Minimal belastning på led og sener. EMS bruges aktivt i genoptræning og er godkendt til personer med rygproblemer, knæskader og andre begrænsninger.",
  },
  {
    number: "03",
    title: "Målbare Resultater",
    body: "De fleste mærker forskel efter 4-6 sessioner. Vi tracker din fremgang og tilpasser programmet løbende. Ingen gætværk — kun data.",
  },
];

const personas = [
  {
    icon: "💼",
    title: "Den travle professionelle",
    body: "Du har 45 minutter mellem møder — ikke 2 timer i et fitnesscenter. EMS giver maksimal effekt på minimal tid.",
  },
  {
    icon: "🏃",
    title: "Atleten der vil mere",
    body: "Du træner allerede, men vil aktivere muskelgrupper din normale træning ikke rammer. EMS supplerer din eksisterende rutine.",
  },
  {
    icon: "🩹",
    title: "Genoptræning & skader",
    body: "Knæ-, ryg- eller skulderproblemer? EMS er skånsomt for led og bruges af fysioterapeuter til genoptræning.",
  },
  {
    icon: "🌱",
    title: "Nybegynderen",
    body: "Aldrig trænet seriøst før? EMS tilpasser intensiteten til dit niveau. Vores trænere guider dig hele vejen.",
  },
  {
    icon: "🔄",
    title: "Tilbage i form",
    body: "Lang pause fra træning? EMS kickstarter din krop uden at overbelaste den.",
  },
  {
    icon: "⭐",
    title: "Seniorer (55+)",
    body: "EMS styrker muskulatur og balance med minimal belastning — ideel til at vedligeholde mobilitet.",
  },
];

const steps = [
  {
    number: "01",
    title: "Du ankommer",
    subtitle: "2 min",
    body: "Vi udleverer en specialdesignet EMS-dragt og hjælper dig i den. Dragten er let og sidder tæt for optimal kontakt.",
  },
  {
    number: "02",
    title: "Vi kalibrerer",
    subtitle: "3 min",
    body: "Din personlige instruktør tilslutter elektroderne og justerer intensiteten til dit niveau. Du bestemmer hvor meget du kan mærke.",
  },
  {
    number: "03",
    title: "Du træner",
    subtitle: "20 min",
    body: "Mens du udfører enkle øvelser — squats, lunges, armøvelser — sender dragten impulser der aktiverer alle muskelgrupper samtidig.",
  },
  {
    number: "04",
    title: "Du er færdig",
    subtitle: "",
    body: "Cool-down, dragten af, og du er klar til resten af din dag. Ingen svedig omklædning nødvendig — du har knap nok svedt.",
  },
];

const trainers = [
  {
    name: "[Instruktør Navn]",
    role: "Head Instructor",
    bio: "Certificeret EMS-instruktør med 5+ års erfaring. Tidligere personlig træner med speciale i genoptræning.",
  },
  {
    name: "[Instruktør Navn]",
    role: "Instruktør",
    bio: "Baggrund i sportsvidenskab. Fokus på præstationsoptimering og atlettræning.",
  },
  {
    name: "[Instruktør Navn]",
    role: "Instruktør",
    bio: "Uddannet fysioterapeut. Ekspert i skånsom træning og genoptræningsforløb.",
  },
];

const pricingPlans = [
  {
    name: "Prøvetræning",
    price: "GRATIS",
    priceSuffix: "",
    description: "Din første EMS session er på os. Oplev forskellen helt uforpligtende.",
    features: ["20 min EMS session", "Personlig instruktør", "Ingen binding"],
    cta: "Book Gratis",
    featured: false,
  },
  {
    name: "Månedskort",
    price: "599 kr",
    priceSuffix: "/md",
    description: "Ubegrænset adgang til EMS træning og holdtimer.",
    features: [
      "Ubegrænset EMS træning",
      "Adgang til holdtimer",
      "Personlig træningsplan",
      "Fleksibel opsigelse",
    ],
    cta: "Kom I Gang",
    featured: true,
  },
  {
    name: "10-Turs Kort",
    price: "2.499 kr",
    priceSuffix: "",
    description: "Perfekt til dig der vil træne i dit eget tempo.",
    features: ["10 EMS sessioner", "Personlig instruktør", "Gyldighed: 6 måneder"],
    cta: "Køb Nu",
    featured: false,
  },
];

const faqItems = [
  {
    question: "Er EMS sikkert?",
    answer:
      "Ja. EMS er godkendt og anvendes af fysioterapeuter, eliteatleter og rehabiliteringscentre verden over. Vores udstyr er CE-mærket og vedligeholdes efter strenge standarder.",
  },
  {
    question: "Hvem bør ikke træne EMS?",
    answer:
      "EMS frarådes hvis du har pacemaker, er gravid, har epilepsi, eller har åbne sår i træningsområdet. Ved tvivl anbefaler vi at konsultere din læge først.",
  },
  {
    question: "Hvad skal jeg have med?",
    answer:
      "Ingenting. Vi udleverer specialdragt og håndklæde. Du træner barfodet. Medbring gerne vand.",
  },
  {
    question: "Hvor ondt gør det?",
    answer:
      "Det gør ikke ondt. Du mærker en prikkende/summende fornemmelse og en kontraktion i musklerne. Intensiteten justeres til dit niveau — du er altid i kontrol.",
  },
  {
    question: "Hvor hurtigt ser jeg resultater?",
    answer:
      "De fleste mærker øget energi og muskelspænding efter 2-3 sessioner. Synlige ændringer i kropskomposition typisk efter 6-8 sessioner ved regelmæssig træning.",
  },
  {
    question: "Kan jeg træne EMS som supplement til anden træning?",
    answer:
      "Absolut. Mange af vores medlemmer bruger EMS som supplement til løb, cykling eller traditionel styrketræning for at aktivere muskelgrupper de ellers ikke rammer.",
  },
  {
    question: "Hvor tit skal jeg træne?",
    answer:
      "Vi anbefaler 1-2 sessioner om ugen med mindst 48 timers restitution mellem træninger. Mere er ikke nødvendigvis bedre — dine muskler har brug for hvile.",
  },
  {
    question: "Tilbyder I firmaaftaler?",
    answer:
      "Ja. Kontakt os for virksomhedsaftaler og firmapakker på info@emsenergi.dk.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* ──────────────────────────────────────────────
            1. Hero Section
        ────────────────────────────────────────────── */}
        <section id="hero" className="relative flex min-h-screen items-center bg-off-white">
          <div className="mx-auto w-full max-w-7xl px-6">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-signal-orange">
                EMS Fitness Studio
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="mt-6 font-serif text-5xl leading-tight text-black md:text-7xl md:leading-tight">
                Tr&aelig;n smartere.
                <br />
                M&aelig;rk forskellen.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-secondary">
                EMS tr&aelig;ning aktiverer 90% af dine muskler p&aring; kun 20
                minutter.
                <br />
                Oplev fremtidens fitness hos EMS Energi.
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
                L&aelig;s mere &darr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. What is EMS Section (from om-os — richer)
        ────────────────────────────────────────────── */}
        <section id="hvad-er-ems" className="bg-off-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <ScrollReveal>
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-warm-grey">
                  <span className="font-serif text-xl text-secondary">
                    Person i EMS-dragt under tr&aelig;ning
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <span className="text-sm uppercase tracking-widest text-signal-orange">
                  Hvad er EMS
                </span>
                <h2 className="mt-3 font-serif text-4xl text-black">
                  Elektrisk Muskelstimulation
                </h2>
                <p className="mt-6 leading-relaxed text-secondary">
                  EMS sender elektriske impulser direkte til dine muskler
                  gennem en specialdesignet dragt. Mens du udfører simple
                  øvelser, aktiveres over 300 muskler samtidig — inklusive
                  de dybe stabiliserende muskler, som konventionel træning
                  sjældent rammer.
                </p>
                <p className="mt-4 leading-relaxed text-secondary">
                  Resultatet? En 20-minutters session der matcher 3-4 timers
                  traditionel styrketræning. Skånsomt for led. Dokumenterede
                  resultater. Og du er færdig før din frokostpause slutter.
                </p>
                <Link
                  href="#fordele"
                  className="mt-6 inline-flex items-center text-signal-orange font-medium hover:text-orange-hover transition-colors"
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
        <section id="hvem-er-det-for" className="bg-warm-grey py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-signal-orange">
                Hvem er det for
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                EMS passer til dig — uanset udgangspunkt
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {personas.map((persona, index) => (
                <ScrollReveal key={persona.title} delay={index * 100}>
                  <div className="rounded-xl border border-black/[0.06] bg-white p-8">
                    <span className="text-2xl">{persona.icon}</span>
                    <h3 className="mt-4 font-serif text-lg text-black">
                      {persona.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {persona.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Benefits / Why Choose EMS (from om-os — richer)
        ────────────────────────────────────────────── */}
        <section id="fordele" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <h2 className="font-serif text-4xl text-black">
                Hvorfor v&aelig;lge EMS?
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {whyEms.map((item, index) => (
                <ScrollReveal key={item.number} delay={index * 150}>
                  <div className="relative pt-12">
                    <span className="absolute top-0 left-0 font-serif text-7xl font-bold leading-none text-black/[0.06] select-none">
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
        <section id="din-foerste-session" className="bg-off-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-signal-orange">
                Din første session
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Sådan foregår en EMS træning
              </h2>
            </ScrollReveal>

            <div className="relative mt-16">
              {/* Horizontal connector line — desktop only */}
              <div className="pointer-events-none absolute top-5 left-[12.5%] right-[12.5%] hidden h-px bg-signal-orange/20 md:block" />

              <div className="grid gap-12 md:grid-cols-4 md:gap-0">
                {steps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 150}>
                    <div className="relative px-4 text-center">
                      <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-signal-orange text-sm font-bold text-white">
                        {step.number}
                      </div>
                      <div className="mx-auto mt-6 flex aspect-[4/3] max-w-[180px] items-center justify-center rounded-xl bg-warm-grey">
                        <span className="text-xs text-secondary">Foto</span>
                      </div>
                      <h3 className="mt-4 font-serif text-lg text-black">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <span className="mt-1 inline-block text-sm font-medium text-signal-orange">
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

            <ScrollReveal className="mt-16 text-center">
              <Link
                href="#find-os"
                className="inline-flex items-center font-medium text-signal-orange transition-colors hover:text-orange-hover"
              >
                Book din første session &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            6. Testimonials
        ────────────────────────────────────────────── */}
        <section id="udtalelser" className="bg-off-white py-24 md:py-32">
          <ScrollReveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-signal-orange">
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
        <section id="priser" className="bg-off-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-signal-orange">
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
                    className={`relative rounded-xl bg-white p-8 ${
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

                    {/* Coffee comparison note */}
                    {plan.featured && (
                      <p className="mt-2 text-sm text-signal-orange italic">
                        Svarer til prisen p&aring; 2-3 kaffekopper om ugen
                      </p>
                    )}

                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-signal-orange">&#10003;</span>
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
                            : "border-2 border-signal-orange text-signal-orange hover:bg-signal-orange hover:text-white"
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
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            8. FAQ
        ────────────────────────────────────────────── */}
        <section id="faq" className="bg-off-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-signal-orange">
                  Ofte Stillede Sp&oslash;rgsm&aring;l
                </span>
                <h2 className="mt-4 font-serif text-4xl text-black">
                  Alt hvad du b&oslash;r vide
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <FaqAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            9. Team
        ────────────────────────────────────────────── */}
        <section id="team" className="bg-off-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-signal-orange">
                M&oslash;d Tr&aelig;nerne
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Eksperter i EMS
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-secondary">
                Vores certificerede instrukt&oslash;rer sikrer du f&aring;r mest muligt ud af hver session.
              </p>
            </ScrollReveal>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {trainers.map((trainer, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div>
                    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-warm-grey">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-signal-orange">{trainer.role}</p>
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
        <section id="find-os" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-signal-orange">
                Find Os
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Bes&oslash;g Studiet
              </h2>
            </ScrollReveal>

            <div className="grid gap-12 md:grid-cols-2">
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
                      5 min gang fra K&oslash;benhavn H<br />
                      Parkering i sidegaderne
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">Kontakt</h3>
                    <p className="text-secondary leading-relaxed">
                      +45 XX XX XX XX<br />
                      info@emsenergi.dk
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-black mb-2">&Aring;bningstider</h3>
                    <p className="text-secondary leading-relaxed">
                      Man-Fre 06:30-21:00<br />
                      L&oslash;r-S&oslash;n 08:00-18:00
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right — Map placeholder */}
              <ScrollReveal delay={150}>
                {/* TODO: Add Google Maps embed */}
                <div className="bg-warm-grey rounded-xl h-full min-h-[300px] flex items-center justify-center">
                  <span className="text-secondary font-serif text-lg">Google Maps</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            11. CTA Section
        ────────────────────────────────────────────── */}
        <section id="book" className="bg-forest-green py-24 text-center text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Klar til at pr&oslash;ve?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
                Din f&oslash;rste session er gratis og uforpligtende. 20 minutter. Ingen binding. Book i dag.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="#find-os"
                  className="inline-block w-full sm:w-auto text-center rounded-lg bg-signal-orange px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-orange-hover"
                >
                  Book Gratis Pr&oslash;vetr&aelig;ning
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/50">
                &#10003; Gratis f&oslash;rste session &nbsp; &#10003; Ingen binding &nbsp; &#10003; Book online p&aring; 30 sekunder
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
