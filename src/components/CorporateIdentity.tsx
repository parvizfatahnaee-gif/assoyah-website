import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";

export default function CorporateIdentity({
  eyebrow,
  title,
  intro,
  fields,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  fields: { label: string; value: string }[];
}) {
  return (
    <section className="bg-charcoal py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
              <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-ivory/65">
                {intro}
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {fields.map((field, i) => (
                <FadeIn key={field.label} delay={0.04 * i}>
                  <div className="border-t border-ivory/15 pt-4">
                    <p className="font-body text-[11px] uppercase tracking-wider2 text-ivory/45">
                      {field.label}
                    </p>
                    <p className="mt-2 font-body text-[15px] leading-snug text-ivory/90">
                      {field.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
