"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@/components/font-awesome-icon";

export default function MerciPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-paris-ink">
      <section className="relative isolate min-h-screen overflow-hidden px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
        <Image
          src="/images/merci-background.png"
          alt={t("merci.backgroundAlt")}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-white/18" />
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-white/90 to-transparent" />

        <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[760px] flex-col items-center justify-center">
          <div className="w-full rounded-[18px] bg-white/96 px-4 py-6 text-center shadow-[0_30px_90px_rgba(3,31,70,0.24)] ring-1 ring-white/80 backdrop-blur sm:px-10 sm:py-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-paris-red sm:mb-5 sm:h-20 sm:w-20">
              <FontAwesomeIcon name="envelope" className="h-11 w-11 sm:h-16 sm:w-16" />
            </div>

            <h1 className="text-balance text-[28px] font-black uppercase leading-[1.12] tracking-[0.02em] text-navy-900 sm:text-5xl sm:leading-tight sm:tracking-[0.04em]">
              {t("merci.title")}
            </h1>

            <div className="mx-auto my-4 flex max-w-xs items-center gap-4 text-paris-red sm:my-6 sm:gap-5">
              <span className="h-px flex-1 bg-paris-blue" />
              <FontAwesomeIcon name="heart" className="h-5 w-5" />
              <span className="h-px flex-1 bg-paris-red" />
            </div>

            <div className="mx-auto grid max-w-[560px] gap-4 text-left sm:gap-5">
              <div className="flex gap-3 sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white sm:h-16 sm:w-16">
                  <FontAwesomeIcon name="gift" className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <div>
                  <p className="text-base font-extrabold leading-snug text-navy-900 sm:text-xl">
                    {t("merci.giftTitle")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700 sm:mt-2 sm:text-base sm:leading-7">
                    {t("merci.giftText")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="flex h-9 w-12 shrink-0 items-center justify-center text-navy-900 sm:h-10 sm:w-16">
                  <FontAwesomeIcon name="envelope" className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="text-sm font-medium leading-6 text-paris-red sm:text-base sm:leading-7">
                  {t("merci.inboxText")}
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-slate-200 sm:my-8" />

            <div className="mx-auto flex max-w-[560px] gap-3 text-left sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paris-blue/20 text-paris-red sm:h-16 sm:w-16">
                <FontAwesomeIcon name="bullhorn" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h2 className="text-xl font-black leading-tight text-navy-900 sm:text-2xl">
                  {t("merci.platformTitleLine1")}
                  <span className="block">{t("merci.platformTitleLine2")}</span>
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700 sm:mt-3 sm:text-base sm:leading-7">
                  {t("merci.platformText")}
                </p>
                <p className="mt-3 text-sm font-extrabold text-navy-900 sm:mt-4 sm:text-base">
                  <span className="text-paris-red underline decoration-paris-red/40 underline-offset-4">
                    {t("merci.helpText")}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[14px] bg-slate-50 px-4 py-6 shadow-inner ring-1 ring-slate-100 sm:mt-8 sm:px-8 sm:py-7">
              <div className="mb-4 flex justify-center gap-2 text-[#f5b618] sm:gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    name="star"
                    className="h-8 w-8 sm:h-12 sm:w-12"
                  />
                ))}
              </div>

              <h2 className="text-balance text-2xl font-black uppercase leading-tight tracking-[0.01em] text-navy-900 sm:text-4xl sm:tracking-[0.02em]">
                {t("merci.reviewTitleBefore")}{" "}
                <span className="text-paris-red">{t("merci.reviewTitleHighlight")}</span>
                {t("merci.reviewTitleAfter")}
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-700 sm:mt-4 sm:text-base sm:leading-7">
                {t("merci.reviewText")}
              </p>

              <Link
                href="https://g.page/r/CfHaS_3lgtl7EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-5 flex min-h-14 max-w-[420px] items-center justify-center gap-3 rounded-[8px] bg-paris-red px-3 py-3 text-sm font-extrabold uppercase leading-tight tracking-[0.02em] text-white shadow-lg shadow-red-950/20 transition hover:bg-[#b90513] focus:outline-none focus:ring-4 focus:ring-paris-red/20 sm:mt-7 sm:h-16 sm:gap-4 sm:px-6 sm:text-xl sm:tracking-[0.04em]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm sm:h-10 sm:w-10">
                  <Image
                    src="/images/google-g.png"
                    alt="Google"
                    width={32}
                    height={32}
                    className="h-6 w-6 sm:h-8 sm:w-8"
                  />
                </span>
                {t("merci.reviewButton")}
              </Link>

              <p className="mt-3 font-script text-2xl text-navy-900 sm:mt-4 sm:text-3xl">
                {t("merci.quickText")} <span className="text-paris-red">♥</span>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-navy-900 drop-shadow-sm sm:mt-7">
            <p className="font-script text-3xl sm:text-4xl">{t("merci.signoff")}</p>
            <p className="mt-2 text-base font-semibold sm:mt-3 sm:text-lg">
              {t("merci.team")} <span className="text-paris-red">♥</span>
            </p>
          </div>

          <div className="mt-6 w-full max-w-[620px] border-y border-white/80 bg-white/95 px-4 py-5 text-center shadow-[0_18px_50px_rgba(3,31,70,0.18)] backdrop-blur sm:mt-8 sm:px-10 sm:py-7">
            <h2 className="text-xl font-black text-navy-900 sm:text-3xl">
              {t("merci.websiteTitle")}
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-700 sm:mt-3 sm:text-base sm:leading-7">
              {t("merci.websiteText")}
            </p>
            <Link
              href="https://mybeautyfoolparis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mx-auto mt-4 flex min-h-14 w-full max-w-[440px] items-center justify-center rounded-[7px] bg-navy-900 px-12 py-3 text-center text-[13px] font-extrabold uppercase leading-tight tracking-[0.02em] text-white shadow-lg transition hover:bg-navy-800 focus:outline-none focus:ring-4 focus:ring-paris-blue/30 sm:mt-5 sm:px-14 sm:text-base sm:tracking-[0.035em]"
            >
              <FontAwesomeIcon name="house" className="absolute left-4 h-5 w-5 sm:left-5" />
              <span className="w-full text-center">{t("merci.websiteButton")}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
