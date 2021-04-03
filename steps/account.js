import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.userLogin = process.env.LOGIN;
		this.userPassword = process.env.PASSWORD;
	}

	auth() {
		this.open('https://studhunt.ru/auth');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(this.userLogin);
		this.page.fillPasswordForm(this.userPassword);
		this.page.submit();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
