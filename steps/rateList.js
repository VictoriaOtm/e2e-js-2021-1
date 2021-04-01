import DefaultSteps from "./default";
import page from "../pages/rateList";

class RateListSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openFirstRate() {
        this.page.openFirstRate();
    }
}

export default new RateListSteps();
