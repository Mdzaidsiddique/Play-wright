import {test, expect} from '@playwright/test';

test('CheckBox', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Single checkbox

    await page.locator("//input[@type='checkbox' and @id='sunday']").check(); // check

    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy() // weathewr it is checked or not
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

    // multiple checkboxes

    const checkBoxLocatorsArray = [
        "//input[@type='checkbox' and @id='sunday']",
        "//input[@type='checkbox' and @id='monday']",
        "//input[@type='checkbox' and @id='friday']"
    ]
     // select muliple checkboxes
    for(const locator of checkBoxLocatorsArray){
        await page.locator(locator).check();
    }

    // unselect muliple checkboxes which is already selected
    for(let loc of checkBoxLocatorsArray){
        if(await page.locator(loc).isChecked()){
            await page.locator(loc).uncheck();
        }
    }

    await page.waitForTimeout(5000)
})

