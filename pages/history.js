import DefaultPage from './default';
import { strict as assert } from 'assert';

class HistoryPage extends DefaultPage {
    constructor() {
        super('rate', 'opened-rate');
    }

    get locators() {
        return {
            historyButton: '[id=history]',
            arrowButton: '[class=history-arrow]',
        };
    }

    clickHistory() {
        this.page.waitForVisible(this.locators.historyButton);
        this.page.click(this.locators.historyButton);
    }

    clickHistoryArrow() {
        this.page.waitForVisible(this.locators.arrowButton);
        this.page.click(this.locators.arrowButton);
    }
}

export default new HistoryPage();