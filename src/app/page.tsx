import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: { locale: string; type: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const item = dict.requestCenter.items.find((i) => i.slug === params.type);
  return {
    title: `${item ? item.title : dict.requestCenter.title} — ${dict.meta.siteName}`,
    description: item ? item.body : dict.requestCenter.intro,
  };
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

  const inputClass =
    "w-full border-b border-charcoal/25 bg-transparent py-3 font-body text-[15px] text-charcoal placeholder:text-stone/50 focus:border-terracotta focus:outline-none";
  const labelClass = "font-body text-[11px] uppercase tracking-wider2 text-stone";
  const formName = `request-${item.slug}`;

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

              <form
                name={formName}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action={`/${locale}/contact/thank-you`}
                encType="multipart/form-data"
                className="mt-10 space-y-8"
              >
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="request_type" value={item.slug} />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div>
                  <h2 className={labelClass}>{requestCenter.personalInfoLabel}</h2>
                  <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor={`${item.slug}-name`}>
                        {requestCenter.fullNameLabel}
                      </label>
                      <input
                        id={`${item.slug}-name`}
                        name="name"
                        type="text"
                        required
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`${item.slug}-email`}>
                        {requestCenter.emailFieldLabel}
                      </label>
                      <input
                        id={`${item.slug}-email`}
                        name="email"
                        type="email"
                        required
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`${item.slug}-phone`}>
                        {requestCenter.phoneFieldLabel}
                      </label>
                      <input
                        id={`${item.slug}-phone`}
                        name="phone"
                        type="tel"
                        className={`${inputClass} mt-2`}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor={`${item.slug}-method`}>
                        {requestCenter.contactMethodLabel}
                      </label>
                      <select
                        id={`${item.slug}-method`}
                        name="preferred_contact_method"
                        className={`${inputClass} mt-2`}
                        defaultValue={requestCenter.contactMethodOptions[0]}
                      >
                        {requestCenter.contactMethodOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className={labelClass}>{requestCenter.companyInfoLabel}</h2>
                  <div className="mt-4">
                    <label className={labelClass} htmlFor={`${item.slug}-company`}>
                      {requestCenter.companyNameLabel}
                    </label>
                    <input
                      id={`${item.slug}-company`}
                      name="company_name"
                      type="text"
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor={`${item.slug}-description`}>
                    {requestCenter.projectDescLabel}
                  </label>
                  <textarea
                    id={`${item.slug}-description`}
                    name="project_description"
                    rows={5}
                    required
                    className={`${inputClass} mt-2 resize-none`}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor={`${item.slug}-file`}>
                    {requestCenter.fileUploadLabel}
                  </label>
                  <input
                    id={`${item.slug}-file`}
                    name="attachment"
                    type="file"
                    className="mt-3 block font-body text-sm text-charcoal file:mr-4 file:rounded-full file:border-0 file:bg-charcoal file:px-4 file:py-2 file:font-body file:text-[12px] file:uppercase file:tracking-wider2 file:text-ivory hover:file:bg-terracotta"
                  />
                </div>

                <p className="font-body text-xs leading-relaxed text-stone/70">
                  {requestCenter.privacyNote}
                </p>

                <button
                  type="submit"
                  className="rounded-full bg-charcoal px-8 py-3 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:bg-terracotta"
                >
                  {requestCenter.formSubmit}
                </button>
              </form>
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
