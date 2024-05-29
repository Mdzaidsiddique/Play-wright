import {test, expect} from '@playwright/test';

test('Frames or i frames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    // await frame3.locator("input[name='mytext3']").fill('welcome');

    //nested frame
    const childFrames = await frame3.childFrames() // return array of frames
    childFrames[0].locator("//*[@id='i5']/div[3]/div").check()

    await page.waitForTimeout(5000)


})