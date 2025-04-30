export interface CreatePost {
  title: string;
  body: string;
  tags: string[];
  image: string;
  timeCooking: number;
  foodValue: {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
  cookingSteps: {
    title: string;
    description: string;
  }[];
  ingredients: {
    title: string;
    description: string;
  }[];
}
