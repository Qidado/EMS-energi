"use client";

/**
 * Planway embeds its own branded header bar (~62px) inside the iframe.
 * We clip it so the booking UI flows directly from our page heading.
 */
const HEADER_HEIGHT = 62;

export default function PlanwayEmbed() {
  return (
    <div
      className="overflow-hidden rounded-lg"
      style={{ height: `${1100 - HEADER_HEIGHT}px` }}
    >
      <iframe
        src="https://ems-energi.planway.com"
        title="Book EMS træning"
        width="100%"
        height={`${1100}px`}
        frameBorder="0"
        style={{ marginTop: `-${HEADER_HEIGHT}px` }}
      />
    </div>
  );
}
