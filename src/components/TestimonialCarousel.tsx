"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Efter bare 4 uger med EMS tr\u00e6ning kunne jeg m\u00e6rke en markant forskel. Mere styrke, bedre holdning og mere energi i hverdagen.",
    name: "Mikkel J.",
    detail: "Medlem siden 2023",
  },
  {
    quote:
      "Jeg var skeptisk i starten, men 20 minutter EMS svarer virkelig til flere timers konventionel tr\u00e6ning. Perfekt til min travle hverdag.",
    name: "Camilla S.",
    detail: "Medlem siden 2024",
  },
  {
    quote:
      "Som tidligere atlet havde jeg brug for noget der udfordrede mig. EMS tr\u00e6ning leverer p\u00e5 alle niveauer.",
    name: "Thomas R.",
    detail: "Medlem siden 2022",
  },
  {
    quote:
      "EMS Energi har helt \u00e6ndret min tilgang til fitness. Personalet er fantastisk og resultaterne taler for sig selv.",
    name: "Line M.",
    detail: "Medlem siden 2023",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setFade(false);
      setTimeout(() => {
        setActive(index);
        setFade(true);
      }, 300);
    },
    [active]
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (active + 1) % testimonials.length;
      goTo(next);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const current = testimonials[active];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Decorative Opening Quote Mark */}
      <div
        className="font-serif text-8xl text-coral/30 leading-none select-none mb-4"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote Content */}
      <div
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <blockquote className="font-serif text-2xl md:text-3xl italic text-black leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <p className="text-black mt-6">
          {current.name}
        </p>
        <p className="text-sm text-gray-dark mt-1">
          {current.detail}
        </p>
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`G\u00e5 til udtalelse ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === active
                ? "bg-coral w-2.5 h-2.5"
                : "bg-coral/20 w-2.5 h-2.5 hover:bg-coral/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
