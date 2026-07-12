import FadeIn from "./FadeIn";
import Button from "./Button";

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
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-sm leading-relaxed text-ivory/65 md:text-base">
            {body}
          </p>
          <Button href={href} variant="secondary" className="mt-9">
            {buttonLabel}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
