import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://kino-park.online/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.checkAuthorized(process.env.LOGIN);
	}

	logout() {
		this.page.logout();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
