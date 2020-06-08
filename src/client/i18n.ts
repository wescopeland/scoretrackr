import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { i18nNamespaces } from 'common/models/i18n-namespaces';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly', // we only provide en, jp -> no region specific locals like en-US, ja-JP

  ns: i18nNamespaces,
  defaultNS: 'common',

  saveMissing: true,
  debug: true,

  react: {
    useSuspense: false
  },

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value: string, format: string, lng: string) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    }
  },
  wait: process && !process.release
};

// for browser use http backend to load translations and browser lng detector
if (process && !process.release) {
  i18n.use(Backend).use(initReactI18next).use(LanguageDetector);
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options as any);
}

export default i18n;
