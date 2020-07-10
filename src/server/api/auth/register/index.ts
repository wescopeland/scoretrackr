import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

import { UserEntity, UserRole, VerificationTokenEntity } from 'common/entities';
import { sendVerificationEmail } from './send-verification-email';

export default async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new UserEntity();
    newUser.username = username;
    newUser.password = await argon2.hash(password);
    newUser.email = email;
    newUser.createdAt = new Date();
    newUser.role = UserRole.Member;
    newUser.isVerified = false;

    const verificationToken = new VerificationTokenEntity();
    verificationToken.token = randomBytes(64).toString('hex');

    newUser.verificationToken = verificationToken;

    await VerificationTokenEntity.save(verificationToken);
    await UserEntity.save(newUser);

    sendVerificationEmail(newUser.email, verificationToken.token);

    return res.status(200).send(req.body);
  } catch (err) {
    return res.status(500).send({
      message: err.detail
    });
  }
};
