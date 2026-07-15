import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.africanHeritage.heroTitle} — ${dict.meta.siteName}`,
    description: dict.africanHeritage.heroSub,
  };
}

export default function AfricanHeritagePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { africanHeritage, common } = dict;

  const elements = [
    africanHeritage.element1,
    africanHeritage.element2,
    africanHeritage.element3,
    africanHeritage.element4,
  ];

  return (
    <>
      <PageHero
        eyebrow={africanHeritage.heroEyebrow}
        title={africanHeritage.heroTitle}
        sub={africanHeritage.heroSub}
      />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <FadeIn>
              <ImagePlaceholder
                path="/images/african-heritage/hero.jpg"
                label="Collection Héritage"
                ratio="aspect-[4/5]"
                tone="ochre"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <FadeIn delay={0.1}>
              <Eyebrow>{africanHeritage.philosophyEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {africanHeritage.philosophyTitle}
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
                {africanHeritage.philosophyBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <FadeIn className="max-w-xl">
          <Eyebrow>{africanHeritage.elementsEyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {elements.map((el, i) => (
            <FadeIn key={el} delay={0.05 * i}>
              <div className="flex items-center gap-4 border-b border-charcoal/12 pb-5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <p className="font-body text-sm leading-relaxed text-charcoal/85">
                  {el}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBanner
        title={africanHeritage.ctaTitle}
        body={africanHeritage.ctaBody}
        buttonLabel={common.discoverCollections}
        href={`/${locale}/fashion`}
      />
    </>
  );
}
