import DefaultSteps from './default';
import page from '../pages/account';
import {strict as assert} from "assert";

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		let email = process.env.LOGIN
		let password = process.env.PASSWORD
		this.page.fillLoginForm(email);
		this.page.fillPasswordForm(password);
		this.page.submitForm();
		//костыль известен (из-за бага при логине), обсуждено с преподавателем
		browser.pause(5000);
		this.open("https://musicexpress.sarafa2n.ru/settings/");
		browser.pause(5000);
		let settingsEmail = this.page.getSettingsEmail(email);

		assert.strictEqual(
			settingsEmail,
			email,
			`Email авторизованного юзера ${settingsEmail} не соответствует ожидаемому ${email}`,
		)
	}
}

export default new AccountSteps();
