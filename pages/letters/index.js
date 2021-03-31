import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters', '.dataset-letters')
	}

	get locators () {
		return {
			container: this.container,
			letter: '.llc__container',
			letterBody: '.letter__body',
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
