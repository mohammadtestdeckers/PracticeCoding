
describe('basic authentication', () => {

    it('log ins with basic auth', async () => {

        await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        const header = await $('p=Congratulations! You must have the proper credentials.')
        await header.waitForDisplayed();
    })
})