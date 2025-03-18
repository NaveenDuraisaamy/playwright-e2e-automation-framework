import { test, expect } from "@playwright/test";

test("Radio Validation",async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.selectOption("#country", "India");

  //1. Number of options in dropdown
    const all = page.locator("#country option");
    await expect(all).toHaveCount(10);

  //2. Number of options in dropdown
    const second = page.$$("#country option");
    console.log("This is the COunt ==>",(await second).length);
    await expect((await second).length).toBe(10);


}); 