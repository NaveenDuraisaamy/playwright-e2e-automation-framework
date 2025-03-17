import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  //Hard Assertion
//   await expect(page).toHaveURL(
//     "https://demo.nopcommerce.com/register?returnUrl=%2F"
//   );
//   await expect(page).toHaveTitle("nopCommerce demo store. Register");
//   await expect(page.locator(".header-logo")).toBeVisible();

 // Soft Assertion
  expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");
  expect.soft(page).toHaveTitle("nopCommerce demo store. Register");
  expect.soft(page.locator(".header-logo")).toBeVisible();
});
