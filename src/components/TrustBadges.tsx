import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";

export default function TrustBadges({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
}) {
  return (
    <section className="border-y border-charcoal/10 bg-beige/40 py-16 md:py-20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <FadeIn className="max-w-lg">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl text-charcoal md:text-3xl">{title}</h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <FadeIn key={item} delay={0.04 * i}>
              <div className="flex h-16 items-center justify-center rounded-sm border border-charcoal/12 px-3 text-center">
                <span className="font-body text-[11px] uppercase tracking-wider2 text-stone">
                  {item}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
