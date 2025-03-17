/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test, expect } from "@playwright/test";
import exp from "constants";

test("Locators", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/#examples");

  await page.locator("//a[contains(text(),'Test Login Page')]").click();

  await page.locator("#username").fill("practice");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.locator("//button[contains(text(),'Login')]").click();

  await page.pause(1000);

  const title=await page.title();
expect(title).toBe("Secure Page page for Automation Testing Practice");
});
