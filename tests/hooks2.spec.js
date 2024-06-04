import {test, expect} from '@playwright/test';

// before using hooks make sure to change in configuration: playwright.config.js
// fullyParallel: false, // no parallel test
// workers: process.env.CI ? 1 : undefined, // worker should be 1

let page; 

test.beforeEach(async ({browser})=>{
    page = await browser.newPage(); 
    /*  since we have created a page using browser globally then dont need to pass browser/page in any test function
        otherwise it will create muliple instances of the page */
     
    await page.goto("https://www.demoblaze.com/index.html");
    //log in
     await page.click("#login2");
     await page.fill("#loginusername", "mdzaid");
     await page.type("#loginpassword", "test@123");
     await page.click("//button[normalize-space()='Log in']");
});

test.afterEach(async()=>{ 
    await page.locator('#logout2').click()
})

test("Home Page", async ()=>{
    // home page
    const totalProduct = await page.$$("//div[@id='tbodyid']//h4/a");
    console.log("the total number of item is: ", totalProduct.length);
    expect(await totalProduct).toHaveLength(9);
})

test("Add Product to cart", async ()=>{
    // add product to the cart
    await page.click("//a[text()='Samsung galaxy s6']");
    await page.click("//a[text()='Add to cart']");

    page.on('dialog', async dialog=>{
        expect(await dialog.message()).toContain("Product added.");
        await dialog.accept();
    })
})
