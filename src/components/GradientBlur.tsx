/* ============================================
   GradientBlur — Soft gradient shapes for depth
   Inspired by Linear / Stripe ambient blurs
   ============================================ */

interface GradientBlurProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  color?: "gray" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const positionMap: Record<string, string> = {
  "top-left": "-top-1/4 -left-1/4",
  "top-right": "-top-1/4 -right-1/4",
  "bottom-left": "-bottom-1/4 -left-1/4",
  "bottom-right": "-bottom-1/4 -right-1/4",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const sizeMap: Record<string, string> = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
};

const colorMap: Record<string, string> = {
  gray: "#D6E5F5",
  blue: "#1E4AE9",
};

export default function GradientBlur({
  position = "top-right",
  color = "gray",
  size = "md",
  className = "",
}: GradientBlurProps) {
  return (
    <div
      className={`pointer-events-none absolute ${positionMap[position]} ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: colorMap[color] }}
      />
    </div>
  );
}
