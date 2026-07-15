import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.manufacturing.heroTitle} — ${dict.meta.siteName}`,
    description: dict.manufacturing.heroSub,
  };
}

export default function ManufacturingPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { manufacturing, common, faq, trust } = dict;

  const capabilities = [
    { title: manufacturing.capability1Title, body: manufacturing.capability1Body },
    { title: manufacturing.capability2Title, body: manufacturing.capability2Body },
    { title: manufacturing.capability3Title, body: manufacturing.capability3Body },
    { title: manufacturing.capability4Title, body: manufacturing.capability4Body },
    { title: manufacturing.capability5Title, body: manufacturing.capability5Body },
  ];

  return (
    <>
      <PageHero
        eyebrow={manufacturing.heroEyebrow}
        title={manufacturing.heroTitle}
        sub={manufacturing.heroSub}
      />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <FadeIn className="max-w-xl">
          <Eyebrow>{manufacturing.capabilitiesEyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((c) => (
            <FadeIn key={c.title}>
              <div className="border-t border-charcoal/15 pt-5">
                <h3 className="font-display text-lg text-charcoal">{c.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                  {c.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <ImagePlaceholder
                path="/images/manufacturing/hero.jpg"
                label="Manufacture ASSOYAH"
                ratio="aspect-[4/5]"
                tone="charcoal"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.1}>
              <Eyebrow>{manufacturing.partnershipsEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {manufacturing.partnershipsTitle}
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
                {manufacturing.partnershipsBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <TrustBadges eyebrow={trust.eyebrow} title={trust.title} items={trust.items} />

      <FaqAccordion eyebrow={faq.eyebrow} title={faq.title} items={faq.items} />

      <CtaBanner
        title={manufacturing.ctaTitle}
        body={manufacturing.ctaBody}
        buttonLabel={common.getInTouch}
        href={`/${locale}/contact`}
      />
    </>
  );
}
