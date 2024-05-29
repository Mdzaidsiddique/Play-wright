import {test, expect} from '@playwright/test';

test.skip('Alerts with OK', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    /* 
    By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
    However, you can register a dialog handler before the action that triggers the dialog 
    to either dialog.accept() or dialog.dismiss() it. 
    */
    // Enabling Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");

        await dialog.accept();
    })

    //before clicking the buttons the above event should be handle in case of alert dialogs

    await page.click("//button[normalize-space()='Alert']");
    await page.waitForTimeout(5000)
})

// test('Confirmation dialog with OK and Cencel', async ({page})=>{
test.skip('Confirm dialog with OK and Cencel', async ({page})=>{ // test.skip to skip the test by playwright
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Enableing dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');

        // await dialog.dismiss(); //closed dialog by presing cencel
        await dialog.accept(); //closed by using ok button
    })

    await page.locator("//button[normalize-space()='Confirm Box']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

    
    await page.waitForTimeout(5000)
})

test('Promtpt Dialog ', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')// default value from dialog

        await dialog.accept('Zaid Alif');
    })

    await page.locator('//button[normalize-space()="Prompt"]').click();
    await expect(page.locator('//p[@id ="demo"]')).toHaveText("Hello Zaid Alif! How are you today?");

    await page.waitForTimeout(5000)

})