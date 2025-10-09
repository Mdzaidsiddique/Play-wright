import {test, expect} from '@playwright/test';

// npx playwright test --grep "@tagName"
// opposite : --grep-invert "@fast"

test('test1@fun', async ({page})=>{
    console.log("This is test 1......");
})

test('test2@sanity', async ({page})=>{
    console.log("This is test 2......");
})

test('test3@reg', async ({page})=>{
    console.log("This is test 3......");
})

test('test4@reg', async ({page})=>{
    console.log("This is test 4......");
})

test('test5@sanity@reg', async ({page})=>{
    console.log("This is test 5......");
})

// command to run tagged test
// npx playwright test --grep "@tagName"

// --grep "@sanity" --grep-invert "@reg" // execute only @sanity not @reg
// --grep "@reg" --grep-invert "@sanity" // execute only @reg not @sanity 