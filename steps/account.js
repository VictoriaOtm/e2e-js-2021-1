import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://findfreelancer.ru/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillEmailForm(process.env.EMAIL);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		return {
			received: this.page.checkAuthorizedLogin(),
			expected: process.env.LOGIN,
		};
	}

	logout() {
		this.page.clickOnExit();
		return this.page.checkLogout();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
