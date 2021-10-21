import DefaultSteps from './default';
import page from '../pages/account';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://pinterbest.ru/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.checkProfileLoaded(process.env.LOGIN);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new LoginSteps();
