import DefaultSteps from "./default";
import page from '../pages/search';

class SearchSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    findMe() {
        this.page.filters.fillSearchFor();
        this.page.fillSearchInput(process.env.NAME);
        this.page.submit();
        return {
            received: this.page.checkFindMe(),
            expected: process.env.LOGIN,
        };
    }
}

export default new SearchSteps();