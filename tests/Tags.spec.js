import { test, expect } from "@playwright/test";

// Properly tagged tests
test("@smoke Tag1", async ({ page }) => {
  console.log("Hi this is Naveen");
});

test("@sanity Tag2", async ({ page }) => {
  console.log("Hi this is Subash");
});

// Using multiple tags in the test name
test("@man @power Tag3", async ({ page }) => {
  console.log("Hi this is Sai");
});

test("@fast @slow Tag4", async ({ page }) => {
  console.log("Hi this is Nilan");
});
