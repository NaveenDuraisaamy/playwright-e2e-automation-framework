
import {test, expect} from 'playwright/test';

test.describe("Group Test 1",async()=>{

test("Test 1", async ({ page }) => {
  console.log("Test 1");
});
test("Test 2", async ({ page }) => {
  console.log("Test 2");
});
})

test.describe("Group Test 2", async () => {
  test("Test 3", async ({ page }) => {
    console.log("Test 3");
  });
  test("Test 4", async ({ page }) => {
    console.log("Test 4");
  });
});