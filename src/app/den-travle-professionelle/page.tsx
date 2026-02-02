import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Clock, Briefcase, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Den Travle Professionelle | EMS Energi",
  description:
    "EMS tr\u00e6ning for travle professionelle. F\u00e5 en komplet helkropstr\u00e6ning p\u00e5 kun 20 minutter \u2014 perfekt til dig med en travl hverdag. Ingen omkl\u00e6dning, ingen ventetid.",
  openGraph: {
    url: "/den-travle-professionelle",
    title: "Den Travle Professionelle | EMS Energi",
    description:
      "EMS tr\u00e6ning for travle professionelle. 20 minutters effektiv helkropstr\u00e6ning der passer ind i din kalender.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Den Travle Professionelle | EMS Energi",
    description:
      "EMS tr\u00e6ning for travle professionelle. 20 minutters effektiv helkropstr\u00e6ning der passer ind i din kalender.",
  },
  alternates: {
    canonical: "/den-travle-professionelle",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Ingen tid til lange tr\u00e6ningspas",
  "Stillesiddende arbejde dag efter dag",
  "Ryg- og nakkesmerter fra skrivebordet",
  "Stress og manglende energi",
];

const benefits = [
  "Komplet tr\u00e6ning p\u00e5 kun 20 minutter",
  "Passer i din frokostpause",
  "Modvirker effekten af stillesiddende arbejde",
  "Reducerer stress og \u00f8ger energiniveauet",
  "Styrker ryg og core mod skrivebordssmerter",
];

const timeline = [
  {
    number: "01",
    title: "Uge 1\u20132: Introduktion",
    body: "Vi l\u00e6rer din krop at kende og finder det rette niveau. Fokus p\u00e5 korrekt teknik og grundl\u00e6ggende \u00f8velser.",
  },
  {
    number: "02",
    title: "Uge 3\u20136: Opbygning",
    body: "Intensiteten \u00f8ges gradvist. Fokus p\u00e5 holdning, core-stabilitet og styrke. 1-2 sessioner om ugen.",
  },
  {
    number: "03",
    title: "Uge 7+: Vedligeholdelse",
    body: "Du er i rutinen. Tr\u00e6ningen tilpasses l\u00f8bende til dine m\u00e5l og din hverdag.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function DenTravleProfessionellePage() {
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
                  Den travle professionelle
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                  Effektiv tr&aelig;ning der passer ind i din kalender
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                  EMS giver dig en komplet helkropstr&aelig;ning p&aring; kun 20
                  minutter &mdash; perfekt til dig med en travl hverdag. Ingen
                  omkl&aelig;dning, ingen ventetid. Bare effektiv tr&aelig;ning
                  der passer mellem dine m&oslash;der.
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
                {/* TODO: Replace with image of busy professional */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Billede
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
                Klar til at f&aring; mere ud af din tid?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
                Book din f&oslash;rste EMS session &mdash; det tager kun 20
                minutter.
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
