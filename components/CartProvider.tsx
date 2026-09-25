"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { getProductById } from "@/data/products";

type CartItem = Product & { quantity: number };
type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "verdea-cart";

function isValidCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === "number" &&
    typeof item.quantity === "number" &&
    Number.isFinite(item.quantity) &&
    item.quantity > 0
  );
}

/**
 * Re-hydrate cart from storage against the current catalog.
 * - Drops unknown products
 * - Clamps quantity to current stock
 * - Refreshes price / name / image from catalog so UI stays consistent
 */
function normalizeStoredItems(parsed: unknown): CartItem[] {
  if (!Array.isArray(parsed)) return [];

  const result: CartItem[] = [];
  for (const raw of parsed) {
    if (!isValidCartItem(raw)) continue;
    const catalog = getProductById(raw.id);
    if (!catalog || catalog.stock <= 0) continue;

    const quantity = Math.min(Math.floor(raw.quantity), catalog.stock);
    if (quantity <= 0) continue;

    result.push({ ...catalog, quantity });
  }
  return result;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setItems(normalizeStoredItems(parsed));
      }
    } catch {
      // Corrupted JSON or storage access error — clear and start fresh
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* quota / private mode — ignore */
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addToCart: (product) =>
        setItems((current) => {
          if (!product.stock) return current;
          const existing = current.find((item) => item.id === product.id);
          if (existing) {
            return current.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    ...product,
                    quantity: Math.min(item.quantity + 1, product.stock),
                  }
                : item
            );
          }
          return [...current, { ...product, quantity: 1 }];
        }),
      removeFromCart: (id) =>
        setItems((current) => current.filter((item) => item.id !== id)),
      updateQuantity: (id, quantity) =>
        setItems((current) =>
          current.flatMap((item) => {
            if (item.id !== id) return [item];
            const next = Math.floor(Number(quantity));
            if (!Number.isFinite(next) || next <= 0) return [];
            const stock = item.stock;
            return [{ ...item, quantity: Math.min(next, stock) }];
          })
        ),
      clearCart: () => setItems([]),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}