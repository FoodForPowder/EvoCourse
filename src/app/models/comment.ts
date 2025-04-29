import { User } from './user';

export interface PostComment {
  id: string;
  text: string;
  createdOn: string;
  updatedOn: string;
  user: Omit<User, 'jwtToken' | 'role' | 'expiresIn'>;
}
