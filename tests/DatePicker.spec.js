import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

const year=2025;
const month="October";
const date=7;

while(true){
 const currentMonth=await page.locator(".ui-datepicker-month").textContent();

const currentYear=await page.locator(".ui-datepicker-year").textContent();

if(currentMonth===month && currentYear===year){
  break;
}
await page.locator('[title="Next"]').click();
}

});
