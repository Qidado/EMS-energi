/* ============================================
   StatCard — Card with colored top border accent
   Minimal wrapper with 2-3px accent strip
   ============================================ */

interface StatCardProps {
  accentColor?: "gray" | "success" | "warning" | "orange";
  children: React.ReactNode;
  className?: string;
}

const accentColorMap: Record<string, string> = {
  gray: "#D4D1CC",
  success: "#10B981",
  warning: "#F59E0B",
  orange: "#FF5A00",
};

export default function StatCard({
  accentColor = "orange",
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

      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
