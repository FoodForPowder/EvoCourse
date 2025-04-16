import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable()
export class ResponseLogInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          console.log('Response:', response.body);
        }
      })
    );
  }
}
