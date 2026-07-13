import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { requestSlugs } from "@/i18n/requestSlugs";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return requestSlugs.map((type) => ({ type }));
}

export default function RequestDetailPage({
  params,
}: {
  params: { locale: string; type: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { requestCenter } = dict;

  const item = requestCenter.items.find((i) => i.slug === params.type);
  if (!item) return notFound();

  const placeholderFields = [
    requestCenter.personalInfoLabel,
    requestCenter.companyInfoLabel,
    requestCenter.projectDescLabel,
    requestCenter.fileUploadLabel,
    requestCenter.contactMethodLabel,
  ];

  return (
    <>
      <PageHero eyebrow={requestCenter.eyebrow} title={item.title} sub={item.body} />

      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="max-w-xl font-body text-[15px] leading-relaxed text-stone">
                {requestCenter.formIntro}
              </p>

              <div className="mt-10 space-y-6">
                {placeholderFields.map((label) => (
                  <div
                    key={label}
                    className="rounded-sm border border-dashed border-charcoal/20 p-6"
                  >
                    <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                      {label}
                    </p>
                    <div className="mt-3 h-10 w-full max-w-md rounded-sm bg-beige/50" />
                  </div>
                ))}
              </div>

              <p className="mt-8 font-body text-xs uppercase tracking-wider2 text-terracotta">
                {requestCenter.comingSoonNote}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <FadeIn delay={0.1}>
              <Eyebrow>{requestCenter.eyebrow}</Eyebrow>
              <Link
                href={`/${locale}/contact`}
                className="mt-4 inline-block font-display text-2xl text-charcoal underline underline-offset-4 hover:text-terracotta"
              >
                {requestCenter.ctaLabel}
              </Link>
              <div className="mt-10">
                <Link
                  href={`/${locale}/request`}
                  className="group/link inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-wider2 text-stone transition-colors hover:text-charcoal"
                >
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:-translate-x-1">
                    ←
                  </span>
                  {requestCenter.backToCenter}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
