"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ============================================
   Types
   ============================================ */

export interface MedlemskabPlan {
  name: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface KlippekortPlan {
  klip: number;
  price: string;
  pricePerSession: string;
  validity: string;
  featured: boolean;
}

interface PricingTabsProps {
  medlemskabPlans: MedlemskabPlan[];
  klippekortPlans: KlippekortPlan[];
}

type TabKey = "medlemskab" | "klippekort";

/* ============================================
   Component
   ============================================ */

export default function PricingTabs({
  medlemskabPlans,
  klippekortPlans,
}: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("medlemskab");

  return (
    <div>
      {/* Tab toggle */}
      <div className="mt-10 flex justify-center">
        <div
          role="tablist"
          aria-label="Prisvalg"
          className="inline-flex rounded-full border border-border-medium bg-white p-1"
        >
          <button
            type="button"
            role="tab"
            id="tab-medlemskab"
            aria-selected={activeTab === "medlemskab"}
            aria-controls="panel-medlemskab"
            onClick={() => setActiveTab("medlemskab")}
            className={`rounded-full px-5 sm:px-6 py-2 text-sm font-medium transition ${
              activeTab === "medlemskab"
                ? "bg-navy text-white"
                : "text-navy hover:bg-off-white"
            }`}
          >
            Medlemskab
          </button>
          <button
            type="button"
            role="tab"
            id="tab-klippekort"
            aria-selected={activeTab === "klippekort"}
            aria-controls="panel-klippekort"
            onClick={() => setActiveTab("klippekort")}
            className={`rounded-full px-5 sm:px-6 py-2 text-sm font-medium transition ${
              activeTab === "klippekort"
                ? "bg-navy text-white"
                : "text-navy hover:bg-off-white"
            }`}
          >
            Klippekort
          </button>
        </div>
      </div>

      {/* Medlemskab panel */}
      {activeTab === "medlemskab" && (
        <div
          role="tabpanel"
          id="panel-medlemskab"
          aria-labelledby="tab-medlemskab"
          className="mt-12 grid items-stretch gap-8 md:grid-cols-3"
        >
          {medlemskabPlans.map((plan, index) => (
            <ScrollReveal
              key={plan.name}
              delay={index * 120}
              className="h-full"
            >
              <div
                className={`relative flex h-full flex-col rounded-xl bg-white p-5 sm:p-6 md:p-8 ${
                  plan.featured
                    ? "border-2 border-navy shadow-lg mt-6 sm:mt-0"
                    : "border-2 border-border-medium"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-navy px-5 py-1.5 text-sm text-white">
                      Mest Popul&aelig;r
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-2xl text-navy">{plan.name}</h3>
                {plan.subtitle && (
                  <p className="mt-1 text-sm text-slate">{plan.subtitle}</p>
                )}

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-navy">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-slate">{plan.priceSuffix}</span>
                  )}
                </div>

                <p className="mt-3 leading-relaxed text-slate">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 text-navy">&#10003;</span>
                      <span className="text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href="/booking"
                    className={`block w-full rounded-lg py-3 text-center font-medium transition ${
                      plan.featured
                        ? "bg-navy text-white hover:bg-navy-light"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Klippekort panel */}
      {activeTab === "klippekort" && (
        <div
          role="tabpanel"
          id="panel-klippekort"
          aria-labelledby="tab-klippekort"
          className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {klippekortPlans.map((plan, index) => (
            <ScrollReveal
              key={plan.klip}
              delay={index * 100}
              className="h-full"
            >
              <div
                className={`relative flex h-full flex-col rounded-xl bg-white p-5 sm:p-6 md:p-8 ${
                  plan.featured
                    ? "border-2 border-navy shadow-lg mt-6 sm:mt-0"
                    : "border-2 border-border-medium"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-navy px-5 py-1.5 text-sm text-white">
                      Mest Popul&aelig;r
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-2xl text-navy">
                  {plan.klip} klip
                </h3>
                <p className="mt-1 text-sm text-slate">EMS tr&aelig;ninger</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-navy">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-3 leading-relaxed text-slate">
                  {plan.pricePerSession}
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    <span className="text-navy">{plan.validity}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    <span className="text-navy">
                      Fleksibel booking &mdash; ingen binding
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    <span className="text-navy">Adgang til alle hold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-navy">&#10003;</span>
                    <span className="text-navy">Personlig instrukt&oslash;r</span>
                  </li>
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href="/booking"
                    className={`block w-full rounded-lg py-3 text-center font-medium transition ${
                      plan.featured
                        ? "bg-navy text-white hover:bg-navy-light"
                        : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    K&oslash;b klippekort
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
