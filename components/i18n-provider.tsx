"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { defaultLanguage } from "@/lib/i18n/client";
import { Language, languages } from "@/lib/i18n/resources";

const storageKey = "my-beautyfool-language";

function isLanguage(value: string | null): value is Language {
  return Boolean(value && languages.includes(value as Language));
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey);
    const browserLanguage = window.navigator.language.toLowerCase().startsWith("fr")
      ? "fr"
      : defaultLanguage;
    const nextLanguage = isLanguage(savedLanguage) ? savedLanguage : browserLanguage;

    i18n.changeLanguage(nextLanguage).finally(() => {
      document.documentElement.lang = nextLanguage;
      setReady(true);
    });
  }, []);
  

  useEffect(() => {
    function handleLanguageChanged(language: string) {
      if (!isLanguage(language)) {
        return;
      }

      document.documentElement.lang = language;
      window.localStorage.setItem(storageKey, language);
    }

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={ready ? "contents" : "contents"}>{children}</div>
    </I18nextProvider>
  );
}
