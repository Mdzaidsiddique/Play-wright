const {test, expect} = require('@playwright/test');
const { log } = require('console');

test('Auto suggetion dropdown', async ({page})=>{
    page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi')

    await page.waitForSelector("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]")

    const suggestedOptions = await page.$$("//li[contains(@class, 'sc-iwsKbI')]/div/text[1]");

    for(let opt of suggestedOptions){
        const value = await opt.innerText(); //or textContain()
        
        // console.log(value);

        if(value.includes('Indira Gandhi')){
            opt.click() // slectign that auto suggessted option
        }
    }


    await page.waitForTimeout(5000)

})