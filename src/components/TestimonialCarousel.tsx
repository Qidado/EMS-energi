"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  memberSince: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jeg har prøvet alt fra CrossFit til løb. EMS er det eneste der passer ind i min hverdag — og jeg kan mærke forskel.",
    name: "Mette K., 42",
    role: "Marketing Director",
    memberSince: "Medlem siden 2024",
  },
  {
    quote:
      "Min fysioterapeut anbefalede EMS efter min rygoperation. Jeg er stærkere nu end før skaden.",
    name: "Henrik L., 58",
    role: "Arkitekt",
    memberSince: "Medlem siden 2024",
  },
  {
    quote:
      "20 minutter i frokostpausen. Ingen omklædning, ingen kø til maskiner. Det er genialt.",
    name: "Jonas M., 34",
    role: "Softwareudvikler",
    memberSince: "Medlem siden 2025",
  },
  {
    quote:
      "Som tidligere håndboldspiller savnede jeg intensiteten. EMS giver den samme følelse af at have trænet hårdt — på en brøkdel af tiden.",
    name: "Thomas R., 38",
    role: "",
    memberSince: "Medlem siden 2024",
  },
  {
    quote:
      "I was nervous about the language barrier, but the trainers explain everything clearly in English. Best workout I've found in Copenhagen.",
    name: "Sarah M., 41",
    role: "Expat",
    memberSince: "Medlem siden 2025",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      lastInteraction.current = Date.now();
      goTo((active - 1 + testimonials.length) % testimonials.length);
    } else if (e.key === "ArrowRight") {
      lastInteraction.current = Date.now();
      goTo((active + 1) % testimonials.length);
    }
  }

  // Auto-advance every 5 seconds, reset on swipe, pause on hover/focus
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused && Date.now() - lastInteraction.current > 5000) {
        const next = (active + 1) % testimonials.length;
        goTo(next);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo, isPaused]);

  const current = testimonials[active];

  function goPrev() {
    lastInteraction.current = Date.now();
    goTo((active - 1 + testimonials.length) % testimonials.length);
  }

  function goNext() {
    lastInteraction.current = Date.now();
    goTo((active + 1) % testimonials.length);
  }

  // TODO: Add member photos with permission
  return (
    <div
      role="region"
      aria-roledescription="karrusel"
      aria-label="Kundeanmeldelser"
      tabIndex={0}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Quote area with arrow navigation */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          aria-label="Forrige udtalelse"
          className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/80 border border-border-medium/30 hover:bg-cobalt hover:text-white hover:border-cobalt transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          aria-label="Næste udtalelse"
          className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/80 border border-border-medium/30 hover:bg-cobalt hover:text-white hover:border-cobalt transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Decorative Opening Quote Mark */}
        <div
          className="font-serif text-4xl sm:text-6xl md:text-8xl text-baby-blue leading-none select-none mb-4"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Quote Content */}
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-navy leading-relaxed">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Member avatar placeholder */}
          <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-baby-blue">
            <span className="font-serif text-sm font-medium text-slate">
              {current.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
            </span>
          </div>

          <p className="text-navy mt-4 font-medium">
            {current.name}
          </p>
          <p className="text-sm text-cobalt mt-1">
            {current.role}
          </p>
          <p className="text-xs text-slate mt-1">
            {current.memberSince}
          </p>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center gap-1 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Gå til udtalelse ${index + 1}`}
            className="flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                index === active
                  ? "bg-cobalt w-2.5 h-2.5"
                  : "bg-border-medium/40 w-2.5 h-2.5 hover:bg-border-medium/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
