import { NextApiRequest, NextApiResponse } from 'next';

import { parseNightbotChannel } from '~/utils/api/parse-nightbot-channel';
import { parseNightbotUser } from '~/utils/api/parse-nightbot-user';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const channel = parseNightbotChannel(
    req.headers['nightbot-channel'] as string
  );

  const user = parseNightbotUser(req.headers['nightbot-user'] as string);

  res
    .status(200)
    .send(
      `Scoretrackr Sheets API is returning a 200. Your username is ${user.displayName} and the current channel is ${channel.displayName}.`
    );
}
