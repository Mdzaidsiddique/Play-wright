exports.HomePage = 
class HomePage{

    constructor(page){
        this.page = page;
        this.productList = "//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCardButton = "//a[normalize-space()='Add to cart']";
        this.cartNavButton = "#cartur";
    }
    async addProductToCart(productName){
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if(productName === await product.textContent()){
                console.log("line 15, before click-----------------------------");
                await product.click(); // this is not working
                console.log("line 17, after click--------------------------------");
                break;
            }
        }
        await this.page.on('dialog', async dialog=>{
            if(await dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCardButton).click()
    }

    async goToCart(){
        await this.page.click(this.cartNavButton);
    }
}