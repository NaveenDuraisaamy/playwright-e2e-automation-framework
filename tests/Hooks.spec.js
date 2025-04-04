import { test, expect } from "@playwright/test";

test("Hooks", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Naveen@07");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[@onclick='logIn()']").click();

  const product=await page.$$(".hrefch");
 expect(product).toHaveLength(9);

  await page.waitForTimeout(5000);
});

test("Hooks2", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("Naveen@07");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[@onclick='logIn()']").click();

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  await page.locator("#logout2").click();
  

  await page.waitForTimeout(5000);
});