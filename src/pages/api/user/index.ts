import { PrismaClient } from '@prisma/client';
import { argon2id, hash } from 'argon2';
import { randomBytes } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasUniqueErrorOnField } from '~/utils/api/has-unique-error-on-field';
import { sendVerificationEmail } from '~/utils/api/send-verification-email';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { username, email, password } = req.body;

      if (password.length < 10) {
        return res.status(400).json({
          error: 'PASSWORD_TOO_SHORT'
        });
      }

      const hashedPassword = await hash(password, {
        type: argon2id
      });

      const verificationToken = randomBytes(64).toString('hex');

      try {
        await prisma.user.create({
          data: {
            username,
            email,
            verificationToken,
            password: hashedPassword
          }
        });

        sendVerificationEmail(email, verificationToken);

        return res.status(200).end();
      } catch (err) {
        if (hasUniqueErrorOnField(err, 'username')) {
          return res.status(400).json({
            error: 'USERNAME_TAKEN'
          });
        } else if (hasUniqueErrorOnField(err, 'email')) {
          return res.status(400).json({
            error: 'EMAIL_TAKEN'
          });
        }
      }

    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method not allowed.`);
  }
};
