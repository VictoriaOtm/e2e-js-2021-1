import DefaultPage from "./default";

class CurrencyPage extends DefaultPage {
    constructor() {
        super('rate', 'opened-rate');
    }

    get locators() {
        return {
            hasSell: '.opened-rate__btn-wrapper.sell .opened-rate__available',
            sellButton: '.opened-rate__btn.sell',
            buyButton: '.opened-rate__btn.buy',
            input: '[id=rate-amount-input]',
            message: '[class=message]',
        };
    }

    getHasForSell() {
        this.page.waitForVisible(this.locators.hasSell);
        return +this.page.getText(this.locators.hasSell).split(' ')[0];
    }

    fillInput(amount) {
        this.page.waitForVisible(this.locators.input);
        this.page.click(this.locators.input);
        this.page.setValue(this.locators.input, amount);
    }

    waitMessage() {
        this.page.waitForVisible(this.locators.message)
    }

    sell() {
        this.page.waitForVisible(this.locators.sellButton);
        this.page.click(this.locators.sellButton);
    }

    buy() {
        this.page.waitForVisible(this.locators.buyButton);
        this.page.click(this.locators.sellButton);
    }
}

export default new CurrencyPage();