/* ============================================
   GridPattern — Subtle background grid
   Variants: dots or lines with radial fade mask
   ============================================ */

interface GridPatternProps {
  variant?: "dots" | "lines";
  spacing?: 16 | 24 | 32;
  opacity?: number;
  className?: string;
}

export default function GridPattern({
  variant = "dots",
  spacing = 24,
  opacity = 0.4,
  className = "",
}: GridPatternProps) {
  const patternId = `grid-${variant}-${spacing}`;
  const maskId = `grid-mask-${variant}-${spacing}`;

  return (
    <svg
      className={`pointer-events-none h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          {variant === "dots" ? (
            <circle cx={spacing / 2} cy={spacing / 2} r={1} fill="#CBD5E1" />
          ) : (
            <>
              <line
                x1={spacing}
                y1={0}
                x2={spacing}
                y2={spacing}
                stroke="#D6E5F5"
                strokeWidth={0.5}
              />
              <line
                x1={0}
                y1={spacing}
                x2={spacing}
                y2={spacing}
                stroke="#D6E5F5"
                strokeWidth={0.5}
              />
            </>
          )}
        </pattern>

        {/* Radial fade mask */}
        <radialGradient id={maskId}>
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="white" stopOpacity={0.6} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <mask id={`${maskId}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${maskId})`} />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        opacity={opacity}
        mask={`url(#${maskId}-mask)`}
      />
    </svg>
  );
}
