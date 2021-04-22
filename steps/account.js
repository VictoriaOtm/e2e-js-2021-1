import DefaultSteps from './default';
import page from '../pages/account';
import { strict as assert } from 'assert';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.page.waitLogout();
		this.open('https://kino-park.online/login');
		this.waitForAccount();
		this.login();
		this.page.waitAuth();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
	}
	
	checkProfile() {
		this.page.goToProfile();
		const nickname = this.page.checkAuthorized(process.env.LOGIN);
		assert.strictEqual(
			nickname,
			process.env.LOGIN,
			`Email авторизованного юзера ${nickname} не соответствует ожидаемому ${process.env.LOGIN}`,
		)
	}


	waitForAccount() {
		this.page.waitForContainer();
	}

	logout() {
		this.page.logout();
	}

	changePassword(oldPassword, newPassword) {
		this.page.fillChangePasswordForm(oldPassword, newPassword)
		this.page.submit();
	}

}

export default new AccountSteps();
