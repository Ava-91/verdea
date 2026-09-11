"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/components/CartProvider";

export function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  return <button className="btn btn-verdea" disabled={!product.stock} onClick={() => { addToCart(product); setAdded(true); setTimeout(() => setAdded(false), 1600); }}><i className={`bi ${added ? "bi-check2" : "bi-bag"} me-2`} />{added ? "Added to cart" : product.stock ? "Add to cart" : "Sold out"}</button>;
}
