import DefaultSteps from './default';
import account from '../pages/account';
import {strict as assert} from "assert";

class AccountSteps extends DefaultSteps {
	constructor() {
		super(account);
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}

	checkOpened() {
		assert.strictEqual(account.popUpExist(), `Вход`, 'Поп-ап не появился')
	}
}

export default new AccountSteps();
