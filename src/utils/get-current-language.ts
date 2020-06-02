export const getCurrentLanguage = () => {
  return (globalThis as any).initialLanguage;
};
