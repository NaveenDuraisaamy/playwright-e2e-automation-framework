import { test,expect } from '@playwright/test';

test("allure report01",async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
});
