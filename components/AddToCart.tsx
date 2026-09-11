"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/components/CartProvider";

export function AddToCart({ product }: { product: Product }) {
  const { addToCart, updateQuantity, items } = useCart();
  const [added, setAdded] = useState(false);
  const current = items.find((item) => item.id === product.id);
  const quantity = current?.quantity ?? 1;

  const add = () => {
    if (current) updateQuantity(product.id, quantity + 1);
    else addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return <div className="d-flex flex-wrap align-items-center gap-2"><div className="quantity-control" aria-label={`Quantity for ${product.name}`}><button type="button" onClick={() => current && updateQuantity(product.id, quantity - 1)} disabled={!current || quantity <= 1} aria-label="Decrease quantity">−</button><span>{quantity}</span><button type="button" onClick={() => current && updateQuantity(product.id, quantity + 1)} disabled={!current || quantity >= product.stock} aria-label="Increase quantity">+</button></div><button className="btn btn-verdea" disabled={!product.stock || quantity >= product.stock && !current} onClick={add}><i className={`bi ${added ? "bi-check2" : "bi-bag"} me-2`} />{added ? "Added to cart" : product.stock ? "Add to cart" : "Sold out"}</button></div>;
}
