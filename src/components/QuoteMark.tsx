/* ============================================
   QuoteMark — Large decorative opening quote
   Coral color, Playfair Display, 6rem
   ============================================ */

interface QuoteMarkProps {
  color?: string;
  size?: string;
  className?: string;
}

export default function QuoteMark({
  color = "#E85D3B",
  size = "6rem",
  className = "",
}: QuoteMarkProps) {
  return (
    <span
      className={`block font-serif leading-none select-none ${className}`}
      style={{ color, fontSize: size }}
      aria-hidden="true"
    >
      &ldquo;
    </span>
  );
}
