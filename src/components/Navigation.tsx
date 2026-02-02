"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ============================================
   Types
   ============================================ */

interface NavChild {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

/* ============================================
   Data
   ============================================ */

const navLinks: NavItem[] = [
  { href: "/#hvad-er-ems", label: "Hvad er EMS?" },
  { href: "/#hvem-er-det-for", label: "Er det for mig?" },
  { href: "/#priser", label: "Priser" },
  { href: "/virksomheder", label: "For Virksomheder" },
  { href: "/#find-os", label: "Kontakt" },
];

/* ============================================
   Chevron Icon
   ============================================ */

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    // Small delay to let the menu animate open
    const focusTimeout = setTimeout(() => {
      const focusable = menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) focusable[0].focus();
    }, 100);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !menu) return;

      const focusable = menu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(focusTimeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      {announcementVisible && (
        <div className="bg-navy py-1.5 px-3 sm:py-2.5 sm:px-4 text-center relative">
          <Link
            href="/booking"
            className="text-white text-xs sm:text-sm hover:text-white/80 transition-colors duration-200"
          >
            Pr&oslash;v EMS &mdash; Book din f&oslash;rste session &rarr;
          </Link>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5"
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
        className={`bg-white border-b border-border-medium transition-all duration-300 ${
          scrolled ? "shadow-sm" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-heading text-xl font-bold tracking-tight text-navy">
                EMS ENERGI
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-base text-slate hover:text-navy transition-colors duration-200"
                    >
                      {link.label}
                      <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown Panel */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-border-medium py-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate hover:text-navy hover:bg-off-white transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-slate hover:text-navy transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop Right — CTA only */}
            <div className="hidden md:flex items-center">
              <Link
                href="/booking"
                className="bg-navy text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-navy-light transition-colors duration-200"
              >
                Book Tr&aelig;ning
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-navy hover:text-slate transition-colors duration-200"
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
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-border-medium ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex w-full items-center justify-between text-base text-slate hover:text-navy transition-colors duration-200 py-3"
                  >
                    {link.label}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      mobileDropdownOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className="block text-sm text-slate hover:text-navy transition-colors duration-200 py-2.5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base text-slate hover:text-navy transition-colors duration-200 py-3"
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-4">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-navy text-white text-sm font-medium px-5 py-3 rounded-lg text-center hover:bg-navy-light transition-colors duration-200"
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
