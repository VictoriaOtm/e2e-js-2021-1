import DefaultSteps from "./default";
import page from "../pages/currencyList";

class CurrencyListSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openFirstRate() {
        this.page.openFirstRate();
    }
}

export default new CurrencyListSteps();