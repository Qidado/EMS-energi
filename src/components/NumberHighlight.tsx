/* ============================================
   NumberHighlight — Large stat display
   Monospace number with subtle accent background
   For hero statistics / landing page callouts
   ============================================ */

interface NumberHighlightProps {
  value: string | number;
  label: string;
  className?: string;
}

export default function NumberHighlight({
  value,
  label,
  className = "",
}: NumberHighlightProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-block rounded-xl bg-navy/10 px-6 py-4">
        <span
          className="block font-mono text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums text-gray-900"
          style={{ letterSpacing: "-0.02em" }}
        >
          {value}
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed">
        {label}
      </p>
    </div>
  );
}
