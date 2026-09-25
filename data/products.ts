import type { Product, ApiProduct, PlantCategory } from "@/types/product";

/**
 * Mock catalog for V1.
 * In V2 replace `products` source with an API fetch and map via `mapApiProduct`.
 * UI components should keep importing `products` / `getProductBySlug` so the swap is local.
 */
export const products: Product[] = [
  {
    id: 1,
    slug: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 38,
    category: "Indoor",
    image: "/assets/pictures/monstera-deliciosa.webp",
    description:
      "A statement tropical plant with iconic split leaves. Give it bright, indirect light and room to grow.",
    light: "Bright indirect",
    watering: "Every 7–10 days",
    temperature: "18–28°C",
    petFriendly: false,
    size: "Medium",
    rating: 4.9,
    stock: 8,
  },
  {
    id: 2,
    slug: "snake-plant",
    name: "Snake Plant",
    price: 24,
    category: "Low Light",
    image: "/assets/pictures/snake-plant.jpg",
    description:
      "A resilient classic that handles lower light and missed waterings better than most houseplants.",
    light: "Low to bright",
    watering: "Every 2–3 weeks",
    temperature: "15–30°C",
    petFriendly: false,
    size: "Medium",
    rating: 4.8,
    stock: 14,
  },
  {
    id: 3,
    slug: "calathea-orbifolia",
    name: "Calathea Orbifolia",
    price: 42,
    category: "Pet Friendly",
    image: "/assets/pictures/calathea-orbifolia.jpg",
    description:
      "Soft, striped foliage that brings a gentle tropical feel to bright rooms with filtered light.",
    light: "Medium indirect",
    watering: "Keep lightly moist",
    temperature: "18–27°C",
    petFriendly: true,
    size: "Medium",
    rating: 4.7,
    stock: 6,
  },
  {
    id: 4,
    slug: "zz-plant",
    name: "ZZ Plant",
    price: 29,
    category: "Beginner Friendly",
    image: "/assets/pictures/zz-plant.jpg",
    description:
      "Glossy foliage and excellent drought tolerance make this a beautiful first plant.",
    light: "Low to medium",
    watering: "Every 2–3 weeks",
    temperature: "16–30°C",
    petFriendly: false,
    size: "Small",
    rating: 4.8,
    stock: 11,
  },
  {
    id: 5,
    slug: "pilea-peperomioides",
    name: "Pilea Peperomioides",
    price: 27,
    category: "Pet Friendly",
    image: "/assets/pictures/pilea-peperomioides.webp",
    description:
      "Cheerful coin-shaped leaves and an easygoing personality for sunny shelves and desks.",
    light: "Bright indirect",
    watering: "Weekly",
    temperature: "16–26°C",
    petFriendly: true,
    size: "Small",
    rating: 4.6,
    stock: 9,
  },
  {
    id: 6,
    slug: "peace-lily",
    name: "Peace Lily",
    price: 34,
    category: "Indoor",
    image: "/assets/pictures/peace-lily.jpg",
    description:
      "Elegant dark leaves and delicate white blooms for a calm corner with indirect light.",
    light: "Medium indirect",
    watering: "Weekly",
    temperature: "18–27°C",
    petFriendly: false,
    size: "Medium",
    rating: 4.7,
    stock: 7,
  },
  {
    id: 7,
    slug: "rubber-plant",
    name: "Rubber Plant",
    price: 36,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=900&q=80",
    description:
      "Bold, glossy foliage that adds a deep green accent to bright rooms.",
    light: "Bright indirect",
    watering: "Every 1–2 weeks",
    temperature: "18–28°C",
    petFriendly: false,
    size: "Medium",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 8,
    slug: "aloe-vera",
    name: "Aloe Vera",
    price: 22,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=900&q=80",
    description:
      "A compact succulent that loves bright light and prefers its soil to dry between waterings.",
    light: "Bright",
    watering: "Every 2–3 weeks",
    temperature: "16–30°C",
    petFriendly: false,
    size: "Small",
    rating: 4.7,
    stock: 15,
  },
  {
    id: 9,
    slug: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    price: 48,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=900&q=80",
    description:
      "Large sculptural leaves that make a striking statement in a bright living space.",
    light: "Bright indirect",
    watering: "Weekly",
    temperature: "18–28°C",
    petFriendly: false,
    size: "Large",
    rating: 4.6,
    stock: 5,
  },
  {
    id: 10,
    slug: "spider-plant",
    name: "Spider Plant",
    price: 25,
    category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&q=80",
    description:
      "An easygoing plant with arching leaves, perfect for shelves and hanging planters.",
    light: "Medium indirect",
    watering: "Weekly",
    temperature: "15–27°C",
    petFriendly: true,
    size: "Small",
    rating: 4.9,
    stock: 12,
  },
  // Expanded catalog for better search / filter / sort coverage
  {
    id: 11,
    slug: "pothos-golden",
    name: "Golden Pothos",
    price: 19,
    category: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=900&q=80",
    description:
      "Trailing vines with heart-shaped leaves. Thrives in almost any indoor light and recovers quickly from missed waterings.",
    light: "Low to bright",
    watering: "Every 1–2 weeks",
    temperature: "15–29°C",
    petFriendly: false,
    size: "Small",
    rating: 4.9,
    stock: 18,
  },
  {
    id: 12,
    slug: "boston-fern",
    name: "Boston Fern",
    price: 28,
    category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=900&q=80",
    description:
      "Lush cascading fronds that love humidity. Ideal for bathrooms or bright, shaded corners.",
    light: "Medium indirect",
    watering: "Keep lightly moist",
    temperature: "16–24°C",
    petFriendly: true,
    size: "Medium",
    rating: 4.5,
    stock: 8,
  },
  {
    id: 13,
    slug: "jade-plant",
    name: "Jade Plant",
    price: 26,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=900&q=80",
    description:
      "A classic succulent with thick, glossy leaves. Prefers bright light and infrequent watering.",
    light: "Bright",
    watering: "Every 2–3 weeks",
    temperature: "15–30°C",
    petFriendly: false,
    size: "Small",
    rating: 4.7,
    stock: 13,
  },
  {
    id: 14,
    slug: "bird-of-paradise",
    name: "Bird of Paradise",
    price: 55,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=900&q=80",
    description:
      "Dramatic banana-like leaves that create a tropical focal point. Needs bright light to thrive.",
    light: "Bright indirect",
    watering: "Weekly",
    temperature: "18–30°C",
    petFriendly: false,
    size: "Large",
    rating: 4.6,
    stock: 4,
  },
  {
    id: 15,
    slug: "chinese-evergreen",
    name: "Chinese Evergreen",
    price: 31,
    category: "Low Light",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=900&q=80",
    description:
      "Patterned leaves and strong tolerance for lower light make this a reliable desk or corner plant.",
    light: "Low to medium",
    watering: "Every 1–2 weeks",
    temperature: "16–28°C",
    petFriendly: false,
    size: "Medium",
    rating: 4.6,
    stock: 9,
  },
  {
    id: 16,
    slug: "string-of-pearls",
    name: "String of Pearls",
    price: 23,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=900&q=80",
    description:
      "Trailing strands of bead-like leaves. Perfect for hanging planters in bright, dry spots.",
    light: "Bright",
    watering: "Every 2–3 weeks",
    temperature: "15–28°C",
    petFriendly: false,
    size: "Small",
    rating: 4.5,
    stock: 10,
  },
  {
    id: 17,
    slug: "parlor-palm",
    name: "Parlor Palm",
    price: 33,
    category: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=900&q=80",
    description:
      "A compact, elegant palm that tolerates lower light and is safe around pets.",
    light: "Low to medium",
    watering: "Weekly",
    temperature: "16–27°C",
    petFriendly: true,
    size: "Medium",
    rating: 4.7,
    stock: 7,
  },
  {
    id: 18,
    slug: "dracaena-marginata",
    name: "Dracaena Marginata",
    price: 35,
    category: "Low Light",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=900&q=80",
    description:
      "Slim trunks and spiky red-edged leaves. Forgiving of lower light and irregular watering.",
    light: "Low to bright",
    watering: "Every 1–2 weeks",
    temperature: "15–28°C",
    petFriendly: false,
    size: "Large",
    rating: 4.5,
    stock: 6,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Thin mapper from a future API/Strapi payload into the UI Product type.
 * Place all field renaming / defaults here so components never change.
 */
export function mapApiProduct(raw: ApiProduct, imageBaseUrl = ""): Product {
  const a = raw.attributes;
  const imageUrl = a.image?.data?.attributes?.url
    ? `${imageBaseUrl}${a.image.data.attributes.url}`
    : "/assets/pictures/monstera-deliciosa.webp";

  const allowedCategories: PlantCategory[] = [
    "Indoor",
    "Low Light",
    "Pet Friendly",
    "Beginner Friendly",
    "Succulent",
  ];
  const category = allowedCategories.includes(a.category as PlantCategory)
    ? (a.category as PlantCategory)
    : "Indoor";

  const size =
    a.size === "Small" || a.size === "Medium" || a.size === "Large"
      ? a.size
      : "Medium";

  return {
    id: raw.id,
    slug: a.slug,
    name: a.name,
    price: Number(a.price) || 0,
    image: imageUrl,
    category,
    description: a.description || "",
    light: a.light || "Medium indirect",
    watering: a.watering || "Weekly",
    temperature: a.temperature || "16–28°C",
    petFriendly: Boolean(a.petFriendly),
    size,
    rating: Math.min(5, Math.max(0, Number(a.rating) || 0)),
    stock: Math.max(0, Math.floor(Number(a.stock) || 0)),
  };
}