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
    title: `${dict.fashion.heroTitle} — ${dict.meta.siteName}`,
    description: dict.fashion.heroSub,
  };
}

export default function FashionPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { fashion, common } = dict;

  return (
    <>
      <PageHero eyebrow={fashion.heroEyebrow} title={fashion.heroTitle} sub={fashion.heroSub} />

      <section className="mx-auto max-w-content px-6 pb-16 md:px-10">
        <FadeIn>
          <p className="max-w-2xl font-body text-[15px] leading-relaxed text-stone">
            {fashion.intro}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <ImagePlaceholder path="/images/fashion/look-01.jpg" label="Look 01" ratio="aspect-[3/4]" />
          <ImagePlaceholder path="/images/fashion/look-02.jpg" label="Look 02" ratio="aspect-[3/4]" tone="charcoal" />
          <ImagePlaceholder path="/images/fashion/look-03.jpg" label="Look 03" ratio="aspect-[3/4]" />
          <ImagePlaceholder path="/images/fashion/look-04.jpg" label="Look 04" ratio="aspect-[3/4]" tone="ochre" />
          <ImagePlaceholder path="/images/fashion/look-05.jpg" label="Look 05" ratio="aspect-[3/4]" />
          <ImagePlaceholder path="/images/fashion/look-06.jpg" label="Look 06" ratio="aspect-[3/4]" tone="charcoal" />
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="mx-auto max-w-content px-6 pb-20 text-center md:px-10 md:pb-28">
        <FadeIn>
          <Eyebrow>{fashion.lookbookEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
            {fashion.lookbookTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-stone">
            {fashion.lookbookBody}
          </p>
        </FadeIn>
      </section>

      <CtaBanner
        title={fashion.ctaTitle}
        body={fashion.ctaBody}
        buttonLabel={common.getInTouch}
        href={`/${locale}/contact`}
      />
    </>
  );
}
