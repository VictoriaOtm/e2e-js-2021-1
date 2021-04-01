import assert from 'assert';
import DefaultPage from './default';

class PeoplePage extends DefaultPage {
	constructor() {
		super('letters', '.dataset-letters')
	}

	get locators () {
		return {
			container: this.container,
			letter: 'button.settings__button',
			letterBody: '.card-wrapper__cards h1',
		}
	}

	clickFavorites () {
		this.page.waitForVisible(this.locators.letter);
		this.page.click(this.locators.letter);
	}

	checkFavoritesOpened () {
		this.page.waitForVisible(this.locators.letterBody);
		const text = this.page.getText(this.locators.letterBody);
		assert.strictEqual(text, "К сожалению ничего не нашлось :(", "Должна была вывестись надпись: К сожалению ничего не нашлось :(");
	}
}

export default new PeoplePage();
