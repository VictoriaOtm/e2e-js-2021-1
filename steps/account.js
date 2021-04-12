import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}
	
	auth() {
		this.open('https://musicexpress.sarafa2n.ru/login');
		this.waitForAccount();
		this.login();
	}
	
	login() {
		this.page.fillLoginForm(process.env.LOGIN_LOGIN);
		this.page.fillPasswordForm(process.env.LOGIN_PASSWORD);
		this.page.submitForm();
		this.openWithDelay("https://musicexpress.sarafa2n.ru/settings/");
		return this.page.checkAuthorizedEmail();
	}
	
	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
