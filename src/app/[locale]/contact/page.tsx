import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";

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
                action={`/${locale}/contact/thank-you`}
                className="space-y-8"
              >
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
                {contact.detailsLocation}
              </p>
              <div className="mt-8 space-y-1 font-body text-sm text-charcoal/80">
                <p>{company.email}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
