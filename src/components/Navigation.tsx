"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface NavItem {
  href: string;
  label: string;
}

/* ============================================
   Data
   ============================================ */

const navLinks: NavItem[] = [
  { href: "#hvad-er-ems", label: "Om EMS" },
  { href: "#din-foerste-session", label: "Sådan virker det" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "FAQ" },
  { href: "#find-os", label: "Kontakt" },
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
   Navigation
   ============================================ */

export default function Navigation() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="bg-warm-grey py-2.5 px-4 text-center relative">
          <Link
            href="#find-os"
            className="text-black text-sm hover:text-signal-orange transition-colors duration-200"
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
        className={`bg-white border-b border-warm-grey-dark transition-shadow duration-300 ${
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-secondary hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right — Social + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-secondary">
                <a href="https://instagram.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 hover:text-signal-orange transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://facebook.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 hover:text-signal-orange transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com/company/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 hover:text-signal-orange transition-colors">
                  <LinkedInIcon />
                </a>
              </div>

              <Link
                href="#find-os"
                className="bg-signal-orange text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-orange-hover transition-colors duration-200"
              >
                Book Tr&aelig;ning
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-secondary transition-colors duration-200"
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
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-warm-grey-dark ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base text-secondary hover:text-black transition-colors duration-200 py-3"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social */}
            <div className="flex items-center gap-3 pt-4 text-secondary">
              <a href="https://instagram.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 hover:text-signal-orange transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 hover:text-signal-orange transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/company/emsenergi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 hover:text-signal-orange transition-colors">
                <LinkedInIcon />
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="#find-os"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-signal-orange text-white text-sm font-medium px-5 py-3 rounded-lg text-center hover:bg-orange-hover transition-colors duration-200"
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
