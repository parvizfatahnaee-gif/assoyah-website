import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CtaBanner({
  title,
  body,
  buttonLabel,
  href,
}: {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="bg-charcoal py-20 text-ivory md:py-24">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-ivory/65 md:text-base">
            {body}
          </p>
          <Link
            href={href}
            className="mt-9 inline-block rounded-full bg-ivory px-7 py-3 font-body text-[13px] uppercase tracking-wider2 text-charcoal transition-colors hover:bg-terracotta hover:text-ivory"
          >
            {buttonLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
