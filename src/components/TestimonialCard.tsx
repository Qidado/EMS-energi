"use client";

import { useState, useEffect, useCallback } from "react";

/* ============================================
   Types
   ============================================ */

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
  /** Auto-advance interval in ms. Set to 0 to disable. */
  autoPlay?: number;
  className?: string;
}

/* ============================================
   Component
   ============================================ */

export default function TestimonialCard({
  testimonials,
  autoPlay = 5000,
  className = "",
}: TestimonialCardProps) {
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

  /* Auto-advance */
  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      goTo((active + 1) % testimonials.length);
    }, autoPlay);
    return () => clearInterval(timer);
  }, [active, autoPlay, goTo, testimonials.length]);

  const current = testimonials[active];

  return (
    <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${className}`}>
      {/* Decorative opening quote mark */}
      <div
        className="font-serif text-8xl text-coral/30 leading-none select-none mb-4"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote content */}
      <div
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <blockquote className="font-serif text-2xl md:text-3xl italic text-black leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <p className="mt-6 font-medium text-black">
          <span className="text-coral mr-2" aria-hidden="true">
            &mdash;
          </span>
          {current.name}
        </p>
        <p className="text-sm text-gray-dark mt-1">
          {current.detail}
        </p>
      </div>

      {/* Dot navigation */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Gå til udtalelse ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === active
                  ? "bg-coral w-2.5 h-2.5"
                  : "bg-coral/20 w-2.5 h-2.5 hover:bg-coral/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
