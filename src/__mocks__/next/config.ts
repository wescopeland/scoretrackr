/* eslint-disable @typescript-eslint/ban-ts-comment */
export const mockModule = jest.genMockFromModule("next/config");

// @ts-ignore
mockModule.default = () => {
  return {
    publicRuntimeConfig: {
      localeSubpaths: {
        en: "en",
      },
    },
  };
};

// @ts-ignore
mockModule.setConfig = (arg: any) => {
  return;
};

module.exports = mockModule;
