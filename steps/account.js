import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.email = process.env.EMAIL;
		this.password = process.env.PASSWORD;
	}

	auth() {
		this.open('https://studhunt.ru/auth');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(this.email);
		this.page.fillPasswordForm(this.password);
		this.page.submit();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}


}

export default new AccountSteps();
