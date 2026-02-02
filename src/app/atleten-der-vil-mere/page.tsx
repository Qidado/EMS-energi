import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Activity, Target, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Atleten der vil mere | EMS Energi",
  description:
    "EMS aktiverer dybe stabiliserende muskler, som konventionel tr\u00e6ning sj\u00e6ldent rammer. Supplement til din eksisterende tr\u00e6ning \u2014 bryd igennem plateauer med EMS.",
  openGraph: {
    url: "/atleten-der-vil-mere",
    title: "Atleten der vil mere | EMS Energi",
    description:
      "EMS aktiverer dybe stabiliserende muskler, som konventionel tr\u00e6ning sj\u00e6ldent rammer. Supplement til din eksisterende tr\u00e6ning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atleten der vil mere | EMS Energi",
    description:
      "EMS aktiverer dybe stabiliserende muskler, som konventionel tr\u00e6ning sj\u00e6ldent rammer. Supplement til din eksisterende tr\u00e6ning.",
  },
  alternates: {
    canonical: "/atleten-der-vil-mere",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Tr\u00e6ningsplateauer du ikke kan bryde igennem",
  "Muskul\u00e6re ubalancer og svage led",
  "Begr\u00e6nsninger i restitution",
  "Dybe stabiliserende muskler der ikke aktiveres",
];

const benefits = [
  "Aktiverer muskelgrupper din normale rutine ikke rammer",
  "Forbedrer muskelaktivering og neural rekruttering",
  "Komplementerer l\u00f8b, cykling, sv\u00f8mning og styrketr\u00e6ning",
  "Forebygger skader gennem bedre stabilitet",
  "Effektiv tr\u00e6ning uden ekstra belastning p\u00e5 led",
];

const timeline = [
  {
    number: "01",
    title: "Uge 1\u20132: Baseline",
    body: "Vi tester din muskelbalance og finder de omr\u00e5der der har brug for ekstra fokus. Tilpasses din eksisterende tr\u00e6ningsplan.",
  },
  {
    number: "02",
    title: "Uge 3\u20138: Periodisering",
    body: "EMS integreres 1-2 gange om ugen ved siden af din normale tr\u00e6ning. Intensiteten periodiseres efter din konkurrencekalender.",
  },
  {
    number: "03",
    title: "Uge 9+: Optimering",
    body: "L\u00f8bende tilpasning baseret p\u00e5 dine resultater. Fokusomr\u00e5der justeres efter s\u00e6son og m\u00e5l.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function AtletenDerVilMere() {
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
                  Atleten der vil mere
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                  Tag din tr&aelig;ning
                  <br />
                  til n&aelig;ste niveau
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                  EMS aktiverer dybe stabiliserende muskler, som konventionel
                  tr&aelig;ning sj&aelig;ldent rammer. Brug det som supplement
                  til din eksisterende tr&aelig;ning &mdash; og bryd igennem
                  plateauer.
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
            <div className="grid items-center gap-8 md:gap-16 md:grid-cols-2">
              <ScrollReveal>
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
              </ScrollReveal>

              <ScrollReveal delay={100}>
                {/* TODO: Replace with athlete/sports training image */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <Activity
                    className="h-12 w-12 text-slate/40"
                    strokeWidth={1.5}
                  />
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
              <ul className="mx-auto mt-10 max-w-2xl space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
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
                Forl&oslash;b
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                S&aring;dan kan et forl&oslash;b se ud
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
              {timeline.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 150}>
                  <div className="relative pt-10 md:pt-12">
                    <span className="absolute top-0 left-0 font-serif text-5xl md:text-7xl font-bold leading-none text-navy/[0.06] select-none">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate">
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
                Klar til at bryde igennem?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate">
                Supplement din tr&aelig;ning med EMS &mdash; og m&aelig;rk
                forskellen.
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
