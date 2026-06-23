"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@/components/font-awesome-icon";

export default function MerciPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white text-paris-ink">
      <section className="relative isolate min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
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
          <div className="w-full rounded-[18px] bg-white/96 px-5 py-8 text-center shadow-[0_30px_90px_rgba(3,31,70,0.24)] ring-1 ring-white/80 backdrop-blur sm:px-10 sm:py-10">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center text-paris-red">
              <FontAwesomeIcon name="envelope" className="h-16 w-16" />
            </div>

            <h1 className="text-balance text-4xl font-black uppercase leading-tight tracking-[0.04em] text-navy-900 sm:text-5xl">
              {t("merci.title")}
            </h1>

            <div className="mx-auto my-6 flex max-w-xs items-center gap-5 text-paris-red">
              <span className="h-px flex-1 bg-paris-blue" />
              <FontAwesomeIcon name="heart" className="h-5 w-5" />
              <span className="h-px flex-1 bg-paris-red" />
            </div>

            <div className="mx-auto grid max-w-[560px] gap-5 text-left">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                  <FontAwesomeIcon name="gift" className="h-9 w-9" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-navy-900">
                    {t("merci.giftTitle")}
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    {t("merci.giftText")}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-16 shrink-0 items-center justify-center text-navy-900">
                  <FontAwesomeIcon name="envelope" className="h-7 w-7" />
                </div>
                <p className="text-base font-medium leading-7 text-navy-900">
                  {t("merci.inboxText")}
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-slate-200" />

            <div className="mx-auto flex max-w-[560px] gap-5 text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-paris-blue/20 text-paris-red">
                <FontAwesomeIcon name="bullhorn" className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black leading-tight text-navy-900">
                  {t("merci.platformTitleLine1")}
                  <span className="block">{t("merci.platformTitleLine2")}</span>
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {t("merci.platformText")}
                </p>
                <p className="mt-4 font-extrabold text-navy-900">
                  <span className="text-paris-red underline decoration-paris-red/40 underline-offset-4">
                    {t("merci.helpText")}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[14px] bg-slate-50 px-5 py-7 shadow-inner ring-1 ring-slate-100 sm:px-8">
              <div className="mb-4 flex justify-center gap-4 text-[#f5b618]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    name="star"
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  />
                ))}
              </div>

              <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-[0.02em] text-navy-900 sm:text-4xl">
                {t("merci.reviewTitleBefore")}{" "}
                <span className="text-paris-red">{t("merci.reviewTitleHighlight")}</span>
                {t("merci.reviewTitleAfter")}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-700">
                {t("merci.reviewText")}
              </p>

              <Link
                href="https://g.page/r/CfHaS_3lgtl7EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-7 flex h-16 max-w-[420px] items-center justify-center gap-4 rounded-[8px] bg-paris-red px-6 text-base font-extrabold uppercase tracking-[0.04em] text-white shadow-lg shadow-red-950/20 transition hover:bg-[#b90513] focus:outline-none focus:ring-4 focus:ring-paris-red/20 sm:text-xl"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
                  <Image
                    src="/images/google-g.png"
                    alt="Google"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </span>
                {t("merci.reviewButton")}
              </Link>

              <p className="mt-4 font-script text-3xl text-navy-900">
                {t("merci.quickText")} <span className="text-paris-red">♥</span>
              </p>
            </div>
          </div>

          <div className="mt-7 text-center text-navy-900 drop-shadow-sm">
            <p className="font-script text-4xl">{t("merci.signoff")}</p>
            <p className="mt-3 text-lg font-semibold">
              {t("merci.team")} <span className="text-paris-red">♥</span>
            </p>
          </div>

          <div className="mt-8 w-full max-w-[620px] border-y border-white/80 bg-white/95 px-6 py-7 text-center shadow-[0_18px_50px_rgba(3,31,70,0.18)] backdrop-blur sm:px-10">
            <h2 className="text-2xl font-black text-navy-900 sm:text-3xl">
              {t("merci.websiteTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-slate-700">
              {t("merci.websiteText")}
            </p>
            <Link
              href="https://mybeautyfoolparis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-5 inline-flex min-h-14 items-center justify-center gap-3 rounded-[7px] bg-navy-900 px-7 py-3 font-extrabold uppercase tracking-[0.035em] text-white shadow-lg transition hover:bg-navy-800 focus:outline-none focus:ring-4 focus:ring-paris-blue/30"
            >
              <FontAwesomeIcon name="house" className="h-5 w-5" />
              {t("merci.websiteButton")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
