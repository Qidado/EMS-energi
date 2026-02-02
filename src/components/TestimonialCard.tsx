"use client";

import { useState, useEffect, useCallback } from "react";

/* ============================================
   Types
   ============================================ */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  memberSince: string;
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

// TODO: Add member photos with permission
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
        className="font-serif text-8xl text-baby-blue leading-none select-none mb-4"
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
        <blockquote className="font-serif text-2xl md:text-3xl italic text-navy leading-relaxed">
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
        <p className="text-sm text-navy mt-1">
          {current.role}
        </p>
        <p className="text-xs text-slate mt-1">
          {current.memberSince}
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
                  ? "bg-navy w-2.5 h-2.5"
                  : "bg-navy/20 w-2.5 h-2.5 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
