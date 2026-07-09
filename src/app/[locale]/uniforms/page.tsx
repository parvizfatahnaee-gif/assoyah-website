import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";

export default function UniformsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { uniforms, common } = dict;

  const sectors = [
    uniforms.sector1,
    uniforms.sector2,
    uniforms.sector3,
    uniforms.sector4,
    uniforms.sector5,
    uniforms.sector6,
  ];

  const capabilities = [
    { title: uniforms.capability1Title, body: uniforms.capability1Body },
    { title: uniforms.capability2Title, body: uniforms.capability2Body },
    { title: uniforms.capability3Title, body: uniforms.capability3Body },
  ];

  return (
    <>
      <PageHero eyebrow={uniforms.heroEyebrow} title={uniforms.heroTitle} sub={uniforms.heroSub} />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <FadeIn className="max-w-xl">
          <Eyebrow>{uniforms.sectorsEyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-8 flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-charcoal/20 px-5 py-2 font-body text-sm text-charcoal/80"
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <ImagePlaceholder
                path="/images/uniforms/hero.jpg"
                label="Programme Uniformes"
                ratio="aspect-[4/5]"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.1}>
              <Eyebrow>{uniforms.approachEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {uniforms.approachTitle}
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
                {uniforms.approachBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-beige/60 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={0.05 * i}>
                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="font-display text-xl text-charcoal">{c.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {c.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={uniforms.ctaTitle}
        body={uniforms.ctaBody}
        buttonLabel={common.getInTouch}
        href={`/${locale}/contact`}
      />
    </>
  );
}
