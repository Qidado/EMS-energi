"use client";

import { useState, useEffect } from "react";

const PLANWAY_URL = "https://ems-energi.planway.com";
const LOAD_TIMEOUT_MS = 6000;

export default function PlanwayEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const timer = setTimeout(() => setTimedOut(true), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [loaded]);

  // Iframe failed to embed — show fallback link
  if (timedOut && !loaded) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-slate leading-relaxed max-w-md">
          Vores bookingsystem &aring;bnes i et nyt vindue for den bedste oplevelse.
        </p>
        <a
          href={PLANWAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-navy px-8 py-4 font-medium text-white transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
        >
          &Aring;bn booking &rarr;
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Loading state */}
      {!loaded && (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-pulse rounded-full bg-navy/20" />
            <p className="mt-3 text-sm text-slate">Indl&aelig;ser booking&hellip;</p>
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={PLANWAY_URL}
        title="Book EMS træning"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full min-h-[900px] md:min-h-[1100px] border-0 rounded-lg ${
          loaded ? "block" : "hidden"
        }`}
      />
    </div>
  );
}
