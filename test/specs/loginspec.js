
describe('login test', () => {

    it('page title validation', async() => {
        await browser.url("https://the-internet.herokuapp.com/login");
        //await expect(browser.getTitle().toEqual("The Internet"));

        const user = $("#username")
        const password = $("#password")
        const submitBtn = $("//button[@type='submit']")
        const flash = $("#flash")


        await (await user).setValue('tomsmith');
        await (await password).setValue('SuperSecretPassword!');
        await (await submitBtn).click();
        
        await expect(flash).toHaveTextContaining("You logged into a secure area!");
    })
}) 