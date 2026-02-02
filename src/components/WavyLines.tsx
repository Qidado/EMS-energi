/* ============================================
   WavyLines — Horizontal wavy line pattern
   Decorative accent in cobalt (#1E4AE9)
   ============================================ */

interface WavyLinesProps {
  lines?: number;
  color?: string;
  className?: string;
}

export default function WavyLines({
  lines = 3,
  color = "#1E4AE9",
  className = "",
}: WavyLinesProps) {
  const lineSpacing = 8;
  const height = lines * lineSpacing + 4;

  return (
    <svg
      viewBox={`0 0 120 ${height}`}
      className={`w-24 ${className}`}
      aria-hidden="true"
      fill="none"
    >
      {Array.from({ length: lines }).map((_, i) => (
        <path
          key={i}
          d={`M0,${4 + i * lineSpacing} Q15,${i * lineSpacing} 30,${4 + i * lineSpacing} T60,${4 + i * lineSpacing} T90,${4 + i * lineSpacing} T120,${4 + i * lineSpacing}`}
          stroke={color}
          strokeWidth={1.2}
          opacity={0.6}
        />
      ))}
    </svg>
  );
}
