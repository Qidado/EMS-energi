"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-border-medium py-5">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left font-serif text-lg text-navy"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.question}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`h-6 w-6 shrink-0 text-cobalt transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-3 leading-relaxed text-slate">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
