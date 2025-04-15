import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getPostComments(postId: number = 1): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        postId: postId,
      },
    });
  }

  public createPost(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
  }

  public getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/post');
  }

  public getPostsWithHeader(): Observable<string> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'X-Test': '1',
      },
      responseType: 'text',
    });
  }
  public deletePost(postId: number = 1): Observable<any> {
    return this.http.delete(
      ` https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
  public getPostById(postId: number = 1): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
