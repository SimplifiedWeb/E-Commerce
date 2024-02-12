import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/EnglishTranslation.json";
import translationUR from "./translations/UrduTranslation.json";
import translationHI from "./translations/HindiTranslation.json";
import translationMA from "./translations/MarathiTranslation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ur: {
    translation: translationUR,
  },
  hi: {
    translation: translationHI,
  },
  ma: {
    translation: translationMA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
