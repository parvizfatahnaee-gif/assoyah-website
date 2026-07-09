import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";

export default function JournalPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { journal } = dict;

  return (
    <>
      <PageHero eyebrow={journal.heroEyebrow} title={journal.heroTitle} sub={journal.heroSub} />

      <section className="mx-auto max-w-content px-6 pb-28 text-center md:px-10">
        <FadeIn>
          <Eyebrow>{journal.comingEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
            {journal.comingTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-stone">
            {journal.comingBody}
          </p>
        </FadeIn>
      </section>
    </>
  );
}
