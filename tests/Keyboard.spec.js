import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto(
    "https://gotranscript.com/text-compare"
  );

  const text= await page.fill("//textarea[@name='text1']","Hello World!");

  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");

  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  await page.keyboard.press("Control+V");


  await page.waitForTimeout(5000);
});
