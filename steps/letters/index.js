import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForList() {
		this.page.waitForContainer();
	}

	openLetter () {
		this.page.clickLetter();
		this.page.checkLetterOpened();
	}
}

export default new LettersSteps();
