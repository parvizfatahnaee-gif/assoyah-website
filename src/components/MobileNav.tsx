"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import LanguageSwitch from "./LanguageSwitch";

export default function MobileNav({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const links: { href: string; label: string }[] = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/fashion`, label: dict.nav.fashion },
    { href: `/${locale}/african-heritage`, label: dict.nav.africanHeritage },
    { href: `/${locale}/private-atelier`, label: dict.nav.privateAtelier },
    { href: `/${locale}/uniforms`, label: dict.nav.uniforms },
    { href: `/${locale}/manufacturing`, label: dict.nav.manufacturing },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/request`, label: dict.requestCenter.eyebrow },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  // Body scroll lock while the overlay is open.
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Escape key closes the overlay.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (<div>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span
          className={`h-px w-6 bg-charcoal transition-transform ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-charcoal transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-6 bg-charcoal transition-transform ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory"
          >
            <button
              ref={closeButtonRef}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-charcoal" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-charcoal" />
              </span>
            </button>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-5 overflow-y-auto px-8 pt-20"
            >
              {links.map((link, i) => {
                const isActive =
                  pathname === link.href || (link.href !== `/${locale}` && pathname.startsWith(`${link.href}/`));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block py-1 font-display text-3xl transition-colors ${
                        isActive ? "text-terracotta" : "text-charcoal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-charcoal/10 px-8 py-8">
              <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                {dict.footer.contactTitle}
              </p>
              <div className="mt-3 flex flex-col gap-1 font-body text-sm text-charcoal/80">
                <a href={`mailto:${dict.company.email}`} className="hover:text-terracotta">
                  {dict.company.email}
                </a>
                <a
                  href={`https://wa.me/${dict.company.whatsappHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta"
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-6">
                <LanguageSwitch locale={locale} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
