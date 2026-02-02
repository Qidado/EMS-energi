import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookiepolitik | EMS Energi",
  description:
    "Cookiepolitik for EMS Energi. Læs om hvordan vi bruger cookies på vores hjemmeside.",
  alternates: {
    canonical: "/cookiepolitik",
  },
};

export default function CookiepolitikPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="bg-cream pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black">
            Cookiepolitik
          </h1>
          <p className="mt-4 text-sm text-secondary">
            Sidst opdateret: 1. januar 2026
          </p>

          <div className="mt-10 space-y-8 text-gray-dark leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                1. Hvad er cookies?
              </h2>
              <p>
                Cookies er sm&aring; tekstfiler, der gemmes p&aring; din enhed,
                n&aring;r du bes&oslash;ger vores hjemmeside. De bruges til at
                f&aring; hjemmesiden til at fungere, huske dine
                pr&aelig;ferencer og indsamle statistik.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                2. Cookies vi bruger
              </h2>

              <h3 className="font-medium text-black mt-4 mb-2">
                N&oslash;dvendige cookies
              </h3>
              <p>
                Disse cookies er n&oslash;dvendige for at hjemmesiden kan
                fungere korrekt. De kan ikke sl&aring;s fra.
              </p>

              <h3 className="font-medium text-black mt-4 mb-2">
                Statistik-cookies
              </h3>
              <p>
                Vi bruger statistik-cookies til at forst&aring;, hvordan
                bes&oslash;gende bruger vores hjemmeside. Disse data er
                anonymiserede og hj&aelig;lper os med at forbedre
                brugeroplevelsen.
              </p>

              <h3 className="font-medium text-black mt-4 mb-2">
                Marketing-cookies
              </h3>
              <p>
                Marketing-cookies bruges til at vise dig relevante annoncer.
                Disse cookies indsamles kun med dit samtykke.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                3. Samtykke
              </h2>
              <p>
                N&aring;r du bes&oslash;ger vores hjemmeside f&oslash;rste gang,
                bliver du bedt om at give samtykke til brug af cookies.
                Du kan til enhver tid &aelig;ndre eller tilbagetr&aelig;kke dit
                samtykke.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                4. Sletning af cookies
              </h2>
              <p>
                Du kan slette cookies via din browsers indstillinger. Bem&aelig;rk
                at sletning af n&oslash;dvendige cookies kan p&aring;virke
                hjemmesidens funktionalitet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                5. Tredjepartscookies
              </h2>
              <p>
                Vores hjemmeside kan indeholde indhold fra tredjeparter (f.eks.
                Google Maps, sociale medier), som kan s&aelig;tte deres egne
                cookies. Vi har ingen kontrol over disse cookies og henviser til
                de respektive tredjeparters cookiepolitikker.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-black mb-3">
                6. Kontakt
              </h2>
              <p>
                Har du sp&oslash;rgsm&aring;l til vores brug af cookies, er du
                velkommen til at kontakte os p&aring; info@emsenergi.dk.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
