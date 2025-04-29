import { User } from "./user";

export interface Post {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  createdOn: string;
  updatedOn: string;
  author: Omit<User, 'jwtToken' | 'role' | 'expiresIn'>;
}
