import { Roles } from '../enums/roles.enum';
import { PostComment } from './comment';
import { Post } from './post';

export interface User {
  id: string;
  role: Roles;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  username: string;
  jwtToken: string;
  expiresIn: number;
}
export interface ShortUser extends Omit<User, 'jwtToken' | 'expiresIn'> {
  createdOn: string;
  updatedOn: string;
  lastEntry: string;
  isActive: boolean;
}

export interface UserPost
  extends Omit<
    Post,
    | 'tags'
    | 'timeCooking'
    | 'author'
    | 'foodValue'
    | 'cookingSteps'
    | 'ingredients'
    | 'comments'
  > {}

export interface UserComment extends Omit<PostComment, 'user'> {
  postId: string;
}

export interface FullUser extends ShortUser {
  userAgent: string;
  posts: UserPost[];
  comments: UserComment[];
}
