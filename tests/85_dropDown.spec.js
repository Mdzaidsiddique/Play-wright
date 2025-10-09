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
})

test('Multiselect dropdowns', async ({page})=>{
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