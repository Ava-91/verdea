import { expect, test, type Page } from "@playwright/test";

/** Open the hamburger when Shop is hidden (mobile / collapsed navbar). */
async function ensureNavOpen(page: Page) {
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  const shop = nav.getByRole("link", { name: "Shop", exact: true });
  if (!(await shop.isVisible())) {
    await page.getByRole("button", { name: "Toggle navigation" }).click();
    await expect(shop).toBeVisible();
  }
}

test("main shopping flow works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Verdea/);

  // Wait for client nav to hydrate, then open menu if collapsed
  await ensureNavOpen(page);
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Shop", exact: true })
    .click();
  await expect(page).toHaveURL(/\/shop$/);

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

  // Cart pill lives in the same collapse — open nav again if needed
  await ensureNavOpen(page);
  const cartLink = page.getByRole("link", { name: "Cart with 1 items", exact: true });
  await expect(cartLink).toBeVisible();
  await cartLink.click();
  await expect(page).toHaveURL(/\/cart$/);
  await expect(page.getByText("Snake Plant", { exact: true })).toBeVisible();
});

test("invalid product URL returns not found", async ({ page }) => {
  const response = await page.goto("/shop/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByText(/does not exist|404/i)).toBeVisible();
});