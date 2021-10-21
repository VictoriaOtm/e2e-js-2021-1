import DefaultSteps from './default';
import page from '../pages/navBarAuth';
import {strict as assert} from "assert";
import navBarNotAuth from "../pages/navBarNotAuth";

class NavBarSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForAuthorized() {
		this.page.waitForContainer();
	}

	openLogin() {
		navBarNotAuth.clickLogin();
	}

	checkAuthorized() {
		this.page.clickLogin();
		assert.strictEqual(this.page.getUserName(), `${process.env.NAME} ${process.env.SURNAME}`, 'Имя пользователя не совпадает!')
	}
}

export default new NavBarSteps();
