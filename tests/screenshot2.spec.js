
// using screenshot:'on' in config file
// byDefault this ss are save in playwright-report/data and test-result file

import {test, expect} from '@playwright/test';

test("logIn Screenshot", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //log in
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");
})

test("logOut Screenshot", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //logIn
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");

    //logOut
    await page.locator('#logout2').click()
})