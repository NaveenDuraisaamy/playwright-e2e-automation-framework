import { test, expect } from "@playwright/test";

test("Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = page.locator("#productTable");

  const Column = await table.locator("thead tr th");
  console.log("Column Count:",await Column.count());
  expect(await Column.count()).toBe(4);

  const Row = await table.locator("tbody tr");
  console.log("Row Count:",await Row.count());
  expect(await Row.count()).toBe(5);

});
