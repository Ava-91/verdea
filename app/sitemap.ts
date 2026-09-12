import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const siteUrl = "https://verdea-blue.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/shop`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/plant-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productPages = products.map((product) => ({
    url: `${siteUrl}/shop/${product.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...productPages];
}
