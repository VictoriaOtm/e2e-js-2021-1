import DefaultSteps from './default';
import page from '../pages/people';
import { strict as assert } from 'assert';

class PeopleSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openFavorites() {
		const expected = "К сожалению ничего не нашлось :(";
		this.page.clickFavorites();
		const received = this.page.checkFavoritesOpened();

		assert.strictEqual(received, expected, `Должна была вывестись надпись: ${expected}`);
	}

    clickToUser() {
        this.page.clickToUser();
    }
}

export default new PeopleSteps();
