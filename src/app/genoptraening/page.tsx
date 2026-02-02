import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Genoptræning med EMS | EMS Energi",
  description:
    "Skånsom og effektiv genoptræning med EMS efter skader eller operationer. Ingen belastning på led — brugt af fysioterapeuter over hele verden.",
  openGraph: {
    url: "/genoptraening",
    title: "Genoptræning med EMS | EMS Energi",
    description:
      "Skånsom og effektiv genoptræning med EMS efter skader eller operationer. Ingen belastning på led.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genoptræning med EMS | EMS Energi",
    description:
      "Skånsom og effektiv genoptræning med EMS efter skader eller operationer. Ingen belastning på led.",
  },
  alternates: {
    canonical: "/genoptraening",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Smerter eller skader der begr\u00e6nser bev\u00e6gelse",
  "Frygt for at forv\u00e6rre skaden",
  "Langsom fremgang med traditionel genoptr\u00e6ning",
  "Tab af muskelmasse under inaktivitet",
];

const benefits = [
  "Ingen belastning p\u00e5 led og sener",
  "M\u00e5lrettet muskelaktivering uden tunge v\u00e6gte",
  "Godkendt og brugt af fysioterapeuter",
  "Kontrolleret progression tilpasset din situation",
  "Genopbyg muskelmasse sk\u00e5nsomt og sikkert",
];

const steps = [
  {
    label: "Uge 1\u20133",
    title: "Forsigtig opstart",
    body: "Vi starter med lav intensitet og fokuserer p\u00e5 de ber\u00f8rte muskelgrupper. 1 session om ugen.",
  },
  {
    label: "Uge 4\u20138",
    title: "Gradvis opbygning",
    body: "Intensiteten \u00f8ges langsomt. Vi udvider til flere muskelgrupper og \u00f8ger til 1-2 sessioner om ugen.",
  },
  {
    label: "Uge 9\u201312+",
    title: "Fuld genoptr\u00e6ning",
    body: "Helkropstr\u00e6ning med fokus p\u00e5 styrke og stabilitet. Programmet tilpasses l\u00f8bende til din fremgang.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function GenoptraeningPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* ──────────────────────────────────────────────
            1. Hero
        ────────────────────────────────────────────── */}
        <section className="bg-off-white pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <ScrollReveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy">
                Genoptr&aelig;ning
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                Sk&aring;nsom genoptr&aelig;ning
                <br />
                med EMS
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                EMS er en sk&aring;nsom og effektiv metode til genoptr&aelig;ning
                efter skader eller operationer. Ingen belastning p&aring; led
                &mdash; og brugt af fysioterapeuter over hele verden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-block rounded-lg bg-navy px-8 py-4 font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book din f&oslash;rste session
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. Challenges
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <ScrollReveal>
                  <span className="text-sm font-medium uppercase tracking-widest text-navy">
                    Udfordringer
                  </span>
                  <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                    Typiske udfordringer
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <ul className="mt-8 space-y-4">
                    {challenges.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-navy/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                {/* TODO: Replace with rehabilitation / gentle exercise image */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Genoptr&aelig;ning billede
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
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-navy">
                Fordele
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                Hvad EMS kan g&oslash;re for dig
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ul className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate">
                    <span className="mt-0.5 text-navy">&check;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 rounded-lg bg-white/60 p-5">
                <p className="text-sm font-medium text-navy">Vigtigt</p>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Konsult&eacute;r din l&aelig;ge eller fysioterapeut f&oslash;r du
                  starter EMS tr&aelig;ning som del af din genoptr&aelig;ning.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Program / Timeline
        ────────────────────────────────────────────── */}
        <section className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-navy">
                Dit forl&oslash;b
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                S&aring;dan kan et forl&oslash;b se ud
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <ScrollReveal key={step.label} delay={index * 150}>
                  <div className="rounded-xl border border-navy/[0.06] bg-white p-6 sm:p-8">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy/60">
                      {step.label}
                    </span>
                    <h3 className="mt-3 font-serif text-xl text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
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
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Klar til at komme videre?
            </h2>
            <p className="mt-4 text-lg text-slate">
              Start din genoptr&aelig;ning med EMS &mdash; sk&aring;nsomt og
              effektivt.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-block rounded-lg bg-navy px-10 py-4 text-lg font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
            >
              Book nu
            </Link>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
