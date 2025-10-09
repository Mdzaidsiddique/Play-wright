import {test, expect} from '@playwright/test';

test('Frames or iFrames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    // total frames
    const framesArray = await page.frames(); //return array of frames
    // console.log("Number of frames: ", framesArray.length);

    // Approach 1: get frame using frame name or url
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    // await page.frame('name') //if name is present 
    // await frame1.fill("[name='mytext1']", "hello");

    // Approach 2: using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill('hello');
})

//nested frames
test.skip('Frames or i frames', async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    // await frame3.locator("input[name='mytext3']").fill('welcome');

    //nested frame
    const childFrames = await frame3.childFrames() // return array of frames
    childFrames[0].locator("//*[@id='i5']/div[3]/div").check()
})