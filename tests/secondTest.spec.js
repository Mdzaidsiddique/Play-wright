const {test, expect} = require('@playwright/test')

test("Apple test", async ({page})=>{

    await page.goto("https://www.apple.com/");

    await expect(page).toHaveTitle("Apple");

    await expect(page).toHaveURL("https://www.apple.com/");

    page.close()

})