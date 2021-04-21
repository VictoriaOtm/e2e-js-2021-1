import DefaultSteps from './default';
import page from '../pages/account';
import { strict as assert } from 'assert';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://onmeet.ru');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
		const profileName = this.page.checkAuthorizedProfile(process.env.LOGIN);

		assert.strictEqual(
            profileName,
            process.env.LOGIN,
            `Имя авторизованного юзера ${profileName} не соответствует ожидаемому ${process.env.LOGIN}`,
        )
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
