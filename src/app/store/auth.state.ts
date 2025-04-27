import { Injectable } from '@angular/core';
import { AuthenticationInterface, AuthUpdate } from './model/auth.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Roles } from '../enums/roles.enum';

@State<AuthenticationInterface>({
  name: 'AuthState',
  defaults: {
    username: null,
    jwtToken: null,
    Role: Roles.Guest,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static getToken(state: AuthenticationInterface): string | null {
    return state.jwtToken;
  }
  @Selector()
  static getAuthState(state: AuthenticationInterface): AuthenticationInterface {
    return state;
  }
  @Action(AuthUpdate)
  updateAuthModel(
    ctx: StateContext<AuthenticationInterface>,
    action: AuthUpdate
  ) {
    ctx.patchState({ ...action.payload });
  }
  @Action(AuthUpdate)
  updateToken(ctx: StateContext<AuthenticationInterface>, jwtToken: string) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      jwtToken: jwtToken,
    });
  }
}
