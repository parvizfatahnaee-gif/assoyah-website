import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import FadeIn from "@/components/FadeIn";
import StitchDivider from "@/components/StitchDivider";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import Leadership from "@/components/Leadership";
import CorporateIdentity from "@/components/CorporateIdentity";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.about.heroTitle} — ${dict.meta.siteName}`,
    description: dict.about.heroSub,
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  const { about, company } = dict;

  const values = [
    { title: about.value1Title, body: about.value1Body },
    { title: about.value2Title, body: about.value2Body },
    { title: about.value3Title, body: about.value3Body },
    { title: about.value4Title, body: about.value4Body },
  ];

  return (
    <>
      <PageHero eyebrow={about.heroEyebrow} title={about.heroTitle} sub={about.heroSub} />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <ImagePlaceholder
                path="/images/workshop.jpg"
                label="L'Atelier ASSOYAH"
                ratio="aspect-[4/5]"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.1}>
              <Eyebrow>{about.storyEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {about.storyTitle}
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
                {about.storyBody1}
              </p>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-stone">
                {about.storyBody2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:order-2">
            <FadeIn>
              <ImagePlaceholder
                path="/images/director.jpg"
                label={about.directorName}
                ratio="aspect-[4/5]"
                tone="ochre"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <FadeIn delay={0.1}>
              <Eyebrow>{about.directorEyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                {about.directorName}
              </h2>
              <p className="mt-2 font-body text-sm uppercase tracking-wider2 text-terracotta">
                {about.directorRoleList.join(" — ")}
              </p>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-stone">
                {about.directorBody}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-beige/60 py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <FadeIn className="max-w-xl">
            <Eyebrow>{about.valuesEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
              {about.valuesTitle}
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.05 * i}>
                <div className="border-t border-charcoal/15 pt-5">
                  <h3 className="font-display text-xl text-charcoal">{v.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone">
                    {v.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StitchDivider className="pb-20 md:pb-28" />

      <Leadership
        eyebrow={about.leadershipEyebrow}
        title={about.leadershipTitle}
        intro={about.leadershipIntro}
        managingDirector={{
          name: company.managingDirectorName,
          roleList: about.mdRoleList,
          bio: about.mdBio,
          message: about.mdMessage,
          messageLabel: about.mdMessageLabel,
          photo: "/images/leadership/managing-director.jpg",
        }}
        commercialManager={{
          name: company.commercialManagerName,
          roleList: about.cmRoleList,
          bio: about.cmBio,
          message: about.cmMessage,
          messageLabel: about.cmMessageLabel,
          photo: "/images/leadership/commercial-manager.jpg",
        }}
        sharedVisionTitle={about.sharedVisionTitle}
        sharedVisionBody={about.sharedVisionBody}
      />

      <CorporateIdentity
        eyebrow={about.corpIdentityEyebrow}
        title={about.corpIdentityTitle}
        intro={about.corpIdentityIntro}
        fields={[
          { label: about.corpFieldEntity, value: company.legalName },
          {
            label: about.corpFieldLeadership,
            value: `${company.managingDirectorName} (${company.managingDirectorRole}) — ${company.commercialManagerName} (${company.commercialManagerRole})`,
          },
          { label: about.corpFieldAddress, value: `${company.addressLine1}, ${company.addressLine2}` },
          { label: about.corpFieldRCCM, value: company.rccm },
          { label: about.corpFieldIDU, value: company.idu },
          { label: about.corpFieldContact, value: `${company.email} — ${company.phone}` },
        ]}
      />

      <CtaBanner
        title={about.ctaTitle}
        body={about.ctaBody}
        buttonLabel={dict.common.exploreAtelier}
        href={`/${locale}/private-atelier`}
      />
    </>
  );
}
