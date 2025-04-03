import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto("https://leafground.com/dashboard.xhtml");

const home= page.locator("//li[@id='menuform:j_idt38']//a[@href='#']");
const alert=page.locator("//li[@id='menuform:j_idt39']//a[@href='#']");

await home.hover();
await alert.hover();

await page.waitForTimeout(5000);


});
