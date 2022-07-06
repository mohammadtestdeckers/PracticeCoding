const MainInternetPage = require("../pageobjects/maininternetpage");

describe("validating checkboxes", function(){

    it("should click and validate checbox", function(){
        await browser.url("https://the-internet.herokuapp.com/");
        await MainInternetPage.clickOnLink(6);
        await browser.pause(5000);
        await MainInternetPage.clickOnCheckBox(1);

        expect(MainInternetPage.getCheckBoxElement(1).isSelected()).equals(true);

    })
})

