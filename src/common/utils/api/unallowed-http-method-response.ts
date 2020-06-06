import { Response } from 'express';

export const unallowedHttpMethodResponse = (
  allowedMethods: string[],
  givenMethod: string,
  res: Response
) => {
  res.setHeader('Allow', allowedMethods);
  return res.status(405).end(`Method ${givenMethod} Not Allowed`);
};
