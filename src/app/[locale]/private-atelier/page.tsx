import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";

export default function PrivateAtelierPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { privateAtelier, common, faq } = dict;

  const forWho = [
    privateAtelier.forWho1,
    privateAtelier.forWho2,
    privateAtelier.forWho3,
    privateAtelier.forWho4,
    privateAtelier.forWho5,
  ];

  const steps = [
    { title: privateAtelier.step1Title, body: privateAtelier.step1Body },
    { title: privateAtelier.step2Title, body: privateAtelier.step2Body },
    { title: privateAtelier.step3Title, body: privateAtelier.step3Body },
    { title: privateAtelier.step4Title, body: privateAtelier.step4Body },
  ];

  return (
    <>
      <PageHero
        eyebrow={privateAtelier.heroEyebrow}
        title={privateAtelier.heroTitle}
        sub={privateAtelier.heroSub}
      />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <ImagePlaceholder
                path="/images/workshop.jpg"
                label="Atelier Privé"
                ratio="aspect-[4/5]"
                tone="charcoal"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.1}>
              <Eyebrow>{privateAtelier.forWhoEyebrow}</Eyebrow>
              <ul className="mt-6 space-y-4">
                {forWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-charcoal/12 pb-4 font-display text-xl text-charcoal"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="bg-beige/60 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <FadeIn className="max-w-xl">
            <Eyebrow>{privateAtelier.processEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
              {privateAtelier.processTitle}
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={0.05 * i}>
                <p className="font-display text-4xl text-terracotta/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                  {step.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion eyebrow={faq.eyebrow} title={faq.title} items={faq.items} />

      <CtaBanner
        title={privateAtelier.ctaTitle}
        body={privateAtelier.ctaBody}
        buttonLabel={common.requestProject}
        href={`/${locale}/contact`}
      />
    </>
  );
}
