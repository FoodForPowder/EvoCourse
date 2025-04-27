import { Observable } from 'rxjs';
import { AuthState } from './../store/auth.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthenticationInterface, AuthUpdate } from '../store/model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  @Select(AuthState.getToken) token$!: Observable<string | null>;
  @Select(AuthState.getAuthState)
  authState$!: Observable<AuthenticationInterface>;

  constructor(private store: Store) {}
  updateAuth(payload: AuthenticationInterface): void {
    this.store.dispatch(payload);
  }
  updateToken(token: string): void {
    this.store.dispatch(token);
  }
}
