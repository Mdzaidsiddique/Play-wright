const {test, expect} = require('@playwright/test');

test('Portfolio Home Page', async ({page})=>{

    await page.goto('https://mdzaidsiddique.github.io/')

    let pageTitle = await page.title()
    console.log(pageTitle);

    await expect(page).toHaveTitle("Md Zaid Siddique | Portfolio")


    const pageUrl = await page.url()
    console.log(pageUrl);

    await expect(page).toHaveURL("https://mdzaidsiddique.github.io/")

    await page.close();
})