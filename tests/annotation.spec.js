const{test, expect, chromium} = require('@playwright/test');

//test.only() :: runs only this test, we can specify multiple testas only() :: all will run
// test.only("test1-only", async ({page})=>{
//     console.log("sample test...test 1");
// })

//test.skip() :: skip this test, we can specify multiple testas skip() :: all will skip
test.skip("test2-skip", async ({page})=>{

    console.log("sample test...test 2");
})

// skip
test("test3-skip", async ({page, browserName})=>{

    if(browserName=="chromium"){ // browsername we pass --project chromium/webkit etc
        test.skip();
    }
    console.log("sample test...test 3");

})

/* Fixme: if the perticular test something to be fixed
        : similer to skip // if we have some open bug in out test and we wanted to skip that test untill bugs are not resolve
        : then that will skip at runtime
*/
test("test4-fixme", async ({page})=>{
    test.fixme();

    console.log("sample test...test 4");
})

// fail
test("test5-fail", async ({page})=>{
    test.fail(); //expedting fail

    console.log("sample test...test 5");

    expect(1).toBe(1); // actual pass
    // this test will fail (mismatch between expexted and actual)
    // if both exp anf actual is fail then test will pass
})

test("test6-fail", async ({page, browserName})=>{ 
    console.log("sample test...test 6");
    if(browserName == 'chromium'){ //if mismatch then fail
        test.fail();
    }
})

/* slow() : by default test timeout is 30 sec to run, what happen if test will take more than 30 sec 
          : 1. in configure file we can set timeout
          : 2. test.slow()
          : 3. test.setTimeOut(ms) */
test("test7-slow", async ({page, browserName})=>{ 
    test.slow(); // will increase the timeout 3 times i.e if timeout is 30 sec then it will set 90 sec
    // test.setTimeout(5000);
    console.log("sample test...test 7");
    await page.goto("https://www.demoblaze.com/index.html");
})