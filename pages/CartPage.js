export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = "//tbody/tr/td[2]";
    
    }
    async checkProductCart(productName) {
     const productsInCart=  await this.page.$$(this.cartItems);
       for (const product of productsInCart) {
         console.log(await product.textContent());

         if (productName === (await product.textContent())) {
           return true;
         }
       }
    }

}