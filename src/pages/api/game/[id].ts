import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { id } = req.query as { id: string };

      const game = await prisma.game.findOne({
        where: { id },
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

      return res.status(200).json(game);

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method not allowed.');
  }
};
