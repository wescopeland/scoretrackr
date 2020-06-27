import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import enGame from '../locales/en/game.json';
import jpCommon from '../locales/jp/common.json';
import jpGame from '../locales/jp/game.json';

const namespaces = ['common', 'game'];

const options = {
  resources: {
    en: {
      common: enCommon,
      game: enGame
    },
    jp: {
      common: jpCommon,
      game: jpGame
    }
  },

  fallbackLng: 'en',

  ns: namespaces,
  defaultNS: 'common'
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
