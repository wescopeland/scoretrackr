import { Request, Response } from 'express';

import { UserEntity, VerificationTokenEntity } from 'common/entities';

export default async (req: Request, res: Response) => {
  try {
    const { verificationToken } = req.body;

    const foundToken = await VerificationTokenEntity.findOne({
      token: verificationToken
    });

    const foundUser = await UserEntity.findOne({
      where: { verificationToken: foundToken }
    });

    foundUser.isVerified = true;
    foundUser.save();

    res.status(200).send();
  } catch (err) {
    // If we can't find the token, or if we can't
    // find a user with a found token, we will always
    // return a non-ok response with a 400 status.
    return res.status(400).send();
  }
};
