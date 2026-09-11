import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1, slug: "monstera-deliciosa", name: "Monstera Deliciosa", price: 38, category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85",
    description: "A statement tropical plant with iconic split leaves. Give it bright, indirect light and room to grow.",
    light: "Bright indirect", watering: "Every 7–10 days", temperature: "18–28°C", petFriendly: false, size: "Medium", rating: 4.9, stock: 8
  },
  {
    id: 2, slug: "snake-plant", name: "Snake Plant", price: 24, category: "Low Light",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c5d?auto=format&fit=crop&w=900&q=85",
    description: "A resilient classic that handles lower light and missed waterings better than most houseplants.",
    light: "Low to bright", watering: "Every 2–3 weeks", temperature: "15–30°C", petFriendly: false, size: "Medium", rating: 4.8, stock: 14
  },
  {
    id: 3, slug: "calathea-orbifolia", name: "Calathea Orbifolia", price: 42, category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1597055181300-a8c0c0b0f3f8?auto=format&fit=crop&w=900&q=85",
    description: "Soft, striped foliage that brings a gentle tropical feel to bright rooms with filtered light.",
    light: "Medium indirect", watering: "Keep lightly moist", temperature: "18–27°C", petFriendly: true, size: "Medium", rating: 4.7, stock: 6
  },
  {
    id: 4, slug: "zz-plant", name: "ZZ Plant", price: 29, category: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1632207691147-6e7c5a1b0a7d?auto=format&fit=crop&w=900&q=85",
    description: "Glossy foliage and excellent drought tolerance make this a beautiful first plant.",
    light: "Low to medium", watering: "Every 2–3 weeks", temperature: "16–30°C", petFriendly: false, size: "Small", rating: 4.8, stock: 11
  },
  {
    id: 5, slug: "pilea-peperomioides", name: "Pilea Peperomioides", price: 27, category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=85",
    description: "Cheerful coin-shaped leaves and an easygoing personality for sunny shelves and desks.",
    light: "Bright indirect", watering: "Weekly", temperature: "16–26°C", petFriendly: true, size: "Small", rating: 4.6, stock: 9
  },
  {
    id: 6, slug: "peace-lily", name: "Peace Lily", price: 34, category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85",
    description: "Elegant dark leaves and delicate white blooms for a calm corner with indirect light.",
    light: "Medium indirect", watering: "Weekly", temperature: "18–27°C", petFriendly: false, size: "Medium", rating: 4.7, stock: 7
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
