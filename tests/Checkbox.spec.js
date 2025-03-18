import { test, expect } from "@playwright/test";

test("Radio Validation", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("//input[@id='sunday' and @type='checkbox']").check();

  await expect(page.locator("//input[@id='sunday' and @type='checkbox']"))
    .toBeChecked();

    const multipleCheckbox = [
      "//input[@id='sunday' and @type='checkbox']",
      "//input[@id='monday' and @type='checkbox']",
      "//input[@id='tuesday' and @type='checkbox']"
    ];

    for(let locator of multipleCheckbox){
      
        await page.locator(locator).check();
    }
      for (let locator of multipleCheckbox) {
        if(await page.locator(locator).isChecked())
            {
await page.locator(locator).uncheck();
    }}
});
