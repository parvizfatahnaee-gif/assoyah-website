"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";

export default function FaqAccordion({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <FadeIn className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
          {title}
        </h2>
      </FadeIn>

      <div className="mt-12 divide-y divide-charcoal/12 border-t border-charcoal/12">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="font-display text-lg text-charcoal md:text-xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 font-body text-xl text-terracotta transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="min-h-0 max-w-2xl font-body text-sm leading-relaxed text-stone">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
