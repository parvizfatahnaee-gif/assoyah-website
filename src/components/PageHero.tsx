import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";

export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
      <FadeIn>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-charcoal md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl font-body text-[15px] leading-relaxed text-stone md:text-base">
          {sub}
        </p>
      </FadeIn>
    </section>
  );
}
