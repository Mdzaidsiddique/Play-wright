// https://playwright.dev/docs/trace-viewer-intro

// chenge in config file: trace:"";
import {test, expect} from '@playwright/test';

test("Trace Viewer", async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    //log in
    await page.click("#login2");
    await page.fill("#loginusername", "mdzaid");
    await page.type("#loginpassword", "test@123");
    await page.click("//button[normalize-space()='Log in']");

    expect(await page.locator('#logout2')).toHaveText("Log out");

    // logout
    await page.locator('#logou2').click()
})
