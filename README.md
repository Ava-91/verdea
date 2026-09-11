# 🌿 Verdea

A calm, modern plant shop built collaboratively with **Next.js, TypeScript, Bootstrap, and GitHub**.

## V1

Verdea is intentionally focused on a polished first release:

- Home, Shop, Product Details, Cart, Plant Care, About and 404 pages
- Mock/local plant catalog
- Search, category and pet-friendly filters
- Price/rating sorting
- Product care information
- Add/remove/update cart items
- Cart persistence with localStorage
- Responsive mobile/tablet/desktop UI
- Loading, empty, no-results and error states
- Accessible labels, focusable controls and semantic structure

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run typecheck
npm run build
npm start
```

## Stack

- Next.js App Router
- React + TypeScript
- Bootstrap 5 + Bootstrap Icons
- Local mock data for V1
- localStorage for the cart

Strapi/API integration is intentionally deferred to a later version.

## Team workflow

1. Pick or get assigned an issue.
2. Create a branch: `feature/issue-<number>-short-name`.
3. Make focused commits.
4. Open a PR referencing the issue, e.g. `Closes #12`.
5. At least one teammate reviews the PR.
6. Merge into `main` only after the acceptance criteria are met.

### Team roles

- **Ava** — architecture, integration, pages, shared state and final V1 integration.
- **Yasamin** — visual design, brand direction, UI polish and frontend components.
- **Mahla** — product data, filtering/search logic, cart logic and future API/data work.

## Product model

Products currently use a shared TypeScript model with:

`id`, `slug`, `name`, `price`, `image`, `category`, `description`, `light`, `watering`, `temperature`, `petFriendly`, `size`, `rating`, `stock`.

The model is deliberately API-friendly so the local dataset can later be replaced by Strapi.

## V2 ideas

Wishlist, authentication, profile, orders, checkout, and a Plant Finder quiz are intentionally outside V1.
