const {test,expect} = require('@playwright/test')

test("Verify Login functionality", async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByPlaceholder("Username").fill("Admin")
   await page.locator("input[name=password]").fill("admin123")
   await page.locator("button[type=submit]").click()

   await expect(page).toHaveURL(/dashboard/)
})

//logout
test("Verify Logout functionality", async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByPlaceholder("Username").fill("Admin")
   await page.locator("input[name=password]").fill("admin123")
   await page.locator("button[type=submit]").click()

   await expect(page).toHaveURL(/dashboard/)

   await page.locator(".oxd-userdropdown-img").click()
   await page.locator('a[href="/web/index.php/auth/logout"][role="menuitem"]').click()
   await expect(page).toHaveURL(/login/)

})
