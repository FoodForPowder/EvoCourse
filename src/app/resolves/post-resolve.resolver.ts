import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { JsonPlaceholderService } from '../services/jsonPlaceholder.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolveResolver implements Resolve<any> {
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}
  resolve(
  ): Observable<any> {
    return this.jsonPlaceholderService.getPostById();
  }
}
