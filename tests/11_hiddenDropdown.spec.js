import{test, expect} from '@playwright/test';

test('Hidden drow down', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name = 'password']").fill('admin123');

    await page.locator("button[type='submit']").click();
    
    await page.locator("//span[normalize-space()='PIM']").click() //goto PIM page

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

    const hiddenOptionsArray = await page.$$("//div[@role='listbox']");

    for(let opt of hiddenOptionsArray){
        const value = await opt.textContent();
        
        if(value.includes('IT Manager')){
            opt.click();
            break;
        }
    }

    // await page.waitForTimeout(5000)
})