import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Eyebrow from "@/components/Eyebrow";
import StitchDivider from "@/components/StitchDivider";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { home, common, nav } = dict;

  const pillars = [
    { title: home.pillar1Title, body: home.pillar1Body },
    { title: home.pillar2Title, body: home.pillar2Body },
    { title: home.pillar3Title, body: home.pillar3Body },
    { title: home.pillar4Title, body: home.pillar4Body },
    { title: home.pillar5Title, body: home.pillar5Body },
  ];

  const audiences = [
    { title: home.audience1Title, body: home.audience1Body },
    { title: home.audience2Title, body: home.audience2Body },
    { title: home.audience3Title, body: home.audience3Body },
    { title: home.audience4Title, body: home.audience4Body },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6 lg:pr-6">
            <FadeIn>
              <Eyebrow>{home.heroEyebrow}</Eyebrow>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 font-display text-[2.6rem] leading-[1.08] text-charcoal sm:text-6xl lg:text-[3.6rem]">
                {home.heroHeadline1}
                <br />
                {home.heroHeadline2}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-stone">
                {home.heroSub}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/fashion`}
                  className="rounded-full bg-charcoal px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:bg-terracotta"
                >
                  {common.discoverCollections}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-full border border-charcoal/25 px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-charcoal transition-colors hover:border-charcoal"
                >
                  {common.requestProject}
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.1} className="grid grid-cols-2 gap-4">
              <ImagePlaceholder
                path="/images/hero-home.jpg"
                label="Silhouette — Collection Signature"
                ratio="aspect-[3/4]"
                tone="beige"
              />
              <div className="mt-10 flex flex-col gap-4">
                <ImagePlaceholder
                  path="/images/workshop.jpg"
                  label="Atelier — Confection"
                  ratio="aspect-square"
                  tone="charcoal"
                />
                <ImagePlaceholder
                  path="/images/director.jpg"
                  label="Direction Artistique"
                  ratio="aspect-[4/5]"
                  tone="ochre"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <StitchDivider className="pb-14 md:pb-20" />
      </section>

      {/* VISION */}
      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <Eyebrow>{home.visionEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
                {home.visionTitle}
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeIn delay={0.1}>
              <p className="font-body text-[15px] leading-relaxed text-stone md:text-base">
                {home.visionBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      {/* PILLARS */}
      <section className="bg-beige/60 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <FadeIn className="max-w-xl">
            <Eyebrow>{home.pillarsEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              {home.pillarsTitle}
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={0.05 * i}>
                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="font-display text-xl text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE DIRECTOR */}
      <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <ImagePlaceholder
                path="/images/director.jpg"
                label="Edoukou Assoyah Gwladys Nadia"
                ratio="aspect-[4/5]"
                tone="beige"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.1}>
              <Eyebrow>{home.directorEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {home.directorName}
              </h2>
              <p className="mt-2 font-body text-sm uppercase tracking-wider2 text-terracotta">
                {home.directorRole}
              </p>
              <p className="mt-6 font-display text-xl italic leading-snug text-charcoal/85 md:text-2xl">
                “{home.directorQuote}”
              </p>
              <Link
                href={`/${locale}/about`}
                className="mt-8 inline-block font-body text-[13px] uppercase tracking-wider2 text-charcoal underline underline-offset-4 hover:text-terracotta"
              >
                {common.learnMore}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      {/* AUDIENCES */}
      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <FadeIn className="max-w-xl">
          <Eyebrow>{home.audiencesEyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={0.05 * i}>
              <div className="h-full rounded-sm border border-charcoal/12 p-6">
                <h3 className="font-display text-lg text-charcoal">{a.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                  {a.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 text-ivory md:py-28">
        <div className="mx-auto max-w-content px-6 text-center md:px-10">
          <FadeIn>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {home.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-ivory/65 md:text-base">
              {home.ctaBody}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-full bg-ivory px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-charcoal transition-colors hover:bg-terracotta hover:text-ivory"
              >
                {nav.requestProject}
              </Link>
              <Link
                href={`/${locale}/private-atelier`}
                className="rounded-full border border-ivory/30 px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:border-ivory"
              >
                {common.exploreAtelier}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
