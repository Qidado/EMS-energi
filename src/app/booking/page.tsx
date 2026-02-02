import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PlanwayEmbed from "./PlanwayEmbed";

export const metadata: Metadata = {
  title: "Book EMS Træning | EMS Energi København",
  description:
    "Book din EMS træning hos EMS Energi på Østerbro. Vælg tid online. Vi træner max 2 ad gangen for personlig vejledning.",
  alternates: { canonical: "/booking" },
  openGraph: {
    type: "website",
    url: "/booking",
    title: "Book EMS Træning | EMS Energi København",
    description:
      "Book din EMS træning hos EMS Energi på Østerbro. Vælg tid online. Vi træner max 2 ad gangen for personlig vejledning.",
    locale: "da_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book EMS Træning | EMS Energi København",
    description:
      "Book din EMS træning hos EMS Energi på Østerbro. Vælg tid online.",
  },
};

export default function BookingPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="pt-28 sm:pt-32 md:pt-40">
        {/* Intro */}
        <section className="bg-off-white py-10 md:py-14">
          <div className="text-center max-w-xl mx-auto px-6">
            <h1 className="font-serif text-3xl sm:text-4xl text-navy">
              Book din EMS tr&aelig;ning
            </h1>
            <p className="text-slate mt-3 leading-relaxed">
              V&aelig;lg en tid der passer dig. Vi tr&aelig;ner max 2 personer
              ad gangen, s&aring; du altid f&aring;r personlig vejledning.
            </p>
          </div>
        </section>

        {/* Planway Booking Embed */}
        <section className="bg-off-white pb-10">
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <PlanwayEmbed />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
