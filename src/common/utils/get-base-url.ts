export const getBaseUrl = () => {
  // This should only be present on a real production deployment.
  // It's probably set to "https://scoretrac.kr".
  if (process.env.HEROKU_PRODUCTION_BASE_URL) {
    return process.env.HEROKU_PRODUCTION_BASE_URL;
  }

  return 'http://localhost:3000';
};
