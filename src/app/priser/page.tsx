import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "Priser | EMS Energi",
};

/* ────────────────────────────────────────────── data ── */

const pricingPlans = [
  {
    name: "Enkelt Session",
    price: "349 kr",
    period: "/session",
    description:
      "Perfekt til dig der vil pr\u00f8ve EMS tr\u00e6ning uden binding.",
    features: [
      "20 min EMS session",
      "Personlig instrukt\u00f8r",
      "Ingen binding",
      "Omkl\u00e6dning & h\u00e5ndkl\u00e6de",
    ],
    cta: "Book Session",
    featured: false,
  },
  {
    name: "M\u00e5nedskort",
    price: "599 kr",
    period: "/md",
    description:
      "Ubegr\u00e6nset adgang til EMS tr\u00e6ning. Bedste v\u00e6rdi for dedikerede tr\u00e6nere.",
    features: [
      "Ubegr\u00e6nset EMS tr\u00e6ning",
      "Adgang til holdtimer",
      "Personlig tr\u00e6ningsplan",
      "Kropsanalyse hver m\u00e5ned",
      "10% rabat p\u00e5 kosttilskud",
      "Fleksibel opsigelse",
    ],
    cta: "Kom I Gang",
    featured: true,
  },
  {
    name: "10-Turs Kort",
    price: "2.499 kr",
    period: "",
    description:
      "Tr\u00e6n i dit eget tempo med et fleksibelt klippekort.",
    features: [
      "10 EMS sessioner",
      "Personlig instrukt\u00f8r",
      "Gyldighed: 6 m\u00e5neder",
      "Omkl\u00e6dning & h\u00e5ndkl\u00e6de",
    ],
    cta: "K\u00f8b Klippekort",
    featured: false,
  },
];

const additionalServices = [
  {
    title: "Personlig Tr\u00e6ning (1:1)",
    price: "449 kr/session",
    description: "Dedikeret tr\u00e6ner og skr\u00e6ddersyet program.",
  },
  {
    title: "Duo Tr\u00e6ning (2:1)",
    price: "349 kr/person",
    description: "Tr\u00e6n sammen med en ven eller partner.",
  },
  {
    title: "Kropsanalyse",
    price: "199 kr",
    description: "Detaljeret InBody scanning med personlig gennemgang.",
  },
  {
    title: "Ern\u00e6ringsvejledning",
    price: "599 kr",
    description: "Individuel kostplan tilpasset dine m\u00e5l.",
  },
];

const faqItems = [
  {
    question: "Er EMS tr\u00e6ning sikkert?",
    answer:
      "Ja, EMS tr\u00e6ning er fuldst\u00e6ndig sikkert og anvendes bredt inden for fysioterapi og professionel sport. Vores tr\u00e6nere er alle certificerede og sikrer at tr\u00e6ningen tilpasses dit niveau.",
  },
  {
    question: "Hvor ofte skal jeg tr\u00e6ne?",
    answer:
      "Vi anbefaler 1-2 EMS sessioner om ugen for optimale resultater. Da tr\u00e6ningen er meget intens, har kroppen brug for restitutionstid mellem sessionerne.",
  },
  {
    question: "Skal jeg v\u00e6re i god form for at starte?",
    answer:
      "Nej! EMS tr\u00e6ning er for alle uanset fitnessniveau. Vores tr\u00e6nere tilpasser intensiteten individuelt, s\u00e5 b\u00e5de begyndere og erfarne atleter f\u00e5r udbytte af tr\u00e6ningen.",
  },
  {
    question: "Hvad skal jeg medbringe?",
    answer:
      "Ingenting! Vi stiller tr\u00e6ningst\u00f8j, h\u00e5ndkl\u00e6de og alt n\u00f8dvendigt udstyr til r\u00e5dighed. Du skal bare m\u00f8de op.",
  },
  {
    question: "Kan jeg opsige mit m\u00e5nedskort?",
    answer:
      "Ja, vores m\u00e5nedskort kan opsiges med 30 dages varsel til udgangen af en m\u00e5ned. Ingen lange bindingsperioder.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function PriserPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-cream pt-40 pb-20 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-5xl md:text-6xl text-black">
              Priser &amp; Medlemskab
            </h1>
            <p className="mt-4 text-lg text-gray-dark">
              Find den plan der passer til din livsstil. Start med en gratis
              pr&oslash;vetr&aelig;ning.
            </p>
          </ScrollReveal>
        </section>

        {/* Intro Offer */}
        <section className="bg-coral py-16 text-center text-white">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl text-white">
              Pr&oslash;v EMS Gratis
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/90">
              Din f&oslash;rste EMS tr&aelig;ning er helt gratis og
              uforpligtende. Book i dag og oplev forskellen.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-white/90"
            >
              Book Gratis Pr&oslash;vetr&aelig;ning
            </Link>
          </ScrollReveal>
        </section>

        {/* Pricing Cards */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 120}>
                  <div
                    className={`relative rounded-2xl bg-white p-8 border ${
                      plan.featured
                        ? "border-2 border-coral shadow-lg"
                        : "border-cream-dark"
                    }`}
                  >
                    {/* Featured badge */}
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-coral px-5 py-1.5 text-sm text-white">
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
                      {plan.period && (
                        <span className="text-gray-dark">{plan.period}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-3 leading-relaxed text-gray-dark">
                      {plan.description}
                    </p>

                    {/* Divider */}
                    <hr className="my-6 border-cream-dark" />

                    {/* Features */}
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-coral">&#10003;</span>
                          <span className="text-black">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href="/kontakt"
                        className={`block w-full rounded-full py-3 text-center font-medium transition ${
                          plan.featured
                            ? "bg-coral py-4 text-white hover:bg-coral-dark"
                            : "border-2 border-coral text-coral hover:bg-coral hover:text-cream"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <ScrollReveal>
              <h2 className="text-center font-serif text-4xl text-black">
                Tilk&oslash;b &amp; Ekstra Services
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {additionalServices.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 100}>
                  <div className="rounded-xl border border-cream-dark p-6">
                    <h3 className="font-serif text-xl text-black">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-coral">{service.price}</p>
                    <p className="mt-2 leading-relaxed text-gray-dark">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-4xl px-6">
            <ScrollReveal>
              <h2 className="mb-12 text-center font-serif text-4xl text-black">
                Ofte Stillede Sp&oslash;rgsm&aring;l
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <FaqAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal text-white py-24 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-4xl text-white">
              Start din rejse i dag
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
              Book din gratis pr&oslash;vetr&aelig;ning og oplev EMS
              tr&aelig;ning hos EMS Energi.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-medium text-white transition hover:bg-coral-dark"
            >
              Book Gratis Pr&oslash;vetr&aelig;ning
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
