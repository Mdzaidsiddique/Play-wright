// playwrigth Hooks:
// beforeEach: this hook is executed before each individual test
// afterEach: This hoos is executed after each individual test

// beforeAll: This hook is executed once before all the test start running
// afterAll: this hook is executed once after all the test have been run

// in below example in every test we are performing login and logout operation, to overcome this problem 
// we use hooks concept in hooks2.spec.js file

import {test, expect} from '@playwright/test';

test("Home Page", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //log in
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");

    expect(await page.locator('#logout2')).toHaveText("Log out");

    // home page
    // const totalProduct = await page.$$("//div[@class='card h-100']");
    const totalProduct = await page.$$("//div[@id='tbodyid']//h4/a");
    console.log("the total number of item is: ", totalProduct.length);
    expect(await totalProduct).toHaveLength(9);

    // logout
    await page.locator('#logout2').click()
    await page.waitForTimeout(5000);
})

test.skip("Add product to the cart", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //log in
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");

    expect(await page.locator('#logout2')).toHaveText("Log out");

    // add product to the cart
    await page.click("//a[text()='Samsung galaxy s6']");
    await page.click("//a[text()='Add to cart']");

    page.on('dialog', async dialog=>{
        expect(await dialog.message()).toContain("Product added.");
        await dialog.accept();
    })

    // logout
    await page.locator('#logout2').click()
    await page.waitForTimeout(5000);
})

// in the above example we observed that in every test we are performing login and logout operation, to overcome this problem 
// we use hooks concept in hooks2.spec.js file


