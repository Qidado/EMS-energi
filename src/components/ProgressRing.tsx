/* ============================================
   ProgressRing — Circular progress indicator
   Clean SVG ring with optional center value
   ============================================ */

interface ProgressRingProps {
  value: number;
  size?: "sm" | "md" | "lg";
  strokeWidth?: number;
  showValue?: boolean;
  className?: string;
}

const sizeMap: Record<string, number> = {
  sm: 48,
  md: 64,
  lg: 96,
};

export default function ProgressRing({
  value,
  size = "md",
  strokeWidth = 4,
  showValue = true,
  className = "",
}: ProgressRingProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const dimension = sizeMap[size];
  const radius = (dimension - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={dimension} height={dimension}>
        {/* Background track */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="#D6E5F5"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="#0F1C3F"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center",
            transition: "stroke-dashoffset 0.4s ease",
          }}
        />
      </svg>

      {showValue && (
        <span
          className="absolute text-gray-900 font-mono tabular-nums"
          style={{
            fontSize: dimension * 0.22,
            fontWeight: 600,
          }}
        >
          {clampedValue}%
        </span>
      )}
    </div>
  );
}
