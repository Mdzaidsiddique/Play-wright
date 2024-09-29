import {test, expect} from '@playwright/test';

test.beforeAll(async ()=>{
    console.log("this is beforeAll hooks..........");
})

test.afterAll(async ()=>{
    console.log("this is afterAll hooks..........");
})

test.beforeEach(async ()=>{
    console.log("This is beforeEach hook...........");
})

test.afterEach(async ()=>{
    console.log('this is afterEach hook................');
})

// /test.describe() : to group the tests
test.describe("Group 1", ()=>{

    test('Grouping test-1', async ({page})=>{
        console.log("This is tesyt 1");
    })
    
    test('Grouping test-2', async ({page})=>{
        console.log("This is tesyt 2");
    })
    
})

// test.describe("Group 2", ()=>{
//     test('Grouping test-3', async ({page})=>{
//         console.log("This is tesyt 3");
//     })
    
//     test('Grouping test-4', async ({page})=>{
//         console.log("This is tesyt 4");
//     })
// })

// //only(): only this group will executed
// // test.describe.only("Group 3 (only)", ()=>{
// test.describe("Group 3 (only)", ()=>{
//     test('Grouping test-5', async ({page})=>{
//         console.log("This is tesyt 5");
//     })
    
//     test('Grouping test-6', async ({page})=>{
//         console.log("This is tesyt 6");
//     })
// })

// //skip(): skip this group
// test.describe.skip("Group 4 (skip)", ()=>{
//     test('Grouping test-7', async ({page})=>{
//         console.log("This is tesyt 7");
//     })
    
//     test('Grouping test-8', async ({page})=>{
//         console.log("This is tesyt 8");
//     })
// })
