import {test, expect} from '@playwright/test';
import { log } from 'console';

test('BootStap Dropdown', async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click(); //click the dropdown button

    // 1) number of options present in the dropdown
    // const options = await page.locator('ul>li label input');
    // await expect(options).toHaveCount(11)
    // const optionsArray = await page.$$('ul>li label input');
    // await expect(optionsArray.length).toBe(11)

    // 2.1) select multiple options from drop down

    const optionsArray = await page.$$('ul>li label');

    for(let option of optionsArray){
        const innerText = await option.textContent(); // or innerText()
        // console.log('The Inner Text is : ', innerText );
        if(innerText.includes('Angular') || innerText.includes('Java')){
            option.click() // click will select
        }
    }
    // 2.2) dis-select multiple options from drop dow
    for(let opt of optionsArray){
        const innerText = await opt.innerText();
        if(innerText.includes('HTML') || innerText.includes('CSS')){
            opt.click(); // if already select then click will disselect
        }
    }

    await page.waitForTimeout(5000)
})