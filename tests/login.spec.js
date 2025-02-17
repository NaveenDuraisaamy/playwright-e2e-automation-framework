import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("");
  expect(page.url()).toBe("");
});
