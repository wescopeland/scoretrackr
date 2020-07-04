import expressStaticGzip from 'express-static-gzip';

export const compression = () => {
  return expressStaticGzip(process.env.RAZZLE_PUBLIC_DIR, {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
  });
};
