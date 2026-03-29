const {test,expect} = require('@playwright/test')

test("Verify page title", async({page})=>{
   await page.goto("https://google.com")
   const title = await page.title
   console.log("page title is" +title)

   await expect(page).toHaveTitle("Google")
})