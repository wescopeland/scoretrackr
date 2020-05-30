import NextI18Next from "next-i18next";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const { appWithTranslation, useTranslation } = new NextI18Next({
  otherLanguages: ["en", "jp"],
  defaultLanguage: "en",
  localeSubpaths: publicRuntimeConfig.localeSubpaths,
});
