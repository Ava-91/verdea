import { expect, test } from "@playwright/test";

test("main shopping flow works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Verdea/);

  await page.getByRole("link", { name: "Shop" }).click();
  await expect(page).toHaveURL(/\/shop$/);
  await expect(page.getByText(/6 plants/)).toBeVisible();

  await page.getByLabel("Search plants").fill("Snake");
  await expect(page.getByRole("article", { name: "Snake Plant" })).toBeVisible();
  await expect(page.getByRole("article", { name: "Monstera Deliciosa" })).toHaveCount(0);

  await page.getByLabel("Search plants").fill("");
  await page.getByLabel("Price").selectOption("under-30");
  await expect(page.getByText(/plants/)).toBeVisible();

  await page.getByRole("link", { name: /View details for Snake Plant/ }).click();
  await expect(page).toHaveURL(/\/shop\/snake-plant$/);
  await page.getByRole("button", { name: /Add Snake Plant to cart/ }).click();

  await page.getByRole("link", { name: /Cart with 1 items/ }).click();
  await expect(page).toHaveURL(/\/cart$/);
  await expect(page.getByText("Snake Plant")).toBeVisible();
});

test("invalid product URL shows the not-found page", async ({ page }) => {
  await page.goto("/shop/does-not-exist");
  await expect(page.getByText(/not found/i)).toBeVisible();
});
