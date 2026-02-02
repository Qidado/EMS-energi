import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privatlivspolitik | EMS Energi",
  description:
    "Privatlivspolitik for EMS Energi. Læs hvordan vi indsamler, behandler og beskytter dine personoplysninger.",
  alternates: {
    canonical: "/privatlivspolitik",
  },
};

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="bg-cream pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black">
            Privatlivspolitik
          </h1>
          <p className="mt-4 text-sm text-secondary">
            Sidst opdateret: 1. januar 2026
          </p>

          <div className="mt-10 space-y-8 text-gray-dark leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-black mb-3">1. Dataansvarlig</h2>
              <p>
                EMS Energi ApS er dataansvarlig for behandlingen af de
                personoplysninger, vi modtager om dig. Du kan kontakte os
                p&aring;:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>EMS Energi ApS, Vesterbrogade 42, 1620 K&oslash;benhavn V</li>
                <li>E-mail: info@emsenergi.dk</li>
                <li>Telefon: +45 31 42 53 64</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                2. Hvilke oplysninger indsamler vi?
              </h2>
              <p>Vi indsamler og behandler f&oslash;lgende personoplysninger:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Navn, e-mail, telefonnummer og adresse</li>
                <li>Oplysninger om dit medlemskab og tr&aelig;ningshistorik</li>
                <li>Helbredsoplysninger du selv oplyser i forbindelse med tr&aelig;ning</li>
                <li>Betalingsoplysninger</li>
                <li>Kommunikation med os via e-mail eller kontaktformularer</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                3. Form&aring;l med behandlingen
              </h2>
              <p>Vi behandler dine personoplysninger til f&oslash;lgende form&aring;l:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Administration af dit medlemskab og booking af tr&aelig;ninger</li>
                <li>Tilpasning af din EMS-tr&aelig;ning til din helbredstilstand</li>
                <li>Kommunikation vedr&oslash;rende dit medlemskab</li>
                <li>Behandling af betalinger</li>
                <li>Overholdelse af lovgivning, herunder bogf&oslash;ringsloven</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                4. Retsgrundlag
              </h2>
              <p>
                Vi behandler dine oplysninger p&aring; baggrund af: opfyldelse af
                aftale (GDPR art. 6, stk. 1, litra b), retlig forpligtelse
                (litra c), og samtykke for helbredsoplysninger (GDPR art. 9,
                stk. 2, litra a).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                5. Opbevaringsperiode
              </h2>
              <p>
                Vi opbevarer dine personoplysninger s&aring; l&aelig;nge det er
                n&oslash;dvendigt for de form&aring;l, de er indsamlet til.
                Medlemsoplysninger slettes senest 2 &aring;r efter oph&oslash;r af
                medlemskab. Bogf&oslash;ringsoplysninger opbevares i 5 &aring;r
                jf. bogf&oslash;ringsloven.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                6. Dine rettigheder
              </h2>
              <p>Du har ret til:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Indsigt i de personoplysninger vi behandler om dig</li>
                <li>Berigtigelse af urigtige oplysninger</li>
                <li>Sletning af dine oplysninger</li>
                <li>Begr&aelig;nsning af behandlingen</li>
                <li>Dataportabilitet</li>
                <li>Indsigelse mod behandlingen</li>
              </ul>
              <p className="mt-2">
                Kontakt os p&aring; info@emsenergi.dk for at ud&oslash;ve dine
                rettigheder. Du kan ogs&aring; klage til Datatilsynet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                7. Sikkerhed
              </h2>
              <p>
                Vi har truffet passende tekniske og organisatoriske
                sikkerhedsforanstaltninger for at beskytte dine personoplysninger
                mod uautoriseret adgang, &aelig;ndring, offentligg&oslash;relse
                eller sletning.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
