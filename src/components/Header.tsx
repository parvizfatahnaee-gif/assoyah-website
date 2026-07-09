import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import LanguageSwitch from "./LanguageSwitch";
import MobileNav from "./MobileNav";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links: { href: string; label: string }[] = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/fashion`, label: dict.nav.fashion },
    { href: `/${locale}/african-heritage`, label: dict.nav.africanHeritage },
    { href: `/${locale}/private-atelier`, label: dict.nav.privateAtelier },
    { href: `/${locale}/uniforms`, label: dict.nav.uniforms },
    { href: `/${locale}/manufacturing`, label: dict.nav.manufacturing },
    { href: `/${locale}/journal`, label: dict.nav.journal },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <Link
          href={`/${locale}`}
          className="font-display text-2xl tracking-wider2 text-charcoal"
        >
          ASSOYAH
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] uppercase tracking-wider2 text-charcoal/75 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch locale={locale} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-charcoal px-5 py-2 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:bg-terracotta"
          >
            {dict.nav.requestProject}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitch locale={locale} />
          <MobileNav locale={locale} dict={dict} />
        </div>
      </div>
    </header>
  );
}
