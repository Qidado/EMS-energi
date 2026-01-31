import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref?: string;
  featured?: boolean;
  className?: string;
}

/* ============================================
   Component
   ============================================ */

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref = "/kontakt",
  featured = false,
  className = "",
}: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl bg-white p-8 border ${
        featured
          ? "border-2 border-coral shadow-lg"
          : "border-cream-dark"
      } ${className}`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-coral px-5 py-1.5 text-sm font-medium text-white">
            Mest Populær
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="font-serif text-2xl text-black not-italic">
        {name}
      </h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-serif text-4xl text-black not-italic">
          {price}
        </span>
        {period && (
          <span className="text-gray-dark">{period}</span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 leading-relaxed text-gray-dark">
        {description}
      </p>

      {/* Divider */}
      <hr className="my-6 border-cream-dark" />

      {/* Features */}
      <ul className="flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 text-coral" aria-hidden="true">
              &#10003;
            </span>
            <span className="text-black">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Link
          href={ctaHref}
          className={`block w-full rounded-full py-3.5 text-center font-medium uppercase tracking-wider transition ${
            featured
              ? "bg-coral text-white hover:bg-coral-dark"
              : "border-2 border-coral text-coral hover:bg-coral hover:text-cream"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
