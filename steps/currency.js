import DefaultSteps from "./default";
import page from "../pages/currency";
import currency from "../pages/currency";

class CurrencySteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    sell(amount) {
        const before = currency.getHasForSell();
        currency.fillInput(amount);
        currency.sell();
        currency.waitMessage();
        const after = currency.getHasForSell();

        return [before, after]
    }
}

export default new CurrencySteps();