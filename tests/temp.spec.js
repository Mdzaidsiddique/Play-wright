import{test, expect} from '@playwright/test';

test('Practice', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    await page.waitForTimeout(5000)
})