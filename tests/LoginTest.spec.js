import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { HomePage } from '../pages/HomePage.js';
import { CartPage } from '../pages/CartPage.js';

test("Login",async({page})=>{

    //Login
   const login= new LoginPage(page);
   await login.gotoLoginPage();
   await login.login("Naveen@07","Test@123");
   //Home
   const home=new HomePage(page);
   await home.addProductToCart("Samsung galaxy s6");
   await page.waitForTimeout(3000);
   await home.gotoCart();

   //Cart
  const cart= new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductCart("Samsung galaxy s6");
 expect(status).toBe(true);
   
})