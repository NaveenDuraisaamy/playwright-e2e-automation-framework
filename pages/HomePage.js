export class HomePage {

    constructor(page) {
        this.page = page;
        this.productList = ".hrefch";
        this.cartButton = "//a[normalize-space()='Add to cart']";
        this.cart = "#cartur";
       
        this.page.on('dialog', async dialog => {
            if(dialog.message().includes('Product added')) {
                await dialog.accept();
            }
        });
    }
    async addProductToCart(productName) {
      const productList=  await this.page.$$(this.productList);
        for(const product of productList){
            if(productName === await product.textContent()){
                await product.click();
                break;
            }
        }
    }
async cartButtonClick(){
    await this.page.locator(this.cartButton).click();
}
    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}