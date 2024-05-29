// const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //click on login button - property
    // await page.locator('id=login2').click()
    await page.click("//a[@id='login2']");
    
    //provide username
    // await page.locator('#loginusername').fill('mdzaid')
    await page.fill("//input[@id='loginusername']", 'mdzaid')
    // await page.type("//input[@id='loginusername']", 'mdzaid')

    //provide password
    // await page.type("//input[@id='loginpassword']", 'test@123')
    // await page.locator("//input[@id='loginpassword']").fill('test@123')
    await page.fill("//input[@id='loginpassword']", 'test@123')


    //click on login button
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence (if logout link present that means we logged in)
    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible()

    await page.close()

})