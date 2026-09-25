import { expect, test } from "@playwright/test";

test("main shopping flow works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Verdea/);

  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Shop", exact: true })
    .click();
  await expect(page).toHaveURL(/\/shop$/);

  // Catalog is 18 plants after #34 / #48
  await expect(page.getByText("18 plants", { exact: true })).toBeVisible();

  await page.getByLabel("Search plants").fill("Snake");
  await expect(page.getByRole("article", { name: "Snake Plant" })).toBeVisible();
  await expect(
    page.getByRole("article", { name: "Monstera Deliciosa" })
  ).not.toBeVisible();

  await page.getByLabel("Search plants").fill("");
  await page.getByLabel("Price").selectOption("under-30");
  await expect(page.getByRole("article", { name: "Snake Plant" })).toBeVisible();

  await page
    .getByRole("link", { name: "View details for Snake Plant", exact: true })
    .click();
  await expect(page).toHaveURL(/\/shop\/snake-plant$/);
  await page.getByRole("button", { name: "Add to cart" }).click();

  await expect(
    page.getByRole("link", { name: "Cart with 1 items", exact: true })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Cart with 1 items", exact: true })
    .click();
  await expect(page).toHaveURL(/\/cart$/);
  await expect(page.getByText("Snake Plant", { exact: true })).toBeVisible();
});

test("invalid product URL returns not found", async ({ page }) => {
  const response = await page.goto("/shop/does-not-exist");
  // Production server + dynamicParams=false should yield a real 404
  expect(response?.status()).toBe(404);
  await expect(page.getByText(/does not exist|404/i)).toBeVisible();
});