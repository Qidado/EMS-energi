"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Clock,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";

/* ────────────────────────────────────────────── data ── */

const benefitIcons = { Clock, ShieldCheck, TrendingUp, SlidersHorizontal } as const;

const benefits = [
  {
    icon: "Clock" as const,
    title: "Kun 20 minutter",
    body: "En session passer perfekt ind i frokostpausen. Ingen lang omklædning — dine medarbejdere er tilbage på kontoret på ingen tid.",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Forebyg skader",
    body: "EMS styrker de dybe stabiliserende muskler og forebygger typiske kontorskader som ryg-, nakke- og skulderproblemer.",
  },
  {
    icon: "TrendingUp" as const,
    title: "Øget produktivitet",
    body: "Regelmæssig træning forbedrer koncentration, energiniveau og reducerer sygefravær markant.",
  },
  {
    icon: "SlidersHorizontal" as const,
    title: "Tilpasset alle niveauer",
    body: "Fra den utrænede til den erfarne — intensiteten justeres individuelt, så alle kan deltage.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "2.299 kr",
    subtitle: "230 kr/session",
    description: "Perfekt til mindre teams der vil prøve EMS.",
    features: [
      "10 sessioner",
      "Op til 5 medarbejdere",
      "Personlig instruktør",
      "Fleksibel booking",
      "Gyldighed: 3 måneder",
    ],
    cta: "Kontakt Os",
    ctaHref: "#kontakt-form",
    featured: false,
  },
  {
    name: "Professional",
    price: "4.999 kr",
    subtitle: "200 kr/session",
    description: "Vores mest populære firmapakke med ekstra fordele.",
    features: [
      "25 sessioner",
      "Op til 15 medarbejdere",
      "Dedikeret instruktør",
      "Prioriteret booking",
      "Gratis introduktion på kontoret",
      "Gyldighed: 6 måneder",
    ],
    cta: "Kontakt Os",
    ctaHref: "#kontakt-form",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Kontakt os",
    subtitle: "",
    description: "Skræddersyet løsning til større virksomheder.",
    features: [
      "Ubegrænset sessioner",
      "Ubegrænset medarbejdere",
      "Dedikeret kontaktperson",
      "On-site introduktion",
      "Kvartalsrapporter",
      "Skræddersyet aftale",
    ],
    cta: "Få et Tilbud",
    ctaHref: "#kontakt-form",
    featured: false,
  },
];

/* ────────────────────────────────────────────── page ── */

export default function Virksomheder() {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-warm-grey-dark bg-white p-4 text-black placeholder:text-secondary/60 focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/10 outline-none transition";

  return (
    <>
      <Navigation />

      <main id="main-content">
        {/* ──────────────────────────────────────────────
            1. Hero
        ────────────────────────────────────────────── */}
        <section className="bg-off-white pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr]">
              <div>
                <ScrollReveal>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
                    Corporate Wellness
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <h1 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-black">
                    EMS til din
                    <br />
                    virksomhed
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-secondary">
                    Giv dine medarbejdere adgang til effektiv tr&aelig;ning der
                    passer ind i en travl hverdag. 20 minutters EMS
                    tr&aelig;ning styrker kroppen, forebygger skader og
                    &oslash;ger energiniveauet.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="mt-8">
                    <Link
                      href="#kontakt-form"
                      className="inline-block w-full sm:w-auto text-center rounded-lg bg-signal-orange px-8 py-4 font-medium text-white transition-colors hover:bg-orange-hover"
                    >
                      Kontakt os for firmapakke
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={200}>
                {/* TODO: Replace with corporate/team EMS training image */}
                <div className="hidden md:flex aspect-[3/4] items-center justify-center rounded-xl bg-warm-grey">
                  <span className="font-serif text-xl text-secondary">
                    Corporate billede
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            2. Benefits
        ────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                Fordele
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-black">
                Hvorfor EMS til virksomheder?
              </h2>
            </ScrollReveal>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefitIcons[benefit.icon];
                return (
                  <ScrollReveal key={benefit.title} delay={index * 100}>
                    <div className="rounded-xl border border-black/[0.06] bg-off-white p-6">
                      <IconComponent
                        className="h-8 w-8 text-orange-text"
                        strokeWidth={1.5}
                      />
                      <h3 className="mt-4 font-serif text-lg text-black">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {benefit.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            3. Packages (Pricing)
        ────────────────────────────────────────────── */}
        <section className="bg-off-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-text">
                  Pakker
                </span>
                <h2 className="mt-4 font-serif text-4xl text-black">
                  Firmapakker
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-16 grid items-start gap-8 md:grid-cols-3">
              {packages.map((plan, index) => (
                <ScrollReveal key={plan.name} delay={index * 120}>
                  <div
                    className={`relative rounded-xl bg-white p-5 sm:p-6 md:p-8 ${
                      plan.featured
                        ? "border-2 border-signal-orange shadow-lg mt-6 sm:mt-0"
                        : "border border-warm-grey-dark"
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-signal-orange px-5 py-1.5 text-sm text-white">
                          Mest Popul&aelig;r
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif text-2xl text-black">
                      {plan.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-serif text-4xl text-black">
                        {plan.price}
                      </span>
                    </div>

                    {plan.subtitle && (
                      <p className="mt-1 text-sm text-secondary">
                        {plan.subtitle}
                      </p>
                    )}

                    <p className="mt-3 leading-relaxed text-secondary">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 text-orange-text">
                            &#10003;
                          </span>
                          <span className="text-black">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href={plan.ctaHref}
                        className={`block w-full rounded-lg py-3 text-center font-medium transition ${
                          plan.featured
                            ? "bg-signal-orange py-4 text-white hover:bg-orange-hover"
                            : "border-2 border-signal-orange text-orange-text hover:bg-signal-orange hover:text-white"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-secondary">
              Alle priser er inkl. moms. Sessionerne kan deles mellem
              medarbejdere.
            </p>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            4. Social Proof
        ────────────────────────────────────────────── */}
        <section className="bg-warm-grey py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal className="text-center">
              <h2 className="font-serif text-3xl sm:text-4xl text-black">
                Virksomheder der tr&aelig;ner hos os
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* TODO: Replace with actual company logos */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-20 items-center justify-center rounded-xl bg-white"
                  >
                    <span className="text-sm text-secondary">Logo {i}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <blockquote className="mx-auto mt-12 max-w-2xl text-center">
                <p className="font-serif text-xl italic leading-relaxed text-black">
                  &ldquo;Vores medarbejdere elsker EMS-tr&aelig;ningen. Det
                  passer perfekt ind i hverdagen, og vi har set et tydeligt
                  fald i sygefrav&aelig;r.&rdquo;
                </p>
                <footer className="mt-4">
                  <span className="font-medium text-black">
                    [Navn Efternavn]
                  </span>
                  <span className="text-secondary">
                    {" "}
                    &mdash; [Titel], [Virksomhed]
                  </span>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            5. Contact Form
        ────────────────────────────────────────────── */}
        <section id="kontakt-form" className="bg-white py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <ScrollReveal className="text-center">
              <span className="text-sm uppercase tracking-widest text-orange-text">
                Kontakt
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-black">
                F&aring; et uforpligtende tilbud
              </h2>
              <p className="mt-4 text-secondary">
                Udfyld formularen, s&aring; vender vi tilbage inden for 24
                timer med et skr&aelig;ddersyet tilbud.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10">
                {submitted ? (
                  <div className="rounded-2xl bg-off-white border border-warm-grey-dark p-10 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-signal-orange/10">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-text"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-black">
                      Tak for din henvendelse!
                    </h3>
                    <p className="mt-2 text-secondary">
                      Vi vender tilbage med et tilbud inden for 24 timer.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        Virksomhedsnavn
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Din virksomhed"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        Kontaktperson
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Dit fulde navn"
                        className={inputClasses}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-black"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="din@virksomhed.dk"
                          className={inputClasses}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-black"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+45 00 00 00 00"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="employees"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        Antal medarbejdere
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        required
                        value={formData.employees}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          V&aelig;lg antal
                        </option>
                        <option value="1-10">1&ndash;10 medarbejdere</option>
                        <option value="11-25">11&ndash;25 medarbejdere</option>
                        <option value="26-50">26&ndash;50 medarbejdere</option>
                        <option value="50+">50+ medarbejdere</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        Besked{" "}
                        <span className="font-normal text-secondary">
                          (valgfrit)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Fortæl os om jeres behov..."
                        className={inputClasses + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full rounded-lg bg-signal-orange px-8 py-3 font-medium text-white transition hover:bg-orange-hover disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sender..." : "Send forespørgsel"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────────────────────────────
            6. CTA
        ────────────────────────────────────────────── */}
        <section className="bg-forest-green py-12 sm:py-16 md:py-24 lg:py-32 text-center text-white">
          <div className="mx-auto max-w-7xl px-6">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight md:text-5xl">
                Investér i dine medarbejderes sundhed
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
                Start med en uforpligtende samtale om hvordan EMS kan
                gavne jeres virksomhed.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10">
                <Link
                  href="#kontakt-form"
                  className="inline-block w-full sm:w-auto text-center rounded-lg bg-white px-10 py-4 text-lg font-medium text-forest-green transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Kontakt os i dag
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
