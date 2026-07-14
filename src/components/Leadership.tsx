import Eyebrow from "./Eyebrow";
import FadeIn from "./FadeIn";
import Portrait from "./Portrait";
import StitchDivider from "./StitchDivider";

type Executive = {
  name: string;
  roleList: readonly string[];
  bio: string;
  message: string;
  messageLabel: string;
  photo: string;
};

export default function Leadership({
  eyebrow,
  title,
  intro,
  managingDirector,
  commercialManager,
  sharedVisionTitle,
  sharedVisionBody,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  managingDirector: Executive;
  commercialManager: Executive;
  sharedVisionTitle: string;
  sharedVisionBody: string;
}) {
  const executives = [managingDirector, commercialManager];

  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <FadeIn className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">{title}</h2>
        <p className="mt-5 font-body text-[15px] leading-relaxed text-stone">{intro}</p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {executives.map((exec, i) => (
          <FadeIn key={exec.name} delay={0.08 * i}>
            <Portrait src={exec.photo} alt={exec.name} tone={i === 0 ? "beige" : "ochre"} />
            <h3 className="mt-7 font-display text-2xl text-charcoal">{exec.name}</h3>
            <p className="mt-2 font-body text-[13px] uppercase tracking-wider2 text-terracotta">
              {exec.roleList.join(" — ")}
            </p>
            <p className="mt-5 font-body text-[15px] leading-relaxed text-stone">{exec.bio}</p>
            <div className="mt-6 border-l-2 border-charcoal/15 pl-5">
              <p className="font-body text-[11px] uppercase tracking-wider2 text-stone/70">
                {exec.messageLabel}
              </p>
              <p className="mt-2 font-display text-lg italic leading-snug text-charcoal">
                “{exec.message}”
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <StitchDivider className="mt-20 pb-20 md:mt-24 md:pb-24" />

      <FadeIn className="mx-auto max-w-2xl text-center">
        <h3 className="font-display text-2xl text-charcoal md:text-3xl">{sharedVisionTitle}</h3>
        <p className="mt-5 font-body text-[15px] leading-relaxed text-stone">{sharedVisionBody}</p>
      </FadeIn>
    </section>
  );
}
