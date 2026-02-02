"use client";

import { useState } from "react";

export default function PlanwayEmbed() {
  const [loaded, setLoaded] = useState(false);

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
        src="https://ems-energi.planway.com"
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
