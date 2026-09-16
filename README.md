# 🌿 Verdea

A calm, modern plant shop built with **Next.js**, **TypeScript**, and **Bootstrap**.

Thoughtfully chosen plants, practical care guidance, and a smooth shopping experience — designed collaboratively as a polished V1.

**Live demo:** [verdea-blue.vercel.app](https://verdea-blue.vercel.app)

---

## Features (V1)

- **Pages:** Home, Shop, Product Details, Cart, Plant Care, About, and custom 404
- **Catalog:** Local mock plant data with search, category / price / light / watering / pet-friendly filters
- **Sorting:** Recommended, price, and rating
- **Cart:** Add / remove / update quantities with stock limits and localStorage persistence
- **Care info:** Light, watering, temperature, size, and pet-friendly details on every product
- **UX:** Responsive layout, loading / empty / no-results / error states
- **Accessibility:** Skip navigation, accessible names, and visible focus states
- **Images:** Next.js Image optimization (local + remote)
- **Quality:** TypeScript, production build, and Playwright end-to-end smoke tests
- **CI:** Typecheck, build, and e2e tests on every push / PR to `main`

Strapi / API integration is intentionally deferred to a later version.

---

## Tech Stack

| Area | Choice |
|------|--------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | Bootstrap 5 + Bootstrap Icons |
| Data (V1) | Local mock catalog |
| Cart | React context + localStorage |
| Testing | Playwright |
| Deploy | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production check

```bash
npm run typecheck
npm run build
npm start
```

### End-to-end tests

```bash
npx playwright install
npm run test:e2e
```

The CI workflow runs typecheck, production build, and Playwright tests (Chromium + Firefox) on pushes and pull requests to `main`.

---

## Project Structure

```
verdea/
├── app/                  # Next.js App Router pages & layouts
│   ├── shop/             # Shop listing + product detail ([slug])
│   ├── cart/
│   ├── plant-care/
│   ├── about/
│   └── ...
├── components/           # UI components (Navbar, ProductCard, CartProvider, …)
├── data/                 # Mock product catalog
├── types/                # Shared TypeScript types (Product, …)
├── public/assets/        # Logos and plant images
├── tests/e2e/            # Playwright smoke tests
└── .github/workflows/    # CI
```

---

## Product Model

Products share a TypeScript model designed to be API-friendly later:

```ts
id, slug, name, price, image, category,
description, light, watering, temperature,
petFriendly, size, rating, stock
```

Categories currently used: `Indoor`, `Low Light`, `Pet Friendly`, `Beginner Friendly`.

---

## Team Workflow

1. Pick or get assigned an issue.
2. Create a branch: `feature/issue-<number>-short-name`.
3. Make focused commits.
4. Open a PR that references the issue (e.g. `Closes #12`).
5. At least one teammate reviews the PR.
6. Merge into `main` only after acceptance criteria are met.

### Roles

- **Ava** — architecture, integration, pages, shared state, final V1 integration
- **Yasamin** — visual design, brand direction, UI polish, frontend components
- **Mahla** — product data, filtering/search logic, cart logic, future API/data work

---

## V1 Release Checklist

Before calling a release ready:

- [ ] `npm install` completes successfully
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] `npm run test:e2e` passes in CI
- [ ] Home → Shop → Product → Cart flow works
- [ ] Search, filters, and sorting work together
- [ ] Cart quantity, removal, and persistence work
- [ ] Invalid product URLs show the custom 404
- [ ] Keyboard navigation and skip link work
- [ ] Responsive layout has no obvious horizontal overflow
- [ ] No blocking console errors
- [ ] Required PRs are merged into `main`

---

## V2 Ideas (out of scope for V1)

Wishlist, authentication, user profile, orders, checkout, and a Plant Finder quiz.

---

Built with care by the Verdea team.
```


If you reconnect the GitHub connector with write access to this repo, I can push the change for you. Otherwise just replace the current `README.md` with the content above.
