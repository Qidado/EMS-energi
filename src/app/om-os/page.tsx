import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Om Os | EMS Energi",
  description:
    "Laer mere om EMS Energi — dit EMS fitnessstudie i Danmark. Moed vores team, forstaa EMS teknologien, og opdag vores vaerdier.",
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

      <main>
        {/* Hero */}
        <section className="bg-cream pt-40 pb-20 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-5xl md:text-6xl text-black">
              Om EMS Energi
            </h1>
            <p className="mt-4 text-lg text-gray-dark">
              Vi tror p&aring;, at fitness skal v&aelig;re smart, effektivt og
              tilg&aelig;ngeligt for alle.
            </p>
          </ScrollReveal>
        </section>

        {/* What is EMS */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <ScrollReveal>
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-peach">
                  <span className="font-serif text-xl text-gray-dark">
                    EMS Tr&aelig;ningsbillede
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <span className="text-sm uppercase tracking-widest text-coral">
                  Teknologien
                </span>
                <h2 className="mt-3 font-serif text-4xl text-black">
                  Hvad er EMS Tr&aelig;ning?
                </h2>
                <p className="mt-6 leading-relaxed text-gray-dark">
                  Elektrisk Muskelstimulation (EMS) er en banebrydende
                  tr&aelig;ningsmetode der bruger milde elektriske impulser til
                  at aktivere dine muskler langt dybere end traditionel
                  tr&aelig;ning. Teknologien stammer fra fysioterapi og
                  genoptr&aelig;ning, og er nu tilg&aelig;ngelig som en af de
                  mest effektive tr&aelig;ningsformer i verden.
                </p>
                <p className="mt-4 leading-relaxed text-gray-dark">
                  Under en EMS session b&aelig;rer du en specialdesignet dragt
                  med elektroder, der sender impulser til over 300 muskelgrupper
                  simultant. Det betyder, at 20 minutters EMS tr&aelig;ning
                  giver dig resultater svarende til 3-4 timers konventionel
                  styrketr&aelig;ning.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-peach py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-coral">
                Vores V&aelig;rdier
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                Hvad vi st&aring;r for
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 150}>
                  <div className="border-l-2 border-coral pl-6">
                    <h3 className="font-serif text-xl text-black">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-gray-dark">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-coral">
                Teamet
              </span>
              <h2 className="mt-3 font-serif text-4xl text-black">
                M&oslash;d vores tr&aelig;nere
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {trainers.map((trainer, index) => (
                <ScrollReveal key={trainer.name} delay={index * 150}>
                  <div>
                    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-peach">
                      <span className="font-serif text-4xl text-gray-dark">
                        {trainer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-sm text-coral">{trainer.role}</p>
                    <p className="mt-2 leading-relaxed text-gray-dark">
                      {trainer.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal text-white py-24 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-4xl">
              Bliv en del af EMS Energi
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Tag det f&oslash;rste skridt mod en st&aelig;rkere og sundere dig.
              Book din gratis pr&oslash;vetr&aelig;ning i dag.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-coral px-8 py-4 text-lg text-white transition-colors hover:bg-coral-dark"
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
