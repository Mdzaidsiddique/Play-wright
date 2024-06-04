const {test, expect} = require('@playwright/test');

test('Drop Down', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiuple ways to select option from dropdown

    await page.locator("#country").selectOption({label : 'India'}) // using lebel / Visible text
    await page.locator('#country').selectOption('Canada') // using Visible text
    await page.locator('#country').selectOption({value : 'usa'})
    await page.locator('#country').selectOption({index:1}) // not preferrable- devloper can change index
    await page.selectOption('#country', 'India'); // by using text

    // select option from dropdown using loop :: help in auto suggested or Dynamic dropdown
    const optionsArr = await page.$$('#country option');

    for(const opt of optionsArr){
        let value = await opt.textContent();
        if(value.includes('India')){
            await page.selectOption('#country', value);
            break;
        }
    }


    // Assestions 
    // 1.1) Arrpoach 1: check number of option in a dropdown
    const options = await page.locator('#country option') // all the option element will be return
    await expect(options).toHaveCount(10); // if no of options are 10 then pass else fail

    // 1.2) Arrpoach 2: check number of option in a dropdown
    const optionsArray = await page.$$('#country option') // return all the option element in array
    console.log("Number of options: ", optionsArray.length);
    await expect(optionsArray.length).toBe(10)

    // 2.1) check presence of the option/element in dropdown
    const optionContent = await page.locator('#country').textContent();
    await expect(optionContent.includes('India')).toBeTruthy() 

    // 2.2) check presence of the value in the dropdown - Approach 2 Using loop
    const options_Array = await page.$$('#country option');

    let status = false;
    for(let option of options_Array){
        // console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    // await page.waitForTimeout(6000);
})