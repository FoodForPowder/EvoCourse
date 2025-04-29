import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LikedPostsUpdate } from './model/post.model';

@State<string[]>({
  name: 'LikedPosts',
  defaults: [],
})
@Injectable()
export class LikedPostState {
  @Selector()
  static getPost(state: string[]) {
    return state;
  }

  @Action(LikedPostsUpdate)
  updatedLikedPost(ctx: StateContext<string[]>, action: LikedPostsUpdate) {
    const state = ctx.getState();
    const oldLikedPostId = state.findIndex((value) => action.payload === value);
    if (oldLikedPostId === -1) {
      ctx.setState([...state, action.payload]);
    } else {
      ctx.setState(state.filter((value) => value !== action.payload));
    }
  }
}
