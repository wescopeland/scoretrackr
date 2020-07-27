import { PrismaClient, PromiseReturnType } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const getGame = (gameId: string) => {
  return prisma.game.findOne({
    where: { id: gameId },
    include: {
      tracks: {
        select: {
          id: true,
          name: true,
          friendlyId: true
        }
      }
    }
  });
};

const withTrackSubmissionCount = async (
  game: PromiseReturnType<typeof getGame>
) => {
  const modifiedGame = { ...game };

  modifiedGame.tracks = await Promise.all(
    modifiedGame.tracks.map(async (track) => {
      return {
        ...track,
        submissionCount: await prisma.score.count({
          where: { trackId: track.id }
        })
      };
    })
  );

  return modifiedGame;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { id } = req.query as { id: string };

      const game = await getGame(id);
      return res.status(200).json(await withTrackSubmissionCount(game));

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method not allowed.');
  }
};
