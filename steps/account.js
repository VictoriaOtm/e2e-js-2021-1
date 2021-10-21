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
		this.page.fillLoginForm(process.env.EMAIL);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		return this.page.checkAuthorizedEmail(process.env.LOGIN);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
