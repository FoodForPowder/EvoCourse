import { Roles } from '../enums/roles.enum';

export interface User {
  id: string;
  role: Roles;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  username: string;
  jwtToken: string;
  expiresIn: number;
}
