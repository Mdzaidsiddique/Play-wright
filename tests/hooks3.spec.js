import {test, expect} from '@playwright/test';

// before using hooks make sure to change in configuration: playwright.config.js
// fullyParallel: false, // no parallel test
// workers: process.env.CI ? 1 : undefined, // worker should be 1

/* if we want to login and perform all the test and then logout
   the we can use beforeAll() and afterAll() method */

let page;
test.beforeAll(async ({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

    //login
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");
})

test.afterAll(async()=>{
    await page.locator('#logout2').click();
})

test("Home Page", async ()=>{
    // total #items on homepage
    const totalProduct = await page.$$("//div[@id='tbodyid']//h4/a");
    console.log("the total number of item is: ", totalProduct.length);
    expect(totalProduct).toHaveLength(9);
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