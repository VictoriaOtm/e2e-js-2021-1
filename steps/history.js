import DefaultSteps from './default';
import page from '../pages/history';

class CurrencyListSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openHistory() {
        this.page.clickHistory();
    }

    clickHistoryArrow() {
        this.page.clickHistoryArrow();
    }
}

export default new CurrencyListSteps();