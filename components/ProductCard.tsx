"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/components/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <article className="product-card" aria-label={product.name}>
      <Link href={`/shop/${product.slug}`} className="product-image" aria-label={`View details for ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="product-name mt-2 mb-1">{product.name}</h3>
        </Link>
        <div className="d-flex justify-content-between align-items-center gap-2 mt-3">
          <span className="price" aria-label={`Price ${product.price} dollars`}>${product.price}</span>
          <button
            type="button"
            className="btn btn-verdea btn-sm"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            aria-label={product.stock ? `Add ${product.name} to cart` : `${product.name} is sold out`}
          >
            {product.stock ? "Add to cart" : "Sold out"}
          </button>
        </div>
      </div>
    </article>
  );
}
