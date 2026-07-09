"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/");
  segments[1] = locale === "fr" ? "en" : "fr";
  const targetHref = segments.join("/") || "/";
  const targetLabel = locale === "fr" ? "EN" : "FR";

  return (
    <Link
      href={targetHref}
      className="font-body text-xs tracking-wider2 uppercase text-charcoal/70 hover:text-charcoal transition-colors border border-charcoal/20 rounded-full px-3 py-1.5"
    >
      {targetLabel}
    </Link>
  );
}
