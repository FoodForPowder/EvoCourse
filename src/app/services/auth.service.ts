import { Injectable } from '@angular/core';
import { UserStoreService } from './auth-store.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Auth } from '../models/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.baseApi;

  constructor(
    private authStoreService: UserStoreService,
    private http: HttpClient
  ) {}

  login(auth: Auth, isFastJwt: boolean): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/users/sign?fastJwt=${isFastJwt}`, auth)
      .pipe(
        tap((user: User) => {
          this.saveState(user);
        }),
        catchError((error) => throwError(() => error))
      );
  }
  registration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(
      `${this.apiUrl}/users/registration`,
      registration
    );
  }
  logout() {
    this.authStoreService.clearUser();
  }

  private saveState(user: User): void {
    this.authStoreService.updateUser(user);
  }
}
