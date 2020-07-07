import { UserRole } from './user-role.model';

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}
