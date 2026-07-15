import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.legal.heroTitle} — ${dict.meta.siteName}`,
    description: dict.legal.heroSub,
  };
}

export default function LegalPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { legal, company } = dict;

  const companyFields = [
    { label: legal.fieldEntity, value: company.legalName },
    { label: legal.fieldAddress, value: `${company.addressLine1}, ${company.addressLine2}` },
    { label: legal.fieldRCCM, value: company.rccm },
    { label: legal.fieldIDU, value: company.idu },
    { label: legal.fieldEmail, value: company.email },
    { label: legal.fieldPhone, value: company.phone },
  ];

  const sections = [
    { id: "notice", title: legal.noticeTitle, body: legal.noticeBody },
    { id: "privacy", title: legal.privacyTitle, body: legal.privacyBody },
    { id: "terms", title: legal.termsTitle, body: legal.termsBody },
    { id: "cookies", title: legal.cookiesTitle, body: legal.cookiesBody },
  ];

  return (
    <>
      <PageHero eyebrow={legal.heroEyebrow} title={legal.heroTitle} sub={legal.heroSub} />

      <section id="company" className="mx-auto max-w-content scroll-mt-28 px-6 pb-16 md:px-10">
        <FadeIn>
          <h2 className="font-display text-2xl text-charcoal md:text-3xl">{legal.companyTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {companyFields.map((field) => (
              <div key={field.label} className="border-t border-charcoal/15 pt-4">
                <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                  {field.label}
                </p>
                <p className="mt-2 font-body text-[15px] leading-snug text-charcoal">
                  {field.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <StitchDivider className="pb-16" />

      <section className="mx-auto max-w-content space-y-16 px-6 pb-24 md:px-10 md:pb-32">
        {sections.map((s) => (
          <FadeIn key={s.id} id={s.id} className="scroll-mt-28 max-w-3xl">
            <h2 className="font-display text-2xl text-charcoal md:text-3xl">{s.title}</h2>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-stone">{s.body}</p>
          </FadeIn>
        ))}
      </section>
    </>
  );
}
