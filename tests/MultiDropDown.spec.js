import { test, expect } from "@playwright/test";

test("Multi DropDown",async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.selectOption("#colors",['Red','Green','Blue']);

}); 