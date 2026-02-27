"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-brand-charcoal/10">
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="pr-4 font-serif text-lg font-bold text-brand-charcoal">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 text-brand-amber transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="10" y1="4" x2="10" y2="16" />
                <line x1="4" y1="10" x2="16" y2="10" />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
