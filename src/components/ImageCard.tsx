import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface ImageCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  imageSrc?: string;
  /** Title color — defaults to navy-light */
  titleColor?: "green" | "orange" | "forest" | "white";
  className?: string;
}

const titleColorMap: Record<string, string> = {
  green: "text-navy-light",
  orange: "text-navy",
  forest: "text-navy",
  white: "text-white",
};

/* ============================================
   Component
   ============================================ */

export default function ImageCard({
  title,
  subtitle,
  href,
  imageSrc,
  titleColor = "green",
  className = "",
}: ImageCardProps) {
  const card = (
    <div
      className={`group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-baby-blue ${className}`}
    >
      {/* Background image */}
      {imageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={title}
        />
      )}

      {/* Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 bg-navy/20 transition-opacity duration-300 group-hover:bg-navy/30" />
      )}

      {/* Title */}
      <h3
        className={`relative z-10 px-6 text-center font-serif text-xl sm:text-2xl md:text-3xl italic ${titleColorMap[titleColor]}`}
      >
        {title}
      </h3>
    </div>
  );

  return (
    <div>
      {href ? (
        <Link href={href} className="block">
          {card}
        </Link>
      ) : (
        card
      )}

      {subtitle && (
        <p className="mt-3 text-sm text-secondary">
          {subtitle}
          {href && (
            <Link
              href={href}
              className="ml-2 font-medium text-navy transition-colors hover:underline"
            >
              Læs mere &rarr;
            </Link>
          )}
        </p>
      )}
    </div>
  );
}
