import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1, slug: "monstera-deliciosa", name: "Monstera Deliciosa", price: 38, category: "Indoor",
    image: "/assets/pictures/monstera-deliciosa.webp",
    description: "A statement tropical plant with iconic split leaves. Give it bright, indirect light and room to grow.",
    light: "Bright indirect", watering: "Every 7–10 days", temperature: "18–28°C", petFriendly: false, size: "Medium", rating: 4.9, stock: 8
  },
  {
    id: 2, slug: "snake-plant", name: "Snake Plant", price: 24, category: "Low Light",
    image: "/assets/pictures/snake-plant.jpg",
    description: "A resilient classic that handles lower light and missed waterings better than most houseplants.",
    light: "Low to bright", watering: "Every 2–3 weeks", temperature: "15–30°C", petFriendly: false, size: "Medium", rating: 4.8, stock: 14
  },
  {
    id: 3, slug: "calathea-orbifolia", name: "Calathea Orbifolia", price: 42, category: "Pet Friendly",
    image: "/assets/pictures/calathea-orbifolia.jpg",
    description: "Soft, striped foliage that brings a gentle tropical feel to bright rooms with filtered light.",
    light: "Medium indirect", watering: "Keep lightly moist", temperature: "18–27°C", petFriendly: true, size: "Medium", rating: 4.7, stock: 6
  },
  {
    id: 4, slug: "zz-plant", name: "ZZ Plant", price: 29, category: "Beginner Friendly",
    image: "/assets/pictures/zz-plant.jpg",
    description: "Glossy foliage and excellent drought tolerance make this a beautiful first plant.",
    light: "Low to medium", watering: "Every 2–3 weeks", temperature: "16–30°C", petFriendly: false, size: "Small", rating: 4.8, stock: 11
  },
  {
    id: 5, slug: "pilea-peperomioides", name: "Pilea Peperomioides", price: 27, category: "Pet Friendly",
    image: "/assets/pictures/pilea-peperomioides.webp",
    description: "Cheerful coin-shaped leaves and an easygoing personality for sunny shelves and desks.",
    light: "Bright indirect", watering: "Weekly", temperature: "16–26°C", petFriendly: true, size: "Small", rating: 4.6, stock: 9
  },
  {
    id: 6, slug: "peace-lily", name: "Peace Lily", price: 34, category: "Indoor",
    image: "/assets/pictures/peace-lily.jpg",
    description: "Elegant dark leaves and delicate white blooms for a calm corner with indirect light.",
    light: "Medium indirect", watering: "Weekly", temperature: "18–27°C", petFriendly: false, size: "Medium", rating: 4.7, stock: 7
  },
  {
    id: 7, slug: "rubber-plant", name: "Rubber Plant", price: 36, category: "Indoor",
    image: "/assets/pictures/rubber-plant.svg",
    description: "Bold, glossy foliage that adds a deep green accent to bright rooms.",
    light: "Bright indirect", watering: "Every 1–2 weeks", temperature: "18–28°C", petFriendly: false, size: "Medium", rating: 4.8, stock: 10
  },
  {
    id: 8, slug: "aloe-vera", name: "Aloe Vera", price: 22, category: "Beginner Friendly",
    image: "/assets/pictures/aloe-vera.svg",
    description: "A compact succulent that loves bright light and prefers its soil to dry between waterings.",
    light: "Bright", watering: "Every 2–3 weeks", temperature: "16–30°C", petFriendly: false, size: "Small", rating: 4.7, stock: 15
  },
  {
    id: 9, slug: "fiddle-leaf-fig", name: "Fiddle Leaf Fig", price: 48, category: "Indoor",
    image: "/assets/pictures/fiddle-leaf-fig.svg",
    description: "Large sculptural leaves that make a striking statement in a bright living space.",
    light: "Bright indirect", watering: "Weekly", temperature: "18–28°C", petFriendly: false, size: "Large", rating: 4.6, stock: 5
  },
  {
    id: 10, slug: "spider-plant", name: "Spider Plant", price: 25, category: "Pet Friendly",
    image: "/assets/pictures/spider-plant.svg",
    description: "An easygoing plant with arching leaves, perfect for shelves and hanging planters.",
    light: "Medium indirect", watering: "Weekly", temperature: "15–27°C", petFriendly: true, size: "Small", rating: 4.9, stock: 12
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
