import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ExtendedPost, Post } from '../models/post';
import { map, Observable } from 'rxjs';
import { CreateComment } from '../models/create-comment';
import { PostComment } from '../models/comment';
import { CreatePost } from '../models/create-post';

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
  getPostById(id: string) {
    return this.http.get<ExtendedPost>(`${this.apiUrl}/posts/${id}`);
  }
  getRandomPosts(count: number): Observable<Post[]> {
    return this.getPosts().pipe(
      map((data) => {
        return [...data]
          .filter((value) => value.title !== 'Тестовый рецепт')
          .sort(() => Math.random() - 0.5)
          .slice(0, count);
      })
    );
  }
  addComment(postId: string, comment: string) {
    const createComment: CreateComment = {
      text: comment,
    };
    return this.http.post<PostComment>(
      `${this.apiUrl}/posts/${postId}/add-comment`,
      createComment
    );
  }
  creapePost(post: CreatePost) {
    return this.http.post<CreatePost>(`${this.apiUrl}/posts/create`, post);
  }
}
