import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Eyebrow from "@/components/Eyebrow";
import StitchDivider from "@/components/StitchDivider";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import EditorialRow from "@/components/EditorialRow";
import Button from "@/components/Button";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { home, common, nav, fashion, africanHeritage, privateAtelier, uniforms, manufacturing } = dict;

  const pillars = [
    { title: home.pillar1Title, body: home.pillar1Body },
    { title: home.pillar2Title, body: home.pillar2Body },
    { title: home.pillar3Title, body: home.pillar3Body },
    { title: home.pillar4Title, body: home.pillar4Body },
    { title: home.pillar5Title, body: home.pillar5Body },
  ];

  const whyItems = [
    { title: home.why1Title, body: home.why1Body },
    { title: home.why2Title, body: home.why2Body },
    { title: home.why3Title, body: home.why3Body },
    { title: home.why4Title, body: home.why4Body },
    { title: home.why5Title, body: home.why5Body },
    { title: home.why6Title, body: home.why6Body },
  ];

  const audiences = [
    { title: home.audience1Title, body: home.audience1Body },
    { title: home.audience2Title, body: home.audience2Body },
    { title: home.audience3Title, body: home.audience3Body },
    { title: home.audience4Title, body: home.audience4Body },
  ];

  return (
    <>
      {/* EDITORIAL HERO */}
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
                <Button href={`/${locale}/fashion`} variant="primary">
                  {common.discoverCollections}
                </Button>
                <Button href={`/${locale}/contact`} variant="outline">
                  {common.requestProject}
                </Button>
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

      {/* BRAND MANIFESTO */}
      <section className="mx-auto max-w-content px-6 pb-20 text-center md:px-10 md:pb-28">
        <FadeIn>
          <Eyebrow>{home.manifestoEyebrow}</Eyebrow>
          <p className="mx-auto mt-6 max-w-3xl font-display text-3xl italic leading-snug text-charcoal md:text-4xl">
            “{home.manifestoQuote}”
          </p>
          <p className="mx-auto mt-7 max-w-xl font-body text-[15px] leading-relaxed text-stone">
            {home.manifestoBody}
          </p>
        </FadeIn>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

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

      {/* SIGNATURE COLLECTIONS */}
      <EditorialRow
        eyebrow={home.pillarsEyebrow}
        title={fashion.heroTitle}
        body={fashion.heroSub}
        imagePath="/images/fashion/look-01.jpg"
        imageLabel="Collection Signature"
        ctaLabel={common.discoverCollections}
        ctaHref={`/${locale}/fashion`}
      />

      {/* AFRICAN HERITAGE */}
      <EditorialRow
        eyebrow={africanHeritage.heroEyebrow}
        title={africanHeritage.heroTitle}
        body={africanHeritage.heroSub}
        imagePath="/images/african-heritage/hero.jpg"
        imageLabel="Héritage Africain"
        tone="ochre"
        reverse
        ctaLabel={common.learnMore}
        ctaHref={`/${locale}/african-heritage`}
      />

      {/* PRIVATE ATELIER */}
      <EditorialRow
        eyebrow={privateAtelier.heroEyebrow}
        title={privateAtelier.heroTitle}
        body={privateAtelier.heroSub}
        imagePath="/images/workshop.jpg"
        imageLabel="Atelier Privé"
        tone="charcoal"
        ctaLabel={common.exploreAtelier}
        ctaHref={`/${locale}/private-atelier`}
      />

      {/* CORPORATE UNIFORMS */}
      <EditorialRow
        eyebrow={uniforms.heroEyebrow}
        title={uniforms.heroTitle}
        body={uniforms.heroSub}
        imagePath="/images/uniforms/hero.jpg"
        imageLabel="Programme Uniformes"
        reverse
        ctaLabel={common.viewUniforms}
        ctaHref={`/${locale}/uniforms`}
      />

      {/* MANUFACTURING EXCELLENCE */}
      <EditorialRow
        eyebrow={manufacturing.heroEyebrow}
        title={manufacturing.heroTitle}
        body={manufacturing.heroSub}
        imagePath="/images/manufacturing/hero.jpg"
        imageLabel="Manufacture ASSOYAH"
        tone="charcoal"
        ctaLabel={common.learnMore}
        ctaHref={`/${locale}/manufacturing`}
      />

      <StitchDivider className="pb-20 md:pb-28" />

      {/* CREATIVE DIRECTOR */}
      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
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

      {/* WHY ASSOYAH */}
      <section className="bg-beige/60 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <FadeIn className="max-w-xl">
            <Eyebrow>{home.whyEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              {home.whyTitle}
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <FadeIn key={item.title} delay={0.04 * i}>
                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
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

      <StitchDivider className="pb-20 md:pb-28" />

      {/* JOURNAL PREVIEW */}
      <section className="mx-auto max-w-content px-6 pb-24 text-center md:px-10 md:pb-32">
        <FadeIn>
          <Eyebrow>{home.journalEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
            {home.journalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-stone">
            {home.journalBody}
          </p>
          <Link
            href={`/${locale}/journal`}
            className="mt-8 inline-block font-body text-[13px] uppercase tracking-wider2 text-charcoal underline underline-offset-4 hover:text-terracotta"
          >
            {home.journalCta}
          </Link>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <div className="mx-auto max-w-content px-6 text-center md:px-10">
          <FadeIn>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {home.ctaTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-ivory/65 md:text-base">
              {home.ctaBody}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={`/${locale}/contact`} variant="secondary">
                {nav.requestProject}
              </Button>
              <Button href={`/${locale}/private-atelier`} variant="outlineLight">
                {common.exploreAtelier}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
