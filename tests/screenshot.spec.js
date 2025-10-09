import {test, expect} from '@playwright/test';

test.skip('Page Screenshot', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    await page.screenshot({path:"homePageSS.png"}); // be default it will save the file into main directory

    await page.screenshot({path:"tests/screenshots/"+Date.now()+"homePageSS.png"});
})

test('Full Page Screenshot', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    // page.screenshot(path:a/b/c+name, fullPage:true)
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"fullPageSS.png", fullPage:true})
})

// test.only('Element Screenshot', async ({page})=>{
//     await page.goto("https://www.demoblaze.com/index.html");

//     await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({path:"tests/screenshots/"+Date.now()+"SamsungScreenshot.png"});
// })

// by default if we want ot take screenshot of every test
// then in playwright.config.js inside uses we have to configure screenshot:'on'
