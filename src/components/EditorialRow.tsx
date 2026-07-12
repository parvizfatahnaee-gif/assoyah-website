import Link from "next/link";
import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";
import ImagePlaceholder from "./ImagePlaceholder";

export default function EditorialRow({
  eyebrow,
  title,
  body,
  imagePath,
  imageLabel,
  imageRatio = "aspect-[4/5]",
  tone = "beige",
  reverse = false,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  imagePath: string;
  imageLabel: string;
  imageRatio?: string;
  tone?: "beige" | "charcoal" | "ochre";
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div
          className={`lg:col-span-6 ${
            reverse ? "lg:order-2 lg:col-start-7" : ""
          }`}
        >
          <FadeIn>
            <ImagePlaceholder
              path={imagePath}
              label={imageLabel}
              ratio={imageRatio}
              tone={tone}
            />
          </FadeIn>
        </div>
        <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:col-start-8"}`}>
          <FadeIn delay={0.1}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
              {title}
            </h2>
            <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
              {body}
            </p>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="mt-8 inline-block font-body text-[13px] uppercase tracking-wider2 text-charcoal underline underline-offset-4 transition-colors hover:text-terracotta"
              >
                {ctaLabel}
              </Link>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
