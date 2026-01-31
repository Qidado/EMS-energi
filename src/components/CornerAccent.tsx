/* ============================================
   CornerAccent — Geometric corner decoration
   Subtle right-angle lines for cards / sections
   ============================================ */

interface CornerAccentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md";
  color?: string;
  className?: string;
}

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 24,
};

export default function CornerAccent({
  position = "top-left",
  size = "sm",
  color = "#D4D4D8",
  className = "",
}: CornerAccentProps) {
  const s = sizeMap[size];
  const strokeWidth = 1.5;

  /* Build the L-shaped path for each corner */
  const paths: Record<string, string> = {
    "top-left": `M0 ${s} L0 0 L${s} 0`,
    "top-right": `M${s - s} 0 L${s} 0 L${s} ${s}`,
    "bottom-left": `M0 0 L0 ${s} L${s} ${s}`,
    "bottom-right": `M0 ${s} L${s} ${s} L${s} 0`,
  };

  const positionStyles: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      className={`pointer-events-none absolute ${positionStyles[position]} ${className}`}
      aria-hidden="true"
    >
      <path
        d={paths[position]}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
