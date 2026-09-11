# 🌿 Verdea

A calm, modern plant shop built collaboratively with **Next.js, TypeScript, Bootstrap, and GitHub**.

## V1

Verdea is intentionally focused on a polished first release:

- Home, Shop, Product Details, Cart, Plant Care, About and 404 pages
- Mock/local plant catalog
- Search with category, price, light, watering and pet-friendly filters
- Recommended, price and rating sorting
- Product care information
- Add/remove/update cart items with stock limits
- Cart persistence with localStorage
- Responsive mobile/tablet/desktop UI
- Loading, empty, no-results and error states
- Keyboard skip navigation, accessible names and visible focus states
- Optimized remote plant images with Next Image
- End-to-end smoke tests for the main shopping flow

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

For the browser smoke-test suite:

```bash
npx playwright install
npm run test:e2e
```

The CI workflow runs typecheck, production build, and Playwright tests on pushes and pull requests to `main`.

## Stack

- Next.js App Router
- React + TypeScript
- Bootstrap 5 + Bootstrap Icons
- Local mock data for V1
- localStorage for the cart
- Playwright for end-to-end testing

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

## V1 release checklist

Before calling a release ready, verify:

- [ ] `npm install` completes successfully
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] `npm run test:e2e` passes in CI
- [ ] Home → Shop → Product → Cart works
- [ ] Search, filters and sorting work together
- [ ] Cart quantity, removal and persistence work
- [ ] Invalid product URLs show the custom 404 state
- [ ] Keyboard navigation and skip navigation work
- [ ] Responsive layout has no obvious horizontal overflow
- [ ] No blocking console errors remain
- [ ] All required PRs are merged into `main`

## Product model

Products currently use a shared TypeScript model with:

`id`, `slug`, `name`, `price`, `image`, `category`, `description`, `light`, `watering`, `temperature`, `petFriendly`, `size`, `rating`, `stock`.

The model is deliberately API-friendly so the local dataset can later be replaced by Strapi.

## V2 ideas

Wishlist, authentication, profile, orders, checkout, and a Plant Finder quiz are intentionally outside V1.
