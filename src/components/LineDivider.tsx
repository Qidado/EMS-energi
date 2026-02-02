/* ============================================
   LineDivider — Clean geometric dividers
   Variants: solid, dashed, gradient
   ============================================ */

interface LineDividerProps {
  variant?: "solid" | "dashed" | "gradient";
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

const spacingMap: Record<string, string> = {
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
};

export default function LineDivider({
  variant = "solid",
  spacing = "md",
  className = "",
}: LineDividerProps) {
  if (variant === "gradient") {
    return (
      <div
        className={`h-px w-full ${spacingMap[spacing]} ${className}`}
        style={{
          background:
            "linear-gradient(to right, transparent, #CBD5E1 30%, #CBD5E1 70%, transparent)",
        }}
        role="separator"
      />
    );
  }

  return (
    <hr
      className={`w-full border-0 ${spacingMap[spacing]} ${className}`}
      style={{
        height: "1px",
        backgroundColor: "#CBD5E1",
        ...(variant === "dashed"
          ? {
              backgroundColor: "transparent",
              backgroundImage:
                "repeating-linear-gradient(to right, #CBD5E1, #CBD5E1 6px, transparent 6px, transparent 12px)",
            }
          : {}),
      }}
      role="separator"
    />
  );
}
