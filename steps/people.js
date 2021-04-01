import DefaultSteps from './default';
import page from '../pages/people';

class PeopleSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openFavorites() {
		this.page.clickFavorites();
		this.page.checkFavoritesOpened();
	}
}

export default new PeopleSteps();
