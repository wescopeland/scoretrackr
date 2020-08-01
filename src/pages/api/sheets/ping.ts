import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Pong!');
}
