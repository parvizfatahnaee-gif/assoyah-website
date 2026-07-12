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

  const businessLinks: { href: string; label: string }[] = [
    { href: `/${locale}/fashion`, label: dict.nav.fashion },
    { href: `/${locale}/manufacturing`, label: dict.nav.manufacturing },
    { href: `/${locale}/private-atelier`, label: dict.nav.privateAtelier },
    { href: `/${locale}/uniforms`, label: dict.nav.uniforms },
  ];

  const companyLinks: { href: string; label: string }[] = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/african-heritage`, label: dict.nav.africanHeritage },
    { href: `/${locale}/journal`, label: dict.nav.journal },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const socialPlaceholders = ["Instagram", "LinkedIn", "Pinterest"];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-content px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-display text-2xl tracking-wider2">ASSOYAH</p>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory/60">
              {dict.footer.description}
            </p>

            <div className="mt-8">
              <p className="font-body text-[11px] uppercase tracking-wider2 text-ivory/40">
                {dict.footer.socialTitle}
              </p>
              <ul className="mt-3 flex flex-wrap gap-4">
                {socialPlaceholders.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="font-body text-sm text-ivory/60 underline-offset-4 transition-colors hover:text-ivory hover:underline"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <p className="font-body text-[11px] uppercase tracking-wider2 text-ivory/40">
                {dict.footer.navTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {businessLinks.map((link) => (
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
              <p className="font-body text-[11px] uppercase tracking-wider2 text-ivory/40">
                {dict.footer.contactTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
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
              <p className="mt-6 font-body text-sm text-ivory/55">{dict.footer.address}</p>
              <a
                href="mailto:contact@assoyah.com"
                className="mt-1 block font-body text-sm text-ivory/75 hover:text-ivory"
              >
                contact@assoyah.com
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="font-body text-[11px] uppercase tracking-wider2 text-ivory/40">
              {dict.footer.newsletterTitle}
            </p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/60">
              {dict.footer.newsletterBody}
            </p>
            <form
              className="mt-5 flex max-w-xs items-center gap-2 border-b border-ivory/25 pb-2 focus-within:border-ivory/60"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {dict.footer.newsletterPlaceholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={dict.footer.newsletterPlaceholder}
                className="w-full bg-transparent font-body text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 font-body text-[11px] uppercase tracking-wider2 text-ivory/70 transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {dict.footer.newsletterSubmit}
              </button>
            </form>
          </div>
        </div>

        <StitchDivider tone="light" className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 font-body text-xs text-ivory/45 md:flex-row">
          <p>
            © {year} {dict.common.entity} — {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">
              {dict.footer.legalTitle}
            </a>
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
