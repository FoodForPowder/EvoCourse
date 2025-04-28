import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { UserStoreService } from '../services/auth-store.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authStore: UserStoreService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authStore.token$.pipe(
      switchMap((token) => {
        if (token) {
          const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
          );
          const modifiedRequest = request.clone({
            headers: headers,
          });
          return next.handle(modifiedRequest);
        }
        return next.handle(request);
      })
    );
  }
}
