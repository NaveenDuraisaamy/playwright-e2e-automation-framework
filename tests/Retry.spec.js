import { test,expect } from '@playwright/test';

test("Retry",async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("oogle");
});
