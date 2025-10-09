
import {test, expect} from '@playwright/test';

test("Record video", async ({page})=>{
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
}, {video : 'on'}); 
// this {video : 'on'} we can skipp as well that will apply from config file
