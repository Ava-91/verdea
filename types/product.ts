export type PlantCategory = "Indoor" | "Low Light" | "Pet Friendly" | "Beginner Friendly";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: PlantCategory;
  description: string;
  light: string;
  watering: string;
  temperature: string;
  petFriendly: boolean;
  size: string;
  rating: number;
  stock: number;
};
