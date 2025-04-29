import { Observable } from 'rxjs';
import { AuthState } from './../store/auth.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthUpdate, UpdateToken } from '../store/model/auth.model';
import { User } from '../models/user';
import { Roles } from '../enums/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  @Select(AuthState.getToken) token$!: Observable<string | null>;
  @Select(AuthState.getAuthState) authState$!: Observable<User>;

  constructor(private store: Store) {}

  updateUser(payload: User): void {
    this.store.dispatch(new AuthUpdate(payload));
  }

  updateToken(token: string): void {
    this.store.dispatch(new UpdateToken(token));
  }
  clearUser(): void {
    this.store.dispatch(
      new AuthUpdate({
        id: '',
        role: Roles.Guest,
        firstName: '',
        lastName: '',
        middleName: '',
        avatar: '',
        username: '',
        jwtToken: '',
        expiresIn: 0,
      })
    );
  }
}
