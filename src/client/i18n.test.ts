import i18n from './i18n';

describe('Client-side i18next Configuration', () => {
  it('exists', () => {
    expect(i18n).toBeDefined();
  });

  it('does not use suspense in order to prevent SSR errors', () => {
    expect(i18n.options.react.useSuspense).toEqual(false);
  });

  it('uses "common" as the default namespace', () => {
    expect(i18n.options.defaultNS).toEqual('common');
  });

  it('uses "en" as the fallback language', () => {
    expect(i18n.options.fallbackLng).toEqual(['en']);
  });

  it('is set to load the language only, not region-specific locales', () => {
    expect(i18n.options.load).toEqual('languageOnly');
  });
});
