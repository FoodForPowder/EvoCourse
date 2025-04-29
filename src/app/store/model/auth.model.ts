import { User } from 'src/app/models/user';

export class AuthUpdate {
  static readonly type = '[Auth]: Auth update';
  constructor(public payload: User) {}
}
export class UpdateToken {
  static readonly type = '[Auth]: Update token';
  constructor(public token: string) {}
}
