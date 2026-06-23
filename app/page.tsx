"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BenefitItem } from "@/components/benefit-item";
import {
  FontAwesomeIcon,
  FontAwesomeIconName
} from "@/components/font-awesome-icon";
import { LeadForm } from "@/components/lead-form";

const benefits: Array<{
  accent: "navy" | "red";
  icon: FontAwesomeIconName;
  key: "rates" | "offers" | "homes" | "referral" | "vip";
}> = [
  { key: "rates", icon: "tag", accent: "navy" },
  { key: "offers", icon: "gem", accent: "red" },
  { key: "homes", icon: "house", accent: "navy" },
  { key: "referral", icon: "users", accent: "red" },
  { key: "vip", icon: "star", accent: "navy" }
];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="overflow-x-hidden bg-white font-sans text-navy-900 antialiased">
      <section className="relative bg-white md:min-h-[770px] overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/private-club-paris-view.png"
            alt={t("home.hero.imageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-10 pt-7 sm:px-8 md:min-h-[770px] md:px-10 lg:px-14">
          <div className="max-w-[520px] md:w-[52%]">
            <Image
              src="/images/brand-lockup-transparent.png"
              alt={t("home.logoAlt")}
              width={350}
              height={150}
              priority
              className="mx-auto h-auto w-[280px] sm:w-[330px] md:ml-10"
            />

            <h1 className="mt-10 whitespace-nowrap font-display text-[52px] font-bold uppercase leading-none sm:text-[64px] lg:text-[76px]">
              <span className="text-navy-900">{t("home.hero.titlePrivate")}</span>{" "}
              <span className="text-paris-red">{t("home.hero.titleClub")}</span>
            </h1>

            <div className="mx-auto mt-6 flex max-w-[300px] items-center gap-5 text-paris-red md:mx-0 md:ml-24">
              <span className="h-px flex-1 bg-paris-blue/60" />
              <FontAwesomeIcon name="heart" className="h-5 w-5" />
              <span className="h-px flex-1 bg-paris-red/40" />
            </div>

            <p className="mx-auto mt-4 w-[340px] max-w-full text-center font-display text-lg font-semibold uppercase leading-7 text-navy-900 md:mx-0 md:ml-16">
              {t("home.hero.audience")}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                <FontAwesomeIcon name="gift" className="h-10 w-10" />
              </div>
              <div className="font-display text-[25px] font-semibold uppercase leading-[1.15] sm:text-[28px]">
                <p className="text-navy-900">{t("home.hero.giftTitle")}</p>
                <p className="text-paris-red">{t("home.hero.giftText")}</p>
              </div>
            </div>

            <p className="mt-6 max-w-[460px] text-[15px] leading-7 text-slate-800 sm:text-base">
              {t("home.hero.intro")}
            </p>
          </div>

          <div className="relative -mx-5 mt-8 h-[330px] overflow-hidden sm:-mx-8 md:hidden">
            <Image
              src="/images/private-club-paris-view-mobile.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section id="signup" className="relative z-20 -mt-9 px-4 md:-mt-[108px]">
        <LeadForm />
      </section>

      <section id="benefits" className="bg-white pb-4 pt-10">
        <div className="mx-auto w-full max-w-[1000px] px-5">
          <div className="text-center">
            <h2 className="font-display text-[30px] font-medium uppercase leading-none tracking-[0.03em] text-navy-900 sm:text-[34px]">
              {t("home.benefits.heading")}
            </h2>
            <div className="mx-auto mt-2 flex w-24 items-center gap-2">
              <span className="h-0.5 flex-1 bg-navy-900" />
              <span className="h-0.5 flex-1 bg-paris-red" />
            </div>
          </div>

          <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.key}
                accent={benefit.accent}
                icon={benefit.icon}
                title={t(`home.benefits.items.${benefit.key}.title`)}
                description={t(`home.benefits.items.${benefit.key}.text`)}
                withDivider={index > 0}
              />
            ))}
          </div>

          <div className="relative mt-5 overflow-hidden bg-[#f8f6f3] px-5 py-4 sm:px-8">
            <div className="relative z-10 flex items-center gap-5">
              <FontAwesomeIcon
                name="shield-check"
                className="h-11 w-11 shrink-0 text-paris-red"
              />
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-navy-900 sm:text-lg">
                  {t("home.banner.title")}
                </h3>
                <p className="mt-1 text-sm text-slate-700">
                  {t("home.banner.text")}
                </p>
              </div>
            </div>
            <Image
              src="/images/brand-eiffel.png"
              alt=""
              width={80}
              height={116}
              aria-hidden="true"
              className="absolute bottom-[-28px] right-6 h-28 w-auto opacity-[0.08]"
            />
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center bg-navy-900 px-6 py-1">
        <Image
          src="/images/footer-lockup-reference.webp"
          alt={t("home.footer.brand")}
          width={300}
          height={68}
          className="h-auto w-[270px]"
        />
      </footer>
    </main>
  );
}
