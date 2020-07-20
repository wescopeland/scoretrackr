import { ResetPasswordToken } from './reset-password-token.model';
import { UserRole } from './user-role.model';
import { VerificationToken } from './verification-token.model';

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  isVerified: boolean;
  verificationToken: VerificationToken;
  resetPasswordToken?: ResetPasswordToken;
}
