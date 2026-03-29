const {test,expect} = require('@playwright/test')

//Below can be use to set the different viewport for specific test 
test.use({viewport:{width:1000, height:500}})
//to set the viewport for all test, we can add it into config.js file for the browser setting
test("Hit url", async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
})