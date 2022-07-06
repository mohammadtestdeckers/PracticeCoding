
describe('broken images', () => {
    it('verifies if images are broken or not', async () => {
        await browser.url("https://the-internet.herokuapp.com/broken_images");

        const images = await $$(".example img")
        console.log(images);

        for(const image of images) {
            const url = await image.getAttribute("src");
            console.log(url);

            await browser.url("https://the-internet.herokuapp.com/" + url);
                
        }

        
    });
});