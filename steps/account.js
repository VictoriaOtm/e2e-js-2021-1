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
		//КОСТЫЛЬ
		browser.pause(5000);
		this.open("https://musicexpress.sarafa2n.ru/settings/");
		browser.pause(5000);
		this.page.checkAuthorizedEmail(process.env.LOGIN_LOGIN);
	}
	
	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
