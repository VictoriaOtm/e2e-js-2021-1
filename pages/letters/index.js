import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters', '.mainPage')
	}

	get locators () {
		return {
			container: this.container,
			letter: 'article.brick',
			letterBody: 'div.letter-container',
		}
	}

	clickLetter () {
		this.page.waitForVisible(this.locators.letter);
		this.page.click(this.locators.letter);
	}

	checkLetterOpened () {
		this.page.waitForVisible(this.locators.letterBody);
	}
}

export default new LettersPage();
