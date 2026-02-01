"use client";

import { useState } from "react";
import Link from "next/link";
import WaveDivider from "./WaveDivider";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const footerTraening = [
  { href: "#hvad-er-ems", label: "EMS Træning" },
  { href: "#din-foerste-session", label: "Holdoversigt" },
];

const footerInfo = [
  { href: "#hvad-er-ems", label: "Om Os" },
  { href: "#priser", label: "Priser" },
  { href: "#find-os", label: "Kontakt" },
  { href: "#faq", label: "FAQ" },
];

const footerLegal = [
  { href: "/privatlivspolitik", label: "Privatlivspolitik" },
  { href: "/handelsbetingelser", label: "Handelsbetingelser" },
  { href: "/cookiepolitik", label: "Cookiepolitik" },
];

interface AccordionColumnProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}

function AccordionColumn({ title, children, open, onToggle }: AccordionColumnProps) {
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 sm:py-0 sm:pointer-events-none sm:cursor-default"
        onClick={onToggle}
        aria-expanded={open}
      >
        <h4 className="font-serif text-sm italic text-white uppercase tracking-wider">
          {title}
        </h4>
        <span className="text-white/70 sm:hidden">
          <ChevronIcon open={open} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:max-h-none ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      <WaveDivider color="#1A3D2E" />
      <footer className="bg-forest-green border-t border-forest-green">
        <div className="max-w-7xl mx-auto py-16 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1: Brand */}
            <div>
              <span className="font-serif text-xl text-white block mb-3">
                EMS Energi
              </span>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Din krop. Din energi.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/emsenergi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-signal-orange transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com/emsenergi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-signal-orange transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://linkedin.com/company/emsenergi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-signal-orange transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Col 2: Traening */}
            <AccordionColumn
              title="Træning"
              open={!!openSections["traening"]}
              onToggle={() => toggle("traening")}
            >
              <ul className="space-y-3">
                {footerTraening.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionColumn>

            {/* Col 3: Information */}
            <AccordionColumn
              title="Information"
              open={!!openSections["info"]}
              onToggle={() => toggle("info")}
            >
              <ul className="space-y-3">
                {footerInfo.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionColumn>

            {/* Col 4: Find Os */}
            <AccordionColumn
              title="Find Os"
              open={!!openSections["find"]}
              onToggle={() => toggle("find")}
            >
              <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                <p>
                  Vesterbrogade 42,
                  <br />
                  1620 K&oslash;benhavn V
                </p>
                <p>
                  <a
                    href="tel:+45XXXXXXXX"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Tlf: +45 XX XX XX XX
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@emsenergi.dk"
                    className="hover:text-white transition-colors duration-200"
                  >
                    info@emsenergi.dk
                  </a>
                </p>
                <div className="pt-2">
                  <p className="text-white text-xs font-medium uppercase tracking-wider mb-1">
                    &Aring;bningstider
                  </p>
                  <p>Man&ndash;Fre: 06:30&ndash;21:00</p>
                  <p>L&oslash;r&ndash;S&oslash;n: 08:00&ndash;18:00</p>
                </div>
              </div>
            </AccordionColumn>

            {/* Col 5: Virksomhed */}
            <AccordionColumn
              title="Virksomhed"
              open={!!openSections["virksomhed"]}
              onToggle={() => toggle("virksomhed")}
            >
              <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                <p>EMS Energi ApS</p>
                <p>CVR: 12345678</p>
                <p>
                  Vesterbrogade 42,
                  <br />
                  1620 K&oslash;benhavn V
                </p>
              </div>
            </AccordionColumn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 pt-8 pb-8 mt-0 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-xs">
              &copy; 2025 EMS Energi. Alle rettigheder forbeholdes.
            </p>
            <div className="flex items-center gap-6">
              {footerLegal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
