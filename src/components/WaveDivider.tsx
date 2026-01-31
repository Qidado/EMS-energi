/* ============================================
   WaveDivider — Full-width wave SVG divider
   Variants: gentle (soft curve), dramatic (deeper wave)
   ============================================ */

interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  variant?: "gentle" | "dramatic";
  className?: string;
}

const paths: Record<string, string> = {
  gentle:
    "M0,32 C320,96 640,0 960,48 C1280,96 1440,16 1440,16 L1440,96 L0,96 Z",
  dramatic:
    "M0,64 C240,0 480,96 720,48 C960,0 1200,80 1440,32 L1440,96 L0,96 Z",
};

export default function WaveDivider({
  color = "#F0EDE8",
  flip = false,
  variant = "gentle",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full leading-none overflow-hidden ${className}`}
      style={flip ? { transform: "rotate(180deg)" } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-16 lg:h-20"
        fill={color}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
