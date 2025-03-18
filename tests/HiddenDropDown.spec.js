import { test, expect } from "@playwright/test";

test("Hidden DropDown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

     await page
       .locator("(//a[contains(@class,'oxd-main-menu-item')])[2]")
       .click();

  const all =await page.$$("(//div[@class='oxd-select-wrapper'])[1]");

  for (let click of all) {
    const job = click.textContent();
    console.log(job);
  }
});
