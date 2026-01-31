"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

interface NavItem {
  href: string;
  label: string;
  dropdown?: DropdownSection[];
}

/* ============================================
   Data
   ============================================ */

const navLinks: NavItem[] = [
  {
    href: "/om-os",
    label: "Om Os",
    dropdown: [
      {
        title: "Lær os at kende",
        items: [
          { href: "/om-os", label: "Vores historie" },
          { href: "/om-os#team", label: "Mød teamet" },
        ],
      },
      {
        title: "EMS Træning",
        items: [
          { href: "/om-os#teknologi", label: "Hvad er EMS?" },
          { href: "/om-os#vaerdier", label: "Vores værdier" },
        ],
      },
    ],
  },
  { href: "/priser", label: "Priser" },
  { href: "/kontakt", label: "Kontakt" },
];

/* ============================================
   Social Icons
   ============================================ */

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ============================================
   Dropdown component
   ============================================ */

function NavDropdown({
  sections,
  open,
  onClose,
}: {
  sections: DropdownSection[];
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl border border-cream-dark bg-white p-4 shadow-lg"
    >
      {sections.map((section, sIdx) => (
        <div key={sIdx} className={sIdx > 0 ? "mt-4 pt-4 border-t border-cream-dark" : ""}>
          {section.title && (
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-dark">
              {section.title}
            </p>
          )}
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-dark transition-colors hover:bg-cream hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ============================================
   Navigation
   ============================================ */

export default function Navigation() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="bg-peach py-2.5 px-4 text-center relative">
          <Link
            href="/kontakt"
            className="text-black text-sm hover:text-coral transition-colors duration-200"
          >
            Pr&oslash;v EMS &mdash; F&oslash;rste tr&aelig;ning gratis! &rarr;
          </Link>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors duration-200 p-1"
            aria-label="Luk meddelelse"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 3l8 8M11 3l-8 8" />
            </svg>
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <nav
        className={`bg-white border-b border-cream-dark transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-heading text-xl font-bold tracking-tight text-black">
                EMS ENERGI
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.dropdown ? (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.href ? null : link.href)
                      }
                      className="flex items-center gap-1 text-base text-gray-dark hover:text-black transition-colors duration-200"
                      aria-expanded={openDropdown === link.href}
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className={`transition-transform duration-200 ${
                          openDropdown === link.href ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M3 5l3 3 3-3" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-base text-gray-dark hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.dropdown && (
                    <NavDropdown
                      sections={link.dropdown}
                      open={openDropdown === link.href}
                      onClose={() => setOpenDropdown(null)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right — Social + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-dark">
                <a href="https://instagram.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 hover:text-coral transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 hover:text-coral transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com/company/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 hover:text-coral transition-colors">
                  <LinkedInIcon />
                </a>
              </div>

              <Link
                href="/kontakt"
                className="bg-coral text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-coral-dark transition-colors duration-200"
              >
                Book Tr&aelig;ning
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-gray-dark transition-colors duration-200"
              aria-label={mobileMenuOpen ? "Luk menu" : "Åbn menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-cream-dark ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base text-gray-dark hover:text-black transition-colors duration-200 py-3"
                >
                  {link.label}
                </Link>
                {/* Mobile dropdown items inline */}
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.flatMap((s) => s.items).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-dark/70 hover:text-black transition-colors duration-200 py-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Social */}
            <div className="flex items-center gap-3 pt-4 text-gray-dark">
              <a href="https://instagram.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 hover:text-coral transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 hover:text-coral transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/company/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 hover:text-coral transition-colors">
                <LinkedInIcon />
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-coral text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-coral-dark transition-colors duration-200"
              >
                Book Tr&aelig;ning
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
