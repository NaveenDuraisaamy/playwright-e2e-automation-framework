import { test, expect } from "@playwright/test";

test("Nested Frame", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  const frame2 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_2.html",
  });
  const frame3 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  const frame4 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_4.html",
  });
  const frame5 = page.frame({
      url: "https://ui.vision/demo/webtest/frames/frame_5.html",
  });

  //Nested Frame
  const childFrames =await frame3.childFrames();
 await childFrames[0].locator("//*[@id='i6']/div[3]/div").check(); 

  await page.waitForTimeout(5000); // Not recommended for production; use proper waits
});
