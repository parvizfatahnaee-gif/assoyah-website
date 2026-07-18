"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import LanguageSwitch from "./LanguageSwitch";
import MobileNav from "./MobileNav";
import Button from "./Button";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/fashion`, label: dict.nav.fashion },
    { href: `/${locale}/african-heritage`, label: dict.nav.africanHeritage },
    { href: `/${locale}/private-atelier`, label: dict.nav.privateAtelier },
    { href: `/${locale}/uniforms`, label: dict.nav.uniforms },
    { href: `/${locale}/manufacturing`, label: dict.nav.manufacturing },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/request`, label: dict.requestCenter.eyebrow },
  ];

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal/10 bg-ivory py-0 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "border-transparent bg-ivory/90 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-all duration-300 md:px-10 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
        <Link
          href={`/${locale}`}
          className="shrink-0 font-display text-2xl tracking-wider2 text-charcoal"
        >
          ASSOYAH
        </Link>

        <nav className="hidden items-center gap-5 2xl:flex xl:gap-6" aria-label="Primary">
          {links.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap font-body text-[12.5px] uppercase tracking-wider2 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-terracotta after:transition-all ${
                  isActive
                    ? "text-charcoal after:w-full"
                    : "text-charcoal/75 after:w-0 hover:text-charcoal hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 2xl:flex">
          <LanguageSwitch locale={locale} />
          <Button href={`/${locale}/contact`} variant="primary">
            {dict.nav.requestConsultation}
          </Button>
        </div>

        <div className="flex items-center gap-3 2xl:hidden">
          <LanguageSwitch locale={locale} />
          <MobileNav locale={locale} dict={dict} />
        </div>
      </div>
    </header>
  );
}
