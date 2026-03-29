const {test,expect} = require('@playwright/test')

test("My first  test", function({page}){
    expect(12).toBe(12)
})

test("My Second  test", function({page}){
    expect(12).toBe(13)

})

test("My Thrid  test", function({page}){
    expect(1.1).toBe(1.1)

})

test("My Fourth  test", function({page}){
    expect("Fatima Akram").toContain("Fatima")

})

test("My Fifth  test", function({page}){
    expect("true").toBeFalsy()

})