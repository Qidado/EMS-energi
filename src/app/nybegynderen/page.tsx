import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Sprout, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Nybegynderen | EMS Energi",
  description:
    "EMS tr\u00e6ning for nybegyndere. Ingen erfaring n\u00f8dvendig \u2014 din instrukt\u00f8r guider dig igennem hele sessionen, og intensiteten tilpasses pr\u00e6cis til dit niveau.",
  openGraph: {
    url: "/nybegynderen",
    title: "Nybegynderen | EMS Energi",
    description:
      "EMS tr\u00e6ning for nybegyndere. Ingen erfaring n\u00f8dvendig. Start din tr\u00e6ningsrejse med personlig vejledning.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nybegynderen | EMS Energi",
    description:
      "EMS tr\u00e6ning for nybegyndere. Ingen erfaring n\u00f8dvendig. Start din tr\u00e6ningsrejse med personlig vejledning.",
  },
  alternates: {
    canonical: "/nybegynderen",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Usikkerhed og intimidering i fitnessmilj\u00f8er",
  "Ved ikke hvor du skal starte",
  "Bekymring for at g\u00f8re \u00f8velser forkert",
  "Lavt udgangspunkt i kondition og styrke",
];

const benefits = [
  "Personlig instrukt\u00f8r ved din side hele vejen",
  "Intensiteten justeres pr\u00e6cis til dit niveau",
  "Simple \u00f8velser \u2014 ingen forkundskaber n\u00f8dvendige",
  "Ingen fitnesserfaring kr\u00e6vet",
  "Du m\u00e6rker fremgang allerede efter f\u00e5 sessioner",
];

const timeline = [
  {
    number: "01",
    title: "Session 1\u20132: Introduktion",
    body: "Vi viser dig alt fra start. Du l\u00e6rer dragten at kende, og vi finder det helt rette intensitetsniveau for dig.",
  },
  {
    number: "02",
    title: "Uge 2\u20134: Fundament",
    body: "1 session om ugen med fokus p\u00e5 grundl\u00e6ggende bev\u00e6gelser. Du bygger styrke og selvtillid i dit eget tempo.",
  },
  {
    number: "03",
    title: "Uge 5+: Progression",
    body: "Nu er du i gang. Intensiteten \u00f8ges gradvist, og vi udvider \u00f8velsesrepertoiret. Du s\u00e6tter m\u00e5lene.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function NybegyderenPage() {
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
                  Nybegynderen
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                  Start din tr&aelig;ningsrejse her
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                  Ingen erfaring n&oslash;dvendig. Din instrukt&oslash;r guider
                  dig igennem hele sessionen, og intensiteten tilpasses
                  pr&aelig;cis til dit niveau. EMS er det perfekte sted at
                  starte.
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
                {/* TODO: Replace with image of beginner */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Nybegynder billede
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
                Klar til at tage det f&oslash;rste skridt?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
                Ingen erfaring n&oslash;dvendig. Vi tager os af resten.
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
