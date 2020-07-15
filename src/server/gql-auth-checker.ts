import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql';

import { UserRole } from 'common/entities';

interface VerifiedToken {
  user: {
    id: string;
    email: string;
    username: string;
    role: UserRole;
  };
  iat: number;
  exp: number;
}

export const customAuthChecker: AuthChecker<any> = (
  { root, args, context, info },
  allowedRoles
) => {
  // The token arrives in format "Bearer ${token}"
  const jwtToken = context.headers?.authorization?.split(' ')[1] ?? null;

  try {
    const { user } = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET
    ) as VerifiedToken;

    if (allowedRoles.length) {
      if (allowedRoles.includes(user.role)) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  } catch (err) {
    // There was a problem verifying the token. We cannot authorize the user.
    return false;
  }
};
