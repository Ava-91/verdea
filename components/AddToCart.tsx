"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/components/CartProvider";

export function AddToCart({ product }: { product: Product }) {
  const { addToCart, updateQuantity, items } = useCart();
  const [added, setAdded] = useState(false);
  const current = items.find((item) => item.id === product.id);
  const quantity = current?.quantity ?? 0;
  const atStockLimit = quantity >= product.stock;
  const soldOut = product.stock <= 0;

  const add = () => {
    if (soldOut || atStockLimit) return;
    if (current) {
      updateQuantity(product.id, quantity + 1);
    } else {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="d-flex flex-wrap align-items-center gap-2">
      <div
        className="quantity-control"
        aria-label={`Quantity for ${product.name}`}
      >
        <button
          type="button"
          onClick={() => current && updateQuantity(product.id, quantity - 1)}
          disabled={!current || quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span>{quantity || 1}</span>
        <button
          type="button"
          onClick={() => current && updateQuantity(product.id, quantity + 1)}
          disabled={!current || atStockLimit}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        className="btn btn-verdea"
        disabled={soldOut || atStockLimit}
        onClick={add}
      >
        <i className={`bi ${added ? "bi-check2" : "bi-bag"} me-2`} />
        {added
          ? "Added to cart"
          : soldOut
            ? "Sold out"
            : atStockLimit
              ? "Max in cart"
              : "Add to cart"}
      </button>
    </div>
  );
}