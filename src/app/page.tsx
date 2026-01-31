import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "20 Min = 4 Timer",
    description:
      "En enkelt EMS session aktiverer over 300 muskler simultant og svarer til flere timers konventionel tr\u00e6ning.",
  },
  {
    number: "02",
    title: "Sk\u00e5nsomt & Effektivt",
    description:
      "Minimal belastning af led og sener. Perfekt til genoptr\u00e6ning eller dem der vil tr\u00e6ne smart.",
  },
  {
    number: "03",
    title: "M\u00e5lbare Resultater",
    description:
      "M\u00e6rk fremgang allerede efter 4-6 sessioner. Vores tr\u00e6nere tilpasser programmet til dig.",
  },
];

const pricingPlans = [
  {
    name: "Pr\u00f8vetr\u00e6ning",
    price: "GRATIS",
    priceSuffix: "",
    description:
      "Din f\u00f8rste EMS session er p\u00e5 os. Oplev forskellen helt uforpligtende.",
    features: [
      "20 min EMS session",
      "Personlig instrukt\u00f8r",
      "Ingen binding",
    ],
    cta: "Book Gratis",
    featured: false,
  },
  {
    name: "M\u00e5nedskort",
    price: "599 kr",
    priceSuffix: "/md",
    description: "Ubegr\u00e6nset adgang til EMS tr\u00e6ning og holdtimer.",
    features: [
      "Ubegr\u00e6nset EMS tr\u00e6ning",
      "Adgang til holdtimer",
      "Personlig tr\u00e6ningsplan",
      "Fleksibel opsigelse",
    ],
    cta: "Kom I Gang",
    featured: true,
  },
  {
    name: "10-Turs Kort",
    price: "2.499 kr",
    priceSuffix: "",
    description:
      "Perfekt til dig der vil tr\u00e6ne i dit eget tempo.",
    features: [
      "10 EMS sessioner",
      "Personlig instrukt\u00f8r",
      "Gyldighed: 6 m\u00e5neder",
    ],
    cta: "K\u00f8b Nu",
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* ──────────────────────────────────────────────
            1. Hero Section
        ────────────────────────────────────────────── */}
        <section className="relative flex min-h-screen items-center bg-cream">
          <div className="mx-auto w-full max-w-7xl px-6">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
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
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-dark">
                EMS tr&aelig;ning aktiverer 90% af dine muskler p&aring; kun 20
                minutter.
                <br />
                Oplev fremtidens fitness hos EMS Energi.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-block rounded-full bg-coral px-8 py-4 font-medium text-white transition-colors hover:bg-coral-dark"
                >
                  Book Gratis Pr&oslash;vetr&aelig;ning
                </Link>
              </div>
              <Link
                href="#hvad-er-ems"
                className="mt-4 block text-sm text-gray-dark transition-colors hover:text-black"
              >
                L&aelig;s mere &darr;
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. What is EMS Section
        ────────────────────────────────────────────── */}
        <section id="hvad-er-ems" className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              {/* Image placeholder */}
              <ScrollReveal>
                <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-peach">
                  <span className="text-lg text-gray-dark">Billede</span>
                </div>
              </ScrollReveal>

              {/* Text column */}
              <ScrollReveal delay={150}>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
                    Hvad er EMS
                  </span>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-black md:text-5xl">
                    Elektrisk
                    <br />
                    Muskelstimulation
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-gray-dark">
                    EMS tr&aelig;ning bruger elektriske impulser til at aktivere
                    dine muskler dybere og mere effektivt end konventionel
                    tr&aelig;ning. P&aring; bare 20 minutter f&aring;r du en
                    tr&aelig;ning der svarer til 3-4 timers traditionel
                    styrketr&aelig;ning &mdash; sk&aring;nsomt for dine led og
                    med dokumenterede resultater.
                  </p>
                  <Link
                    href="/ems"
                    className="mt-6 inline-block font-medium text-coral transition-colors hover:underline"
                  >
                    L&aelig;s mere om EMS &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            3. Benefits Section
        ────────────────────────────────────────────── */}
        <section className="bg-peach py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="text-center font-serif text-4xl text-black">
                Hvorfor v&aelig;lge EMS?
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.number} delay={index * 120}>
                  <div>
                    <span className="font-serif text-6xl text-coral/30">
                      {benefit.number}
                    </span>
                    <h3 className="mt-2 font-serif text-xl text-black">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-dark">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Testimonials Section
        ────────────────────────────────────────────── */}
        <section className="bg-cream py-24 md:py-32">
          <ScrollReveal>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-coral">
              Hvad vores medlemmer siger
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            5. Pricing Preview Section
        ────────────────────────────────────────────── */}
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-coral">
                  Medlemskab
                </span>
                <h2 className="mt-4 font-serif text-4xl text-black">
                  V&aelig;lg den rette plan
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid items-stretch gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 120}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl bg-white p-8 ${
                      plan.featured
                        ? "border-2 border-teal"
                        : "border border-cream-dark"
                    }`}
                  >
                    {/* "Mest Populaer" badge */}
                    {plan.featured && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-xs font-medium text-white">
                        Mest Popul&aelig;r
                      </span>
                    )}

                    <h3 className="font-serif text-xl text-black">
                      {plan.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-serif text-4xl text-black">
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-gray-dark">
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-gray-dark">{plan.description}</p>

                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-gray-dark"
                        >
                          <svg
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      {plan.featured ? (
                        <Link
                          href="/booking"
                          className="block w-full rounded-full bg-coral py-3.5 text-center font-medium text-white transition-colors hover:bg-coral-dark"
                        >
                          {plan.cta}
                        </Link>
                      ) : (
                        <Link
                          href="/booking"
                          className="block w-full rounded-full border border-coral py-3.5 text-center font-medium text-coral transition-colors hover:bg-coral hover:text-cream"
                        >
                          {plan.cta}
                        </Link>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-12 text-center">
                <Link
                  href="/priser"
                  className="font-medium text-coral transition-colors hover:underline"
                >
                  Se alle priser &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            6. CTA Section
        ────────────────────────────────────────────── */}
        <section className="bg-teal py-24 text-center text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Klar til at m&aelig;rke forskellen?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
                Book din f&oslash;rste gratis EMS tr&aelig;ning i dag og oplev
                fremtidens fitness.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="/booking"
                  className="inline-block rounded-full bg-coral px-10 py-4 text-lg font-medium text-white transition-colors hover:bg-coral-dark"
                >
                  Book Gratis Pr&oslash;vetr&aelig;ning
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
