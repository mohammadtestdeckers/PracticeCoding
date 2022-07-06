
describe('Add remove element', () => {
    it('should add 5 elements and remove two', async () => {
        await browser.url("https://the-internet.herokuapp.com/add_remove_elements/");


        const addElement = $("//button[@onclick='addElement()']");
        const deleteElement = $("//button[@onclick='deleteElement()']");

        for (let i = 0; i < 5; i++) {
            await (await addElement).click();
        }
        // await (await addElement).click();
        // await (await addElement).click();
        // await (await addElement).click();
        // await (await addElement).click();
        // await (await addElement).click();

        await (await deleteElement).click();
        await (await deleteElement).click();

    });
});