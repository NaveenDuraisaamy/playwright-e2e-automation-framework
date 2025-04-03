import { test, expect } from "@playwright/test";

test("Mouse Action", async ({ page }) => {
  await page.goto(
    "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );

  await page.waitForTimeout(5000);
});
