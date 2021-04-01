import DefaultSteps from './default';
import page from '../pages/search';

class SearchSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    checkArtistQuery(query) {
        this.page.fillSearchInput(query);
        this.page.checkQueryIncorrect();
    }
}

export default new SearchSteps();
