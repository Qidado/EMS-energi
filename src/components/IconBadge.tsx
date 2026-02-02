/* ============================================
   IconBadge — Circular icon wrapper
   For feature icons, list decorations, etc.
   Accepts any ReactNode as icon content
   ============================================ */

interface IconBadgeProps {
  icon: React.ReactNode;
  variant?: "default" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<string, { container: string; icon: string }> = {
  sm: { container: "h-8 w-8", icon: "h-4 w-4" },
  md: { container: "h-10 w-10", icon: "h-5 w-5" },
  lg: { container: "h-12 w-12", icon: "h-6 w-6" },
};

const variantMap: Record<string, { bg: string; text: string }> = {
  default: { bg: "bg-gray-100", text: "text-gray-600" },
  orange: { bg: "bg-navy/10", text: "text-navy" },
};

export default function IconBadge({
  icon,
  variant = "default",
  size = "md",
  className = "",
}: IconBadgeProps) {
  const { container, icon: iconSize } = sizeMap[size];
  const { bg, text } = variantMap[variant];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full ${container} ${bg} ${text} ${className}`}
      aria-hidden="true"
    >
      <div className={iconSize}>{icon}</div>
    </div>
  );
}
