import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://softree.group/signin');
		this.page.waitForContainer();
		this.login();
	}

	login() {
		this.page.goToLogin();
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
	}

}

export default new AccountSteps();
