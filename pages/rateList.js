import DefaultPage from "./default";

class RateListPage extends DefaultPage {
    constructor() {
        super('rateList', '[class=rates-wrapper]');
    }

    get locators() {
        return {
            rate: '[class=rate-card]'
        }
    }

    openFirstRate() {
        this.page.waitForVisible(this.locators.rate);
        this.page.click(this.locators.rate);
    }
}

export default new RateListPage();