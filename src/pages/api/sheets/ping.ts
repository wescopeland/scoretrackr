import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const channel = req.headers['nightbot-channel'];
  const user = req.headers['nightbot-user'];

  res
    .status(200)
    .send(
      `Scoretrackr Sheets API is returning a 200. Your username is ${user} and the current channel is ${channel}.`
    );
}
