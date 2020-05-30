import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ['common'],
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
  i18n.use(Backend).use(initReactI18next);
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options as any);
}

export default i18n;
