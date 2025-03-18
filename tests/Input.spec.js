import { test, expect } from "@playwright/test";

test("Input Validation",async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#name")).toBeEmpty;
    await expect(page.locator("#name")).toBeEnabled;
    await expect(page.locator("#name")).toBeEditable;


    await page.locator("#name").fill("Naveen D");
    
});