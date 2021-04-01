import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://studhunt.ru/auth');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.EMAIL);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}


}

export default new AccountSteps();
