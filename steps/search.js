import DefaultSteps from './default';
import page from '../pages/search';
import {strict as assert} from "assert";

class SearchSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    checkArtistQuery(query) {
        this.page.fillSearchInput(query);
        let message = this.page.getQueryMessage();
        assert.strictEqual(
            message,
            this.page.incorrectQueryText,
            `Сообщение "${message}" не соответствует ожидаемому "${this.page.incorrectQueryText}"`,
        )
    }
}

export default new SearchSteps();
