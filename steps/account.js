import DefaultSteps from './default';
import account from '../pages/account';
import {strict as assert} from "assert";

class AccountSteps extends DefaultSteps {
	constructor() {
		super();
	}

	login() {
		account.fillLoginForm(process.env.LOGIN);
		account.fillPasswordForm(process.env.PASSWORD);
		account.submit();
	}

	waitForAccount() {
		account.waitForContainer();
	}
	checkOpened() {
		assert.strictEqual(account.popUpExist(), `Вход`, 'Поп-ап не появился')
	}
}

export default new AccountSteps();
