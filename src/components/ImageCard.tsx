import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface ImageCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  imageSrc?: string;
  /** Title color — defaults to mint-soft */
  titleColor?: "mint" | "coral" | "teal" | "white";
  className?: string;
}

const titleColorMap: Record<string, string> = {
  mint: "text-mint-soft",
  coral: "text-coral",
  teal: "text-teal",
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
  titleColor = "mint",
  className = "",
}: ImageCardProps) {
  const card = (
    <div
      className={`group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-peach ${className}`}
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
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
      )}

      {/* Title */}
      <h3
        className={`relative z-10 px-6 text-center font-serif text-3xl italic ${titleColorMap[titleColor]}`}
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
        <p className="mt-3 text-sm text-gray-dark">
          {subtitle}
          {href && (
            <Link
              href={href}
              className="ml-2 font-medium text-coral transition-colors hover:underline"
            >
              Læs mere &rarr;
            </Link>
          )}
        </p>
      )}
    </div>
  );
}
