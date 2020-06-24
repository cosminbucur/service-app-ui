import { UserRole } from './user-role.model';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  registerDate: Date;
  isActive?: boolean;
}
