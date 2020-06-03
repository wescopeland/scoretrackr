import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).send('Ping!');

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
