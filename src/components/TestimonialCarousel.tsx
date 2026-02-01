"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  memberSince: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jeg træner 20 minutter om ugen og har aldrig været stærkere. Min ryg er helt smertefri nu.",
    name: "Mette K., 42",
    role: "Marketing Director",
    memberSince: "Medlem siden 2023",
  },
  {
    quote:
      "Som tidligere atlet havde jeg brug for noget der udfordrede mig. EMS træning leverer på alle niveauer.",
    name: "Thomas R., 38",
    role: "Tidligere professionel håndboldspiller",
    memberSince: "Medlem siden 2022",
  },
  {
    quote:
      "Jeg hadede fitnesscentre. Her er jeg færdig på 20 minutter og føler mig faktisk i form.",
    name: "Jonas M., 31",
    role: "Iværksætter",
    memberSince: "Medlem siden 2024",
  },
  {
    quote:
      "Efter min knæoperation var EMS perfekt til genoptræning. Ingen belastning, men jeg mærker virkelig mine muskler arbejde.",
    name: "Lise H., 56",
    role: "Arkitekt",
    memberSince: "Medlem siden 2023",
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

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const lastInteraction = useRef<number>(0);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      lastInteraction.current = Date.now();
      if (distance > 0) {
        // Swipe left → next
        goTo((active + 1) % testimonials.length);
      } else {
        // Swipe right → previous
        goTo((active - 1 + testimonials.length) % testimonials.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  // Auto-advance every 5 seconds, reset on swipe
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current > 5000) {
        const next = (active + 1) % testimonials.length;
        goTo(next);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  const current = testimonials[active];

  // TODO: Add member photos with permission
  return (
    <div
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative Opening Quote Mark */}
      <div
        className="font-serif text-4xl sm:text-6xl md:text-8xl text-signal-orange/30 leading-none select-none mb-4"
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
        <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-black leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Member avatar placeholder */}
        <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-warm-grey">
          <span className="font-serif text-sm font-medium text-secondary">
            {current.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
          </span>
        </div>

        <p className="text-black mt-4 font-medium">
          {current.name}
        </p>
        <p className="text-sm text-signal-orange mt-1">
          {current.role}
        </p>
        <p className="text-xs text-secondary mt-1">
          {current.memberSince}
        </p>
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Gå til udtalelse ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === active
                ? "bg-signal-orange w-2.5 h-2.5"
                : "bg-signal-orange/20 w-2.5 h-2.5 hover:bg-signal-orange/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
