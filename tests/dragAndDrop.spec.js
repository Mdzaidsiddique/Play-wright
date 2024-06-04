import {test, expect} from '@playwright/test';

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