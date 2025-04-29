import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LikedPostsUpdate } from '../store/model/post.model';
import { LikedPostState } from '../store/post.state';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikedPostsStoreService {
  @Select(LikedPostState.getPost) posts$!: Observable<string[]>;
  constructor(private store: Store) {}
  updateLikedPosts(id: string) {
    this.store.dispatch(new LikedPostsUpdate(id));
  }
  checkPost(id: string) {
    return this.posts$.pipe(map((posts) => posts.includes(id)));
  }
}
