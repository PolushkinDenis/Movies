import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import Languagedetector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["ru", "en"],
    debug: true,
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next",
    //     },
    //   },
    // },
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "localStorage", "HtmlTag"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });
