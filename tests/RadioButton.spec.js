import { test, expect } from "@playwright/test";

test("Radio Validation",async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='male']").check();
    
    await expect(page.locator("//input[@id='male']")).toBeChecked();
    await expect(page.locator("//input[@id='female']")).not.toBeChecked();
    
}); 