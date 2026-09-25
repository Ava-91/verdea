/**
 * Core product model used by the UI.
 * Designed to stay stable when mock data is replaced by an API/Strapi response in V2.
 *
 * Required fields (must always be present after mapping):
 *   id, slug, name, price, image, category, description,
 *   light, watering, temperature, petFriendly, size, rating, stock
 *
 * Optional / future fields (safe to add later without breaking UI):
 *   sku, tags, careNotes, images[], publishedAt, updatedAt
 */
export type PlantCategory =
  | "Indoor"
  | "Low Light"
  | "Pet Friendly"
  | "Beginner Friendly"
  | "Succulent";

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
  size: "Small" | "Medium" | "Large";
  rating: number;
  stock: number;
};

/**
 * Shape we expect from a future Strapi / REST API.
 * Keep this close to Product so mapping stays thin.
 */
export type ApiProduct = {
  id: number;
  attributes: {
    slug: string;
    name: string;
    price: number;
    image?: { data?: { attributes?: { url?: string } } };
    category: string;
    description: string;
    light: string;
    watering: string;
    temperature: string;
    petFriendly: boolean;
    size: string;
    rating: number;
    stock: number;
  };
};