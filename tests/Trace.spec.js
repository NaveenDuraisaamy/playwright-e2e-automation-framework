import { test, expect } from "@playwright/test";

test("Frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame.fill("input[name='mytext1']", "Hello Naveen");

  const fra = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']");
  await fra.fill("Hello Sai");
});
