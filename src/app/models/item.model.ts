export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
};
export type ItemDetails = {
  id: number;
  fullDescription: string;
  specifications: {
    name: string;
    value: string;
  }[];
};
export type ItemSpec = {
  id: number;
  name: string;
  value: string;
};
