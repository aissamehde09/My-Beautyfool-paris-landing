"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Language } from "@/lib/i18n/resources";

const options: { flagSrc: string; labelKey: string; value: Language }[] = [
  {
    flagSrc: "/images/flag-united-kingdom.png",
    labelKey: "language.english",
    value: "en"
  },
  {
    flagSrc: "/images/flag-france.png",
    labelKey: "language.french",
    value: "fr"
  }
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === "fr" ? "fr" : "en";

  return (
    <div
      aria-label={t("language.label")}
      className="fixed right-4 top-4 z-50 flex gap-1.5 rounded-full border border-white/40 bg-navy-900/90 p-1.5 shadow-xl backdrop-blur"
      role="group"
    >
      {options.map((option) => {
        const active = currentLanguage === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-label={t(option.labelKey)}
            aria-pressed={active}
            title={t(option.labelKey)}
            onClick={() => i18n.changeLanguage(option.value)}
            className={`relative h-10 w-10 overflow-hidden rounded-full transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 ${
              active
                ? "ring-2 ring-white shadow-md"
                : "opacity-65 hover:opacity-100"
            }`}
          >
            <Image
              src={option.flagSrc}
              alt=""
              fill
              sizes="40px"
              className="scale-125 object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
