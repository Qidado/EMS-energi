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
      className={`relative flex h-full flex-col rounded-xl bg-white p-5 sm:p-6 md:p-8 border ${
        featured
          ? "border-2 border-cobalt shadow-lg"
          : "border-border-medium"
      } ${className}`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-cobalt px-5 py-1.5 text-sm font-medium text-white">
            Mest Populær
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="font-serif text-2xl text-navy not-italic">
        {name}
      </h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-serif text-4xl text-navy not-italic">
          {price}
        </span>
        {period && (
          <span className="text-slate">{period}</span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 leading-relaxed text-slate">
        {description}
      </p>

      {/* Divider */}
      <hr className="my-6 border-border-medium" />

      {/* Features */}
      <ul className="flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 text-cobalt" aria-hidden="true">
              &#10003;
            </span>
            <span className="text-navy">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Link
          href={ctaHref}
          className={`block w-full rounded-lg py-3.5 text-center font-medium tracking-wider transition ${
            featured
              ? "bg-cobalt text-white hover:bg-royal"
              : "border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-white"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
