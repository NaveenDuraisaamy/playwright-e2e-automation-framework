import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

const double= page.locator("//button[normalize-space()='Copy Text']");

await double.dblclick();

const text=page.locator("//input[@id='field2']");

await expect(text).toHaveValue('Hello World!');

await page.waitForTimeout(5000);


});
