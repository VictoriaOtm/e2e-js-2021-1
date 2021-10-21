import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('/');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.checkAuthorized();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
