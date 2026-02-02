import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Om Os | EMS Energi",
  description:
    "Lær mere om EMS Energi — dit EMS fitnessstudie i København. Mød vores team, forstå EMS teknologien, og opdag vores værdier.",
  openGraph: {
    url: "/om-os",
    title: "Om Os | EMS Energi",
    description:
      "Lær mere om EMS Energi — dit EMS fitnessstudie i København. Mød vores team og forstå EMS teknologien.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Os | EMS Energi",
    description:
      "Lær mere om EMS Energi — dit EMS fitnessstudie i København. Mød vores team og forstå EMS teknologien.",
  },
  alternates: {
    canonical: "/om-os",
  },
};

const values = [
  {
    title: "Effektivitet",
    description:
      "Vi respekterer din tid. Vores traening er designet til at give maksimale resultater paa minimal tid.",
  },
  {
    title: "Faglighed",
    description:
      "Alle vores traenere er certificerede EMS-specialister med baggrund i idraetsfysiologi og fysioterapi.",
  },
  {
    title: "Faellesskab",
    description:
      "Vi skaber et inkluderende miljoe hvor alle — uanset niveau — foeler sig velkomne og motiverede.",
  },
];

const trainers = [
  {
    name: "Anders Nielsen",
    role: "Cheftraener & Grundlaegger",
    bio: "Certificeret EMS-specialist med over 8 aars erfaring. Baggrund i idraetsfysiologi fra Koebenhavns Universitet.",
  },
  {
    name: "Sara Lindberg",
    role: "EMS Traener & Fysioterapeut",
    bio: "Kombinerer sin viden inden for fysioterapi med EMS teknologi for at skabe skraeddersyede traeningsprogrammer.",
  },
  {
    name: "Kasper Moeller",
    role: "EMS Traener & Kostvejleder",
    bio: "Specialiseret i helhedstraening med fokus paa baade traening og ernaering for optimale resultater.",
  },
];

export default function OmOsPage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-off-white pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy">
              Om EMS Energi
            </h1>
            <p className="mt-4 text-lg text-slate">
              Vi tror p&aring;, at fitness skal v&aelig;re smart, effektivt og
              tilg&aelig;ngeligt for alle.
            </p>
          </ScrollReveal>
        </section>

        {/* What is EMS */}
        <section className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-8 md:gap-16 md:grid-cols-2">
              <ScrollReveal>
                {/* TODO: Image of person in EMS suit mid-exercise, focused expression, professional studio setting. Show either man or mixed gender for unisex appeal. */}
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-baby-blue">
                  <span className="font-serif text-xl text-slate">
                    Person i EMS-dragt under tr&aelig;ning
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <span className="text-sm uppercase tracking-widest text-cobalt">
                  Hvad er EMS
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                  Elektrisk Muskelstimulation
                </h2>
                <p className="mt-6 leading-relaxed text-slate">
                  EMS sender elektriske impulser direkte til dine muskler
                  gennem en specialdesignet dragt. Mens du udfører simple
                  øvelser, aktiveres over 300 muskler samtidig — inklusive
                  de dybe stabiliserende muskler, som konventionel træning
                  sjældent rammer.
                </p>
                <p className="mt-4 leading-relaxed text-slate">
                  Resultatet? En 20-minutters session der matcher 3-4 timers
                  traditionel styrketræning. Skånsomt for led. Dokumenterede
                  resultater. Og du er færdig før din frokostpause slutter.
                </p>
                <Link
                  href="/#hvad-er-ems"
                  className="mt-6 inline-flex items-center text-cobalt font-medium hover:text-royal transition-colors"
                >
                  L&aelig;s mere om EMS &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-baby-blue py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-cobalt">
                Vores V&aelig;rdier
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                Hvad vi st&aring;r for
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-10 md:grid-cols-3">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 150}>
                  <div className="border-l-2 border-cobalt pl-6">
                    <h3 className="font-serif text-xl text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-cobalt">
                Teamet
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-navy">
                M&oslash;d vores tr&aelig;nere
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-10 md:grid-cols-3">
              {trainers.map((trainer, index) => (
                <ScrollReveal key={trainer.name} delay={index * 150}>
                  <div>
                    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-baby-blue">
                      <span className="font-serif text-4xl text-slate">
                        {trainer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-navy">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-cobalt">{trainer.role}</p>
                    <p className="mt-2 leading-relaxed text-slate">
                      {trainer.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-12 sm:py-16 md:py-24 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">
              Bliv en del af EMS Energi
            </h2>
            <p className="mt-4 text-lg text-slate">
              Tag det f&oslash;rste skridt mod en st&aelig;rkere og sundere dig.
              Book din gratis pr&oslash;vetr&aelig;ning i dag.
            </p>
            <Link
              href="/#find-os"
              className="mt-8 inline-block rounded-lg bg-cobalt px-8 py-4 text-lg text-white transition-all hover:bg-royal hover:shadow-lg hover:-translate-y-0.5"
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
