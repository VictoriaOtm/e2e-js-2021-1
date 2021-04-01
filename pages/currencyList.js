import DefaultPage from "./default";

class CurrencyListPage extends DefaultPage {
    constructor() {
        super('rateList', '[class=rates-wrapper]');
    }

    get locators() {
        return {
            rateCard: '[class=rate-card]'
        }
    }

    openFirstRate() {
        this.page.waitForVisible(this.locators.rateCard);
        this.page.click(this.locators.rateCard);
    }
}

export default new CurrencyListPage();