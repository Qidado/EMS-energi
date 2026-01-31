import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | EMS Energi",
};

const openingHours = [
  { day: "Mandag - Fredag", time: "06:30 - 21:00" },
  { day: "L\u00f8rdag", time: "08:00 - 16:00" },
  { day: "S\u00f8ndag", time: "09:00 - 15:00" },
];

export default function KontaktPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-cream pt-40 pb-20 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-5xl md:text-6xl text-black">
              Kontakt Os
            </h1>
            <p className="mt-4 text-lg text-gray-dark">
              Vi vil gerne h&oslash;re fra dig. Skriv til os eller kig forbi
              studiet.
            </p>
          </ScrollReveal>
        </section>

        {/* Contact Content */}
        <section className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              {/* Left — Contact Form */}
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>

              {/* Right — Info Cards */}
              <ScrollReveal delay={150}>
                <div className="space-y-6">
                  {/* Card 1 — Besog Os */}
                  <div className="rounded-2xl bg-white p-6 border border-cream-dark">
                    <h3 className="font-serif text-xl text-black mb-3">
                      Bes&oslash;g Os
                    </h3>
                    <p className="text-gray-dark leading-relaxed">
                      Vesterbrogade 42
                      <br />
                      1620 K&oslash;benhavn V
                    </p>
                    <div className="mt-4 flex h-48 w-full items-center justify-center rounded-xl bg-peach text-gray-dark">
                      Google Maps
                    </div>
                  </div>

                  {/* Card 2 — Kontakt Info */}
                  <div className="rounded-2xl bg-white p-6 border border-cream-dark">
                    <h3 className="font-serif text-xl text-black mb-4">
                      Kontakt Info
                    </h3>
                    <ul className="space-y-3 text-gray-dark">
                      <li className="flex items-center gap-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 text-coral"
                        >
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span>+45 31 42 53 64</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 text-coral"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                        </svg>
                        <span>info@emsenergi.dk</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 text-coral"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="5" />
                          <circle
                            cx="17.5"
                            cy="6.5"
                            r="1"
                            fill="currentColor"
                            stroke="none"
                          />
                        </svg>
                        <span>@emsenergi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 3 — Abningstider */}
                  <div className="rounded-2xl bg-white p-6 border border-cream-dark">
                    <h3 className="font-serif text-xl text-black mb-4">
                      &Aring;bningstider
                    </h3>
                    <ul>
                      {openingHours.map((item, idx) => (
                        <li
                          key={item.day}
                          className={`flex items-center justify-between py-3 ${
                            idx < openingHours.length - 1
                              ? "border-b border-cream-dark"
                              : ""
                          }`}
                        >
                          <span className="text-black">
                            {item.day}
                          </span>
                          <span className="text-gray-dark">{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal text-white py-24 text-center">
          <ScrollReveal className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-4xl text-white">
              Pr&oslash;v EMS Tr&aelig;ning Gratis
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
              Book din f&oslash;rste session i dag &mdash; det er helt gratis og
              uforpligtende.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-coral px-8 py-4 font-medium text-white transition hover:bg-coral-dark"
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
