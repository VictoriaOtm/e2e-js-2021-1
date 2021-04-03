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
            user: '.user-card:first-child',
            profile: 'main.profile',
		}
	}

    clickToUser() {
        this.page.waitForVisible(this.locators.user);
        this.page.click(this.locators.user);
    }

    checkUserOpened() {
        assert(this.page.waitForVisible(this.locators.profile));
    }

	clickFavorites () {
		this.page.waitForVisible(this.locators.letter);
		this.page.click(this.locators.letter);
	}

	checkFavoritesOpened () {
        const expected = "К сожалению ничего не нашлось :(";
		this.page.waitForVisible(this.locators.letterBody);
		const text = this.page.getText(this.locators.letterBody);
		assert.strictEqual(text, expected, "Должна была вывестись надпись: К сожалению ничего не нашлось :(");
	}
}

export default new PeoplePage();
