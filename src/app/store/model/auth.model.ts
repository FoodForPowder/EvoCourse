import { Roles } from 'src/app/enums/roles.enum';

export interface AuthenticationInterface {
  username: string | null;
  jwtToken: string | null;
  Role: Roles;
}
export class AuthUpdate {
  static readonly type = '[Auth]: Auth update';
  constructor(public payload: AuthenticationInterface) {}
}
