import {test, expect} from '@playwright/test';

test('Kewboard Actions', async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    // await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("Welcome to automation");

    await page.type("//textarea[@placeholder='Paste one version of the text here.']", "Welcome to automation")

    // select all text : ctrl+A
    await page.keyboard.press('Control+A')

    // copy selected text : ctrl+C
    await page.keyboard.press("Control+C");

    // press tab to move in next box
    // await page.keyboard.press("Tab")
    // await page.keyboard.down("Tab"); // press tab key
    // await page.keyboard.up("Tab");   // leave tab key

    // paste the text : ctrl+V
    await page.keyboard.press("Control+V");
    
    await page.close()

})