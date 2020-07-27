import NextI18Next from 'next-i18next';
import getConfig from 'next/config';
import path from 'path';

const { localeSubpaths } = getConfig().publicRuntimeConfig;

export const { appWithTranslation, Link, useTranslation } = new NextI18Next({
  otherLanguages: ['jp'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales')
} as any);
