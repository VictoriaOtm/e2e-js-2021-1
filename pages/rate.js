import DefaultPage from "./default";

class RatePage extends DefaultPage {
    constructor() {
        super('rate', 'opened-rate');
    }

    get locators() {
        return {
            hasBuy: '.opened-rate__btn-wrapper.buy .opened-rate__available',
            sellButton: '.opened-rate__btn.sell',
            buyButton: '.opened-rate__btn.buy',
            input: '[id=rate-amount-input]',
        };
    }

    getHasForSell() {
        this.page.waitForVisible(this.locators.hasBuy);
        return +this.page.getText(this.locators.hasBuy)[0];
    }

    fillInput(amount) {
        this.page.waitForVisible(this.locators.input);
        this.page.click(this.locators.input);
        this.page.setValue(this.locators.input, amount);
    }

    buy() {
        this.page.waitForVisible(this.locators.sellButton);
        this.page.click(this.locators.sellButton);
    }

    getInputValue() {
        this.page.waitForVisible(this.locators.input);
        return this.page.getValue(this.locators.input);
    }
}

export default new RatePage();