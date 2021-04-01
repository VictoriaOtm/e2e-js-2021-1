import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	get locators() {
		return {
			createFolder: 'div#add-folder-recived',
			notWritten: 'a.not-read-button',
			toSpam: 'div#button-form-add-letter-folder'
		}
	}

	waitForList() {
		this.page.waitForContainer();
	}

	waitButton() {
		this.page.waitForButton(this.locators.notWritten);
	}

	clickButton() {
		this.page.clickForButton(this.locators.notWritten);
	}

	toSpam() {
		this.page.clickForSpam(this.locators.toSpam);
	}

	openLetter () {
		this.page.clickLetter();
		this.page.checkLetterOpened();
	}
}

export default new LettersSteps();
