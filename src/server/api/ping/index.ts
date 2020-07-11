import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  console.log(req.sessionID);
  return res.status(200).send('Ping!');
};
