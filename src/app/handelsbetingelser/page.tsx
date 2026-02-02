import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Handelsbetingelser | EMS Energi",
  description:
    "Handelsbetingelser for EMS Energi. Læs om medlemskab, betaling, opsigelse og vilkår for EMS træning.",
  alternates: {
    canonical: "/handelsbetingelser",
  },
};

export default function HandelsbetingelserPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="bg-cream pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black">
            Handelsbetingelser
          </h1>
          <p className="mt-4 text-sm text-secondary">
            Sidst opdateret: 1. januar 2026
          </p>

          <div className="mt-10 space-y-8 text-gray-dark leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-black mb-3">1. Generelt</h2>
              <p>
                Disse handelsbetingelser g&aelig;lder for alle medlemskaber og
                ydelser hos EMS energi ApS, Nordre Frihavnsgade 65, kl. tv, 2100
                &Oslash;sterbro. Ved tilmelding accepterer du disse vilk&aring;r.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                2. Medlemskab og tilmelding
              </h2>
              <p>
                Medlemskab oprettes ved personlig henvendelse eller via vores
                hjemmeside. Du skal v&aelig;re fyldt 18 &aring;r for at
                oprette et medlemskab. Personer under 18 kr&aelig;ver skriftligt
                samtykke fra en for&aelig;lder eller v&aelig;rge.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                3. Priser og betaling
              </h2>
              <p>
                Alle priser er angivet i danske kroner (DKK) inklusive moms.
                Medlemskaber l&oslash;ber automatisk fra m&aring;ned til
                m&aring;ned og betales forud via betalingskort.
              </p>
              <p className="mt-2">
                EMS Energi forbeholder sig retten til at justere priser med
                mindst 30 dages varsel. Pris&aelig;ndringer meddeles via e-mail.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                4. Opsigelse
              </h2>
              <p>
                Du kan opsige n&aring;r som helst. Opsigelsesfristen er
                indev&aelig;rende m&aring;ned + &eacute;n m&aring;ned.
                Opsigelse kan ske skriftligt via e-mail til info@emsenergi.dk
                eller personligt i studiet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                5. Booking og udeblivelser
              </h2>
              <p>
                Tr&aelig;ninger bookes via vores bookingsystem.
                Bliver du v&aelig;k fra en booket tr&aelig;ning, opkr&aelig;ves
                et gebyr p&aring; 75 kr. Gebyret g&aelig;lder kun bookede
                pladser &mdash; ikke venteliste.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                6. Helbredserkl&aelig;ring
              </h2>
              <p>
                Inden din f&oslash;rste EMS-session skal du udfylde en
                helbredserkl&aelig;ring. Du er forpligtet til at oplyse om
                eventuelle helbredstilstande, der kan p&aring;virke din
                tr&aelig;ning. EMS-tr&aelig;ning fr&aring;r&aring;des ved
                graviditet, pacemaker, epilepsi og aktive infektioner.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                7. Ansvar og forsikring
              </h2>
              <p>
                Tr&aelig;ning hos EMS Energi sker p&aring; eget ansvar. EMS
                Energi er ikke ansvarlig for skader for&aring;rsaget af
                mangelfulde helbredsoplysninger. Vi anbefaler, at du har en
                g&aelig;ldende ulykkesforsikring.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                8. Fortrydelsesret
              </h2>
              <p>
                Ved k&oslash;b online har du 14 dages fortrydelsesret jf.
                forbrugeraftaleloven, medmindre ydelsen er p&aring;begyndt med
                dit samtykke inden fristens udl&oslash;b.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                9. Klageadgang
              </h2>
              <p>
                Klager kan rettes til EMS Energi p&aring; info@emsenergi.dk.
                Kan vi ikke finde en l&oslash;sning, kan du klage til
                N&aelig;vn enes Hus eller EU-Kommissionens onlineklageportal.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
