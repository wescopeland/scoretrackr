import { Request, Response } from 'express';

import { unallowedHttpMethodResponse } from 'utils/api';

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).send('Ping!');

    default:
      return unallowedHttpMethodResponse(['GET'], req.method, res);
  }
};
