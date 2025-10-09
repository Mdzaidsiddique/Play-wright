const{test, expect} = require('@playwright/test');

// Mouse Hover Action
test.skip('Mouse Hover', async ({page})=>{

    await page.goto("https://www.1mg.com/");
    const hoverableElement = await page.locator("//span[text()='Health Resource Center']");
    await hoverableElement.hover();
    await page.waitForTimeout(5000)
    await page.close();
})

// Mouse Left & Right click Action
test.skip('Mouse Left & Right click', async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo/on-dom-element.html");
    const button = await page.locator("//span[normalize-space()='right click me 1']");
    await button.click({button:"right"}) ////right click action
    await button.click({button : "left"}) //left click option

    await page.close();
})

// Mouse Double Click Action
test('Mouse Double click', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const doubleClickButton = await page.locator("//button[normalize-space()='Copy Text']");
    await page.locator("#field1").fill("Zaid Alif")
    await doubleClickButton.dblclick();
    await expect(page.locator("#field2")).toHaveValue("Zaid Alif")

    await page.close();
})

// Mouse Drag & Drop Action
test('Drag and Drop', async ({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    const source = await page.locator("#box6");
    const target = await page.locator("#box106");

    // Approach 1
    // await source.hover();
    // await page.mouse.down(); //click by pressing down
    // await target.hover();
    // await page.mouse.up(); //release by un-pressing

    // Approach 2
    await source.dragTo(target)

    // washington --> USA
    const washington = await page.locator('#box3');
    const usa = await page.locator("#box103");
    await washington.dragTo(usa);

    await page.close()
})