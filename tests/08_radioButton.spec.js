import {test, expect} from '@playwright/test';

test('Radio Button', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#male').check() //it will check the radio button
    // await page.check('#male')

    await expect(await page.locator('#male')).toBeChecked() // pass if checked
    // another approach
    await expect(await page.locator('#male').isChecked()).toBeTruthy() // isChecked() return true if checked

    // if radio button not selected
    await expect(await page.locator('#female').isChecked()).toBeFalsy()

    await page.close()
})