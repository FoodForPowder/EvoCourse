

export class LikedPostsUpdate {
  static readonly type = '[LikedPosts]: LikedPost update';
  constructor(public payload: string) {}
}
