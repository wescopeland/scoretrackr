import * as argon2 from 'argon2';
import { Request, Response } from 'express';

import { UserEntity, UserRole } from 'common/entities';

export default async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new UserEntity();
    newUser.username = username;
    newUser.password = await argon2.hash(password);
    newUser.email = email;
    newUser.createdAt = new Date();
    newUser.role = UserRole.Member;

    await UserEntity.save(newUser);

    return res.status(200).send(req.body);
  } catch (err) {
    return res.status(500).send({
      message: err.detail
    });
  }
};
