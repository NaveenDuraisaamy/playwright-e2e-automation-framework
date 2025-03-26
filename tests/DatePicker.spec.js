import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

const year=2024;
const month="October";
const date=7;

await page.click("#datepicker");

await page.waitForTimeout(2000);
});
