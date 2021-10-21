import DefaultSteps from './default';
import page from '../pages/header';
import body from '../pages/body';
import assert from 'assert';

class HeaderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForHeader() {
		this.page.waitForContainer();
	}

	switchScheme () {
		let scheme = body.getScheme();
		this.page.clickSwitch();
		assert.notEqual(scheme, body.getScheme())
	}
}

export default new HeaderSteps();
