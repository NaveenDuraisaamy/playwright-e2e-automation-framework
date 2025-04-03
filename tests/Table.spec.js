import { test, expect } from "@playwright/test";

test("Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = page.locator("#productTable");

  //Check Row and Column Count
  const Column = await table.locator("thead tr th");
  console.log("Column Count:", await Column.count());
  expect(await Column.count()).toBe(4);

  const Row = await table.locator("tbody tr");
  console.log("Row Count:", await Row.count());
  expect(await Row.count()).toBe(5);

    //Check Product Names
  const Store = Row.filter({
    has: page.locator("td"),
    hasText: "Wireless Earbuds",
  });
  await Store.locator("input").check();

  await selectProduct(Row, page, "Smartphone");
  await selectProduct(Row, page, "Tablet");
  await selectProduct(Row, page, "Wireless Earbuds");


  //Print all product details
  for(let i=0;i<await Row.count();i++){
    const rows=Row.nth(i);
    const tds=rows.locator("td");

    for(let j=0; j<await tds.count()-1;j++){
      console.log(await tds.nth(j).textContent());

    }
  }
  await page.waitForTimeout(5000); // Not recommended for production; use proper waits
});
//Select Multiple Products
async function selectProduct(Row, page, name) {
  const Store =await Row.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await Store.locator("input").check();
}
