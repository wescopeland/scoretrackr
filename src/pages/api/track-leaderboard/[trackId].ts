import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import { filterScoresByPlayerTop } from '~/utils/filter-scores-by-player-top';
import { getScorePosition } from '~/utils/api/get-score-position';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { trackId, onDate } = req.query as {
        trackId: string;
        onDate?: string;
      };

      const cutoffDate = onDate ? new Date(onDate) : new Date();

      const trackScores = await prisma.score.findMany({
        where: {
          trackId,
          submittedAt: {
            lte: cutoffDate
          }
        },
        select: {
          id: true,
          playerAlias: true,
          finalScore: true,
          submittedAt: true,
          platform: true
        }
      });

      const onlyPlayerTopScores = filterScoresByPlayerTop(trackScores);

      // Add the position property to each score.
      const trackLeaderboard = onlyPlayerTopScores.map((score) => {
        return {
          ...score,
          position: getScorePosition(score, trackScores)
        };
      });

      return res.status(200).json(trackLeaderboard);

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method not allowed.');
  }
};

export const config = {
  api: {
    bodyParser: true
  }
};
