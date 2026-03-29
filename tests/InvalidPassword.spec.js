const {test,expect} = require('@playwright/test')

test("Verify Login functionality", async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByPlaceholder("Username").fill("Admin", {delay:3000})
   await page.locator("input[name=password]").fill("WrongPass")
   await page.locator("button[type=submit]").click()
   const errMsg = await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent()
   //console.log("Error messsage is "+errMsg)

   // to check partial message
   expect(errMsg.includes("Invalid")).toBeTruthy()
   // to check Complete message
   expect(errMsg==="Invalid credentials").toBeTruthy()
})
