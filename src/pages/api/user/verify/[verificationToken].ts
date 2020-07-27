import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const { verificationToken } = req.query as { verificationToken: string };

      const [foundUserWithToken] = await prisma.user.findMany({
        where: { verificationToken }
      });

      if (!foundUserWithToken) {
        return res.status(400).json({
          error: 'INVALID_TOKEN'
        });
      } else if (foundUserWithToken.isEmailVerified) {
        return res.status(400).json({
          error: 'ALREADY_VERIFIED'
        });
      }

      await prisma.user.update({
        where: { id: foundUserWithToken.id },
        data: { isEmailVerified: true }
      });

      return res.status(200).end();

    default:
      res.setHeader('Allow', ['GET']);
      return res.status(405).end('Method not allowed.');
  }
};
