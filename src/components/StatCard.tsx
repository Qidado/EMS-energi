/* ============================================
   StatCard — Card with colored top border accent
   Minimal wrapper with 2-3px accent strip
   ============================================ */

interface StatCardProps {
  accentColor?: "gray" | "success" | "warning" | "accent";
  children: React.ReactNode;
  className?: string;
}

const accentColorMap: Record<string, string> = {
  gray: "#D4D4D8",
  success: "#10B981",
  warning: "#F59E0B",
  accent: "#6366F1",
};

export default function StatCard({
  accentColor = "accent",
  children,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white ${className}`}
    >
      {/* Top accent border */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: accentColorMap[accentColor] }}
        aria-hidden="true"
      />

      <div className="p-6">{children}</div>
    </div>
  );
}
