import {test, expect} from '@playwright/test';

test('Frames or i frames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // total frames
    const framesArray = await page.frames(); //return array of frames
    // console.log("Number of frames: ", framesArray.length);

    // Approach 1: get frame using frame name or url
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    // await page.frame('name') //if name is present 
    // await frame1.fill("[name='mytext1']", "hello");

    // Approach 2: uaing frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill('hello');
})