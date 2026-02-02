import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface ArticleLink {
  title: string;
  href: string;
}

interface ArticleListCardProps {
  heading?: string;
  articles: ArticleLink[];
  allArticlesHref?: string;
  allArticlesLabel?: string;
  className?: string;
}

/* ============================================
   Component
   ============================================ */

export default function ArticleListCard({
  heading = "Artikler",
  articles,
  allArticlesHref,
  allArticlesLabel = "Alle artikler",
  className = "",
}: ArticleListCardProps) {
  return (
    <div
      className={`rounded-xl bg-navy p-8 ${className}`}
    >
      {/* Heading */}
      <h3 className="font-serif text-2xl text-white not-italic">
        {heading}
      </h3>

      {/* Article list */}
      <ul className="mt-6 space-y-0">
        {articles.map((article, index) => (
          <li
            key={article.href}
            className={`${
              index < articles.length - 1
                ? "border-b border-white/20"
                : ""
            }`}
          >
            <Link
              href={article.href}
              className="block py-4 text-white/80 transition-colors hover:text-white"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* All articles link */}
      {allArticlesHref && (
        <div className="mt-6">
          <Link
            href={allArticlesHref}
            className="font-medium text-white transition-colors hover:text-cobalt"
          >
            {allArticlesLabel} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
