import Link from "next/link";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";

export default function ThankYouPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const isFr = locale === "fr";

  return (
    <section className="mx-auto flex max-w-content flex-col items-center px-6 py-32 text-center md:px-10">
      <FadeIn>
        <Eyebrow>{dict.contact.heroEyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
          {isFr ? "Merci." : "Thank you."}
        </h1>
        <p className="mx-auto mt-5 max-w-md font-body text-[15px] leading-relaxed text-stone">
          {isFr
            ? "Votre demande a bien été transmise à la maison ASSOYAH. Notre équipe vous répondra dans les meilleurs délais."
            : "Your request has been sent to the ASSOYAH house. Our team will respond to you as soon as possible."}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-9 inline-block rounded-full bg-charcoal px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-ivory transition-colors hover:bg-terracotta"
        >
          {isFr ? "Retour à l'accueil" : "Back to home"}
        </Link>
      </FadeIn>
    </section>
  );
}
