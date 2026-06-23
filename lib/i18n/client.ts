"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export const defaultLanguage = "en";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });
}

export default i18next;
