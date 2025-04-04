
import {test, expect} from 'playwright/test';

test("Quick Capture", async ({ page }) => {
    await page.goto("https://demoblaze.com/prod.html?idp_=1");
 await page.screenshot({ path:'FileUpload/image'+Date.now()+'screenshot.png'});
 
 await page.waitForTimeout(5000);
});

test("Full Capture", async ({ page }) => {
  await page.goto("https://demoblaze.com/prod.html?idp_=1");
  await page.screenshot({ path: "screenshots.png",fullPage: true });
});
test("Element Capture", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
  await page
    .locator("#login2")
    .screenshot({ path: "FileUpload/image" + Date.now() + "Naveen.png" });
  await page.waitForTimeout(5000);
});
