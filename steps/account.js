import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://softree.group/signin');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.goToLogin();
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.checkAuthorizedEmail(process.env.LOGIN);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
