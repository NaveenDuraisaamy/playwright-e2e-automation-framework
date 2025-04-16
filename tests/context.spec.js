import{test,expect, chromium} from '@playwright/test';

test("Context",async ({page})=>{

 const broswer=chromium.launch;
 const context= await broswer.newContext();
    const pageNew=await context.newPage();

    await pageNew.goto("https://practice.expandtesting.com/#examples");
});