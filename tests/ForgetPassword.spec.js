const {test,expect} = require('@playwright/test')

test("Verify Forget Password functionality", async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByText("Forgot your password?").click()
   await expect(page).toHaveURL(/requestPasswordResetCode/)
   await page.getByPlaceholder("Username").fill("test")
   await page.locator("button[type='submit']").click()
   await expect(page).toHaveURL(/sendPasswordReset/)
})