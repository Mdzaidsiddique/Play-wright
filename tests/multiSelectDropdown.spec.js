import {test, expect} from '@playwright/test';

test('Multiselect dropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // select multiple options from multiselect dropdown
    await page.selectOption('#colors', ['Red', 'Blue', 'Yellow']) // select hte specified color

    // Assertions (validation)
    // 1.1) check #options in drodown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);

    // 1.2) check #options in dropdown using JS Array
    const optionsArray = await page.$$('#colors option');
    console.log(optionsArray.length);
    await expect(optionsArray.length).toBe(5)

    // 2) check presence of the value/option of the dropdown
    const textPresent = await page.locator('#colors').textContent()
    await expect(textPresent.includes('Blue')).toBeTruthy()
    await expect(textPresent.includes('Black')).toBeFalsy()


    // await page.waitForTimeout(5000)
})