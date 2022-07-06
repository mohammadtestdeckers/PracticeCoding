class MainInternetPage{

    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`);
    }

    clickOnLink(index){
        await this.getLinkElement(index).waitForDisplayed();
        await this.getLinkElement(index).click();
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBox(index){
        await this.getCheckBoxElement(index).waitForDisplayed();
        await this.getCheckBoxElement(index).click();
    }
}

    module.exports = new MainInternetPage();

