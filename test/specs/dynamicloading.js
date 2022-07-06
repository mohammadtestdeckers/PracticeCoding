
describe('Dynamic loading', () => {
    it('wait for hidden element to exist', async () => {
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading");

        const dynamichidden = $("//a[@href='/dynamic_loading/1']");
        const startBtn = $("#start button");
        const finishBtn = $("#finish h4");


        await (await dynamichidden).click();
        await (await startBtn).click();

        await finishBtn.waitForDisplayed();
        //await (await browser.debug());
        expect(await finishBtn.getText()).toEqual("Hello World!");        




    });
});