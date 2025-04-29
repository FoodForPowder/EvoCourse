import { PostComment } from './comment';
import { User } from './user';

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
export interface CookingStep {
  title: string;
  description: string;
}

export interface Ingredient {
  title: string;
  description: string;
}

export interface FoodValue {
  fats: number;
  calories: number;
  proteins: number;
  carbohydrates: number;
}

export interface ExtendedPost extends Post {
  foodValue: FoodValue;
  cookingSteps: CookingStep[];
  ingredients: Ingredient[];
  comments: PostComment[];
}
