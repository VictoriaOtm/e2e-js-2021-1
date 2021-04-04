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
			toSpam: 'div#button-form-add-letter-folder',
			clickToSpam: 'form#choose-folder button.btn.h-full-width[type="submit"]',
			formToSpam: 'form#choose-folder',
			ifSpam:'div.column.large-6.tab-12.mob-12.main-container div.main-columns.project_scroll'
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

	checkForm() {
		this.page.checkForForm(this.locators.formToSpam);
	}

	clickToSpam() {
		this.page.clickForToSpam(this.locators.clickToSpam);
	}

	checkIfSpam() {
		this.page.checkForIfSpam(this.locators.ifSpam);
	}
}

export default new LettersSteps();
