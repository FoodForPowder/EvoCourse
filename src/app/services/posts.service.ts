import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly apiUrl = environment.baseApi;
  constructor(private http: HttpClient) {}
  getPosts(count: number = 0) {
    return this.http.get<Post[]>(
      `${this.apiUrl}/posts` + (count ? `?filter=${count}` : '')
    );
  }
}
