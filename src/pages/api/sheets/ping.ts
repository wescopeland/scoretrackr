import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  res.status(200).send('Pong!');
}
