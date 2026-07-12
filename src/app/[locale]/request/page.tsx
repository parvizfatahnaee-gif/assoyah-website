import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export default function RequestCenterPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { requestCenter } = dict;

  return (
    <>
      <PageHero
        eyebrow={requestCenter.eyebrow}
        title={requestCenter.title}
        sub={requestCenter.intro}
      />

      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {requestCenter.items.map((item, i) => (
            <FadeIn key={item.slug} delay={0.04 * i}>
              <Link
                href={`/${locale}/request/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-sm border border-charcoal/12 p-7 transition-colors hover:border-charcoal/40"
              >
                <div>
                  <h2 className="font-display text-xl text-charcoal">{item.title}</h2>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {item.body}
                  </p>
                </div>
                <span className="mt-6 inline-block font-body text-[11px] uppercase tracking-wider2 text-terracotta transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
