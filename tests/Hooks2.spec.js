import { test, expect } from "@playwright/test";

let page;
test.beforeEach("Hooks Part 2", async ({ browser }) => {

  page= await browser.newPage();
  await page.goto("https://demoblaze.com/");

  //Login to the application
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Naveen@07");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[@onclick='logIn()']").click();
});
test.afterEach(async () => {
 await page.locator("#logout2").click();   
});