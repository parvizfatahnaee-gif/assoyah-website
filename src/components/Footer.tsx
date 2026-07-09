import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import StitchDivider from "./StitchDivider";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  const links: { href: string; label: string }[] = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/fashion`, label: dict.nav.fashion },
    { href: `/${locale}/african-heritage`, label: dict.nav.africanHeritage },
    { href: `/${locale}/private-atelier`, label: dict.nav.privateAtelier },
    { href: `/${locale}/uniforms`, label: dict.nav.uniforms },
    { href: `/${locale}/manufacturing`, label: dict.nav.manufacturing },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-content px-6 pb-10 pt-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl tracking-wider2">ASSOYAH</p>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/65">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-wider3 text-ivory/45">
              {dict.footer.navTitle}
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-wider3 text-ivory/45">
              {dict.footer.contactTitle}
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-ivory/75">
              <li>{dict.footer.addressLabel}</li>
              <li className="text-ivory/55">{dict.footer.address}</li>
              <li className="pt-2">{dict.footer.emailLabel}</li>
              <li>
                <a
                  href="mailto:contact@assoyah.com"
                  className="text-ivory/55 hover:text-ivory"
                >
                  contact@assoyah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <StitchDivider tone="light" className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 font-body text-xs text-ivory/45 md:flex-row">
          <p>
            © {year} {dict.common.entity} — {dict.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link
              href="/fr"
              className={locale === "fr" ? "text-ivory" : "hover:text-ivory"}
            >
              Français
            </Link>
            <Link
              href="/en"
              className={locale === "en" ? "text-ivory" : "hover:text-ivory"}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
