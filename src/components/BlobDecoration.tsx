/* ============================================
   BlobDecoration — Organic background shapes
   Positioned absolutely for layered decoration
   ============================================ */

interface BlobDecorationProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "coral-light" | "mint-soft";
  opacity?: number;
  className?: string;
}

const sizeMap: Record<string, string> = {
  sm: "w-10 h-10",
  md: "w-20 h-20",
  lg: "w-[150px] h-[150px]",
  xl: "w-[250px] h-[250px]",
};

const colorMap: Record<string, string> = {
  "coral-light": "#F08A60",
  "mint-soft": "#7DCCA5",
};

/* Pre-defined organic blob paths */
const blobs = [
  "M44.5,-51.4C57.1,-40.7,66.2,-25.4,68.2,-9.1C70.3,7.2,65.4,24.4,55.1,37.1C44.8,49.8,29.1,58,12.1,62.1C-4.9,66.2,-23.2,66.2,-37.8,58.6C-52.4,51,-63.3,35.8,-67.6,19C-71.9,2.2,-69.5,-16.1,-60.4,-29.9C-51.3,-43.7,-35.5,-52.9,-19.8,-62.1C-4.1,-71.3,11.5,-80.5,25.4,-76.2C39.3,-71.9,31.9,-62.1,44.5,-51.4Z",
  "M39.3,-47.1C50.9,-36.5,60.1,-23.3,63.4,-8.4C66.7,6.5,64.1,23.1,55.1,35.5C46.1,47.9,30.7,56.1,14.3,59.7C-2.1,63.3,-19.5,62.3,-33.6,54.7C-47.7,47.1,-58.5,32.9,-63,16.7C-67.5,0.5,-65.7,-17.7,-57.1,-31.2C-48.5,-44.7,-33.1,-53.5,-17.9,-62.8C-2.7,-72.1,12.3,-81.9,24.4,-76.3C36.5,-70.7,27.7,-57.7,39.3,-47.1Z",
];

export default function BlobDecoration({
  size = "md",
  color = "coral-light",
  opacity = 0.3,
  className = "",
}: BlobDecorationProps) {
  /* Pick a blob shape based on size for visual variety */
  const blobIndex = size === "sm" || size === "lg" ? 0 : 1;

  return (
    <div
      className={`pointer-events-none absolute ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="-80 -80 160 160"
        className="h-full w-full"
        style={{ opacity }}
      >
        <path d={blobs[blobIndex]} fill={colorMap[color]} />
      </svg>
    </div>
  );
}
