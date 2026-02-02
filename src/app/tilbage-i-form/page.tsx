import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { RefreshCw, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tilbage i Form | EMS Energi",
  description:
    "Har du holdt en lang pause fra tr\u00e6ning? EMS giver dig en sk\u00e5nsom og effektiv vej tilbage i form. 20 minutters tr\u00e6ning der genaktiverer hele kroppen.",
  openGraph: {
    url: "/tilbage-i-form",
    title: "Tilbage i Form | EMS Energi",
    description:
      "EMS giver dig en sk\u00e5nsom og effektiv vej tilbage i form. 20 minutters tr\u00e6ning der genaktiverer hele kroppen.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilbage i Form | EMS Energi",
    description:
      "EMS giver dig en sk\u00e5nsom og effektiv vej tilbage i form. 20 minutters tr\u00e6ning der genaktiverer hele kroppen.",
  },
  alternates: {
    canonical: "/tilbage-i-form",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Tab af kondition og styrke over tid",
  "Frygt for at overdrive det fra start",
  "Manglende motivation til at komme i gang",
  "Usikkerhed om hvor du skal starte",
];

const benefits = [
  "Kontrolleret intensitet \u2014 din krop bestemmer tempoet",
  "Fuld helkropstr\u00e6ning p\u00e5 kun 20 minutter",
  "Genopbyg dit fundament hurtigt og sikkert",
  "Personlig vejledning fra din instrukt\u00f8r",
  "M\u00e6rkbare resultater allerede efter f\u00e5 sessioner",
];

const timeline = [
  {
    number: "01",
    title: "Uge 1\u20133: Genstart",
    body: "Vi starter roligt med lav intensitet. 1 session om ugen med fokus p\u00e5 at genaktivere musklerne og bygge en solid base.",
  },
  {
    number: "02",
    title: "Uge 4\u20136: Opbygning",
    body: "Intensiteten \u00f8ges gradvist. Vi bygger videre til 2 sessioner om ugen og fokuserer p\u00e5 styrke og udholdenhed.",
  },
  {
    number: "03",
    title: "Uge 7+: Rutine",
    body: "Du er tilbage i rytmen. Tr\u00e6ningen tilpasses dine m\u00e5l \u2014 om det er styrke, kondition eller generelt velv\u00e6re.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function TilbageIFormPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* ──────────────────────────────────────────────
            1. Hero
        ────────────────────────────────────────────── */}
        <section className="bg-off-white pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                  Tilbage i form
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                  Kickstart din krop igen
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                  Lang pause fra tr&aelig;ning? EMS giver dig en sk&aring;nsom
                  og effektiv vej tilbage. 20 minutters tr&aelig;ning der
                  genaktiverer hele kroppen &mdash; uden at overbelaste den.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-8">
                  <Link
                    href="/booking"
                    className="inline-block w-full sm:w-auto text-center rounded-lg bg-navy px-8 py-4 font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Book din f&oslash;rste session
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. Challenges
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <ScrollReveal>
                <div>
                  <span className="text-sm uppercase tracking-widest text-navy">
                    Udfordringer
                  </span>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                    Typiske udfordringer
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {challenges.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Tilbage i form billede
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            3. Benefits
        ────────────────────────────────────────────── */}
        <section className="bg-baby-blue py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-navy">
                Fordele
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                Hvad EMS kan g&oslash;re for dig
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ul className="mx-auto mt-10 max-w-xl space-y-3">
                {benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate"
                  >
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Program / Timeline
        ────────────────────────────────────────────── */}
        <section className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-navy">
                Dit forl&oslash;b
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                S&aring;dan kan et forl&oslash;b se ud
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
              {timeline.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 150}>
                  <div className="relative rounded-xl border border-navy/[0.06] bg-white p-6 pt-10">
                    <span className="absolute top-0 left-6 -translate-y-1/2 rounded-full bg-navy px-4 py-1 text-sm font-medium text-white">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {step.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            5. CTA
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight md:text-5xl text-navy">
                Klar til at komme tilbage?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
                20 minutter er alt det tager. Vi hj&aelig;lper dig resten af
                vejen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="/booking"
                  className="inline-block w-full sm:w-auto text-center rounded-lg bg-navy px-10 py-4 text-lg font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book nu
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
