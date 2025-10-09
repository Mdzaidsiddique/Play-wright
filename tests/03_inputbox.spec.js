const {test, expect} = require('@playwright/test')

test('handle inputbox', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //input box ::Name
    await expect(await page.locator('#name')).toBeVisible() // check input box are there or not
    await expect(await page.locator('#name')).toBeEmpty() //checking input box is empty or not
    await expect(await page.locator('#name')).toBeEditable() //editable or not
    await expect(await page.locator('#name')).toBeEnabled() //enabled or not

    //now passing the data into input box
    await page.locator("#name").toBeEmpty().fill("Zaid")
    //await page.fill('#name', 'Zaid')


    await page.waitForTimeout(10000) //use in production may result flaky test , not recommonded, can use for debugging
    await page.close()
})