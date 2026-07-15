import type { Metadata } from "next";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.contact.heroTitle} — ${dict.meta.siteName}`,
    description: dict.contact.heroSub,
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { contact, company } = dict;

  const inputClass =
    "w-full border-b border-charcoal/25 bg-transparent py-3 font-body text-[15px] text-charcoal placeholder:text-stone/50 focus:border-terracotta focus:outline-none";
  const labelClass =
    "font-body text-[11px] uppercase tracking-wider2 text-stone";

  return (
    <>
      <PageHero eyebrow={contact.heroEyebrow} title={contact.heroTitle} sub={contact.heroSub} />

      <section className="mx-auto max-w-content px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <form
                name="assoyah-contact"
                method="POST"
                data-netlify="true"
                action={`/${locale}/contact/thank-you`}
                className="space-y-8"
                {...{ "netlify-honeypot": "bot-field" }}
              >
                <input type="hidden" name="form-name" value="assoyah-contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      {contact.formNameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      {contact.formEmailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      {contact.formPhoneLabel}
                    </label>
                    <input id="phone" name="phone" type="tel" className={`${inputClass} mt-2`} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="type">
                      {contact.formTypeLabel}
                    </label>
                    <select id="type" name="request_type" className={`${inputClass} mt-2`} defaultValue="">
                      <option value="" disabled>
                        {contact.formTypePlaceholder}
                      </option>
                      <option value="private_atelier">{contact.formType1}</option>
                      <option value="uniform_program">{contact.formType2}</option>
                      <option value="production_partnership">{contact.formType3}</option>
                      <option value="other">{contact.formType4}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    {contact.formMessageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${inputClass} mt-2 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-charcoal px-8 py-3 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:bg-terracotta"
                >
                  {contact.formSubmit}
                </button>
              </form>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <FadeIn delay={0.1}>
              <Eyebrow>{contact.detailsEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-2xl text-charcoal">
                {contact.detailsTitle}
              </h2>
              <p className="mt-2 font-body text-sm text-stone">
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
              <div className="mt-8 space-y-3 font-body text-sm text-charcoal/80">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                    {contact.emailLabel}
                  </p>
                  <a href={`mailto:${company.email}`} className="hover:text-terracotta">
                    {company.email}
                  </a>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                    {contact.phoneLabel}
                  </p>
                  <a href={`tel:${company.phoneHref}`} className="hover:text-terracotta">
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                    {contact.whatsappLabel}
                  </p>
                  <a
                    href={`https://wa.me/${company.whatsappHref}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-terracotta"
                  >
                    {company.whatsapp}
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-charcoal/15 pt-6">
                <p className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                  {contact.hoursTitle}
                </p>
                <div className="mt-3 space-y-1 font-body text-sm text-charcoal/80">
                  <p>{contact.hoursWeekdays}</p>
                  <p>{contact.hoursSaturday}</p>
                  <p>{contact.hoursSunday}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-24" />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <FadeIn className="max-w-xl">
          <Eyebrow>{contact.departmentsEyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
            {contact.departmentsTitle}
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {contact.departments.map((dept, i) => (
            <FadeIn key={dept.label} delay={0.04 * i}>
              <div className="border-t border-charcoal/15 pt-4">
                <h3 className="font-display text-lg text-charcoal">{dept.label}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-stone">{dept.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-beige/40 py-20 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <FadeIn className="max-w-xl">
            <Eyebrow>{contact.mapEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-charcoal md:text-3xl">
              {contact.mapTitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-8 overflow-hidden rounded-sm border border-charcoal/10">
            <iframe
              title={contact.mapTitle}
              src="https://www.google.com/maps?q=Angr%C3%A9%2C%20Abidjan%2C%20C%C3%B4te%20d%27Ivoire&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
