import { i18nNamespaces } from 'common/models/i18n-namespaces';

export const getI18nSsrConfig = (appSrc: string) => ({
  debug: false,
  preload: ['en', 'jp'],
  ns: i18nNamespaces,
  defaultNS: 'common',
  backend: {
    loadPath: `${appSrc}/client/locales/{{lng}}/{{ns}}.json`,
    addPath: `${appSrc}/client/locales/{{lng}}/{{ns}}.missing.json`
  },
  react: {
    useSuspense: false
  }
});
