import DefaultSteps from './default';
import page from '../pages/login';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://pinterbest.ru/login');
		this.waitForLoginPage();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.checkProfileLoaded(process.env.LOGIN);
	}

	waitForLoginPage() {
		this.page.waitForContainer();
	}
}

export default new LoginSteps();
