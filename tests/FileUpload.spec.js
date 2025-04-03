import { test, expect } from "@playwright/test";

test("Fie Upload", async ({ page }) => {
  await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html");

  await page.waitForSelector("//input[@name='userfile']");
  const select = await page.locator("//input[@name='userfile']");

  await select.setInputFiles("tests/FileUpload/second.jpg","tests/FileUpload/second.jpg");

  await page.waitForTimeout(5000);

  test("MultiFile",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload").setInputFiles(["tests/FileUpload/second.jpg","tests/FileUpload/second.jpg"]);

    await page.waitForTimeout(5000);
  })
});
