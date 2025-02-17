import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  expect(page.url()).toBe("https://playwright.dev/");
});
