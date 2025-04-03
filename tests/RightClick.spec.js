import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

const right= page.locator("//span[@class='context-menu-one btn btn-neutral']");

await right.click({button:'right'});

await page.waitForTimeout(5000);


});
