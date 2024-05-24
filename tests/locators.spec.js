// const{test, expect} = require('@playwright/test');

import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://www.apple.com/")

    // await page.locator('').click()
    await page.click('') 


})
