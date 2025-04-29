import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Roles } from '../enums/roles.enum';
import { User } from '../models/user';
import { AuthUpdate, UpdateToken } from './model/auth.model';

@State<User>({
  name: 'AuthState',
  defaults: {
    id: '',
    role: Roles.Guest,
    firstName: '',
    lastName: '',
    middleName: '',
    avatar: '',
    username: '',
    jwtToken: '',
    expiresIn: 0,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static getToken(state: User): string | null {
    return state.jwtToken;
  }
  @Selector()
  static getAuthState(state: User): User {
    return state;
  }
  @Action(AuthUpdate)
  updateAuthModel(ctx: StateContext<User>, action: AuthUpdate) {
    ctx.patchState({ ...action.payload });
  }
  @Action(UpdateToken)
  updateToken(ctx: StateContext<User>, action: UpdateToken) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      jwtToken: action.token,
    });
  }
}
