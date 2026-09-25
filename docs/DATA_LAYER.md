# Data layer notes (Issue #37)

## Goal

Keep the UI product model stable so V2 can swap mock data for an API / Strapi source without rewriting pages or components.

## Current shape (`types/product.ts`)

| Field         | Required | Notes                                      |
|---------------|----------|--------------------------------------------|
| id            | yes      | Stable numeric ID                          |
| slug          | yes      | URL segment                                |
| name          | yes      | Display name                               |
| price         | yes      | Number (USD for V1)                        |
| image         | yes      | Absolute or site-relative URL              |
| category      | yes      | PlantCategory union                        |
| description   | yes      | Marketing / care blurb                     |
| light         | yes      | Free-text care value (filter key)          |
| watering      | yes      | Free-text care value (filter key)          |
| temperature   | yes      | Display only                               |
| petFriendly   | yes      | Boolean                                    |
| size          | yes      | Small \| Medium \| Large                   |
| rating        | yes      | 0–5                                        |
| stock         | yes      | Integer ≥ 0                                |

Optional fields that can be added later without UI changes: `sku`, `tags[]`, `careNotes`, `images[]`, timestamps.

## Categories in use

`Indoor` · `Low Light` · `Pet Friendly` · `Beginner Friendly` · `Succulent`

Avoid overlapping labels (e.g. don’t invent “Easy Care” if Beginner Friendly already covers it).

## Mapping strategy for V2

1. Keep `Product` as the only type imported by components.
2. Fetch raw API data in a data module (or server component).
3. Map once with `mapApiProduct` in `data/products.ts` (or a dedicated `data/api.ts`).
4. Export the same surface: `products`, `getProductBySlug`, `getProductById`.

Suggested API list response:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "slug": "monstera-deliciosa",
        "name": "Monstera Deliciosa",
        "price": 38,
        "image": { "data": { "attributes": { "url": "/uploads/monstera.jpg" } } },
        "category": "Indoor",
        "description": "...",
        "light": "Bright indirect",
        "watering": "Every 7–10 days",
        "temperature": "18–28°C",
        "petFriendly": false,
        "size": "Medium",
        "rating": 4.9,
        "stock": 8
      }
    }
  ]
}