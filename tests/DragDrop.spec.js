import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto(
    "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );

  // Locate the elements to be dragged and dropped
  const washi = await page.locator("//div[@id='box3']");
  const us = await page.locator("//div[@id='box103']");

  await washi.hover();
  await page.mouse.down();

  await us.hover();
  await page.mouse.up();

  // Locate the elements to be dragged and dropped
  const drag = await page.locator("//div[@id='box1']");
  const drop = await page.locator("//div[@id='box107']");

  await drag.dragTo(drop);

  // Alternatively, you can use the dragAndDrop method
  const rome = await page.locator("//div[@id='box6']");
  const itly = await page.locator("//div[@id='box106']");

  await rome.dragTo(itly);

  await page.waitForTimeout(5000);
});
