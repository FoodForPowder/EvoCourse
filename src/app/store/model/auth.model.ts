import { User } from 'src/app/models/user';

export class AuthUpdate {
  static readonly type = '[Auth]: Auth update';
  constructor(public payload: User) {}
}
