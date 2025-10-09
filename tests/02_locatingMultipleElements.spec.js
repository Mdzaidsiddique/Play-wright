const {test, expect} = require('@playwright/test')

test('LocatingMultipleWebElements', async ({page})=>{

    // launch the page
    await page.goto("https://www.demoblaze.com/") // await be default in playwrite :: 30 sec

    // locate all the links present on the home page
    const links = await page.$$('a')

    for(const link of links){
        const linkText = await link.textContent();

        console.log(linkText)
    }
    
// locate all the products that display on homepage
    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    // page.waitForSelector("//div[@id='tbodyid']//h4/a") // optional wait for selectors to load
    for(const product of products){
        const productName = await product.textContent();

        console.log(productName);
    }

   await page.close()

})