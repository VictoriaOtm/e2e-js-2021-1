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

        let findLogin = '';
        const search_res = this.page.checkFindMe()

        for (let item of search_res) {
            if (item === process.env.LOGIN) {
                findLogin = item;
                break;
            }
        }

        return {
            received: findLogin,
            expected: process.env.LOGIN,
        };
    }
}

export default new SearchSteps();
