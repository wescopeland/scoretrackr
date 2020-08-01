import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const channel = req.headers['Nightbot-Channel'];
  const user = req.headers['Nightbot-User'];

  res
    .status(200)
    .send(
      `Scoretrackr Sheets API is returning a 200. Your username is ${user} and the current channel is ${channel}.`
    );
}
