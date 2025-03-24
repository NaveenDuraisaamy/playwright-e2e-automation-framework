import { test, expect } from "@playwright/test";

test("Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Single Dialog Event Listener to handle all alerts
  page.on("dialog", async (dialog) => {
    console.log("Dialog Message:", dialog.message());

    if (dialog.type() === "alert") {
      await dialog.accept();
    } else if (dialog.type() === "confirm") {
      await dialog.accept(); // Accept confirm dialog
    } else if (dialog.type() === "prompt") {
      expect(dialog.message()).toContain("Please enter your name:");
      expect(dialog.defaultValue()).toContain("Harry Potter");
      await dialog.accept("Naveen"); // Provide input
    }
  });

  // Trigger Alert
  await page.locator("#alertBtn").click();

  // Trigger Confirm
  await page.locator("#confirmBtn").click();

  // Get the updated text
  const text = await page.locator("#demo").textContent();
  console.log("Text Content:", text); // No need to use 'await' with console.log()

  // Trigger Prompt
  await page.locator("#promptBtn").click();

  // Validate Prompt Output
  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello Naveen! How are you today?"
  );

  await page.waitForTimeout(5000); // Not recommended for production; use proper waits
});
