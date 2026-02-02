import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Baby, Heart, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Efterf\u00f8dselstr\u00e6ning med EMS | EMS Energi",
  description:
    "Sk\u00e5nsom og effektiv efterf\u00f8dselstr\u00e6ning med EMS. Genopbyg core og b\u00e6kkenbund uden belastning \u2014 perfekt til travle m\u00f8dre med kun 20 minutters sessioner.",
  openGraph: {
    url: "/efterfoedselstraening",
    title: "Efterf\u00f8dselstr\u00e6ning med EMS | EMS Energi",
    description:
      "Sk\u00e5nsom og effektiv efterf\u00f8dselstr\u00e6ning med EMS. Genopbyg core og b\u00e6kkenbund uden belastning.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efterf\u00f8dselstr\u00e6ning med EMS | EMS Energi",
    description:
      "Sk\u00e5nsom og effektiv efterf\u00f8dselstr\u00e6ning med EMS. Genopbyg core og b\u00e6kkenbund uden belastning.",
  },
  alternates: {
    canonical: "/efterfoedselstraening",
  },
};

/* ────────────────────────────────────────────── data ── */

const challenges = [
  "Sv\u00e6kket core og b\u00e6kkenbund",
  "Ryg- og nakkesmerter fra amning",
  "Manglende tid til traditionel tr\u00e6ning",
  "Usikkerhed om hvorn\u00e5r kroppen er klar",
];

const benefits = [
  "Genaktiv\u00e9r dybe core-muskler sk\u00e5nsomt",
  "Styrk b\u00e6kkenbunden uden h\u00e5rd belastning",
  "Fuld tr\u00e6ning p\u00e5 kun 20 minutter",
  "Personlig tilpasning til dit niveau og din situation",
  "Passer ind i en travl hverdag som nybagt mor",
];

const steps = [
  {
    label: "Uge 1\u20134",
    title: "Core & b\u00e6kkenbund",
    body: "Efter din l\u00e6ges godkendelse starter vi med lav intensitet. Fokus p\u00e5 at genaktivere core og b\u00e6kkenbund. 1 session om ugen.",
  },
  {
    label: "Uge 5\u20138",
    title: "Opbygning",
    body: "Intensiteten \u00f8ges gradvist. Vi udvider til helkropstr\u00e6ning og kan \u00f8ge til 2 sessioner om ugen.",
  },
  {
    label: "Uge 9+",
    title: "Fuld tr\u00e6ning",
    body: "Du tr\u00e6ner med fuld intensitet tilpasset dine m\u00e5l. Programmet kan kombineres med anden aktivitet.",
  },
];

/* ────────────────────────────────────────────── page ── */

export default function EfterfoedselstraeningPage() {
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
                Efterf&oslash;dselstr&aelig;ning
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-navy">
                Tilbage i form
                <br />
                efter f&oslash;dslen
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
                Din krop har gennemg&aring;et en enorm forandring. EMS
                tr&aelig;ning er en sk&aring;nsom og effektiv m&aring;de at
                genopbygge styrke p&aring; &mdash; uden at belaste led, ryg
                eller b&aelig;kkenbund. Perfekt til travle m&oslash;dre med kun
                20 minutters sessioner.
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
                {/* TODO: Replace with postpartum training image */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Efterf&oslash;dselstr&aelig;ning billede
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
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 rounded-lg bg-white/60 p-5">
                <p className="text-sm font-medium text-navy">Vigtigt</p>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  Vi anbefaler at vente til 6&ndash;8 uger efter f&oslash;dslen
                  f&oslash;r du starter EMS tr&aelig;ning. Ved kejsersnit
                  b&oslash;r du have din l&aelig;ges godkendelse f&oslash;rst.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. M&oslash;dregruppe Card
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <ScrollReveal>
              <div className="rounded-xl border border-navy/[0.06] bg-off-white p-6 sm:p-8">
                <h3 className="font-serif text-xl text-navy">
                  M&oslash;dregruppe
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Vi tilbyder ogs&aring; m&oslash;dregruppe forl&oslash;b
                  &mdash; tr&aelig;n sammen med andre nybagte m&oslash;dre i et
                  fast 8-ugers program. F&aelig;lles tr&aelig;ning,
                  f&aelig;lles oplevelser og gensidig motivation. Kontakt os for
                  mere information og kommende datoer.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-4 inline-flex items-center text-navy font-medium hover:text-navy-light transition-colors"
                >
                  Kontakt os for mere info &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            5. Program / Timeline
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

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
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
            6. CTA
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Klar til at komme i gang?
            </h2>
            <p className="mt-4 text-lg text-slate">
              Book din f&oslash;rste session &mdash; vi tilpasser alt til dig og
              din krop.
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
