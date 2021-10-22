import DefaultSteps from './default';
import page from '../pages/nav_bar';
import {strict as assert} from "assert";

class NavBarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForAuthorized() {
		this.page.waitForContainer();
	}

	openLogin() {
		this.page.clickLogin();
	}

	checkAuthorized() {
		this.page.clickAccountImg();
		assert.strictEqual(this.page.getUserName(), `${process.env.NAME} ${process.env.SURNAME}`, 'Имя пользователя не совпадает!')
	}
}

export default new NavBarSteps();
