import {test, expect} from '@playwright/test'

test('Date Picker', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#datepicker").fill("01/15/2024")

    const year = "2024";
    const month = "March";
    const date = "20";

    await page.click("#datepicker");

    // month and year selector using loop
    while(true){
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if(currentYear == year && currentMonth == month){
            break;
        }
        await page.locator('[title = "Prev"]').click(); //click previous button
    }

    const dateArray = await page.$$("//a[@class='ui-state-default']");

    // date selection using loop
    /*
    for(let dt of dateArray){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }
    */
   
    // date select without using loop :: x-path

   await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

    await page.close();
})