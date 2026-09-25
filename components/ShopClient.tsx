"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ShopClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [light, setLight] = useState("All");
  const [watering, setWatering] = useState("All");
  const [petFriendly, setPetFriendly] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category))).sort()],
    []
  );
  const lights = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.light))).sort()],
    []
  );
  const waterings = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.watering))).sort()],
    []
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);

      const matchesCategory = category === "All" || product.category === category;

      const matchesPrice =
        price === "All" ||
        (price === "under-30"
          ? product.price < 30
          : price === "30-40"
            ? product.price >= 30 && product.price <= 40
            : product.price > 40);

      const matchesLight = light === "All" || product.light === light;
      const matchesWatering = watering === "All" || product.watering === watering;
      const matchesPets =
        petFriendly === "All" ||
        (petFriendly === "yes" ? product.petFriendly : !product.petFriendly);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesPrice &&
        matchesLight &&
        matchesWatering &&
        matchesPets
      );
    });

    const sorted = [...filtered];
    if (sort === "price-low") {
      sorted.sort((a, b) => a.price - b.price || a.id - b.id);
    } else if (sort === "price-high") {
      sorted.sort((a, b) => b.price - a.price || a.id - b.id);
    } else if (sort === "rating") {
      sorted.sort((a, b) => b.rating - a.rating || a.id - b.id);
    } else {
      // featured: stable catalog order (by id)
      sorted.sort((a, b) => a.id - b.id);
    }
    return sorted;
  }, [query, category, price, light, watering, petFriendly, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setPrice("All");
    setLight("All");
    setWatering("All");
    setPetFriendly("All");
    setSort("featured");
  };

  return (
    <>
      <div className="filter-bar mb-4">
        <div className="row g-2">
          <div className="col-lg-4">
            <label className="visually-hidden" htmlFor="search">
              Search plants
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white border-0">
                <i className="bi bi-search" />
              </span>
              <input
                id="search"
                className="form-control border-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search plants..."
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Category: all" : item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="All">Price: all</option>
              <option value="under-30">Under $30</option>
              <option value="30-40">$30–$40</option>
              <option value="over-40">Over $40</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Light"
              value={light}
              onChange={(e) => setLight(e.target.value)}
            >
              {lights.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Light: all" : item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Watering"
              value={watering}
              onChange={(e) => setWatering(e.target.value)}
            >
              {waterings.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "Water: all" : item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Pet friendly"
              value={petFriendly}
              onChange={(e) => setPetFriendly(e.target.value)}
            >
              <option value="All">Pets: all</option>
              <option value="yes">Pet friendly</option>
              <option value="no">Not pet friendly</option>
            </select>
          </div>
          <div className="col-sm-6 col-lg-2">
            <select
              className="form-select"
              aria-label="Sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Recommended</option>
              <option value="price-low">Price: low</option>
              <option value="price-high">Price: high</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
          <div className="col-lg-8 d-flex align-items-center justify-content-lg-end gap-3">
            <span className="small text-secondary">{visible.length} plants</span>
            {(query ||
              category !== "All" ||
              price !== "All" ||
              light !== "All" ||
              watering !== "All" ||
              petFriendly !== "All" ||
              sort !== "featured") && (
              <button
                type="button"
                className="btn btn-sm btn-outline-verdea"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
      {visible.length ? (
        <div className="row g-4">
          {visible.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <i className="bi bi-search fs-1 text-secondary" />
          <h2 className="h4 mt-3">No plants found</h2>
          <p className="text-secondary">
            Try a different search or clear one of the filters.
          </p>
          <button className="btn btn-outline-verdea" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}